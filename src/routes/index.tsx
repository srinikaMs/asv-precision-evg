import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ArrowRight, Check, ChevronDown, MapPin, Phone, Mail,
  Cog, Wrench, Beaker, Layers, Settings, Zap, Truck, ShieldCheck, Headphones, Award, Clock,
} from "lucide-react";
import { useState } from "react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";
import { Counter } from "../components/site/Counter";
import { Gear3D } from "../components/site/Gear3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASV Engineering Solutions — Precision Tooling Distributor" },
      { name: "description", content: "Authorized distributor of OSG, Bilz, Boehlerit, Master Fluid and Hanboo. Premium cutting tools and metalworking fluids for Tamil Nadu's manufacturers." },
      { property: "og:title", content: "ASV Engineering Solutions — Precision Tooling" },
      { property: "og:description", content: "Genuine cutting tools, holders, inserts and coolants — ready stock, fast delivery across Tamil Nadu." },
    ],
  }),
  component: Home,
});

const brands = [
  {
    name: "OSG",
    company: "OSG India Pvt. Ltd.",
    country: "JAPAN", flag: "🇯🇵", accent: "bg-red-600",
    hero: "Est. 1938 · World's #1 in Round Cutting Tools",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    desc: "OSG Corporation of Japan is the world's largest manufacturer of round cutting tools with the top global market share in taps, drills and end mills. Trusted by precision manufacturers for over 85 years.",
    products: [
      ["Taps", "HSS and carbide taps for threading — metric, inch, pipe. Aluminum, steel, stainless, cast iron."],
      ["Drills", "Solid carbide and HSS drills. Standard, deep hole and step configurations."],
      ["Reamers", "Precision reamers for tight hole tolerances. Straight and spiral flute."],
      ["Synchro Holders", "Synchronous tapping chucks for rigid tapping. Extends tap life dramatically."],
      ["Floating Reamer Holders", "Self-compensating holders for misalignment between spindle and hole."],
      ["Customized Solutions", "Special purpose tools to customer drawings."],
    ],
  },
  {
    name: "Bilz",
    company: "Otto Bilz (India) Pvt. Ltd.",
    country: "GERMANY", flag: "🇩🇪", accent: "bg-zinc-900",
    hero: "Precision Tool Holding · Used in 60+ Countries",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    desc: "Otto Bilz GmbH of Germany manufactures high-precision tool holding systems used worldwide across all machine types. Clamping technology ensures maximum concentricity and tool life.",
    products: [
      ["CNC Holders", "BT30/BT40/BT50, HSK-A63/A100. Minimal runout for precision work."],
      ["Shrink Fit Machines", "Induction heating machines for fast, accurate, damage-free clamping."],
      ["Shrink Fit Holders", "Zero runout, highest concentricity. Ideal for micro tools and hard materials."],
      ["Conventional Clamping", "ER collet chucks, milling chucks, side lock holders."],
    ],
  },
  {
    name: "Boehlerit",
    company: "Boehlerit GmbH & Co. KG",
    country: "AUSTRIA", flag: "🇦🇹", accent: "bg-red-700",
    hero: "Carbide Specialist · Tools for Every Operation",
    img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    desc: "Boehlerit of Austria is a leading carbide and tool specialist. From cutting materials to complete tool systems for milling, turning, drilling and forming.",
    products: [
      ["Turning Inserts", "CNMG, DNMG, TNMG, VNMG ISO geometries for all materials."],
      ["Milling Inserts", "Face, shoulder and pocket milling. Positive and negative geometries."],
      ["Drilling Inserts", "High-feed indexable drilling for ferrous and non-ferrous."],
      ["Taps", "Solid carbide and HSS-E taps. Spiral point, spiral flute, forming."],
      ["Threading Inserts", "Single point threading — metric and inch, multiple pitches."],
    ],
  },
  {
    name: "Master Fluid",
    company: "Master Fluid Solutions India Pvt. Ltd.",
    country: "USA", flag: "🇺🇸", accent: "bg-blue-700",
    hero: "Est. 1951 · Complete Metalworking Fluid Solutions",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    desc: "Master Fluid Solutions (MFS) is a USA-based complete metalworking fluid manufacturer operating since 1951. ASV has been their authorized distributor since 2015.",
    products: [
      ["MicroSol® Emulsions", "Water-soluble micro-emulsion fluids. Superior cooling and corrosion protection."],
      ["Semisynthetics", "Combine oil-based lubrication with water-based cooling. Low foaming."],
      ["Neo-Synthetics", "Advanced synthetics for aluminum, titanium and exotic alloys."],
      ["Full Synthetics", "100% oil-free for grinding and fine machining. Crystal clear."],
      ["Straight Cutting Oils", "Petroleum-based for heavy-duty tapping, broaching, gear cutting."],
      ["Coolant Equipment", "Sump cleaners, separators, recycling, refractometers."],
      ["Rust Preventives", "Water-dilutable, short and long-term storage protection."],
    ],
  },
  {
    name: "Hanboo",
    company: "Hanboo India Pvt. Ltd.",
    country: "KOREA", flag: "🇰🇷", accent: "bg-indigo-700",
    hero: "Total Tooling · Complicated Tooling Solutions",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=80",
    desc: "Hanboo India specializes in complicated and special-purpose tooling. Their Total Tooling approach covers complex, non-standard requirements that standard catalogues cannot solve.",
    products: [
      ["Special Purpose Tools", "Step drills, form tools, combination tools, multi-diameter reamers."],
      ["Complicated Assemblies", "Multi-spindle heads, gang tooling, modular systems for engine and transmission work."],
      ["Total Tooling Concept", "Complete tool management — design, supply, reconditioning, performance tracking."],
    ],
  },
];

