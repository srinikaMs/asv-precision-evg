import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";

// Product-specific imagery (generated)
import imgTaps from "@/assets/prod-taps.jpg";
import imgDrills from "@/assets/prod-drills.jpg";
import imgReamers from "@/assets/prod-reamers.jpg";
import imgEndmills from "@/assets/prod-endmills.jpg";
import imgToolholders from "@/assets/prod-toolholders.jpg";
import imgCollets from "@/assets/prod-collets.jpg";
import imgShrinkfit from "@/assets/prod-shrinkfit.jpg";
import imgMillingChuck from "@/assets/prod-millingchuck.jpg";
import imgSynchro from "@/assets/prod-synchro.jpg";
import imgPullstuds from "@/assets/prod-pullstuds.jpg";
import imgCoolant from "@/assets/prod-coolant.jpg";
import imgCuttingoil from "@/assets/prod-cuttingoil.jpg";
import imgCoolantEquip from "@/assets/prod-coolantequip.jpg";
import imgSemisynth from "@/assets/prod-semisynth.jpg";
import imgSynthetic from "@/assets/prod-synthetic.jpg";
import imgRustprev from "@/assets/prod-rustprev.jpg";
import imgTurning from "@/assets/prod-turninginserts.jpg";
import imgMilling from "@/assets/prod-millinginserts.jpg";
import imgThreading from "@/assets/prod-threadinginserts.jpg";
import imgIndexable from "@/assets/prod-indexabledrilling.jpg";
import imgSolidCarbide from "@/assets/prod-solidcarbide.jpg";
import imgCaliper from "@/assets/prod-caliper.jpg";
import imgMicrometer from "@/assets/prod-micrometer.jpg";
import imgHeightGauge from "@/assets/prod-heightgauge.jpg";
import imgDial from "@/assets/prod-dialindicator.jpg";
import imgBoreGauge from "@/assets/prod-boregauge.jpg";
import imgSurfacePlate from "@/assets/prod-surfaceplate.jpg";
import imgBoringHead from "@/assets/prod-boringhead.jpg";
import imgBoringBar from "@/assets/prod-boringbar.jpg";
import imgMultibore from "@/assets/prod-multibore.jpg";
import imgFacingHead from "@/assets/prod-facingheads.jpg";
import imgDigitalBoring from "@/assets/prod-digitalboring.jpg";
import imgCustom from "@/assets/prod-customtools.jpg";
import imgCarbideRods from "@/assets/prod-carbiderods.jpg";
import imgRegrinding from "@/assets/prod-regrinding.jpg";

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
    hero: imgTaps,
    products: [
      { n: "HSS & Carbide Taps", d: "Spiral point, spiral flute and forming taps for threading every material.", spec: "M1 – M100 · Inch · Pipe", img: imgTaps },
      { n: "Solid Carbide Drills", d: "Sub-micron carbide drills with TiAlN coating. Deep hole and step configurations.", spec: "Ø0.5 – 50 mm", img: imgDrills },
      { n: "Precision Reamers", d: "Carbide and HSS reamers for hole finishing to H6/H7 tolerance.", spec: "Ø2 – 40 mm", img: imgReamers },
      { n: "End Mills", d: "High-performance solid carbide end mills for milling steel, stainless and aluminium.", spec: "2/3/4 flute", img: imgEndmills },
      { n: "Synchro Tap Holders", d: "Synchronous tapping chucks for CNC rigid tapping. Extends tap life.", spec: "BT / HSK", img: imgSynchro },
      { n: "Custom Round Tools", d: "Engineered round cutting tools to customer drawings.", spec: "2–4 wk lead time", img: imgCustom },
    ],
  },
  {
    id: "master-fluid",
    name: "Master Fluid", country: "USA", flag: "🇺🇸", year: "Est. 1951", hq: "Perrysburg, Ohio, USA",
    tagline: "TRIM® Metalworking Fluids · Industry Leader Since 1951",
    story: "Master Fluid Solutions has been a metalworking fluid pioneer since 1951. The TRIM® brand is trusted across automotive, aerospace and heavy-engineering industries worldwide.",
    hero: imgCoolant,
    products: [
      { n: "TRIM® MicroSol® Emulsions", d: "Water-soluble micro-emulsion fluids with extended sump life.", spec: "Universal metals", img: imgCoolant },
      { n: "Semi-Synthetic Coolants", d: "Combine oil lubrication with water cooling. Low foaming.", spec: "Steel · Cast iron", img: imgSemisynth },
      { n: "Full Synthetic Coolants", d: "Oil-free formulations for grinding and fine machining. Crystal clear.", spec: "Grinding", img: imgSynthetic },
      { n: "Straight Cutting Oils", d: "Heavy-duty oils for tapping, broaching and gear cutting.", spec: "Maximum lubricity", img: imgCuttingoil },
      { n: "Coolant Management Equipment", d: "Sump cleaners, separators, refractometers and recycling systems.", spec: "Complete systems", img: imgCoolantEquip },
      { n: "Rust Preventives", d: "Water-dilutable rust protection — short and long term.", spec: "Storage / shipping", img: imgRustprev },
    ],
  },
  {
    id: "boehlerit",
    name: "Boehlerit", country: "AUSTRIA", flag: "🇦🇹", year: "Est. 1932", hq: "Kapfenberg, Austria",
    tagline: "Carbide Specialist · Tools for Every Operation",
    story: "Boehlerit is a leading Austrian carbide and tool specialist, supplying cutting materials, precision tools and tool systems for milling, turning, drilling and forming worldwide.",
    hero: imgTurning,
    products: [
      { n: "Turning Inserts", d: "ISO geometries for external and internal turning of all materials.", spec: "CNMG · DNMG · TNMG · VNMG", img: imgTurning },
      { n: "Milling Inserts & Cutters", d: "Face, shoulder and pocket milling inserts — positive and negative geometries.", spec: "All major holders", img: imgMilling },
      { n: "Indexable Drilling", d: "High-feed indexable drill heads for ferrous and non-ferrous.", spec: "Ø12 – 60 mm", img: imgIndexable },
      { n: "Threading Inserts", d: "Single-point threading inserts — metric & inch profiles.", spec: "ISO · UN · BSP · NPT", img: imgThreading },
      { n: "Solid Carbide Tools", d: "Solid carbide end mills, drills and taps for high-performance machining.", spec: "Steel · Stainless · Ni-alloy", img: imgSolidCarbide },
    ],
  },
  {
    id: "kta-spindle-tooling",
    name: "KTA Spindle Tooling", country: "PREMIUM", flag: "⚙️", year: "Tool Holding Specialists", hq: "Spindle Interface Experts",
    tagline: "CNC Tool Holders & Spindle Interfaces",
    story: "KTA Spindle Tooling supplies precision tool holders, collet chucks, milling chucks and shrink-fit systems compatible with every major spindle interface (BT, HSK, CAT, ER).",
    hero: imgToolholders,
    products: [
      { n: "BT / HSK Tool Holders", d: "Precision holders for all CNC machining centers — BT30/40/50, HSK-A63/100.", spec: "All interfaces", img: imgToolholders },
      { n: "ER Collet Chucks", d: "ER series chucks with high-concentricity collets.", spec: "ER16 / 20 / 25 / 32 / 40", img: imgCollets },
      { n: "Shrink-Fit Holders", d: "Zero-runout shrink-fit holders — ideal for micro tools and hard machining.", spec: "Highest concentricity", img: imgShrinkfit },
      { n: "Milling Chucks", d: "Heavy-duty side-lock and power milling chucks for high MRR.", spec: "Roughing duty", img: imgMillingChuck },
      { n: "Pull Studs & Accessories", d: "Pull studs, wrenches and collet nuts — full ecosystem support.", spec: "OEM-spec", img: imgPullstuds },
    ],
  },
  {
    id: "anec",
    name: "ANEC", country: "PRECISION", flag: "📐", year: "Metrology Specialists", hq: "Measurement Instruments",
    tagline: "Precision Measurement & Quality Tools",
    story: "ANEC supplies precision measurement instruments — calipers, micrometers, gauges, height gauges and inspection tools used by quality departments in precision manufacturing.",
    hero: imgCaliper,
    products: [
      { n: "Digital Calipers", d: "Stainless steel digital vernier calipers with IP-rated electronics.", spec: "0–150 / 200 / 300 mm", img: imgCaliper },
      { n: "Outside Micrometers", d: "Mechanical and digital micrometers for outside dimension measurement.", spec: "0–25 to 0–300 mm", img: imgMicrometer },
      { n: "Height Gauges", d: "Vernier and digital height gauges for layout and inspection.", spec: "300 – 1000 mm", img: imgHeightGauge },
      { n: "Dial Indicators", d: "Lever-type and plunger dial indicators with 0.01 / 0.001 mm resolution.", spec: "0.01 / 0.001 mm", img: imgDial },
      { n: "Bore Gauges", d: "Bore gauges with dial indicator heads for cylinder hole inspection.", spec: "Inside diameters", img: imgBoreGauge },
      { n: "Surface Plates & Squares", d: "Granite surface plates and precision squares for layout work.", spec: "Grade 0 / 1 / 2", img: imgSurfacePlate },
    ],
  },
  {
    id: "wohlhaupter",
    name: "Wohlhaupter", country: "GERMANY", flag: "🇩🇪", year: "Est. 1930", hq: "Frickenhausen, Germany",
    tagline: "Precision Boring Systems · World Leader",
    story: "Wohlhaupter is the world leader in precision boring tools. Modular boring systems with the iconic MultiBore® concept deliver micron-level accuracy on CNC and conventional machines.",
    hero: imgBoringHead,
    products: [
      { n: "Precision Boring Heads", d: "Single-point and twin-cutter boring heads with micron-level adjustment.", spec: "Ø2 – 2500 mm", img: imgBoringHead },
      { n: "MultiBore® Modular System", d: "Modular boring system covering rough, semi-finish and fine boring.", spec: "Modular interface", img: imgMultibore },
      { n: "Digital Boring Heads", d: "Digital readout boring heads for highest setting accuracy.", spec: "2 µm resolution", img: imgDigitalBoring },
      { n: "Facing & Contouring Heads", d: "U-axis heads for facing, contouring and external turning on machining centers.", spec: "MC application", img: imgFacingHead },
      { n: "Boring Bars & Holders", d: "Carbide and steel boring bars with vibration damping.", spec: "L/D up to 10", img: imgBoringBar },
    ],
  },
  {
    id: "duracarb",
    name: "Duracarb", country: "CARBIDE", flag: "🛠️", year: "Carbide Specialists", hq: "Solid Carbide Solutions",
    tagline: "Duracarb · Specialised Carbide Tooling",
    story: "Duracarb manufactures solid carbide cutting tools and custom carbide solutions — end mills, drills, form tools and tungsten carbide rods optimised for difficult-to-machine materials.",
    hero: imgSolidCarbide,
    products: [
      { n: "Solid Carbide End Mills", d: "Multi-flute solid carbide end mills with advanced PVD coatings.", spec: "2 / 3 / 4 / 6 flute", img: imgEndmills },
      { n: "Solid Carbide Drills", d: "TiAlN-coated carbide drills for high penetration rates.", spec: "Ø1 – 25 mm", img: imgDrills },
      { n: "Tungsten Carbide Rods", d: "Premium carbide rod blanks for custom tool manufacturing.", spec: "Various diameters", img: imgCarbideRods },
      { n: "Custom Form Tools", d: "Carbide form tools and step tools made to drawing.", spec: "Drawing-based", img: imgCustom },
      { n: "Carbide Reamers", d: "Solid carbide reamers for premium hole finishing.", spec: "H6 / H7", img: imgReamers },
      { n: "Tool Regrinding & Recoating", d: "Professional carbide tool regrinding and recoating service.", spec: "Multiple cycles", img: imgRegrinding },
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
                      <img src={p.img} alt={p.n} className="w-full h-44 object-cover" loading="lazy" />
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
