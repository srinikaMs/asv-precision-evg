import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Download, Phone } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";

import imgTaps from "@/assets/prod-taps.jpg";
import imgDrills from "@/assets/prod-drills.jpg";
import imgReamers from "@/assets/prod-reamers.jpg";
import imgEndmills from "@/assets/prod-endmills.jpg";
import imgToolholders from "@/assets/prod-toolholders.jpg";
import imgCollets from "@/assets/prod-collets.jpg";
import imgShrinkfit from "@/assets/prod-shrinkfit.jpg";
import imgMillingChuck from "@/assets/prod-millingchuck.jpg";
import imgSynchro from "@/assets/prod-synchro.jpg";
import imgCoolant from "@/assets/prod-coolant.jpg";
import imgCuttingoil from "@/assets/prod-cuttingoil.jpg";
import imgCoolantEquip from "@/assets/prod-coolantequip.jpg";
import imgSynthetic from "@/assets/prod-synthetic.jpg";
import imgRustprev from "@/assets/prod-rustprev.jpg";
import imgTurning from "@/assets/prod-turninginserts.jpg";
import imgMilling from "@/assets/prod-millinginserts.jpg";
import imgThreading from "@/assets/prod-threadinginserts.jpg";
import imgIndexable from "@/assets/prod-indexabledrilling.jpg";
import imgSolidCarbide from "@/assets/prod-solidcarbide.jpg";
import imgCarbideRods from "@/assets/prod-carbiderods.jpg";
import imgCustom from "@/assets/prod-customtools.jpg";
import imgRegrinding from "@/assets/prod-regrinding.jpg";
import imgBoreGauge from "@/assets/prod-boregauge.jpg";
import imgBoringHead from "@/assets/prod-boringhead.jpg";
import imgCarbideInserts from "@/assets/prod-carbideinserts.jpg";
import imgTurningTools from "@/assets/prod-turningtools.jpg";
import imgMillingCutters from "@/assets/prod-millingcutters.jpg";
import imgGroovingParting from "@/assets/prod-groovingparting.jpg";
import imgReplaceableInsertDrills from "@/assets/prod-replaceableinsertdrills.jpg";
import imgDeepHoleDrills from "@/assets/prod-deepholedrills.jpg";
import imgChamferTools from "@/assets/prod-chamfertools.jpg";
import imgBtToolholders from "@/assets/prod-bttoolholders.jpg";
import imgHskHolders from "@/assets/prod-hskholders.jpg";
import imgHydraulicChucks from "@/assets/prod-hydraulicchucks.jpg";
import imgFormingOils from "@/assets/prod-formingoils.jpg";
import imgGrindingFluids from "@/assets/prod-grindingfluids.jpg";
import imgIndustrialCleaners from "@/assets/prod-industrialcleaners.jpg";
import imgWearParts from "@/assets/prod-wearparts.jpg";
import imgCarbideBlanks from "@/assets/prod-carbideblanks.jpg";
import imgCarbideDies from "@/assets/prod-carbidedies.jpg";
import imgSpecialCarbideComponents from "@/assets/prod-specialcarbidecomponents.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Cutting Tools, Tool Holding, Fluids & Carbide Components | ASV Engineering Solutions" },
      { name: "description", content: "Explore industrial product categories from ASV Engineering Solutions including cutting tools, drilling solutions, tool holding systems, metalworking fluids and carbide components." },
      { name: "keywords", content: "Industrial Tooling Supplier, CNC Cutting Tools, Tool Holding Systems, Carbide Inserts Supplier, Precision Engineering Solutions, Metalworking Fluids Supplier, Manufacturing Solutions Tamil Nadu, Industrial Engineering Products, CNC Tool Distributor, Industrial Tool Distributor India" },
      { property: "og:title", content: "Products | ASV Engineering Solutions" },
      { property: "og:description", content: "Dedicated product categories with correct industrial images and lead generation CTAs." },
      { property: "og:url", content: "https://asv-precision-evg.lovable.app/products" },
    ],
    links: [{ rel: "canonical", href: "https://asv-precision-evg.lovable.app/products" }],
  }),
  component: Products,
});

type ProductItem = {
  name: string;
  slug: string;
  description: string;
  features: string[];
  industries: string[];
  brands: string[];
  image: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
  banner: string;
  brands: string[];
  products: ProductItem[];
};