const stats = [
  { label: "Trusted Since", to: 2015, prefix: "Est. ", suffix: "" },
  { label: "Global Brand Authorizations", to: 5, suffix: "" },
  { label: "Years Customer Relationships", to: 21, suffix: "+" },
  { label: "Major Clients Served", to: 11, suffix: "" },
];

const productTabs = [
  {
    name: "Cutting Tools", sub: "OSG", icon: Cog,
    items: [
      ["Taps", "Threading for all materials. Metric and inch. Spiral, plug, bottom, forming.", "M1 to M100"],
      ["Drills", "Solid carbide and HSS. Standard, deep hole, step drills. Sub-micron carbide.", "Ø0.5 – 50 mm"],
      ["Reamers", "Tight tolerances H6/H7. Carbide and HSS. Straight and spiral flute.", "Ø2 – 40 mm"],
      ["Synchro Holders", "Synchronous tapping chucks for CNC rigid tapping.", "Reduces breakage 60%"],
      ["Floating Reamer Holders", "Self-compensating for line boring and reaming.", "BT/HSK interface"],
      ["Custom Tools", "Special tools to your drawing. Complex geometries.", "Lead time 2-4 wks"],
    ],
  },
  {
    name: "Tool Holding", sub: "Bilz", icon: Wrench,
    items: [
      ["CNC Holders", "Precision holders for all CNC machining centers.", "BT30/BT40/BT50/HSK"],
      ["Shrink Fit Systems", "Induction heating with matched shrink-fit holders.", "Zero runout"],
      ["Collet Chucks", "ER series with high concentricity collets.", "ER16/20/32/40"],
      ["Milling Chucks", "Heavy-duty side lock and power chucks.", "All spindle types"],
    ],
  },
  {
    name: "Carbide Inserts", sub: "Boehlerit", icon: Layers,
    items: [
      ["Turning Inserts", "Full ISO geometry range for external and internal turning.", "CNMG/DNMG/TNMG"],
      ["Milling Inserts", "Face, shoulder, pocket — positive and negative.", "All major holders"],
      ["Threading Inserts", "Metric and inch profiles, multiple pitches.", "Single point"],
      ["Drilling Inserts", "High-feed indexable drill heads.", "Ferrous/non-ferrous"],
    ],
  },
  {
    name: "Metalworking Fluids", sub: "Master Fluid", icon: Beaker,
    items: [
      ["Emulsions", "Water-soluble fluids with micro-emulsion tech.", "Extended sump life"],
      ["Synthetics", "Oil-free, high performance for grinding & fine work.", "Crystal clear"],
      ["Cutting Oils", "Straight petroleum oils for heavy-duty operations.", "Tapping/Broaching"],
      ["Coolant Equipment", "Sump cleaners, separators, refractometers.", "Complete systems"],
    ],
  },
  {
    name: "Special Tooling", sub: "Hanboo", icon: Settings,
    items: [
      ["Special Purpose Tools", "Engineered for unique machining operations.", "Drawing-based"],
      ["Complicated Assemblies", "Multi-spindle, gang and modular tooling.", "Engine/transmission"],
      ["Total Tooling Management", "Design to reconditioning — one partner.", "Full lifecycle"],
    ],
  },
];

