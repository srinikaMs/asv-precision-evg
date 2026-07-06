import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Award, Handshake, Wrench, Cog } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ASV Engineering Solutions | Precision Engineering Solutions Tamil Nadu" },
      { name: "description", content: "Learn about ASV Engineering Solutions, a premium industrial tooling supplier focused on engineering excellence, manufacturing support and technical assistance." },
      { property: "og:title", content: "About ASV Engineering Solutions" },
      { property: "og:description", content: "Industrial expertise, manufacturing support solutions and technical assistance for modern manufacturers." },
      { property: "og:url", content: "https://asv-precision-evg.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://asv-precision-evg.lovable.app/about" }],
  }),
  component: About,
});

const values = [
  [ShieldCheck, "Authorized Distributor Network", "Official supply network for global industrial tooling and engineering brands."],
  [Award, "Engineering Excellence", "Application-led product recommendations for production, quality and tool life improvements."],
  [Zap, "Fast Delivery", "Ready stock and responsive commercial support for urgent machining requirements."],
  [Handshake, "Reliable Service", "Long-term support built around performance, credibility and repeat manufacturing supply."],
];

const strengths = [
  [Cog, "Industrial Expertise", "Solutions aligned to CNC machining, holemaking, tool holding, carbide applications and process improvement."],
  [Wrench, "Manufacturing Support Solutions", "From product selection to process support, ASV Engineering Solutions helps reduce downtime and improve output."],
  [ShieldCheck, "Technical Assistance", "Support for cutting parameters, coolant choices, toolholding and machining performance optimization."],
];

function About() {
  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / About</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold max-w-3xl">About ASV Engineering Solutions</h1>
          <p className="mt-5 max-w-2xl text-white/70">A premium B2B industrial company built around genuine supply, manufacturing support solutions, engineering excellence and technical assistance.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div>
              <div className="eyebrow text-brand">Company Overview</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Built to support modern manufacturing</h2>
              <p className="mt-5 text-mute leading-relaxed">
                ASV Engineering Solutions serves manufacturers with a focused portfolio of industrial tooling, metalworking support products and application-driven engineering service. The business is built around performance, responsiveness and premium industrial standards.
              </p>
              <p className="mt-4 text-mute leading-relaxed">
                From CNC cutting tools and tool holding systems to carbide components and fluids, ASV Engineering Solutions supports production teams that need reliable recommendations, genuine products and strong commercial follow-through.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-8 border border-border" style={{ background: "var(--surface)" }}>
              <div className="eyebrow text-brand">Engineering Focus</div>
              <p className="mt-3 text-xl font-bold text-navy leading-snug">
                "Deliver premium precision engineering solutions that improve machining performance, productivity and trust across every enquiry."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">What We Bring</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Industrial capability beyond product supply</h2></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
            {strengths.map(([Icon, title, desc]) => (
              <Item key={title as string} variants={itemVariants} className="rounded-xl border border-border p-7 bg-white shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink text-lg">{title as string}</h3>
                <p className="mt-3 text-sm text-mute leading-relaxed">{desc as string}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand text-center">Why Choose ASV Engineering Solutions</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">Reliable industrial support at every stage</h2></Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(([Icon, t, d]) => (
              <Item key={t as string} variants={itemVariants} className="rounded-xl border border-border p-7 text-center hover:-translate-y-1 hover:shadow-xl transition bg-white">
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
          <Reveal delay={0.05}><h2 className="mt-3 text-center text-3xl md:text-4xl font-extrabold text-navy">The People Behind ASV</h2></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                initials: "AS",
                name: "Mr. A. Suresh",
                role: "Proprietor",
                bio: "Founder of ASV Engineering Solutions with deep roots in Tamil Nadu's manufacturing community.",
              },
              {
                initials: "ND",
                name: "Nandhan D",
                role: "Sales & Application Manager",
                bio: "Hands-on application engineer providing tool selection, parameter optimization and on-floor troubleshooting.",
              },
            ].map((person) => (
              <Item key={person.name} variants={itemVariants} className="rounded-2xl border border-border bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                <div className="flex items-center gap-5">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-navy text-white text-2xl font-extrabold shadow-md">
                    {person.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold text-navy">{person.name}</h3>
                    <div className="mt-1 text-sm font-semibold text-brand">{person.role}</div>
                  </div>
                </div>
                <p className="mt-5 text-sm text-mute leading-relaxed">{person.bio}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20">

        <div className="container-x">
          <Reveal><h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center">Find us in Tiruvallur</h2></Reveal>
          <Reveal delay={0.05}><p className="mt-3 text-center text-mute">No. 3, 60 Feet Road, V.M Nagar Extn, JJ Salai, Tiruvallur, TN 602001</p></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-md">
              <iframe title="ASV Engineering Solutions Location" src="https://www.google.com/maps?q=No.3,+60+Feet+Road,+V.M+Nagar+Extn,+JJ+Salai,+Tiruvallur,+Tamil+Nadu+602001&output=embed" className="w-full h-[420px]" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
