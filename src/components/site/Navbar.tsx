import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const brands = [
  { name: "OSG", desc: "Cutting Tools" },
  { name: "Bilz", desc: "Tool Holding" },
  { name: "Boehlerit", desc: "Carbide Inserts" },
  { name: "Master Fluid", desc: "Metalworking Fluids" },
  { name: "Hanboo", desc: "Special Tooling" },
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
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg blue-grad text-white font-extrabold tracking-tight">
            ASV
          </div>
          <div className="min-w-0 leading-tight">
            <div className="font-bold text-ink text-[15px]">Engineering Solutions</div>
            <div className="text-[11px] text-mute">Tiruvallur, Tamil Nadu</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div className="group relative">
            <button className="px-4 py-2 text-sm font-medium text-ink hover:text-brand inline-flex items-center gap-1">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute top-full left-0 pt-3 w-72">
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
          <Link to="/customers" className="px-4 py-2 text-sm font-medium text-ink hover:text-brand">Customers</Link>
          <Link to="/about" className="px-4 py-2 text-sm font-medium text-ink hover:text-brand">About</Link>
          <Link to="/contact" className="px-4 py-2 text-sm font-medium text-ink hover:text-brand">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919787118179" className="text-sm font-semibold text-ink inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand" /> +91 97871 18179
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-navy transition"
          >
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Menu">
          <Menu className="h-6 w-6 text-ink" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy text-white"
          >
            <div className="container-x flex h-20 items-center justify-between">
              <div className="font-extrabold text-xl">ASV</div>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-7 w-7" /></button>
            </div>
            <nav className="container-x mt-6 flex flex-col gap-1">
              {["/", "/products", "/customers", "/about", "/contact"].map((to, i) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold py-4 border-b border-white/10"
                >
                  {["Home", "Products", "Customers", "About", "Contact"][i]}
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