const categories: Category[] = [
  {
    id: "cutting-tools",
    name: "Cutting Tools",
    description: "Premium cutting tools for turning, milling, threading and high-performance CNC machining operations.",
    banner: imgCarbideInserts,
    brands: ["OSG", "Boehlerit", "Duracarb"],
    products: [
      { name: "Carbide Inserts", slug: "carbide-inserts", description: "Indexable carbide inserts for turning and milling operations across ferrous and non-ferrous materials.", features: ["Multiple ISO geometries", "Wear-resistant grades", "Stable chip control"], industries: ["Automotive", "General Engineering", "Precision Manufacturing"], brands: ["Boehlerit", "Duracarb"], image: imgCarbideInserts },
      { name: "Turning Tools", slug: "turning-tools", description: "External and internal turning tool systems for roughing, finishing and profiling.", features: ["Rigid clamping", "High repeatability", "Production-ready tooling"], industries: ["Automotive", "Oil & Gas", "General Engineering"], brands: ["Boehlerit"], image: imgTurningTools },
      { name: "Milling Cutters", slug: "milling-cutters", description: "Face mills, shoulder cutters and indexable milling cutters for productive machining.", features: ["High MRR", "Indexable bodies", "Consistent performance"], industries: ["Automotive", "Energy", "Precision Manufacturing"], brands: ["Boehlerit", "Duracarb"], image: imgMillingCutters },
      { name: "End Mills", slug: "end-mills", description: "Solid carbide end mills for profiling, slotting, roughing and finishing applications.", features: ["Solid carbide construction", "Multiple flute options", "Premium coatings"], industries: ["Aerospace", "Automotive", "General Engineering"], brands: ["OSG", "Duracarb"], image: imgEndmills },
      { name: "Grooving & Parting Tools", slug: "grooving-parting-tools", description: "Grooving and parting systems for narrow-width cutting, profiling and component separation.", features: ["Precise groove width control", "Secure clamping", "Stable cut entry"], industries: ["Automotive", "Oil & Gas", "General Engineering"], brands: ["Boehlerit"], image: imgGroovingParting },
      { name: "Threading Tools", slug: "threading-tools", description: "Threading inserts and tapping solutions for internal and external thread generation.", features: ["Metric and inch profiles", "Process stability", "Consistent thread finish"], industries: ["Precision Manufacturing", "Oil & Gas", "General Engineering"], brands: ["OSG", "Boehlerit"], image: imgThreading },
    ],
  },
  {
    id: "drilling-holemaking-solutions",
    name: "Drilling & Holemaking Solutions",
    description: "Dedicated drilling systems for high-speed production, deeper holes and repeatable hole quality.",
    banner: imgReplaceableInsertDrills,
    brands: ["Allied Machine", "OSG"],
    products: [
      { name: "Replaceable Insert Drills", slug: "replaceable-insert-drills", description: "Modular drill systems with replaceable heads for flexible, economical production drilling.", features: ["Replaceable head concept", "Reduced inventory", "Fast tool change"], industries: ["Automotive", "Energy", "General Engineering"], brands: ["Allied Machine"], image: imgReplaceableInsertDrills },
      { name: "Solid Carbide Drills", slug: "solid-carbide-drills", description: "Solid carbide drills for high-precision holes and long production runs.", features: ["High penetration rates", "Coated carbide", "Excellent hole quality"], industries: ["Aerospace", "Precision Manufacturing", "Automotive"], brands: ["OSG"], image: imgDrills },
      { name: "Deep Hole Drills", slug: "deep-hole-drills", description: "Long-series drill solutions for deeper holemaking with stability and chip evacuation.", features: ["Extended reach", "Controlled chip flow", "Deep hole performance"], industries: ["Oil & Gas", "Automotive", "Energy"], brands: ["Allied Machine", "OSG"], image: imgDeepHoleDrills },
      { name: "Indexable Drills", slug: "indexable-drills", description: "Indexable drilling systems for productive rough and semi-finish holemaking.", features: ["Insert economy", "High feed rates", "Large diameter coverage"], industries: ["General Engineering", "Automotive", "Energy"], brands: ["Allied Machine"], image: imgIndexable },
      { name: "Chamfer Tools", slug: "chamfer-tools", description: "Chamfering and countersinking tools for clean entry, deburring and edge preparation.", features: ["Precise chamfer angles", "Deburring support", "Production consistency"], industries: ["Precision Manufacturing", "General Engineering", "Automotive"], brands: ["OSG"], image: imgChamferTools },
      { name: "Reaming Solutions", slug: "reaming-solutions", description: "Precision reamers for close tolerance hole finishing and surface finish control.", features: ["Tight tolerances", "Improved finish", "Stable process capability"], industries: ["Aerospace", "Automotive", "Precision Manufacturing"], brands: ["OSG"], image: imgReamers },
    ],
  },
  {
    id: "tool-holding-systems",
    name: "Tool Holding Systems",
    description: "Correct tool holding solutions for spindle accuracy, rigidity and repeatable machining performance.",
    banner: imgToolholders,
    brands: ["KTA Spindle Toolings"],
    products: [
      { name: "BT Tool Holders", slug: "bt-tool-holders", description: "BT holders for CNC machining centers with precision taper accuracy and reliable clamping.", features: ["Standard spindle compatibility", "Balanced performance", "Production-ready"], industries: ["Automotive", "General Engineering", "Precision Manufacturing"], brands: ["KTA Spindle Toolings"], image: imgBtToolholders },
      { name: "HSK Tool Holders", slug: "hsk-tool-holders", description: "HSK tool holding systems for high-speed machining and advanced spindle performance.", features: ["High-speed stability", "Excellent concentricity", "Rigid interface"], industries: ["Aerospace", "Automotive", "Precision Manufacturing"], brands: ["KTA Spindle Toolings"], image: imgHskHolders },
      { name: "Collets", slug: "collets", description: "Precision collets for stable clamping of drills, end mills and small-diameter tools.", features: ["High concentricity", "Multiple sizes", "Reliable grip"], industries: ["Precision Manufacturing", "General Engineering", "Automotive"], brands: ["KTA Spindle Toolings"], image: imgCollets },
      { name: "Hydraulic Chucks", slug: "hydraulic-chucks", description: "Hydraulic chucks designed for damped clamping and improved finish quality.", features: ["Vibration damping", "High precision clamping", "Better surface finish"], industries: ["Aerospace", "Precision Manufacturing", "Energy"], brands: ["KTA Spindle Toolings"], image: imgHydraulicChucks },
      { name: "Tapping Chucks", slug: "tapping-chucks", description: "Tapping chucks and synchro holders for rigid tapping performance and tap life extension.", features: ["Tap protection", "Improved thread quality", "Compensation support"], industries: ["Automotive", "General Engineering", "Precision Manufacturing"], brands: ["KTA Spindle Toolings", "OSG"], image: imgSynchro },
      { name: "Shrink Fit Holders", slug: "shrink-fit-holders", description: "Shrink fit holders for slim access, high accuracy and strong tool retention.", features: ["Superior concentricity", "Slim nose design", "High-speed compatibility"], industries: ["Aerospace", "Automotive", "Precision Manufacturing"], brands: ["KTA Spindle Toolings"], image: imgShrinkfit },
    ],
  },
  {
    id: "metalworking-fluids-coolants",
    name: "Metalworking Fluids & Coolants",
    description: "Production fluids engineered for cooling, lubrication, corrosion protection and machining process stability.",
    banner: imgCoolant,
    brands: ["Master Fluid Solutions"],
    products: [
      { name: "Cutting Fluids", slug: "cutting-fluids", description: "Advanced water-miscible and specialty cutting fluids for general machining and CNC applications.", features: ["Cooling and lubrication balance", "Extended sump life", "Process reliability"], industries: ["Automotive", "General Engineering", "Precision Manufacturing"], brands: ["Master Fluid Solutions"], image: imgCoolant },
      { name: "Grinding Fluids", slug: "grinding-fluids", description: "Clean-running grinding fluids for wheel performance, cooling and surface finish control.", features: ["Grinding stability", "Low residue", "Wheel cleanliness"], industries: ["Precision Manufacturing", "Automotive", "Energy"], brands: ["Master Fluid Solutions"], image: imgGrindingFluids },
      { name: "Coolants", slug: "coolants", description: "Industrial coolants for CNC machining centers, transfer lines and metal removal operations.", features: ["Heat control", "Lubricity support", "Broad application coverage"], industries: ["Automotive", "General Engineering", "Energy"], brands: ["Master Fluid Solutions"], image: imgSynthetic },
      { name: "Forming Oils", slug: "forming-oils", description: "Forming oils for severe-duty metal deformation, pressing and forming operations.", features: ["High lubricity", "Film strength", "Protection under load"], industries: ["Automotive", "Oil & Gas", "General Engineering"], brands: ["Master Fluid Solutions"], image: imgFormingOils },
      { name: "Rust Preventives", slug: "rust-preventives", description: "Corrosion prevention products for in-process protection, storage and shipment.", features: ["Short and long-term protection", "Storage-safe", "Shipment support"], industries: ["General Engineering", "Energy", "Precision Manufacturing"], brands: ["Master Fluid Solutions"], image: imgRustprev },
      { name: "Industrial Cleaners", slug: "industrial-cleaners", description: "Industrial cleaners for machines, systems and metalworking maintenance operations.", features: ["System cleaning", "Maintenance support", "Operational hygiene"], industries: ["Automotive", "General Engineering", "Energy"], brands: ["Master Fluid Solutions"], image: imgIndustrialCleaners },
      { name: "Coolant Management Solutions", slug: "coolant-management-solutions", description: "Support equipment and coolant management systems for sump care, recycling and monitoring.", features: ["Cleaner sump performance", "Longer coolant life", "System control"], industries: ["Automotive", "Precision Manufacturing", "General Engineering"], brands: ["Master Fluid Solutions"], image: imgCoolantEquip },
    ],
  },
  {
    id: "wear-protection-carbide-components",
    name: "Wear Protection & Carbide Components",
    description: "Specialized carbide products for tooling manufacture, wear resistance and custom industrial component needs.",
    banner: imgCarbideRods,
    brands: ["Boehlerit"],
    products: [
      { name: "Carbide Rods", slug: "carbide-rods", description: "Tungsten carbide rods for tool manufacturing, special tool making and engineered applications.", features: ["Premium substrate quality", "Multiple diameters", "Toolmaker-ready"], industries: ["Precision Manufacturing", "General Engineering", "Automotive"], brands: ["Boehlerit"], image: imgCarbideRods },
      { name: "Carbide Blanks", slug: "carbide-blanks", description: "Carbide blanks for custom tool production and precision-form application preparation.", features: ["High density material", "Multiple profiles", "Custom manufacturing support"], industries: ["Precision Manufacturing", "General Engineering", "Oil & Gas"], brands: ["Boehlerit"], image: imgCarbideBlanks },
      { name: "Wear Parts", slug: "wear-parts", description: "Wear-resistant carbide parts built for demanding abrasive and high-load industrial conditions.", features: ["Long service life", "Abrasive resistance", "Custom wear solutions"], industries: ["Oil & Gas", "Energy", "General Engineering"], brands: ["Boehlerit"], image: imgWearParts },
      { name: "Carbide Dies", slug: "carbide-dies", description: "Carbide dies for forming, drawing and precision component production environments.", features: ["Wear protection", "Dimensional stability", "Repeated production support"], industries: ["Automotive", "Energy", "General Engineering"], brands: ["Boehlerit"], image: imgCarbideDies },
      { name: "Special Carbide Components", slug: "special-carbide-components", description: "Custom carbide components tailored for application-specific performance and service life.", features: ["Custom engineering", "Drawing-based supply", "Long-life performance"], industries: ["Precision Manufacturing", "Oil & Gas", "Energy"], brands: ["Boehlerit"], image: imgSpecialCarbideComponents },
    ],
  },
];