const industries = [
  ["🚗", "Automotive & Auto Components", "Brake drums, engine blocks, transmission housings, axles — tools for every auto-component operation."],
  ["✈️", "Aerospace", "Tight tolerances, exotic materials — titanium, Inconel, composites. Aerospace-grade precision."],
  ["🏗️", "Heavy Engineering", "Large component machining for pumps, valves, pressure vessels and structural components."],
  ["⚙️", "Tool & Die Manufacturing", "Mould making, die casting tool maintenance, punch and die reconditioning support."],
  ["🔧", "General Machining & Job Shops", "CNC turning, milling, drilling, grinding — complete tooling solutions for job shops."],
  ["🏭", "Fabrication & Process Industry", "Heavy fabrication, cement plant components, mining equipment machining."],
];

const customersA = ["Brakes India", "Turbo Energy", "ABI-Showatech", "Wheels India Limited", "Sundram Fasteners Limited", "Axles India Limited"];
const customersB = ["Real Talent Engineering", "Sundaram-Clayton Limited", "Hyundai WIA", "SOMIC ZF Components", "FLSmidth"];

const steps = [
  ["📋", "Share Requirement", "Tell us your material, machine, and operation. Call, WhatsApp, or fill the form."],
  ["🔍", "Technical Recommendation", "Our application engineer selects the right tool, grade, and geometry for your specific job."],
  ["✅", "Quotation in 24 Hours", "Clear pricing from genuine brand stock. No hidden charges."],
  ["📦", "Ready Stock Delivery", "Most products available ex-stock. Delivered to your factory across Tamil Nadu."],
  ["🔧", "After-Sales Support", "Performance tracking, tool life analysis, and ongoing technical support."],
];

const whys = [
  [ShieldCheck, "Authorized Distributor Status", "Officially appointed distributor for OSG Japan, Bilz Germany, Boehlerit Austria, Master Fluid USA and Hanboo Korea. Every product is genuine, certified and carries the manufacturer's full warranty. No parallel imports, no copies."],
  [Truck, "Ready Stock + Fast Delivery", "Comprehensive stock of fast-moving items at our Tiruvallur warehouse. Same-day or next-day dispatch across Tamil Nadu. Tool downtime = production loss — we know."],
  [Award, "21+ Years Customer Trust", "Our founding team has 21+ years of relationships with Tamil Nadu's manufacturing community. We know your industry, your machines and your requirements."],
  [Headphones, "Application Engineering Support", "Hands-on technical guidance — tool selection, speed/feed recommendations, troubleshooting failures. Partners, not just suppliers."],
  [Zap, "Cost-per-Part Focus", "We help reduce your cost per machined part by selecting the right grade and geometry, optimizing parameters and extending tool life."],
  [Clock, "After-Sales Partnership", "Post-sale we stay engaged — monitoring performance, resolving issues, ensuring maximum value from every purchase."],
];

