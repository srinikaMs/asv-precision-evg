import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Headphones,
  Truck,
  Award,
  Download,
  MessageCircle,
} from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";
import { Counter } from "../components/site/Counter";
import heroOsg from "@/assets/hero-osg.png.asset.json";
import heroMasterFluid from "@/assets/hero-master-fluid.png.asset.json";
import heroBoehlerit from "@/assets/hero-boehlerit.png.asset.json";
import heroKta from "@/assets/hero-kta.png.asset.json";
import heroAnec from "@/assets/hero-anec.png.asset.json";
import heroDuracarb from "@/assets/hero-duracarb.png.asset.json";
import imgCarbideInserts from "@/assets/prod-carbideinserts.jpg";
import imgReplaceableInsertDrills from "@/assets/prod-replaceableinsertdrills.jpg";
import imgToolholders from "@/assets/prod-toolholders.jpg";
import imgCoolant from "@/assets/prod-coolant.jpg";
import imgCarbideRods from "@/assets/prod-carbiderods.jpg";
import imgAboutWorkshop from "@/assets/about-workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASV Engineering Solutions | Industrial Tooling Supplier & CNC Tool Distributor" },
      { name: "description", content: "ASV Engineering Solutions is a premium industrial tooling supplier for CNC cutting tools, tool holding systems, carbide inserts, metalworking fluids and precision engineering solutions in Tamil Nadu." },
      { name: "keywords", content: "Industrial Tooling Supplier, CNC Cutting Tools, Tool Holding Systems, Carbide Inserts Supplier, Precision Engineering Solutions, Metalworking Fluids Supplier, Manufacturing Solutions Tamil Nadu, Industrial Engineering Products, CNC Tool Distributor, Industrial Tool Distributor India" },
      { property: "og:title", content: "ASV Engineering Solutions | Industrial Tooling Supplier" },
      { property: "og:description", content: "Premium B2B industrial website with correct product visuals, strong SEO and lead generation for manufacturers." },
      { property: "og:url", content: "https://asv-precision-evg.lovable.app" },
    ],
    links: [{ rel: "canonical", href: "https://asv-precision-evg.lovable.app" }],
  }),
  component: Home,
});

const heroSlides = [
  { brand: "OSG", image: heroOsg.url },
  { brand: "Master Fluid Solutions", image: heroMasterFluid.url },
  { brand: "Boehlerit", image: heroBoehlerit.url },
  { brand: "KTA Spindle Toolings", image: heroKta.url },
  { brand: "ANEC", image: heroAnec.url },
  { brand: "Duracarb", image: heroDuracarb.url },
];

const stats = [
  { label: "Authorized Brands", to: 7, suffix: "" },
  { label: "Industrial Product Categories", to: 5, suffix: "" },
  { label: "Manufacturers We Serve", to: 11, suffix: "+" },
  { label: "Lead Response Focus", to: 24, suffix: "h" },
];

const aboutPoints = [
  ["Company Introduction", "ASV Engineering Solutions is a premium B2B industrial supplier built to support machining, production and engineering teams with dependable tooling solutions."],
  ["Industrial Expertise", "Solutions aligned to CNC cutting tools, tool holding systems, carbide inserts, drilling systems and metalworking fluids."],
  ["Manufacturing Support Solutions", "Guidance that helps production teams improve output, tool life and procurement confidence."],
  ["Engineering Excellence", "A focused industrial portfolio supported by clear product positioning and premium-quality visuals."],
  ["Technical Assistance", "Support for product selection, application alignment and enquiry handling through quote, catalogue and sales channels."],
];

