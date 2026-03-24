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

// In-flight deduplication
const inflight = new Map<string, Promise<unknown>>();

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

// Deduplicate concurrent requests for the same key
function dedupedFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const existing = inflight.get(key);
  if (existing) return existing as Promise<T>;

  const cached = getCached<T>(key);
  if (cached !== null) return Promise.resolve(cached);

  const promise = fetcher().then((result) => {
    setCache(key, result);
    inflight.delete(key);
    return result;
  }).catch((err) => {
    inflight.delete(key);
    throw err;
  });

  inflight.set(key, promise);
  return promise;
}

export async function fetchSettings(): Promise<Settings | null> {
  return dedupedFetch("settings", async () => {
    const { data } = await supabase.from("settings").select("id,site_name,primary_color,secondary_color,show_admission_button,contact_phone,contact_email,contact_address").limit(1).single();
    return data;
  });
}

export async function fetchAnnouncements(activeOnly = true): Promise<Announcement[]> {
  const key = `announcements-${activeOnly}`;
  return dedupedFetch(key, async () => {
    let query = supabase.from("announcements").select("id,title,description,is_active,show_popup,priority,cta_link,cta_text,expires_at").order("priority", { ascending: false });
    if (activeOnly) query = query.eq("is_active", true);
    const { data } = await query;
    return data || [];
  });
}

export async function fetchPopupAnnouncement(): Promise<Announcement | null> {
  return dedupedFetch("popup", async () => {
    const { data } = await supabase
      .from("announcements")
      .select("id,title,description,is_active,show_popup,priority,cta_link,cta_text,expires_at")
      .eq("is_active", true)
      .eq("show_popup", true)
      .order("priority", { ascending: false })
      .limit(1)
      .maybeSingle();
    return data;
  });
}

export async function fetchPrograms(): Promise<Program[]> {
  return dedupedFetch("programs", async () => {
    const { data } = await supabase
      .from("programs")
      .select("id,title,description,icon,age_range,features,image_url,is_active,order_index")
      .eq("is_active", true)
      .order("order_index");
    return data || [];
  });
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return dedupedFetch("testimonials", async () => {
    const { data } = await supabase
      .from("testimonials")
      .select("id,name,message,role,rating,image_url,is_active")
      .eq("is_active", true);
    return data || [];
  });
}

export async function fetchPageSections(pageSlug: string): Promise<(Section & { content_blocks: ContentBlock[] })[]> {
  const key = `sections-${pageSlug}`;
  return dedupedFetch(key, async () => {
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

    return (sections as (Section & { content_blocks: ContentBlock[] })[]) || [];
  });
}

// Helper to get content block value by key from a section
export function getBlockValue(blocks: ContentBlock[], key: string): string {
  return blocks.find((b) => b.key === key)?.value || "";
}
