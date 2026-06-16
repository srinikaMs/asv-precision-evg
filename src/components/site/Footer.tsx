import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/asv-logo.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              <img src={logo.url} alt="ASV Engineering Solutions" className="h-10 w-auto" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white">Engineering Solutions</div>
              <div className="text-[11px] text-white/60">Tiruvallur, Tamil Nadu</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Authorized distributor of OSG, Master Fluid, Boehlerit, KTA, ANEC, Wohlhaupter and Duracarb — supplying precision tooling to Tamil Nadu's manufacturers since 2015.
          </p>
        </div>
        <div>
          <h4 className="eyebrow text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[["/", "Home"], ["/products", "Products"], ["/customers", "Customers"], ["/about", "About"], ["/contact", "Contact"]].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow text-gold">Our Brands</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>OSG — Japan</li>
            <li>Master Fluid — USA</li>
            <li>Boehlerit — Austria</li>
            <li>KTA Spindle Tooling</li>
            <li>ANEC</li>
            <li>Wohlhaupter — Germany</li>
            <li>Duracarb</li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> No. 3, 60 Feet Road, V.M Nagar Extn, JJ Salai, Tiruvallur, TN 602001</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> +91 97871 18179</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> sales.asvengg@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <div>© {new Date().getFullYear()} ASV Engineering Solutions. All rights reserved.</div>
          <div>Designed with precision for a precision business.</div>
        </div>
      </div>
    </footer>
  );
}
