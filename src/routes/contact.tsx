import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ASV Engineering Solutions — We Respond Within 2 Hours" },
      { name: "description", content: "Talk to our application expert. Tiruvallur, Tamil Nadu. +91 97871 18179 · sales.asvengg@gmail.com." },
    ],
  }),
  component: Contact,
});

const brands = ["OSG (Cutting Tools)", "Master Fluid (Coolants)", "Boehlerit (Carbide Inserts)", "KTA Spindle Tooling", "ANEC (Measurement)", "Wohlhaupter (Boring)", "Duracarb (Carbide)", "Not sure — recommend"];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x">
          <div className="text-xs text-white/60"><Link to="/" className="hover:text-white">Home</Link> / Contact</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold max-w-3xl">Get in Touch — We respond within 2 hours</h1>
          <p className="mt-5 max-w-xl text-white/70">Tell us about your requirement. Our application engineer will get back with the right tooling recommendation.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <Reveal>
            <div className="rounded-2xl border border-border p-8 bg-white shadow-sm">
              <h2 className="text-2xl font-bold text-navy">Send us your enquiry</h2>
              {sent ? (
                <div className="mt-6 rounded-lg bg-success/10 text-success p-6 text-center">
                  Thank you — we've received your enquiry and will get back within 2 hours.
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    ["Name *", "name", "text", true],
                    ["Company *", "company", "text", true],
                    ["Designation", "designation", "text", false],
                    ["Phone *", "phone", "tel", true],
                    ["Email *", "email", "email", true],
                  ].map(([label, name, type, req]) => (
                    <label key={name as string} className="text-sm">
                      <span className="font-semibold text-ink">{label as string}</span>
                      <input required={req as boolean} type={type as string} name={name as string}
                        className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                    </label>
                  ))}
                  <label className="text-sm">
                    <span className="font-semibold text-ink">Brand Interest</span>
                    <select className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none">
                      {brands.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </label>
                  <label className="text-sm sm:col-span-2">
                    <span className="font-semibold text-ink">Product Type / Requirement</span>
                    <input type="text" placeholder="e.g. M10 spiral flute tap, 1000 nos/month"
                      className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
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
                [MapPin, "Visit", "ASV Engineering Solutions\nNo. 3, 60 Feet Road, V.M Nagar Extn\nJJ Salai, Tiruvallur, TN 602001"],
                [Phone, "Call", "+91 97871 18179\n+91 73389 36926"],
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
              <a href="https://wa.me/917338936926?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
                target="_blank" rel="noreferrer"
                className="rounded-xl p-5 flex items-center gap-3 text-white font-semibold shadow-lg hover:opacity-90 transition" style={{ background: "#25D366" }}>
                <MessageCircle className="h-5 w-5" /> WhatsApp Us Directly
              </a>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-12">
          <div className="rounded-2xl overflow-hidden border border-border shadow-md">
            <iframe title="ASV Location"
              src="https://www.google.com/maps?q=No.3,+60+Feet+Road,+V.M+Nagar+Extn,+JJ+Salai,+Tiruvallur,+Tamil+Nadu+602001&output=embed"
              className="w-full h-[400px]" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
