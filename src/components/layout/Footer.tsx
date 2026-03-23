import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useSettings } from "@/hooks/useCMS";
import bcaLogo from "@/assets/bca-logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Gallery", path: "/gallery" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

const programs = [
  { name: "Primary (Grade 1-5)", path: "/programs#primary" },
  { name: "Secondary (Grade 6-8)", path: "/programs#secondary" },
  { name: "Matric (Grade 9-10)", path: "/programs#matric" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { data: settings } = useSettings();

  const siteName = settings?.site_name || "Bright Career Academy";
  const phone = settings?.contact_phone || "(123) 456-7890";
  const email = settings?.contact_email || "info@brightcareeracademy.com";
  const address = settings?.contact_address || "123 Education Road\nCity, State 12345";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={bcaLogo} alt="BCA Logo" className="w-14 h-14 rounded-full bg-white p-1 object-contain" />
              <div>
                <h3 className="font-heading font-bold text-lg">{siteName}</h3>
                <p className="text-sm opacity-70">Building Futures</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              {siteName} is committed to providing quality education that empowers students 
              to achieve academic excellence and build successful careers.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.path}>
                  <Link to={program.path} className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">{program.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-80 whitespace-pre-line">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">{email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">Mon - Fri: 8:00 AM - 3:00 PM<br />Sat: 9:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
            <p>© {currentYear} {siteName}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:opacity-100 hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:opacity-100 hover:text-secondary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
