import { useState } from "react";
import { X } from "lucide-react";
import { useAnnouncements } from "@/hooks/useCMS";

export function NewsBar() {
  const { data: announcements, loading } = useAnnouncements();
  const [isVisible, setIsVisible] = useState(true);

  if (loading || announcements.length === 0 || !isVisible) return null;

  const marqueeText = announcements.map((a) => a.title).join("  •  ");

  return (
    <div className="relative z-[60] bg-secondary text-secondary-foreground py-1.5 overflow-hidden flex-shrink-0">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden group">
          <div className="animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            <span className="text-sm font-medium mx-4">
              {marqueeText}  •  {marqueeText}
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 px-3 hover:bg-secondary-foreground/10 transition-colors"
          aria-label="Close news bar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
