import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Download, Phone, ExternalLink } from "lucide-react";
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

type BrandProduct = { name: string; url: string; image: string };
type BrandShowcase = { slug: string; brand: string; tagline: string; accent: string; products: BrandProduct[] };

const brandShowcases: BrandShowcase[] = [
  {
    slug: "osg",
    brand: "OSG",
    tagline: "Shaping Tomorrow Through Innovation",
    accent: "from-blue-600 to-navy",
    products: [
      { name: "Taps", url: "https://www.osg.co.jp/en/products/tap/", image: imgTaps },
      { name: "Drills", url: "https://www.osg.co.jp/en/products/drill/", image: imgDrills },
      { name: "End Mills", url: "https://www.osg.co.jp/en/products/endmill/", image: imgEndmills },
      { name: "Indexable", url: "https://www.osg.co.jp/en/products/indexable/index.html", image: imgIndexable },
      { name: "Thread Mills", url: "https://www.osg.co.jp/en/products/threadmill/index.html", image: imgThreading },
      { name: "Dies", url: "https://www.osg.co.jp/en/products/dies/index.html", image: imgCarbideDies },
      { name: "Gauges", url: "https://www.osg.co.jp/en/products/gauge/index.html", image: imgBoreGauge },
      { name: "Tooling Systems", url: "https://www.osg.co.jp/en/products/tooling/index.html", image: imgToolholders },
      { name: "Others", url: "https://www.osg.co.jp/en/products/others/index.html", image: imgCustom },
      { name: "Tool Reconditioning", url: "https://www.osg.co.jp/en/products/re_grind/index.html", image: imgRegrinding },
    ],
  },
  {
    slug: "master-fluid-solutions",
    brand: "Master Fluid Solutions",
    tagline: "Complete Solutions for Metalworking Fluids",
    accent: "from-teal-600 to-navy",
    products: [
      { name: "TRIM®", url: "https://www.masterfluids.com/in/en-in/products/brand-and-application.php?brand_cat=C29C", image: imgCoolant },
      { name: "WEDOLiT®", url: "https://www.masterfluids.com/in/en-in/products/show-all-products.php?brand_cat=B10B&limit=brand", image: imgCuttingoil },
      { name: "Master STAGES®", url: "https://www.masterfluids.com/in/en-in/products/show-all-products.php?brand_cat=B2B&limit=brand", image: imgSynthetic },
      { name: "XYBEX®", url: "https://www.masterfluids.com/in/en-in/products/show-all-products.php?brand_cat=A2A&limit=brand", image: imgRustprev },
    ],
  },
  {
    slug: "duracarb",
    brand: "Duracarb",
    tagline: "Built for Precision. Made to Last.",
    accent: "from-red-600 to-navy",
    products: [
      { name: "Grooving", url: "https://www.duracarb-india.com/home-page/dcut/", image: imgGroovingParting },
      { name: "Drilling", url: "https://www.duracarb-india.com/ddrill/", image: imgDrills },
      { name: "Turning", url: "https://www.duracarb-india.com/dturn/", image: imgTurningTools },
      { name: "Milling", url: "https://www.duracarb-india.com/dmill/", image: imgMillingCutters },
    ],
  },
  {
    slug: "boehlerit",
    brand: "Boehlerit",
    tagline: "Precision · Performance · Productivity",
    accent: "from-blue-700 to-navy",
    products: [
      { name: "Turning", url: "https://www.boehlerit.com/en/cutting-turning/", image: imgTurningTools },
      { name: "Milling", url: "https://www.boehlerit.com/en/cutting-milling-english/", image: imgMillingCutters },
      { name: "Drilling", url: "https://www.boehlerit.com/en/cutting-drilling-threading/", image: imgDrills },
      { name: "Threading", url: "https://www.boehlerit.com/en/cutting-drilling-threading/#threading", image: imgThreading },
      { name: "Forming Technology", url: "https://www.boehlerit.com/en/cutting-forming-technology/", image: imgWearParts },
    ],
  },
  {
    slug: "kta-spindle-toolings",
    brand: "KTA Spindle Toolings",
    tagline: "Precision Tools. Performance Assured.",
    accent: "from-yellow-500 to-navy",
    products: [
      { name: "BT Tool Holders", url: "https://www.ktaspindletoolings.com/", image: imgBtToolholders },
      { name: "HSK Holders", url: "https://www.ktaspindletoolings.com/", image: imgHskHolders },
      { name: "Hydraulic Chucks", url: "https://www.ktaspindletoolings.com/", image: imgHydraulicChucks },
      { name: "Collets", url: "https://www.ktaspindletoolings.com/", image: imgCollets },
      { name: "Shrink Fit Holders", url: "https://www.ktaspindletoolings.com/", image: imgShrinkfit },
    ],
  },
  {
    slug: "allied-machine",
    brand: "Allied Machine (AMEC · Wohlhaupter · T-A Pro)",
    tagline: "The Holemaking Specialists",
    accent: "from-red-700 to-navy",
    products: [
      { name: "Drilling", url: "https://www.alliedmachine.com/products/drilling/", image: imgDrills },
      { name: "Boring", url: "https://www.alliedmachine.com/products/boring/", image: imgBoringHead },
      { name: "Specials", url: "https://www.alliedmachine.com/products/specials/", image: imgCustom },
      { name: "Threading", url: "https://www.alliedmachine.com/products/threading/", image: imgThreading },
      { name: "Reaming", url: "https://www.alliedmachine.com/products/reaming/", image: imgReamers },
      { name: "Porting (AccuPort 432)", url: "https://www.alliedmachine.com/products/drilling/porting-tools/accuport-432/", image: imgChamferTools },
      { name: "Structural Steel", url: "https://www.alliedmachine.com/products/drilling/structural-steel-solutions/", image: imgReplaceableInsertDrills },
      { name: "BT-A Drill", url: "https://www.alliedmachine.com/products/drilling/bta-deep-hole-drilling/bt-a-drill/", image: imgDeepHoleDrills },
    ],
  },
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
            {brandShowcases.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="glass rounded-full px-4 py-2 text-sm font-semibold hover:bg-white/15 transition">
                {s.brand.split(" (")[0]}
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

      {brandShowcases.map((showcase, sIdx) => (
        <section
          key={showcase.brand}
          id={showcase.slug}
          className={sIdx % 2 === 0 ? "bg-white py-20 scroll-mt-24" : "py-20 scroll-mt-24"}
          style={sIdx % 2 ? { background: "var(--surface)" } : undefined}
        >
          <div className="container-x">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className={`inline-block eyebrow text-white px-4 py-1.5 rounded-full bg-gradient-to-r ${showcase.accent}`}>Authorized Distributor</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy tracking-tight">{showcase.brand}</h2>
                <p className="mt-3 text-mute md:text-lg">{showcase.tagline}</p>
              </div>
            </Reveal>

            <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 snap-x snap-mandatory md:snap-none overflow-x-auto md:overflow-visible scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {showcase.products.map((p) => (
                  <Item key={p.name} variants={itemVariants} className="snap-start">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative block overflow-hidden rounded-[22px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(15,27,61,0.25)] transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-[-0.4deg] hover:shadow-[0_30px_60px_-20px_rgba(15,27,61,0.45)] cursor-pointer"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={p.image}
                          alt={`${showcase.brand} ${p.name}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
                        />
                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${showcase.accent} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40`} />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent" />
                        <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-navy shadow-md transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:rotate-45">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 transition-all duration-500 group-hover:text-gold">{showcase.brand}</div>
                        <h3 className="mt-1 text-base md:text-lg font-extrabold leading-tight transition-transform duration-500 group-hover:-translate-y-0.5">{p.name}</h3>
                        <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/0 transition-all duration-500 group-hover:text-white">
                          Explore <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                    </a>
                  </Item>
                ))}
            </Stagger>
          </div>
        </section>
      ))}



      {/* Category detail sections hidden — content organized by distributor brand showcases above. */}

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
