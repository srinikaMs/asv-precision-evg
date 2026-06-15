import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — OSG, Bilz, Boehlerit, Master Fluid, Hanboo | ASV" },
      { name: "description", content: "Complete range of precision cutting tools, tool holders, carbide inserts, metalworking fluids and special tooling from five world-class brands." },
      { property: "og:title", content: "Products | ASV Engineering Solutions" },
      { property: "og:description", content: "Five world-class brands. One trusted distributor in Tamil Nadu." },
    ],
  }),
  component: Products,
});

const sections = [
  {
    name: "OSG", country: "JAPAN", flag: "🇯🇵", year: "Est. 1938", hq: "Toyokawa, Japan",
    story: "OSG Corporation is the world's largest manufacturer of round cutting tools. With production facilities across 33 countries, OSG supplies precision taps, drills, end mills and reamers to the global manufacturing industry.",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80",
    products: [
      ["Taps", "HSS and carbide taps for threading. Spiral point, spiral flute, forming taps.", "Metric: M1–M100 · Inch & Pipe available"],
      ["Drills", "Solid carbide and HSS drills. Deep hole and step configurations.", "Ø0.5 – 50 mm"],
      ["Reamers", "Carbide and HSS reamers for hole finishing.", "H6/H7 tolerance · Ø2 – 40 mm"],
      ["Synchro Holders", "Synchronous tapping chucks for CNC rigid tapping.", "BT/HSK interfaces"],
      ["Floating Reamer Holders", "Self-compensating holders for misalignment.", "All spindle interfaces"],
      ["Custom Tools", "Engineered to customer drawings.", "Lead time 2–4 weeks"],
    ],
  },
  {
    name: "Bilz", country: "GERMANY", flag: "🇩🇪", year: "Est. 1919", hq: "Esslingen, Germany",
    story: "Otto Bilz GmbH is a German precision tool-holding specialist. Their clamping systems are used in over 60 countries on every major CNC machine platform.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
    products: [
      ["CNC Tool Holders", "Precision holders for CNC machining centers.", "BT30/40/50 · HSK-A63/A100"],
      ["Shrink Fit Machines", "Induction heating units for shrink-fit assembly.", "Fast, clean, damage-free"],
      ["Shrink Fit Holders", "Zero runout holders for micro tools and hard machining.", "Highest concentricity"],
      ["Conventional Clamping", "ER collet chucks, milling chucks, side lock.", "Full range"],
    ],
  },
  {
    name: "Boehlerit", country: "AUSTRIA", flag: "🇦🇹", year: "Est. 1932", hq: "Kapfenberg, Austria",
    story: "Boehlerit is a leading Austrian carbide and tool specialist, supplying cutting materials, precision tools and tool systems for milling, turning, drilling and forming worldwide.",
    img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1600&q=80",
    products: [
      ["Turning Inserts", "ISO geometries for external and internal turning.", "CNMG/DNMG/TNMG/VNMG"],
      ["Milling Inserts", "Face, shoulder, pocket milling inserts.", "Positive & negative"],
      ["Drilling Inserts", "Indexable drill inserts for high-feed drilling.", "Ferrous & non-ferrous"],
      ["Solid Taps", "Carbide and HSS-E taps.", "Spiral point/flute/forming"],
      ["Threading Inserts", "Single point threading inserts.", "Metric & inch profiles"],
    ],
  },
  {
    name: "Master Fluid / TRIM", country: "USA", flag: "🇺🇸", year: "Est. 1951", hq: "Perrysburg, Ohio, USA",
    story: "Master Fluid Solutions has been a metalworking fluid pioneer since 1951. Their TRIM® brand is trusted across automotive, aerospace and heavy-engineering industries worldwide.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    products: [
      ["MicroSol® Emulsions", "Water-soluble fluids with micro-emulsion technology.", "Extended sump life"],
      ["Semisynthetics", "Combine oil lubrication with water cooling.", "Low foaming"],
      ["Neo-Synthetics", "For aluminum, titanium, exotic alloys.", "High performance"],
      ["Full Synthetics", "Oil-free formulations for grinding & fine machining.", "Crystal clear"],
      ["Straight Cutting Oils", "Heavy-duty tapping, broaching, gear cutting.", "Maximum lubricity"],
      ["Coolant Equipment", "Sump cleaners, separators, refractometers.", "Complete systems"],
      ["Rust Preventives", "Water-dilutable rust protection.", "Short & long-term"],
    ],
  },
  {
    name: "Hanboo", country: "KOREA", flag: "🇰🇷", year: "Est. 2002", hq: "Korea / India operations",
    story: "Hanboo specializes in complicated and special-purpose tooling. Their Total Tooling concept covers complex requirements beyond standard catalogue tools.",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1600&q=80",
    products: [
      ["Special Purpose Tools", "Step drills, form tools, combination tools, multi-diameter reamers.", "Drawing-based"],
      ["Complicated Assemblies", "Multi-spindle heads, gang and modular tooling.", "Engine/transmission"],
      ["Total Tooling Concept", "Design, supply, reconditioning, performance tracking.", "Full lifecycle"],
    ],
  },
];

function Products() {
  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / Products</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">Our Product Range</h1>
          <p className="mt-4 max-w-2xl text-white/70">Five world-class brands. One trusted distributor in Tamil Nadu. Genuine, certified, ready stock.</p>
        </div>
      </section>

      {sections.map((s, idx) => (
        <section key={s.name} className={idx % 2 === 0 ? "bg-white py-20" : "py-20"} style={idx % 2 ? { background: "var(--surface)" } : undefined}>
          <div className="container-x">
            <Reveal>
              <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
                <div>
                  <div className="eyebrow text-brand">{s.flag} {s.country} · {s.year}</div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">{s.name}</h2>
                  <div className="mt-2 text-sm text-mute">HQ: {s.hq}</div>
                  <p className="mt-5 text-sm text-mute leading-relaxed">{s.story}</p>
                  <img src={s.img} alt={s.name} className="mt-6 rounded-xl w-full h-56 object-cover shadow-md" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {s.products.map(([n, d, spec]) => (
                    <div key={n} className="rounded-xl bg-white border border-border p-5 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 transition">
                      <h3 className="font-bold text-ink">{n}</h3>
                      <p className="mt-2 text-sm text-mute leading-relaxed">{d}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand-soft px-2.5 py-1 rounded">
                        <Check className="h-3 w-3" /> {spec}
                      </div>
                    </div>
                  ))}
                  <Link to="/contact" className="rounded-xl bg-navy text-white p-5 flex items-center justify-between font-semibold hover:bg-brand transition">
                    Request Quote for {s.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
