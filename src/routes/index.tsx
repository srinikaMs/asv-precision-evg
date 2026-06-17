import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, MapPin, Phone, Mail,
  Cog, Wrench, Beaker, Layers, Settings, Ruler, Zap, Truck, ShieldCheck, Headphones, Award, Clock,
} from "lucide-react";
import { useState } from "react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";
import { Counter } from "../components/site/Counter";
import heroTaps from "@/assets/prod-taps.jpg";
import heroCoolant from "@/assets/prod-coolant.jpg";
import heroTurning from "@/assets/prod-turninginserts.jpg";
import heroHolders from "@/assets/prod-toolholders.jpg";
import heroIndexable from "@/assets/prod-indexabledrilling.jpg";
import heroBoring from "@/assets/prod-boringhead.jpg";
import heroCarbide from "@/assets/prod-solidcarbide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASV Engineering Solutions — Precision Cutting Tools & CNC Tooling Distributor Tiruvallur Tamil Nadu" },
      { name: "description", content: "Authorized distributor of OSG, Master Fluid, Boehlerit, KTA Spindle Tooling, AMEC / ANEC, Wohlhaupter and Duracarb. Premium CNC cutting tools, carbide inserts, tool holders, coolants and precision measurement instruments for Tamil Nadu's manufacturers." },
      { name: "keywords", content: "ASV Engineering Solutions, cutting tools distributor Tamil Nadu, OSG India dealer, Master Fluid coolant supplier, Boehlerit carbide inserts, KTA spindle tooling, AMEC drilling, ANEC precision instruments, Wohlhaupter boring tools, Duracarb carbide, CNC tooling Tiruvallur, taps drills reamers Chennai, metalworking fluids India, precision tool supplier Sriperumbudur, industrial tooling Tamil Nadu" },
      { property: "og:title", content: "ASV Engineering Solutions — Precision Tooling" },
      { property: "og:description", content: "Genuine cutting tools, holders, inserts, coolants and metrology — ready stock, fast delivery across Tamil Nadu." },
    ],
  }),
  component: Home,
});

// 7-brand hero carousel — each slide highlights a principal brand
const heroSlides = [
  { brand: "OSG", flag: "🇯🇵", country: "JAPAN", tagline: "Precision Cutting Tools Manufacturer — Since 1938", products: ["Taps", "Drills", "End Mills", "Indexable Tools", "Thread Mills"], img: heroTaps, hash: "osg" },
  { brand: "Master Fluid Solutions", flag: "🇺🇸", country: "USA", tagline: "TRIM® Industrial Metalworking Fluids & Coolants", products: ["Cutting Fluids", "Coolants", "Cleaners"], img: heroCoolant, hash: "master-fluid" },
  { brand: "Boehlerit", flag: "🇦🇹", country: "AUSTRIA", tagline: "Carbide Cutting Tools & Inserts Specialist", products: ["Turning Inserts", "Milling Tools", "Carbide Rods"], img: heroTurning, hash: "boehlerit" },
  { brand: "KTA Spindle Tooling", flag: "⚙️", country: "PREMIUM", tagline: "Spindle Tooling & Toolholding Solutions", products: ["Tool Holders", "Spindle Accessories"], img: heroHolders, hash: "kta-spindle-tooling" },
  { brand: "Allied Machine (AMEC)", flag: "🇺🇸", country: "USA", tagline: "Drilling & Hole-Making Solutions", products: ["Drilling Systems", "Boring Tools", "Threading"], img: heroIndexable, hash: "anec" },
  { brand: "Wohlhaupter", flag: "🇩🇪", country: "GERMANY", tagline: "World Leader in Precision Boring Systems", products: ["Boring Heads", "Fine Boring Tools", "Back Spotfacing"], img: heroBoring, hash: "wohlhaupter" },
  { brand: "Duracarb", flag: "🛠️", country: "CARBIDE", tagline: "Tungsten Carbide Tools & Rods Manufacturer", products: ["Carbide Rods", "Wear Parts", "Custom Carbide Tooling"], img: heroCarbide, hash: "duracarb" },
];

