import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSettings } from "@/hooks/useCMS";
import bcaLogo from "@/assets/bca-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { data: settings } = useSettings();

  const showAdmissionBtn = settings?.show_admission_button !== false;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-card py-4"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={bcaLogo} alt="BCA Logo" className="w-12 h-12 rounded-full object-contain transition-transform group-hover:scale-110" />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-base text-foreground leading-tight">
                {settings?.site_name || "Bright Career Academy"}
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">
                Building Futures Through Education
              </p>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {showAdmissionBtn && (
              <Button
                asChild
                className="hidden sm:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6"
              >
                <Link to="/admissions">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Apply Now
                </Link>
              </Button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "xl:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-card rounded-2xl p-4 shadow-card space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            {showAdmissionBtn && (
              <Button asChild className="w-full mt-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full">
                <Link to="/admissions">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Apply Now
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
