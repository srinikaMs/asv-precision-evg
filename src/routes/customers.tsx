import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";
import { clients } from "@/data/clients";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Clients We Serve | ASV Engineering Solutions" },
      { name: "description", content: "Trusted industrial tooling supplier for Brakes India, Turbo Energy, ABI-Showatech, Wheels India, Sundram Fasteners, Hyundai WIA and other manufacturers." },
      { property: "og:title", content: "Clients We Serve | ASV Engineering Solutions" },
      { property: "og:description", content: "Premium industrial tooling support for leading manufacturers across Tamil Nadu." },
      { property: "og:url", content: "https://asv-precision-evg.lovable.app/customers" },
    ],
    links: [{ rel: "canonical", href: "https://asv-precision-evg.lovable.app/customers" }],
  }),
  component: Customers,
});

const groups = [

  ["Automotive", "Tooling support for brake systems, axles, transmission parts, engine components and high-volume CNC machining lines."],
  ["Heavy Engineering", "Precision inserts, drilling systems, carbide tooling and fluids for large engineered components and process equipment."],
  ["Precision Manufacturing", "Consistent tooling supply for close-tolerance parts, fixture components, special jobs and repeat production programs."],
];

function Customers() {
  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / Clients We Serve</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold max-w-3xl">Clients We Serve</h1>
          <p className="mt-5 max-w-2xl text-white/70">Trusted by leading manufacturers who need dependable industrial tooling, engineering support and genuine product supply.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal><div className="eyebrow text-brand">Trust & Credibility</div></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">A growing manufacturing network across Tamil Nadu</h2></Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {clients.map((c) => (
              <div key={c.name} className="group flex flex-col items-center justify-between rounded-xl border border-border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
                <div className="flex h-36 w-full items-center justify-center">
                  <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-32 max-w-full object-contain" />
                </div>
                <div className="mt-4 text-center text-sm font-bold text-ink">{c.name}</div>
              </div>
            ))}
          </div>


          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
            {groups.map(([title, desc]) => (
              <Item key={title} variants={itemVariants} className="rounded-xl border border-border p-7 bg-white shadow-sm">
                <h3 className="font-bold text-ink text-lg">{title}</h3>
                <p className="mt-3 text-sm text-mute leading-relaxed">{desc}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="blue-grad text-white">
        <div className="container-x py-20 text-center">
          <Reveal><h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto">Need tooling support for your production line?</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-white/80 max-w-xl mx-auto">Talk to ASV Engineering Solutions for cutting tools, tool holding, carbide inserts, coolants and application engineering support.</p></Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-navy hover:bg-blue-50 transition">
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