const brandCards = [
  {
    name: "OSG",
    country: "Japan",
    description: "Global cutting tool manufacturer known for taps, drills, end mills and precision machining performance.",
    expertise: "Cutting tools, drills, threading, end mills",
    website: "https://www.osg.co.jp/en/",
  },
  {
    name: "Duracarb",
    country: "USA",
    description: "Specialist in carbide tooling and precision industrial carbide solutions.",
    expertise: "Carbide tools, wear components, custom carbide products",
    website: "https://www.duracarb.com/",
  },
  {
    name: "Boehlerit",
    country: "Austria",
    description: "Premium manufacturer of carbide and indexable tooling solutions for advanced machining.",
    expertise: "Carbide inserts, milling, turning, wear protection",
    website: "https://www.boehlerit.com/",
  },
  {
    name: "KTA Spindle Toolings",
    country: "India",
    description: "Precision tool holding brand for CNC spindle compatibility, accuracy and rigidity.",
    expertise: "BT holders, HSK holders, chucks, collets",
    website: "https://www.ktaspindletoolings.com/",
  },
  {
    name: "Master Fluid Solutions",
    country: "USA",
    description: "World-class supplier of metalworking fluids and coolant technology for machining environments.",
    expertise: "Coolants, cutting fluids, cleaners, management systems",
    website: "https://www.masterfluids.com/",
  },
  {
    name: "ANEC",
    country: "Germany",
    description: "Industrial cutting and machining solutions with a strong technical production focus.",
    expertise: "Drilling, milling, turning and tooling systems",
    website: "https://www.anectools.de/",
  },
];

const productCategories = [
  {
    title: "Cutting Tools",
    description: "Carbide inserts, turning tools, milling cutters, end mills, grooving and threading solutions.",
    image: imgCarbideInserts,
    features: ["Actual product images", "Associated brands: OSG · Boehlerit · Duracarb", "Product detail pages"],
  },
  {
    title: "Drilling & Holemaking Solutions",
    description: "Replaceable insert drills, solid carbide drills, deep hole drills, indexable drills and chamfer tools.",
    image: imgReplaceableInsertDrills,
    features: ["Different image per drill type", "Associated brands: Allied Machine · OSG", "Request quote CTAs"],
  },
  {
    title: "Tool Holding Systems",
    description: "BT holders, HSK holders, collets, hydraulic chucks, tapping chucks and shrink fit holders.",
    image: imgToolholders,
    features: ["Correct holder visuals", "Associated brand: KTA Spindle Toolings", "Premium category layout"],
  },
  {
    title: "Metalworking Fluids & Coolants",
    description: "Cutting fluids, grinding fluids, coolants, forming oils, rust preventives and coolant management solutions.",
    image: imgCoolant,
    features: ["Real container visuals", "Associated brand: Master Fluid Solutions", "Catalogue and sales CTAs"],
  },
  {
    title: "Wear Protection & Carbide Components",
    description: "Carbide rods, blanks, wear parts, carbide dies and special carbide components.",
    image: imgCarbideRods,
    features: ["Correct carbide component visuals", "Associated brand: Boehlerit", "Dedicated detail pages"],
  },
];

const industries = [
  ["Automotive", "Production tooling for high-volume machining, inserts, holders and fluids.", "Cutting Tools · Tool Holding Systems"],
  ["Aerospace", "Precision drilling and end milling support for demanding component quality.", "Drilling Solutions · End Mills"],
  ["General Engineering", "Complete industrial tooling support for varied machining operations.", "Inserts · Coolants · Holders"],
  ["Oil & Gas", "Wear-focused carbide products and rugged turning solutions for tough applications.", "Turning Tools · Carbide Components"],
  ["Energy", "Stable drilling, carbide and coolant solutions for engineered production environments.", "Drilling · Fluids · Carbide"],
  ["Precision Manufacturing", "High-accuracy products for controlled tolerances and repeatable machining.", "Reaming · Chucks · Inserts"],
];

const manufacturersA = ["Brakes India", "Turbo Energy", "ABI-Showatech", "Wheels India Limited", "Sundram Fasteners Limited", "Axles India Limited"];
const manufacturersB = ["Real Talent Engineering", "Sundaram-Clayton Limited", "Hyundai WIA", "SOMIC ZF Components", "FLSmidth"];