const industries = [
  ["Automotive", "High-volume CNC turning, milling, drilling and component production support.", "Cutting Tools · Tool Holding · Fluids"],
  ["Aerospace", "Precision holemaking, end milling and dimensional reliability for advanced materials.", "Drilling Solutions · End Mills · Hydraulic Chucks"],
  ["General Engineering", "Versatile tooling for day-to-day manufacturing and mixed-material machining.", "Inserts · Holders · Coolants"],
  ["Oil & Gas", "Heavy-duty carbide, turning and wear component support for difficult applications.", "Turning Tools · Wear Parts · Carbide Components"],
  ["Energy", "Reliable tooling for power, heavy engineering and large machined component work.", "Drilling Systems · Fluids · Carbide Dies"],
  ["Precision Manufacturing", "Close-tolerance products supported by stable tooling, holders and reaming solutions.", "Reamers · Collets · Measurement Support"],
];

const brandLinks = [
  { label: "OSG", url: "https://www.osg.co.jp/en/" },
  { label: "Allied Machine", url: "https://www.alliedmachine.com/homepage/" },
  { label: "Master Fluid Solutions", url: "https://www.masterfluids.com/" },
  { label: "Boehlerit", url: "https://www.boehlerit.com/" },
  { label: "KTA Spindle Toolings", url: "https://www.ktaspindletoolings.com/" },
  { label: "ANEC", url: "https://www.anectools.de/" },
  { label: "Duracarb", url: "https://www.duracarb.com/" },
];

