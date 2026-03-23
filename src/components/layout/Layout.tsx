import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsBar } from "@/components/NewsBar";
import { AnnouncementPopup } from "@/components/AnnouncementPopup";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NewsBar />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <AnnouncementPopup />
    </div>
  );
}
