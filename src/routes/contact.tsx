import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Download, Headphones } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ASV Precision | Industrial Tooling Supplier Tamil Nadu" },
      { name: "description", content: "Request a quote, callback, catalogue or technical support from ASV Precision in Tiruvallur, Tamil Nadu." },
      { property: "og:title", content: "Contact ASV Precision" },
      { property: "og:description", content: "Industrial tooling supplier, CNC tool distributor and engineering support partner in Tamil Nadu." },
      { property: "og:url", content: "https://asv-precision-evg.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://asv-precision-evg.lovable.app/contact" }],
  }),
  component: Contact,
});

const productGroups = [
  "Cutting Tools",
  "Drilling & Holemaking Solutions",
  "Tool Holding Systems",
  "Metalworking Fluids & Coolants",
  "Wear Protection & Carbide Components",
  "Need recommendation",
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / Contact</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold max-w-3xl">Request a Quote, Callback or Catalogue</h1>
          <p className="mt-5 max-w-2xl text-white/70">Tell us your application, material, machine and product need. Our team will respond with the right industrial tooling solution.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <Reveal>
            <div className="rounded-2xl border border-border p-8 bg-white shadow-sm">
              <h2 className="text-2xl font-bold text-navy">Send your enquiry</h2>
              {sent ? (
                <div className="mt-6 rounded-lg bg-success/10 text-success p-6 text-center">
                  Thanks — your enquiry has been received. Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    ["Name *", "name", "text", true],
                    ["Company *", "company", "text", true],
                    ["Phone *", "phone", "tel", true],
                    ["Email *", "email", "email", true],
                  ].map(([label, name, type, req]) => (
                    <label key={name as string} className="text-sm">
                      <span className="font-semibold text-ink">{label as string}</span>
                      <input required={req as boolean} type={type as string} name={name as string} className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                    </label>
                  ))}
                  <label className="text-sm">
                    <span className="font-semibold text-ink">Request Type</span>
                    <select className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none">
                      <option>Request Quote</option>
                      <option>Download Catalogue</option>
                      <option>Request Callback</option>
                      <option>Contact Sales</option>
                    </select>
                  </label>
                  <label className="text-sm">
                    <span className="font-semibold text-ink">Product Category</span>
                    <select className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none">
                      {productGroups.map((group) => <option key={group}>{group}</option>)}
                    </select>
                  </label>
                  <label className="text-sm sm:col-span-2">
                    <span className="font-semibold text-ink">Product / Requirement</span>
                    <input type="text" placeholder="e.g. Carbide inserts for stainless turning, BT40 tool holders, coolant solution" className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                  </label>
                  <label className="text-sm sm:col-span-2">
                    <span className="font-semibold text-ink">Message</span>
                    <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                  </label>
                  <button type="submit" className="sm:col-span-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white hover:bg-navy transition">
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                [MapPin, "Address", "No. 3, 60 Feet Road, V.M Nagar Extn, JJ Salai, Tiruvallur, TN 602001"],
                [Phone, "Phone", "+91 97871 18179"],
                [Mail, "Email", "sales.asvengg@gmail.com"],
              ].map(([Icon, t, d]) => (
                <div key={t as string} className="rounded-xl border border-border p-5 flex gap-4 items-start bg-white">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-bold text-ink">{t as string}</div>
                    <div className="mt-1 text-sm text-mute whitespace-pre-line">{d as string}</div>
                  </div>
                </div>
              ))}

              <a href="https://wa.me/917338936926?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20from%20ASV%20Precision."
                target="_blank" rel="noreferrer"
                className="rounded-xl p-5 flex items-center gap-3 text-white font-semibold shadow-lg hover:opacity-90 transition" style={{ background: "#25D366" }}>
                <MessageCircle className="h-5 w-5" /> WhatsApp CTA
              </a>
              <a href="mailto:sales.asvengg@gmail.com?subject=Catalogue%20Request%20-%20ASV%20Precision" className="rounded-xl border border-border p-5 flex items-center gap-3 font-semibold text-ink hover:bg-brand-soft transition">
                <Download className="h-5 w-5 text-brand" /> Email Enquiry / Download Catalogue
              </a>
              <a href="tel:+919787118179" className="rounded-xl border border-border p-5 flex items-center gap-3 font-semibold text-ink hover:bg-brand-soft transition">
                <Headphones className="h-5 w-5 text-brand" /> Request Callback / Contact Sales
              </a>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-12">
          <div className="rounded-2xl overflow-hidden border border-border shadow-md">
            <iframe title="ASV Precision Location" src="https://www.google.com/maps?q=No.3,+60+Feet+Road,+V.M+Nagar+Extn,+JJ+Salai,+Tiruvallur,+Tamil+Nadu+602001&output=embed" className="w-full h-[400px]" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