const brands = [
  {
    name: "OSG",
    company: "OSG Corporation",
    country: "JAPAN", flag: "🇯🇵", accent: "bg-red-600",
    hero: "Est. 1938 · World's #1 in Round Cutting Tools",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    desc: "OSG of Japan is the world's largest manufacturer of round cutting tools — taps, drills, end mills and reamers used by precision manufacturers for over 85 years.",
    products: [
      ["Taps", "HSS and carbide taps for threading — every material."],
      ["Drills", "Solid carbide and HSS drills."],
      ["Reamers", "H6/H7 precision reamers."],
      ["End Mills", "Solid carbide end mills."],
      ["Synchro Holders", "Synchronous tap chucks."],
    ],
  },
  {
    name: "Master Fluid",
    company: "Master Fluid Solutions (TRIM®)",
    country: "USA", flag: "🇺🇸", accent: "bg-blue-700",
    hero: "Est. 1951 · Complete Metalworking Fluid Solutions",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    desc: "Master Fluid Solutions (MFS) is a USA-based metalworking fluid manufacturer since 1951. ASV has been their authorized distributor since 2015.",
    products: [
      ["MicroSol® Emulsions", "Micro-emulsion coolants."],
      ["Semi-synthetics", "Low-foam universal coolants."],
      ["Synthetics", "Oil-free precision coolants."],
      ["Cutting Oils", "Heavy-duty straight oils."],
      ["Coolant Equipment", "Cleaners & refractometers."],
    ],
  },
  {
    name: "Boehlerit",
    company: "Boehlerit GmbH",
    country: "AUSTRIA", flag: "🇦🇹", accent: "bg-red-700",
    hero: "Carbide Specialist · Tools for Every Operation",
    img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    desc: "Boehlerit of Austria is a leading carbide specialist — cutting materials, inserts and complete tool systems.",
    products: [
      ["Turning Inserts", "CNMG, DNMG, TNMG, VNMG."],
      ["Milling Inserts", "Face, shoulder, pocket."],
      ["Drilling Inserts", "High-feed indexable."],
      ["Threading Inserts", "Metric & inch profiles."],
    ],
  },
  {
    name: "KTA Spindle Tooling",
    company: "KTA Spindle Tooling",
    country: "PREMIUM", flag: "⚙️", accent: "bg-zinc-900",
    hero: "Precision Tool Holders & Spindle Interfaces",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    desc: "BT, HSK and ER tool holders, shrink-fit and milling chucks engineered for the most demanding CNC spindles.",
    products: [
      ["BT/HSK Holders", "All spindle interfaces."],
      ["ER Collet Chucks", "ER16–ER40."],
      ["Shrink-Fit Holders", "Zero runout."],
      ["Milling Chucks", "Heavy-duty MRR."],
    ],
  },
  {
    name: "ANEC",
    company: "ANEC Metrology",
    country: "PRECISION", flag: "📐", accent: "bg-emerald-700",
    hero: "Precision Measurement & Inspection",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
    desc: "ANEC supplies precision metrology — calipers, micrometers, height gauges, indicators, surface plates.",
    products: [
      ["Digital Calipers", "0–150/200/300 mm."],
      ["Micrometers", "Outside/inside, digital."],
      ["Height Gauges", "Vernier & digital."],
      ["Dial Indicators", "0.01 / 0.001 mm."],
    ],
  },
  {
    name: "Wohlhaupter",
    company: "Wohlhaupter GmbH",
    country: "GERMANY", flag: "🇩🇪", accent: "bg-amber-700",
    hero: "World Leader in Precision Boring Systems",
    img: "https://images.unsplash.com/photo-1574170609296-a4be09e1cad9?auto=format&fit=crop&w=1200&q=80",
    desc: "Wohlhaupter of Germany leads the world in precision boring. MultiBore® modular system delivers micron-level accuracy.",
    products: [
      ["Boring Heads", "Single & twin-cutter."],
      ["MultiBore® System", "Modular boring."],
      ["Digital Heads", "2 µm resolution."],
      ["Boring Bars", "Vibration-damped."],
    ],
  },
  {
    name: "Duracarb",
    company: "Duracarb Carbide Tooling",
    country: "CARBIDE", flag: "🛠️", accent: "bg-indigo-700",
    hero: "Solid Carbide Tooling & Regrinding",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=80",
    desc: "Duracarb manufactures solid carbide end mills, drills and custom form tools optimised for difficult-to-machine materials.",
    products: [
      ["Solid Carbide End Mills", "2/3/4/6 flute."],
      ["Solid Carbide Drills", "Ø1–25 mm."],
      ["Custom Form Tools", "Drawing-based."],
      ["Tool Regrinding", "Recoating service."],
    ],
  },
];

