import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePopupAnnouncement } from "@/hooks/useCMS";
import { cn } from "@/lib/utils";

const POPUP_STORAGE_KEY = "bca_popup_dismissed";

export function AnnouncementPopup() {
  const { data: announcement, loading } = usePopupAnnouncement();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (loading || !announcement) return;

    const dismissed = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (dismissed === announcement.id) return;

    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [announcement, loading]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!announcement || !isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(POPUP_STORAGE_KEY, announcement.id);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative bg-card rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl border border-border",
          "animate-scale-in"
        )}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-6">
            <span className="text-3xl">📢</span>
          </div>

          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
            {announcement.title}
          </h3>

          {announcement.description && (
            <p className="text-muted-foreground leading-relaxed mb-6">
              {announcement.description}
            </p>
          )}

          {announcement.cta_text && announcement.cta_link && (
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              onClick={handleClose}
            >
              <Link to={announcement.cta_link}>{announcement.cta_text}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
