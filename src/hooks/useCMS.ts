import { useState, useEffect } from "react";
import {
  fetchSettings,
  fetchAnnouncements,
  fetchPopupAnnouncement,
  fetchPrograms,
  fetchTestimonials,
  fetchPageSections,
  type Settings,
  type Announcement,
  type Program,
  type Testimonial,
  type Section,
  type ContentBlock,
} from "@/lib/cms";

function useFetch<T>(fetcher: () => Promise<T>, fallback: T) {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetcher().then((result) => {
      if (!cancelled) {
        setData(result);
        setLoading(false);
      }
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}

export function useSettings() {
  return useFetch<Settings | null>(fetchSettings, null);
}

export function useAnnouncements() {
  return useFetch<Announcement[]>(fetchAnnouncements, []);
}

export function usePopupAnnouncement() {
  return useFetch<Announcement | null>(fetchPopupAnnouncement, null);
}

export function usePrograms() {
  return useFetch<Program[]>(fetchPrograms, []);
}

export function useTestimonials() {
  return useFetch<Testimonial[]>(fetchTestimonials, []);
}

export function usePageSections(pageSlug: string) {
  return useFetch<(Section & { content_blocks: ContentBlock[] })[]>(
    () => fetchPageSections(pageSlug),
    []
  );
}