const stats = [
  { label: "Trusted Since", to: 2015, prefix: "Est. ", suffix: "" },
  { label: "Global Brand Authorizations", to: 7, suffix: "" },
  { label: "Years Customer Relationships", to: 21, suffix: "+" },
  { label: "Major Clients Served", to: 11, suffix: "" },
];

const productTabs = [
  {
    name: "Cutting Tools", sub: "OSG · Duracarb", icon: Cog,
    items: [
      ["Taps", "Threading for all materials. Metric and inch.", "M1 to M100"],
      ["Drills", "Solid carbide and HSS. Standard, deep hole, step.", "Ø0.5 – 50 mm"],
      ["Reamers", "Tight tolerances H6/H7.", "Ø2 – 40 mm"],
      ["End Mills", "Multi-flute carbide end mills.", "Steel/Aluminium"],
      ["Synchro Holders", "Synchronous tapping chucks.", "Reduces breakage 60%"],
      ["Custom Tools", "Special tools to drawing.", "2-4 wks"],
    ],
  },
  {
    name: "Tool Holding", sub: "KTA Spindle Tooling", icon: Wrench,
    items: [
      ["BT/HSK Holders", "Precision holders for all CNC centers.", "BT30/40/50/HSK"],
      ["Shrink Fit Systems", "Induction heating + matched holders.", "Zero runout"],
      ["ER Collet Chucks", "High-concentricity collets.", "ER16/20/32/40"],
      ["Milling Chucks", "Heavy-duty side lock & power chucks.", "Roughing duty"],
    ],
  },
  {
    name: "Carbide Inserts", sub: "Boehlerit", icon: Layers,
    items: [
      ["Turning Inserts", "Full ISO range, ext/int turning.", "CNMG/DNMG/TNMG"],
      ["Milling Inserts", "Face, shoulder, pocket.", "All major holders"],
      ["Threading Inserts", "Metric & inch profiles.", "Single point"],
      ["Drilling Inserts", "High-feed indexable drill heads.", "Ferrous/non-ferrous"],
    ],
  },
  {
    name: "Metalworking Fluids", sub: "Master Fluid", icon: Beaker,
    items: [
      ["Emulsions", "Water-soluble micro-emulsion.", "Extended sump life"],
      ["Synthetics", "Oil-free, fine machining.", "Crystal clear"],
      ["Cutting Oils", "Heavy-duty operations.", "Tapping/Broaching"],
      ["Coolant Equipment", "Cleaners, separators, refractometers.", "Complete systems"],
    ],
  },
  {
    name: "Boring Systems", sub: "Wohlhaupter", icon: Settings,
    items: [
      ["Boring Heads", "Single/twin-cutter precision boring.", "Ø2 – 2500 mm"],
      ["MultiBore® Modular", "Modular boring system.", "Modular interface"],
      ["Digital Boring", "Digital readout heads.", "2 µm resolution"],
      ["Boring Bars", "Vibration-damped carbide bars.", "L/D up to 10"],
    ],
  },
  {
    name: "Measurement", sub: "ANEC", icon: Ruler,
    items: [
      ["Calipers", "Digital vernier — IP rated.", "0–150/200/300 mm"],
      ["Micrometers", "Outside & inside, digital.", "0–25 to 0–300 mm"],
      ["Height Gauges", "Layout and inspection.", "300–1000 mm"],
      ["Dial Indicators", "Lever & plunger types.", "0.01 / 0.001 mm"],
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
  ["🔍", "Technical Recommendation", "Our application engineer selects the right tool, grade, and geometry."],
  ["✅", "Quotation in 24 Hours", "Clear pricing from genuine brand stock. No hidden charges."],
  ["📦", "Ready Stock Delivery", "Most products available ex-stock. Delivered across Tamil Nadu."],
  ["🔧", "After-Sales Support", "Performance tracking, tool life analysis, technical support."],
];

const whys = [
  [ShieldCheck, "Authorized Distributor Status", "Officially appointed distributor for OSG, Master Fluid, Boehlerit, KTA, ANEC, Wohlhaupter and Duracarb. Every product is genuine, certified and carries full warranty."],
  [Truck, "Ready Stock + Fast Delivery", "Comprehensive stock at our Tiruvallur warehouse. Same-day or next-day dispatch across Tamil Nadu."],
  [Award, "21+ Years Customer Trust", "Our founding team has 21+ years of relationships with Tamil Nadu's manufacturing community."],
  [Headphones, "Application Engineering Support", "Hands-on technical guidance — tool selection, speed/feed recommendations, troubleshooting."],
  [Zap, "Cost-per-Part Focus", "We help reduce your cost per machined part by selecting the right grade and geometry."],
  [Clock, "After-Sales Partnership", "Post-sale we stay engaged — monitoring performance, resolving issues."],
];

function Home() {
  const [tab, setTab] = useState(0);
  const [openWhy, setOpenWhy] = useState<number | null>(0);

  return (
    <>
      {/* HERO with image carousel */}
      <section className="relative overflow-hidden bg-navy text-white min-h-[92vh]">
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            className="hero-swiper w-full h-full"
            style={{ width: "100%", height: "100%" }}
          >
            {heroSlides.map((s, i) => (
              <SwiperSlide key={i}>
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
                <div className="absolute inset-0 hero-grad opacity-60" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative z-10 container-x min-h-[92vh] flex items-center py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 eyebrow text-gold">
              ✦ Authorized Distributor · Tiruvallur, Tamil Nadu
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.05]">
              Precision Cutting Tools &amp; CNC Tooling for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Tamil Nadu's Manufacturers</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
              Authorized distributor of <strong className="text-white">OSG, Master Fluid, Boehlerit, KTA Spindle Tooling, ANEC, Wohlhaupter and Duracarb</strong> — taps, drills, carbide inserts, tool holders, boring systems, coolants and metrology delivered from ready stock.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-navy hover:bg-blue-50 transition shadow-xl">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                Talk to Our Expert
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 sm:grid-cols-7 gap-2 max-w-3xl">
              {brands.map((b) => (
                <Link key={b.name} to="/products" hash={b.name.toLowerCase().replace(/\s+/g, "-")} className="glass rounded-lg px-2 py-3 text-center hover:bg-white/15 transition">
                  <div className="text-lg">{b.flag}</div>
                  <div className="text-[10px] font-bold mt-1 truncate">{b.name}</div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-down text-white/60 z-10">
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
                alt="CNC precision machining workshop" className="rounded-2xl shadow-2xl w-full h-[520px] object-cover" />
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
                Established in 2015, ASV Engineering Solutions is the authorized distributor for seven globally reputed manufacturing brands. With over 21 years of deep customer relationships, we supply carbide tools, HSS tools, precision inserts, reamers, spindle tooling, boring systems, coolants, measurement instruments and custom cutting solutions to Tamil Nadu's most demanding manufacturers.
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
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Authorized Distributor for 7 World-Class Brands</h2></Reveal>
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
                        <Link to="/products" hash={b.name.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-semibold text-brand inline-flex items-center gap-1">View {b.name} Products <ArrowRight className="h-3.5 w-3.5" /></Link>
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
          <Reveal delay={0.1}><p className="mt-4 text-center text-mute max-w-2xl mx-auto">From cutting tools to coolants and metrology — we supply the complete range of precision tooling products.</p></Reveal>

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

          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-navy transition">
              See All Products in Detail <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
            [MapPin, "Visit Us", "No. 3, 60 Feet Road, V.M Nagar Extn, JJ Salai, Tiruvallur, TN 602001"],
            [Phone, "Call / WhatsApp", "+91 97871 18179\n+91 73389 36926"],
            [Mail, "Email Us", "sales.asvengg@gmail.com"],
          ].map(([Icon, t, d], i) => (
            <Reveal key={t as string} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-white p-7 hover:shadow-xl hover:-translate-y-1 transition">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-white">
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
