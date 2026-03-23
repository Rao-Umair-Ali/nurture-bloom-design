import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Tables = Database["public"]["Tables"];
export type Settings = Tables["settings"]["Row"];
export type Announcement = Tables["announcements"]["Row"];
export type Program = Tables["programs"]["Row"];
export type Testimonial = Tables["testimonials"]["Row"];
export type Section = Tables["sections"]["Row"];
export type ContentBlock = Tables["content_blocks"]["Row"];
export type Page = Tables["pages"]["Row"];

// Cache for API responses
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data as T;
  }
  cache.delete(key);
  return null;
}

function setCache(key: string, data: unknown) {
  cache.set(key, { data, timestamp: Date.now() });
}

export async function fetchSettings(): Promise<Settings | null> {
  const cached = getCached<Settings>("settings");
  if (cached) return cached;

  const { data } = await supabase.from("settings").select("*").limit(1).single();
  if (data) setCache("settings", data);
  return data;
}

export async function fetchAnnouncements(activeOnly = true): Promise<Announcement[]> {
  const key = `announcements-${activeOnly}`;
  const cached = getCached<Announcement[]>(key);
  if (cached) return cached;

  let query = supabase.from("announcements").select("*").order("priority", { ascending: false });
  if (activeOnly) query = query.eq("is_active", true);
  const { data } = await query;
  const result = data || [];
  setCache(key, result);
  return result;
}

export async function fetchPopupAnnouncement(): Promise<Announcement | null> {
  const cached = getCached<Announcement | null>("popup");
  if (cached !== null) return cached;

  const { data } = await supabase
    .from("announcements")
    .select("*")
    .eq("is_active", true)
    .eq("show_popup", true)
    .order("priority", { ascending: false })
    .limit(1)
    .maybeSingle();
  setCache("popup", data);
  return data;
}

export async function fetchPrograms(): Promise<Program[]> {
  const cached = getCached<Program[]>("programs");
  if (cached) return cached;

  const { data } = await supabase
    .from("programs")
    .select("*")
    .eq("is_active", true)
    .order("order_index");
  const result = data || [];
  setCache("programs", result);
  return result;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const cached = getCached<Testimonial[]>("testimonials");
  if (cached) return cached;

  const { data } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_active", true);
  const result = data || [];
  setCache("testimonials", result);
  return result;
}

export async function fetchPageSections(pageSlug: string): Promise<(Section & { content_blocks: ContentBlock[] })[]> {
  const key = `sections-${pageSlug}`;
  const cached = getCached<(Section & { content_blocks: ContentBlock[] })[]>(key);
  if (cached) return cached;

  // First get the page
  const { data: page } = await supabase
    .from("pages")
    .select("id")
    .eq("slug", pageSlug)
    .eq("is_active", true)
    .single();

  if (!page) return [];

  const { data: sections } = await supabase
    .from("sections")
    .select("*, content_blocks(*)")
    .eq("page_id", page.id)
    .eq("is_visible", true)
    .order("order_index");

  const result = (sections as (Section & { content_blocks: ContentBlock[] })[]) || [];
  setCache(key, result);
  return result;
}

// Helper to get content block value by key from a section
export function getBlockValue(blocks: ContentBlock[], key: string): string {
  return blocks.find((b) => b.key === key)?.value || "";
}
