import { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const categories = ["All", "Classrooms", "Labs", "Sports", "Events", "Campus"];

const images = [
  { id: 1, category: "Classrooms", emoji: "📚", label: "Smart Classroom" },
  { id: 2, category: "Labs", emoji: "🔬", label: "Science Lab" },
  { id: 3, category: "Sports", emoji: "🏏", label: "Cricket Ground" },
  { id: 4, category: "Classrooms", emoji: "💻", label: "Computer Lab" },
  { id: 5, category: "Events", emoji: "🎓", label: "Annual Day" },
  { id: 6, category: "Labs", emoji: "🧪", label: "Chemistry Lab" },
  { id: 7, category: "Campus", emoji: "🏫", label: "Main Building" },
  { id: 8, category: "Events", emoji: "🏆", label: "Prize Distribution" },
  { id: 9, category: "Sports", emoji: "⚽", label: "Sports Day" },
  { id: 10, category: "Campus", emoji: "📖", label: "Library" },
  { id: 11, category: "Events", emoji: "🎤", label: "Debate Competition" },
  { id: 12, category: "Campus", emoji: "🌳", label: "School Garden" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isInView } = useInView();

  const filteredImages = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading badge="Gallery" title="Campus Life at BCA" description="Take a glimpse into our vibrant campus, modern facilities, and exciting school events." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full font-medium transition-all",
                  activeCategory === category ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setLightbox(image.id)}
                className={cn(
                  "aspect-square rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 cursor-pointer overflow-hidden shadow-soft card-hover border border-border opacity-0 flex items-center justify-center",
                  isInView && `animate-fade-in-up delay-${((index % 4) + 1) * 100}`
                )}
              >
                <div className="text-center">
                  <div className="text-5xl mb-2">{image.emoji}</div>
                  <p className="text-sm font-medium text-foreground">{image.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-background hover:text-secondary" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="bg-card rounded-3xl p-12 max-w-lg w-full text-center">
            <div className="text-9xl mb-4">{images.find((i) => i.id === lightbox)?.emoji}</div>
            <p className="text-xl font-heading font-bold">{images.find((i) => i.id === lightbox)?.label}</p>
          </div>
        </div>
      )}
    </Layout>
  );
}
