import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Our Customers — 21 Years of Manufacturing Partnerships | ASV" },
      { name: "description", content: "Trusted by India's leading manufacturers — TVS Group, Hyundai WIA, FLSmidth, Brakes India, Sundram Fasteners and more." },
    ],
  }),
  component: Customers,
});

const customers = [
  "Brakes India", "Turbo Energy", "ABI-Showatech", "Wheels India Limited",
  "Sundram Fasteners Limited", "Axles India Limited", "Real Talent Engineering",
  "Sundaram-Clayton Limited", "Hyundai WIA", "SOMIC ZF Components", "FLSmidth",
];

const groups = [
  ["Automotive & Auto Components", "From TVS Group companies to Hyundai WIA — we supply tooling to Tamil Nadu's largest automotive manufacturers and tier-1 suppliers. Brake systems, transmission housings, engine components, axles and chassis parts."],
  ["Heavy Engineering", "FLSmidth and similar heavy-engineering manufacturers rely on our cutting tools and coolants for large-component machining — pumps, valves, cement plant equipment and process industry components."],
  ["Precision Components", "Job-shops and precision component manufacturers across Tiruvallur, Chennai, Sriperumbudur and Coimbatore industrial belts depend on our ready stock for daily production."],
];

function Customers() {
  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / Customers</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold max-w-3xl">Our Valued Customers — 21 Years of Manufacturing Partnerships</h1>
          <p className="mt-5 max-w-2xl text-white/70">India's leading manufacturers rely on ASV Engineering Solutions for genuine, ready-stock precision tooling.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand">Customer Wall</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">11+ Major Clients · 21+ Years</h2></Reveal>
          <Stagger className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {customers.map((c) => (
              <Item key={c} variants={itemVariants} className="bg-white border border-border border-l-4 border-l-brand rounded-lg px-6 py-7 font-bold text-ink hover:bg-brand-soft hover:-translate-y-1 hover:shadow-lg transition text-center">
                {c}
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal><h2 className="text-3xl md:text-4xl font-extrabold text-navy max-w-2xl">Industries we proudly serve</h2></Reveal>
          <Stagger className="mt-10 grid md:grid-cols-3 gap-6">
            {groups.map(([title, desc]) => (
              <Item key={title} variants={itemVariants} className="bg-white rounded-xl p-7 border border-border shadow-sm">
                <h3 className="font-bold text-ink text-lg">{title}</h3>
                <p className="mt-3 text-sm text-mute leading-relaxed">{desc}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="blue-grad text-white">
        <div className="container-x py-20 text-center">
          <Reveal><h2 className="text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto">Join our customer family</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-white/80 max-w-xl mx-auto">Let's discuss how we can support your machining operations.</p></Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-navy hover:bg-blue-50 transition">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