function Home() {
  const [tab, setTab] = useState(0);
  const [openWhy, setOpenWhy] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grad text-white min-h-[92vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 eyebrow text-gold">
              ✦ Authorized Distributor · Tiruvallur
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.05]">
              Precision Tooling Solutions for Tamil Nadu's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Manufacturing Industry</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              ASV Engineering Solutions supplies high-performance cutting tools, CNC tooling, metalworking fluids and carbide inserts from world-class brands — OSG, Bilz, Boehlerit, Master Fluid, Hanboo — to Tamil Nadu's leading manufacturers.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-navy hover:bg-blue-50 transition">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                Talk to Our Expert
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-2">
              {brands.map((b) => (
                <div key={b.name} className="glass rounded-lg px-3 py-3 text-center">
                  <div className="text-lg">{b.flag}</div>
                  <div className="text-xs font-bold mt-1">{b.name}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="relative h-[480px] hidden lg:block">
            <Gear3D />
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-down text-white/60">
          <ChevronDown className="h-7 w-7" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-y border-border">
        <div className="container-x py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t-2 border-brand pt-5">
                <div className="text-4xl md:text-5xl font-extrabold text-navy">
                  {s.prefix ? <>Est. <Counter to={s.to} /></> : <><Counter to={s.to} />{s.suffix}</>}
                </div>
                <div className="mt-2 text-sm text-mute font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="bg-white py-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 bg-brand/40 mix-blend-multiply rounded-2xl z-10" />
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="CNC precision machining" className="rounded-2xl shadow-2xl w-full h-[520px] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl p-5 border-l-4 border-gold max-w-xs z-20">
                <div className="eyebrow text-gold">Ready Stock</div>
                <div className="font-bold text-navy mt-1">Available · Fast Delivery Across Tamil Nadu</div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><div className="eyebrow text-brand">Who We Are</div></Reveal>
            <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Tamil Nadu's Trusted Industrial Tooling Partner</h2></Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-mute leading-relaxed">
                Established in 2015, ASV Engineering Solutions is the authorized distributor for five globally reputed manufacturing brands. With over 21 years of deep customer relationships, we supply carbide tools, HSS tools, precision inserts, reamers, coolants and custom cutting solutions to Tamil Nadu's most demanding manufacturers.
              </p>
            </Reveal>
            <Stagger className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Genuine certified products — no counterfeits", "Ready stock for immediate dispatch", "Technical consultation by trained engineers", "After-sales support and long-term partnership"].map((t) => (
                <Item key={t} variants={itemVariants} className="flex gap-2 items-start">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/10 text-success"><Check className="h-3.5 w-3.5" /></span>
                  <span className="text-sm text-ink">{t}</span>
                </Item>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand">
                Read Our Full Story <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BRANDS CAROUSEL */}
      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Our Principals</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Authorized Distributor for 5 World-Class Brands</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-center text-mute max-w-2xl mx-auto">Every product we supply comes directly from the manufacturer with full certification and warranty.</p></Reveal>
        </div>
        <div className="mt-12 pl-4 md:pl-12">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.05}
            breakpoints={{ 640: { slidesPerView: 1.3 }, 1024: { slidesPerView: 1.6 } }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop navigation pagination={{ clickable: true }}
            className="!pb-14"
          >
            {brands.map((b) => (
              <SwiperSlide key={b.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border h-full">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-full min-h-[320px]">
                      <img src={b.img} alt={b.name} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                      <div className={`absolute top-4 left-4 ${b.accent} text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-sm`}>{b.flag} {b.country}</div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xs text-white/80">{b.company}</div>
                        <div className="text-2xl font-extrabold mt-1">{b.name}</div>
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="eyebrow text-gold">{b.hero}</div>
                      <p className="mt-3 text-sm text-mute leading-relaxed">{b.desc}</p>
                      <div className="mt-5 space-y-2 max-h-72 overflow-y-auto pr-2">
                        {b.products.slice(0, 5).map(([n, d]) => (
                          <details key={n} className="group border-b border-border pb-2">
                            <summary className="cursor-pointer flex justify-between items-center font-semibold text-ink text-sm py-1">
                              {n}<ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                            </summary>
                            <p className="text-xs text-mute mt-1 pl-1">{d}</p>
                          </details>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center gap-3">
                        <Link to="/contact" className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-navy">Request Quote</Link>
                        <Link to="/products" className="text-sm font-semibold text-brand inline-flex items-center gap-1">View {b.name} Products <ArrowRight className="h-3.5 w-3.5" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* PRODUCT EXPLORER */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Product Categories</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Everything Your CNC Floor Needs</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-center text-mute max-w-2xl mx-auto">From cutting tools to coolants — we supply the complete range of precision tooling products.</p></Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-border">
            {productTabs.map((t, i) => {
              const Icon = t.icon;
              return (
                <button key={t.name} onClick={() => setTab(i)}
                  className={`relative px-5 py-3 text-sm font-semibold flex items-center gap-2 transition ${tab === i ? "text-brand" : "text-mute hover:text-ink"}`}>
                  <Icon className="h-4 w-4" /> {t.name}
                  <span className="text-xs text-mute font-normal hidden md:inline">· {t.sub}</span>
                  {tab === i && <motion.span layoutId="tab-underline" className="absolute left-0 right-0 -bottom-px h-0.5 bg-brand" />}
                </button>
              );
            })}
          </div>

          <motion.div key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productTabs[tab].items.map(([n, d, spec]) => (
              <div key={n} className="group bg-white rounded-xl border border-border p-6 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand/30 transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Cog className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-ink text-lg">{n}</h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">{d}</p>
                <div className="mt-4 inline-flex items-center text-xs font-semibold text-brand bg-brand-soft px-2.5 py-1 rounded">{spec}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-x relative">
          <Reveal><div className="eyebrow text-gold">Industries We Serve</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-extrabold max-w-2xl">Built for Tamil Nadu's Most Demanding Manufacturers</h2></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(([emo, name, desc]) => (
              <Item key={name} variants={itemVariants} className="group rounded-xl glass p-7 hover:bg-white/10 transition cursor-pointer">
                <div className="text-3xl">{emo}</div>
                <h3 className="mt-4 font-bold text-lg">{name}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Our Customers</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Trusted by India's Leading Manufacturers</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-center text-mute max-w-2xl mx-auto">21+ years of uninterrupted supply relationships with Tamil Nadu's top engineering companies.</p></Reveal>
        </div>

        <div className="mt-12 space-y-4 overflow-hidden">
          {[
            { items: customersA, dir: "animate-marquee-left" },
            { items: customersB, dir: "animate-marquee-right" },
          ].map(({ items, dir }, idx) => (
            <div key={idx} className="overflow-hidden">
              <div className={`flex gap-4 w-max ${dir} hover:[animation-play-state:paused]`}>
                {[...items, ...items, ...items].map((c, i) => (
                  <div key={i} className="shrink-0 bg-white border border-border border-l-4 border-l-brand rounded-lg px-7 py-5 font-bold text-ink hover:bg-brand-soft transition min-w-[240px] text-center">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="container-x mt-14 grid md:grid-cols-3 gap-5">
          {[
            ["11", "Major clients including TVS Group, Hyundai WIA and FLSmidth"],
            ["21+", "Years of continuous supply relationships"],
            ["100%", "Genuine brand-direct supply — zero counterfeit"],
          ].map(([n, t]) => (
            <Reveal key={t}>
              <div className="rounded-xl border border-border p-7 bg-white shadow-sm">
                <div className="text-5xl font-extrabold text-brand">{n}</div>
                <div className="mt-2 text-sm text-mute">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Our Process</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">From Enquiry to Delivery — Simple and Fast</h2></Reveal>

          <div className="mt-14 relative">
            <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent" />
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" gap={0.15}>
              {steps.map(([emo, title, desc], i) => (
                <Item key={title} variants={itemVariants} className="relative bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white font-bold text-lg">{i + 1}</div>
                  <div className="mt-4 text-2xl">{emo}</div>
                  <h3 className="mt-2 font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-xs text-mute leading-relaxed">{desc}</p>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* WHY ASV */}
      <section className="bg-white py-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Why Manufacturers Choose <span className="text-brand">ASV Engineering Solutions</span></h2>
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
              alt="Precision machining" className="mt-8 rounded-2xl shadow-xl w-full h-[420px] object-cover" />
          </Reveal>
          <div className="space-y-3">
            {whys.map(([Icon, title, desc], i) => {
              const open = openWhy === i;
              return (
                <Reveal key={title as string} delay={i * 0.05}>
                  <div className={`rounded-xl border transition ${open ? "border-brand bg-brand-soft" : "border-border bg-white"}`}>
                    <button onClick={() => setOpenWhy(open ? null : i)}
                      className="w-full p-5 flex items-center gap-4 text-left">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${open ? "bg-brand text-white" : "bg-brand-soft text-brand"}`}>
                        {/* @ts-expect-error icon component */}
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 font-bold text-ink">{title as string}</span>
                      <ChevronDown className={`h-5 w-5 text-mute transition ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        className="px-5 pb-5 pl-20 text-sm text-mute leading-relaxed">
                        {desc as string}
                      </motion.div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="blue-grad text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x py-20 relative text-center">
          <Reveal><h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto">Ready to improve your machining performance?</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-white/80 max-w-xl mx-auto">Talk to our application expert today. We'll recommend the right tooling solution for your specific requirement.</p></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/917338936926" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-semibold text-white shadow-lg" style={{ background: "#25D366" }}>
                WhatsApp Us Now
              </a>
              <a href="tel:+919787118179" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-semibold text-white hover:bg-white/10">
                Call +91 97871 18179
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="bg-white py-24">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            [MapPin, "Visit Us", "Tiruvallur, Tamil Nadu, India — serving all major industrial belts."],
            [Phone, "Call / WhatsApp", "+91 97871 18179\n+91 73389 36926"],
            [Mail, "Email Us", "sales.asvengg@gmail.com"],
          ].map(([Icon, t, d], i) => (
            <Reveal key={t as string} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-white p-7 hover:shadow-xl hover:-translate-y-1 transition">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-white">
                  {/* @ts-expect-error */}
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-bold text-ink text-lg">{t as string}</h3>
                <p className="mt-2 text-sm text-mute whitespace-pre-line">{d as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
