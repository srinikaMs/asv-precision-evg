import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/asv-logo.png.asset.json";

const brands = [
  { name: "OSG", desc: "Cutting Tools — Japan" },
  { name: "Allied Machine", desc: "Holemaking — USA" },
  { name: "Master Fluid Solutions", desc: "Metalworking Fluids — USA" },
  { name: "Boehlerit", desc: "Carbide Inserts — Austria" },
  { name: "KTA Spindle Toolings", desc: "Tool Holding Systems" },
  { name: "ANEC", desc: "Cutting & Machining Solutions" },
  { name: "Duracarb", desc: "Carbide Solutions" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/customers", label: "Manufacturers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : "bg-white/95 backdrop-blur"
      }`}
    >
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between lg:gap-6">
        <Link to="/" className="flex min-w-0 items-center gap-4">
          <img src={logo.url} alt="ASV Engineering Solutions" className="h-14 w-auto shrink-0 md:h-16 lg:h-20" />
          <div className="hidden min-w-0 leading-tight md:block">
            <div className="truncate font-extrabold text-ink text-[18px] tracking-tight">ASV Engineering Solutions</div>
            <div className="truncate text-[12px] text-mute">Industrial Tooling & Engineering Solutions</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className="px-4 py-2 text-sm font-medium text-ink hover:text-brand">Home</Link>
          <div className="group relative">
            <Link
              to="/products"
              className="px-4 py-2 text-sm font-medium text-ink hover:text-brand inline-flex items-center gap-1"
            >
              Products <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="invisible absolute left-0 top-full w-80 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl bg-white border border-border shadow-xl p-2">
                {brands.map((b) => (
                  <Link
                    key={b.name}
                    to="/products"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-brand-soft"
                  >
                    <span className="font-semibold text-ink">{b.name}</span>
                    <span className="text-xs text-mute">{b.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/customers" className="px-4 py-2 text-sm font-medium text-ink hover:text-brand">Manufacturers</Link>
          <Link to="/about" className="px-4 py-2 text-sm font-medium text-ink hover:text-brand">About</Link>
          <Link to="/contact" className="px-4 py-2 text-sm font-medium text-ink hover:text-brand">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href="tel:+919787118179" className="text-sm font-semibold text-ink inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand" /> +91 97871 18179
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-navy transition"
          >
            Request Quote
          </Link>
        </div>

        <button className="justify-self-end p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
          <Menu className="h-7 w-7 text-ink" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] text-white overflow-y-auto"
            style={{ backgroundColor: "#09182f" }}
          >
            <div className="container-x flex h-24 items-center justify-between border-b border-white/10">
              <img src={logo.url} alt="ASV Engineering Solutions" className="h-14 w-auto brightness-0 invert" />
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-md p-2 hover:bg-white/10">
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="container-x mt-10 flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-3xl font-bold"
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:+919787118179" className="mt-8 inline-flex items-center gap-3 text-lg">
                <Phone className="h-5 w-5 text-gold" /> +91 97871 18179
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