const whyChoose = [
  [ShieldCheck, "Authorized Distributor Network", "Officially aligned with global industrial brands."],
  [Award, "Genuine Products", "Premium product credibility with correct representation."],
  [Headphones, "Technical Support", "Sales and application-focused assistance across product categories."],
  [Truck, "Fast Delivery", "Built for responsive industrial enquiries and supply support."],
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="hero-shell">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
            className="hero-swiper w-full"
          >
            {heroSlides.map((slide, i) => (
              <SwiperSlide key={slide.brand}>
                <div className="relative h-full w-full bg-navy">
                  <img src={slide.image} alt={`${slide.brand} industrial tooling visual`} className="hero-media" loading={i === 0 ? "eager" : "lazy"} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-navy/8" />
                  <div className="absolute inset-x-0 bottom-12 z-10 flex justify-center px-4 md:bottom-16 lg:bottom-20">
                    <div className="flex flex-row items-center justify-center gap-2 md:gap-3">
                      <Link to="/products" className="inline-flex items-center gap-1.5 rounded-md bg-white px-3.5 py-2 text-xs font-semibold text-navy shadow-xl transition hover:bg-blue-50 sm:px-5 sm:py-2.5 sm:text-sm md:px-7 md:py-3.5 md:text-base">
                        Explore Products <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md border border-white/40 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-sm md:px-7 md:py-3.5 md:text-base">
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="hero-prev absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass transition hover:bg-white/20 md:left-5 md:h-11 md:w-11 lg:left-8 lg:h-12 lg:w-12" aria-label="Previous slide">
            <ChevronLeft className="h-5 w-5 text-white md:h-6 md:w-6" />
          </button>
          <button className="hero-next absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass transition hover:bg-white/20 md:right-5 md:h-11 md:w-11 lg:right-8 lg:h-12 lg:w-12" aria-label="Next slide">
            <ChevronRight className="h-5 w-5 text-white md:h-6 md:w-6" />
          </button>
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="container-x py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t-2 border-brand pt-5">
                <div className="text-4xl md:text-5xl font-extrabold text-navy"><Counter to={s.to} />{s.suffix}</div>
                <div className="mt-2 text-sm text-mute font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
          <Reveal>
            <div>
              <div className="eyebrow text-brand">About ASV Engineering Solutions</div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy">Premium industrial support for modern manufacturers</h1>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-border shadow-xl">
                <img src={imgAboutWorkshop} alt="ASV Engineering Solutions — precision CNC machining and industrial tooling" className="w-full h-[360px] md:h-[440px] object-cover" loading="lazy" width={1280} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="eyebrow text-gold">Precision Engineering</div>
                  <div className="mt-1 text-lg font-bold">Genuine tooling. Real performance. Trusted supply.</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Stagger className="grid gap-4">
            {aboutPoints.map(([title, desc]) => (
              <Item key={title} variants={itemVariants} className="rounded-xl border border-border p-6 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                <h3 className="font-bold text-ink text-lg">{title}</h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">{desc}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">AUTHORIZED DISTRIBUTOR BRANDS</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Official global brands represented by ASV Engineering Solutions</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-center text-mute max-w-3xl mx-auto">Official brand logos, country information, product expertise, website links and catalogue actions — presented separately from product categories.</p></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {brandCards.map((brand) => (
              <Item key={brand.name} variants={itemVariants} className="logo-wall-card rounded-xl border border-white/50 p-6 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition">
                <div className="text-lg font-extrabold text-navy">{brand.name}</div>
                <div className="mt-1 text-xs font-semibold text-brand uppercase tracking-[0.18em]">{brand.country}</div>
                <p className="mt-4 text-sm text-mute leading-relaxed">{brand.description}</p>
                <div className="mt-4 text-sm font-medium text-ink">Product Expertise</div>
                <p className="mt-1 text-sm text-mute">{brand.expertise}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={brand.website} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-ink hover:bg-brand-soft transition">Official Website</a>
                  <a href="mailto:sales.asvengg@gmail.com?subject=Catalogue%20Request%20-%20ASV%20Precision" className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-navy transition">
                    <Download className="h-4 w-4" /> Download Catalogue
                  </a>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Product Categories</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Products and brands kept completely separate</h2></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {productCategories.map((category) => (
              <Item key={category.title} variants={itemVariants} className="rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                <img src={category.image} alt={category.title} className="h-52 w-full object-cover" loading="lazy" width={1024} height={1024} />
                <div className="p-6">
                  <h3 className="font-bold text-ink text-xl">{category.title}</h3>
                  <p className="mt-2 text-sm text-mute leading-relaxed">{category.description}</p>
                  <div className="mt-4 space-y-2">
                    {category.features.map((feature) => (
                      <div key={feature} className="inline-flex w-full items-center gap-2 text-xs font-semibold text-brand bg-brand-soft px-3 py-2 rounded">
                        <ArrowRight className="h-3 w-3" /> {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-navy transition">
              Explore All Product Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="container-x relative">
          <Reveal><div className="eyebrow text-gold">Industries We Serve</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-extrabold max-w-2xl">Engineering support for multiple manufacturing industries</h2></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(([title, desc, rec]) => (
              <Item key={title} variants={itemVariants} className="group rounded-xl glass p-7 hover:bg-white/10 transition">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
                <div className="mt-4 text-xs font-semibold text-gold">Recommended Products: {rec}</div>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Engineering Support CTA <ArrowRight className="h-4 w-4" />
                </Link>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Manufacturers We Serve</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Trusted by production-driven manufacturers</h2></Reveal>
          <div className="mt-12 space-y-4 overflow-hidden">
            {[
              { items: clients.slice(0, 5), dir: "animate-marquee-left" },
              { items: clients.slice(5), dir: "animate-marquee-right" },
            ].map(({ items, dir }, idx) => (
              <div key={idx} className="overflow-hidden">
                <div className={`flex gap-4 w-max ${dir} hover:[animation-play-state:paused]`}>
                  {[...items, ...items].map((c, i) => (
                    <div key={`${c.name}-${i}`} className="shrink-0 flex flex-col items-center justify-center bg-white border border-border rounded-xl px-6 py-4 min-w-[220px] shadow-sm hover:bg-brand-soft transition">
                      <div className="flex h-16 items-center justify-center">
                        <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-14 max-w-[160px] object-contain" />
                      </div>
                      <div className="mt-2 text-xs font-bold text-ink text-center">{c.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="container-x grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Why Choose ASV Engineering Solutions</h2>
            <p className="mt-4 text-mute max-w-xl">A premium industrial B2B experience built for lead generation, stronger trust and modern manufacturing presentation standards.</p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4">
            {whyChoose.map(([Icon, title, desc]) => (
              <Item key={title as string} variants={itemVariants} className="rounded-xl border border-border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{title as string}</h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">{desc as string}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="blue-grad text-white relative overflow-hidden">
        <div className="container-x py-20 relative text-center">
          <Reveal><h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto">Lead generation built into every industrial touchpoint</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-white/80 max-w-2xl mx-auto">Request Quote, Download Catalogue, Contact Sales, Request Callback, WhatsApp CTA, Call Now CTA and Email Enquiry are integrated across the website.</p></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-navy hover:bg-blue-50 transition">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="mailto:sales.asvengg@gmail.com?subject=Catalogue%20Request%20-%20ASV%20Precision" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-semibold text-white hover:bg-white/10">
                <Download className="h-4 w-4" /> Download Catalogue
              </a>
              <a href="https://wa.me/917338936926?text=Hi%2C%20I%27d%20like%20to%20contact%20ASV%20Precision." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-semibold text-white" style={{ background: "#25D366" }}>
                <MessageCircle className="h-4 w-4" /> WhatsApp CTA
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            [MapPin, "Address", "No. 3, 60 Feet Road, V.M Nagar Extn, JJ Salai, Tiruvallur, TN 602001"],
            [Phone, "Phone", "+91 97871 18179"],
            [Mail, "Email", "sales.asvengg@gmail.com"],
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
