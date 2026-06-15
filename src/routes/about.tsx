import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Award, Handshake } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ASV Engineering Solutions — Tamil Nadu's Tooling Partner" },
      { name: "description", content: "Established 2015 in Tiruvallur. Authorized distributor for OSG, Bilz, Boehlerit, Master Fluid and Hanboo. Led by Mr. A. Suresh." },
    ],
  }),
  component: About,
});

const timeline = [
  ["2015", "ASV Engineering Solutions founded in Tiruvallur. Authorized distributor for Master Fluid Solutions."],
  ["2017", "Added OSG cutting tools to the portfolio. Expanded reach across Chennai industrial belt."],
  ["2019", "Bilz Germany tool-holding systems added. Began application engineering support service."],
  ["2021", "Boehlerit Austria carbide inserts onboarded. Customer base crossed major TVS Group companies."],
  ["2023", "Hanboo Korea special tooling added — five global brand portfolio complete."],
  ["2024", "Reinforced ready-stock model. 11+ major clients with 21+ years of supply relationships."],
];

const values = [
  [ShieldCheck, "Genuineness", "Every product brand-direct. Zero counterfeits, full warranty."],
  [Award, "Expertise", "Trained application engineers. Speed, feed and grade selection guidance."],
  [Zap, "Speed", "Ready stock. Same-day or next-day dispatch across Tamil Nadu."],
  [Handshake, "Partnership", "21+ year customer relationships. We win when you win."],
];

function About() {
  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / About</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold max-w-3xl">Building Precision Manufacturing in Tamil Nadu Since 2015</h1>
          <p className="mt-5 max-w-2xl text-white/70">A decade of trusted distribution, two decades of customer relationships, and five of the world's most respected tooling brands.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid lg:grid-cols-2 gap-14">
          <Reveal>
            <div className="eyebrow text-brand">Our Story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">A journey of precision and partnerships</h2>
            <p className="mt-5 text-mute leading-relaxed">
              ASV Engineering Solutions began in 2015 with a simple mission — bring world-class precision tooling to Tamil Nadu's manufacturers with genuine product, expert support and reliable supply. A decade later, we are the authorized distributor for five global brands and the trusted partner of India's leading engineering companies.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-8" style={{ background: "var(--surface)" }}>
              <div className="eyebrow text-brand">Our Mission</div>
              <p className="mt-3 text-xl font-bold text-navy leading-snug">
                "To deliver precision tooling solutions that enhance productivity and reduce cost-per-part for Tamil Nadu's manufacturers."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand">Timeline</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">From founding to five-brand authorization</h2></Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <Stagger className="space-y-8" gap={0.12}>
              {timeline.map(([y, t], i) => (
                <Item key={y} variants={itemVariants} className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <div className="text-3xl font-extrabold text-brand">{y}</div>
                    <p className="mt-2 text-sm text-mute leading-relaxed max-w-md md:ml-auto">{t}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-brand ring-4 ring-white" />
                  <div />
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Our Values</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">What guides us every day</h2></Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(([Icon, t, d]) => (
              <Item key={t as string} variants={itemVariants} className="rounded-xl border border-border p-7 text-center hover:-translate-y-1 hover:shadow-xl transition">
                <span className="grid h-12 w-12 mx-auto place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink text-lg">{t as string}</h3>
                <p className="mt-2 text-sm text-mute">{d as string}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Our Team</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Led by experienced industry hands</h2></Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              ["Mr. A. Suresh", "Proprietor", "Over two decades of experience in precision tooling distribution and customer relationship building across Tamil Nadu's manufacturing community."],
              ["Nandhan D", "Sales & Application Manager", "Hands-on application engineering support — tool selection, parameter optimization and on-site troubleshooting for customers."],
            ].map(([n, r, b]) => (
              <Reveal key={n}>
                <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                  <div className="grid h-16 w-16 place-items-center rounded-full blue-grad text-white text-2xl font-extrabold">
                    {n.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="mt-5 font-bold text-ink text-lg">{n}</h3>
                  <div className="text-sm font-semibold text-brand">{r}</div>
                  <p className="mt-3 text-sm text-mute leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal><h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center">Find us in Tiruvallur</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-md">
              <iframe
                title="ASV Location"
                src="https://www.google.com/maps?q=Tiruvallur+Tamil+Nadu&output=embed"
                className="w-full h-[420px]" loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
