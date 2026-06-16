import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — OSG, Master Fluid, Boehlerit, KTA, ANEC, Wohlhaupter, Duracarb | ASV" },
      { name: "description", content: "Complete range of precision cutting tools, taps, drills, carbide inserts, spindle tooling, boring systems, metalworking fluids and measurement tools from seven world-class brands." },
      { name: "keywords", content: "OSG taps India, OSG drills Tiruvallur, Master Fluid coolant, Boehlerit carbide inserts, KTA spindle tooling, ANEC precision tools, Wohlhaupter boring head, Duracarb carbide, CNC tooling Tamil Nadu, cutting tool distributor Chennai" },
      { property: "og:title", content: "Products | ASV Engineering Solutions" },
      { property: "og:description", content: "Seven world-class brands. One trusted distributor in Tamil Nadu." },
    ],
  }),
  component: Products,
});

// Each product gets a SPECIFIC, RELATED image — never random.
const sections = [
  {
    id: "osg",
    name: "OSG", country: "JAPAN", flag: "🇯🇵", year: "Est. 1938", hq: "Toyokawa, Japan",
    tagline: "World's #1 in Round Cutting Tools",
    story: "OSG Corporation is the world's largest manufacturer of round cutting tools. With production facilities across 33 countries, OSG supplies precision taps, drills, end mills and reamers to the global manufacturing industry.",
    hero: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80",
    products: [
      { n: "HSS & Carbide Taps", d: "Spiral point, spiral flute, forming taps for threading every material.", spec: "M1 – M100 · Inch · Pipe", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80" },
      { n: "Solid Carbide Drills", d: "Sub-micron carbide drills with TiAlN coating. Deep hole and step configurations.", spec: "Ø0.5 – 50 mm", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=80" },
      { n: "Precision Reamers", d: "Carbide and HSS reamers for hole finishing to H6/H7 tolerance.", spec: "Ø2 – 40 mm", img: "https://images.unsplash.com/photo-1535813381415-c1da0a661a48?auto=format&fit=crop&w=900&q=80" },
      { n: "End Mills", d: "High-performance solid carbide end mills for milling steel, stainless, aluminium.", spec: "2/3/4 flute", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80" },
      { n: "Synchro Tap Holders", d: "Synchronous tapping chucks for CNC rigid tapping. Extends tap life.", spec: "BT/HSK", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80" },
      { n: "Custom Tools", d: "Engineered round tools to customer drawings.", spec: "2–4 wk lead time", img: "https://images.unsplash.com/photo-1574170609296-a4be09e1cad9?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "master-fluid",
    name: "Master Fluid", country: "USA", flag: "🇺🇸", year: "Est. 1951", hq: "Perrysburg, Ohio, USA",
    tagline: "TRIM® Metalworking Fluids · Industry Leader Since 1951",
    story: "Master Fluid Solutions has been a metalworking fluid pioneer since 1951. The TRIM® brand is trusted across automotive, aerospace and heavy-engineering industries worldwide.",
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    products: [
      { n: "TRIM® MicroSol® Emulsions", d: "Water-soluble micro-emulsion fluids with extended sump life.", spec: "Universal metals", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" },
      { n: "Semi-Synthetic Coolants", d: "Combine oil lubrication with water cooling. Low foaming.", spec: "Steel · Cast iron", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80" },
      { n: "Neo-Synthetic Coolants", d: "Advanced synthetics formulated for aluminium, titanium and exotic alloys.", spec: "Aero · Aluminium", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80" },
      { n: "Full Synthetic Coolants", d: "Oil-free formulations for grinding and fine machining. Crystal clear.", spec: "Grinding", img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80" },
      { n: "Straight Cutting Oils", d: "Heavy-duty oils for tapping, broaching and gear cutting.", spec: "Maximum lubricity", img: "https://images.unsplash.com/photo-1607000975360-3a6c14a3a89f?auto=format&fit=crop&w=900&q=80" },
      { n: "Coolant Management Equipment", d: "Sump cleaners, separators, refractometers, recycling systems.", spec: "Complete systems", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80" },
      { n: "Rust Preventives", d: "Water-dilutable rust protection — short and long term.", spec: "Storage / shipping", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "boehlerit",
    name: "Boehlerit", country: "AUSTRIA", flag: "🇦🇹", year: "Est. 1932", hq: "Kapfenberg, Austria",
    tagline: "Carbide Specialist · Tools for Every Operation",
    story: "Boehlerit is a leading Austrian carbide and tool specialist, supplying cutting materials, precision tools and tool systems for milling, turning, drilling and forming worldwide.",
    hero: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1600&q=80",
    products: [
      { n: "Turning Inserts", d: "ISO geometries for external and internal turning of all materials.", spec: "CNMG · DNMG · TNMG · VNMG", img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80" },
      { n: "Milling Inserts", d: "Face, shoulder and pocket milling inserts — positive and negative geometries.", spec: "All major holders", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80" },
      { n: "Indexable Drilling", d: "High-feed indexable drill heads for ferrous and non-ferrous.", spec: "Ø12 – 60 mm", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=80" },
      { n: "Threading Inserts", d: "Single-point threading inserts — metric & inch profiles.", spec: "ISO · UN · BSP · NPT", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80" },
      { n: "Solid Carbide Tools", d: "Solid carbide end mills, drills and taps for high-performance machining.", spec: "Steel · Stainless · Ni-alloy", img: "https://images.unsplash.com/photo-1535813381415-c1da0a661a48?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "kta-spindle-tooling",
    name: "KTA Spindle Tooling", country: "PREMIUM", flag: "⚙️", year: "Tool Holding Specialists", hq: "Spindle Interface Experts",
    tagline: "CNC Tool Holders & Spindle Interfaces",
    story: "KTA Spindle Tooling supplies precision tool holders, collet chucks, milling chucks and shrink-fit systems compatible with every major spindle interface (BT, HSK, CAT, ER).",
    hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
    products: [
      { n: "BT / HSK Tool Holders", d: "Precision holders for all CNC machining centers — BT30/40/50, HSK-A63/100.", spec: "All interfaces", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80" },
      { n: "ER Collet Chucks", d: "ER series chucks with high-concentricity collets.", spec: "ER16/20/25/32/40", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80" },
      { n: "Shrink-Fit Holders", d: "Zero-runout shrink-fit holders — ideal for micro tools and hard machining.", spec: "Highest concentricity", img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80" },
      { n: "Milling Chucks", d: "Heavy-duty side-lock and power milling chucks for high MRR.", spec: "Roughing duty", img: "https://images.unsplash.com/photo-1574170609296-a4be09e1cad9?auto=format&fit=crop&w=900&q=80" },
      { n: "Pull Studs & Accessories", d: "Pull studs, wrenches, collet nuts — full ecosystem support.", spec: "OEM-spec", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "anec",
    name: "ANEC", country: "PRECISION", flag: "📐", year: "Metrology Specialists", hq: "Measurement Instruments",
    tagline: "Precision Measurement & Quality Tools",
    story: "ANEC supplies precision measurement instruments — calipers, micrometers, gauges, height gauges and inspection tools used by quality departments in precision manufacturing.",
    hero: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1600&q=80",
    products: [
      { n: "Digital Calipers", d: "Stainless steel digital vernier calipers with IP-rated electronics.", spec: "0–150/200/300 mm", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=80" },
      { n: "Outside Micrometers", d: "Mechanical and digital micrometers for outside dimension measurement.", spec: "0–25 to 0–300 mm", img: "https://images.unsplash.com/photo-1635070040409-475d2f6c6f1d?auto=format&fit=crop&w=900&q=80" },
      { n: "Height Gauges", d: "Vernier and digital height gauges for layout and inspection.", spec: "300 – 1000 mm", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80" },
      { n: "Dial Indicators & Bore Gauges", d: "Lever-type and plunger dial indicators, bore gauges for hole inspection.", spec: "0.01 / 0.001 mm", img: "https://images.unsplash.com/photo-1607435097405-db48f377bff6?auto=format&fit=crop&w=900&q=80" },
      { n: "Surface Plates & Squares", d: "Granite surface plates and precision squares for layout work.", spec: "Grade 0/1/2", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "wohlhaupter",
    name: "Wohlhaupter", country: "GERMANY", flag: "🇩🇪", year: "Est. 1930", hq: "Frickenhausen, Germany",
    tagline: "Precision Boring Systems · World Leader",
    story: "Wohlhaupter is the world leader in precision boring tools. Modular boring systems with the iconic MultiBore® concept deliver micron-level accuracy on CNC and conventional machines.",
    hero: "https://images.unsplash.com/photo-1574170609296-a4be09e1cad9?auto=format&fit=crop&w=1600&q=80",
    products: [
      { n: "Precision Boring Heads", d: "Single-point and twin-cutter boring heads with micron-level adjustment.", spec: "Ø2 – 2500 mm", img: "https://images.unsplash.com/photo-1574170609296-a4be09e1cad9?auto=format&fit=crop&w=900&q=80" },
      { n: "MultiBore® Modular System", d: "Modular boring system covering rough, semi-finish and fine boring.", spec: "Modular interface", img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80" },
      { n: "Digital Boring Heads", d: "Digital readout boring heads for highest setting accuracy.", spec: "2 µm resolution", img: "https://images.unsplash.com/photo-1581092583537-cb59d76b95e3?auto=format&fit=crop&w=900&q=80" },
      { n: "Facing & Contouring Heads", d: "U-axis heads for facing, contouring and external turning on machining centers.", spec: "MC application", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80" },
      { n: "Boring Bars & Holders", d: "Carbide and steel boring bars with vibration damping.", spec: "L/D up to 10", img: "https://images.unsplash.com/photo-1535813381415-c1da0a661a48?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "duracarb",
    name: "Duracarb", country: "CARBIDE", flag: "🛠️", year: "Carbide Specialists", hq: "Solid Carbide Solutions",
    tagline: "Duracarb · Specialised Carbide Tooling",
    story: "Duracarb manufactures solid carbide cutting tools and custom carbide solutions — end mills, drills and form tools optimised for difficult-to-machine materials.",
    hero: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1600&q=80",
    products: [
      { n: "Solid Carbide End Mills", d: "Multi-flute solid carbide end mills with advanced PVD coatings.", spec: "2/3/4/6 flute", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80" },
      { n: "Solid Carbide Drills", d: "TiAlN-coated carbide drills for high penetration rates.", spec: "Ø1 – 25 mm", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=80" },
      { n: "Custom Form Tools", d: "Carbide form tools and step tools made to drawing.", spec: "Drawing-based", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80" },
      { n: "Carbide Reamers", d: "Solid carbide reamers for premium hole finishing.", spec: "H6 / H7", img: "https://images.unsplash.com/photo-1535813381415-c1da0a661a48?auto=format&fit=crop&w=900&q=80" },
      { n: "Tool Regrinding", d: "Professional carbide tool regrinding & recoating service.", spec: "Multiple cycles", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=900&q=80" },
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
          <p className="mt-4 max-w-2xl text-white/70">Seven world-class brands. One trusted distributor in Tamil Nadu. Genuine, certified, ready stock.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="glass rounded-full px-4 py-2 text-sm font-semibold hover:bg-white/15 transition">
                {s.flag} {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {sections.map((s, idx) => (
        <section key={s.id} id={s.id} className={idx % 2 === 0 ? "bg-white py-20 scroll-mt-24" : "py-20 scroll-mt-24"} style={idx % 2 ? { background: "var(--surface)" } : undefined}>
          <div className="container-x">
            <Reveal>
              <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
                <div>
                  <div className="eyebrow text-brand">{s.flag} {s.country} · {s.year}</div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">{s.name}</h2>
                  <div className="mt-2 text-sm font-semibold text-gold">{s.tagline}</div>
                  <div className="mt-2 text-sm text-mute">HQ: {s.hq}</div>
                  <p className="mt-5 text-sm text-mute leading-relaxed">{s.story}</p>
                  <img src={s.hero} alt={`${s.name} products`} className="mt-6 rounded-xl w-full h-56 object-cover shadow-md" loading="lazy" />
                </div>
                <Stagger className="grid sm:grid-cols-2 gap-4">
                  {s.products.map((p) => (
                    <Item key={p.n} variants={itemVariants} className="rounded-xl bg-white border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 transition">
                      <img src={p.img} alt={p.n} className="w-full h-40 object-cover" loading="lazy" />
                      <div className="p-5">
                        <h3 className="font-bold text-ink">{p.n}</h3>
                        <p className="mt-2 text-sm text-mute leading-relaxed">{p.d}</p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand-soft px-2.5 py-1 rounded">
                          <Check className="h-3 w-3" /> {p.spec}
                        </div>
                      </div>
                    </Item>
                  ))}
                  <Link to="/contact" className="rounded-xl bg-navy text-white p-5 flex items-center justify-between font-semibold hover:bg-brand transition">
                    Request Quote for {s.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Stagger>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