function Products() {
  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / Products</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">Product Categories</h1>
          <p className="mt-4 max-w-3xl text-white/70">Products and distributor brands are presented separately. Explore product categories with correct industrial images, clear category structure and direct quote/catalogue actions.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <a key={category.id} href={`#${category.id}`} className="glass rounded-full px-4 py-2 text-sm font-semibold hover:bg-white/15 transition">
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-b border-border">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal>
            <div>
              <div className="eyebrow text-brand">Authorized Distributor Brands</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Official brand network</h2>
              <p className="mt-4 text-mute max-w-2xl">Our brand portfolio remains separate from product categories. Visit the official brand websites below to explore their global range.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid sm:grid-cols-2 gap-3">
              {brandLinks.map((brand) => (
                <a key={brand.label} href={brand.url} target="_blank" rel="noreferrer" className="rounded-xl border border-border p-4 font-semibold text-ink hover:bg-brand-soft transition">
                  {brand.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {categories.map((category, idx) => (
        <section key={category.id} id={category.id} className={idx % 2 === 0 ? "bg-white py-20 scroll-mt-24" : "py-20 scroll-mt-24"} style={idx % 2 ? { background: "var(--surface)" } : undefined}>
          <div className="container-x">
            <Reveal>
              <div className="grid lg:grid-cols-[1.05fr_1.95fr] gap-10 items-start">
                <div>
                  <div className="eyebrow text-brand">Category</div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">{category.name}</h2>
                  <p className="mt-4 text-sm text-mute leading-relaxed">{category.description}</p>
                  <div className="mt-5">
                    <div className="eyebrow text-brand mb-2">Authorized Distributor Brands</div>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.map((brand) => (
                        <span key={brand} className="inline-flex items-center gap-1.5 rounded-md bg-navy px-3.5 py-1.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-md ring-1 ring-gold/40">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />{brand}
                        </span>
                      ))}
                    </div>
                  </div>
                  <img src={category.banner} alt={category.name} className="mt-6 rounded-xl w-full h-64 object-cover shadow-md" loading="lazy" />
                  <div className="mt-6 grid gap-3">
                    <a href="mailto:sales.asvengg@gmail.com?subject=Catalogue%20Request%20-%20ASV%20Precision" className="inline-flex items-center justify-between rounded-xl border border-border p-4 font-semibold text-ink hover:bg-brand-soft transition">
                      Download Catalogue <Download className="h-4 w-4 text-brand" />
                    </a>
                    <Link to="/contact" className="inline-flex items-center justify-between rounded-xl bg-brand p-4 font-semibold text-white hover:bg-navy transition">
                      Request Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="tel:+919787118179" className="inline-flex items-center justify-between rounded-xl border border-border p-4 font-semibold text-ink hover:bg-brand-soft transition">
                      Contact Sales <Phone className="h-4 w-4 text-brand" />
                    </a>
                  </div>
                </div>
                <Stagger className="grid sm:grid-cols-2 gap-4">
                  {category.products.map((product) => (
                    <Item key={product.slug} variants={itemVariants} className="rounded-xl bg-white border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 transition">
                      <img src={product.image} alt={product.name} className="w-full h-44 object-cover" loading="lazy" width={1024} height={1024} />
                      <div className="p-5">
                        <h3 className="font-bold text-ink">{product.name}</h3>
                        <p className="mt-2 text-sm text-mute leading-relaxed">{product.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {product.features.map((feature) => (
                            <span key={feature} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand-soft px-2.5 py-1 rounded">
                              <Check className="h-3 w-3" /> {feature}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 text-xs text-mute">Industries Served: {product.industries.join(" · ")}</div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {product.brands.map((b) => (
                            <span key={b} className="inline-flex items-center gap-1 rounded bg-navy/95 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white ring-1 ring-gold/40">{b}</span>
                          ))}
                        </div>
                        <Link to="/products/$slug" params={{ slug: product.slug }} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                          View Product Details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </Item>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Industries We Serve</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Industrial products matched to application needs</h2></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(([title, desc, rec]) => (
              <Item key={title} variants={itemVariants} className="rounded-xl border border-border bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                <h3 className="font-bold text-ink text-lg">{title}</h3>
                <p className="mt-3 text-sm text-mute leading-relaxed">{desc}</p>
                <div className="mt-4 text-xs font-semibold text-brand">Recommended Products: {rec}</div>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Engineering Support CTA <ArrowRight className="h-4 w-4" />
                </Link>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

export { categories };
export type { Category, ProductItem };
