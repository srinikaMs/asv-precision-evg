import { Phone, Mail } from "lucide-react";

export function PreHeader() {
  const marquee = "Authorized Distributor: OSG Japan · Bilz Germany · Boehlerit Austria · Master Fluid USA · Hanboo Korea · Serving Tamil Nadu's precision manufacturing industry since 2015";
  return (
    <div className="bg-navy text-white/80 text-[11px]">
      <div className="container-x h-9 flex items-center justify-between gap-6 overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-left">
            <span className="px-8">{marquee}</span>
            <span className="px-8">{marquee}</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <a href="tel:+919787118179" className="inline-flex items-center gap-1.5 hover:text-white"><Phone className="h-3 w-3" /> +91 97871 18179</a>
          <a href="mailto:sales.asvengg@gmail.com" className="inline-flex items-center gap-1.5 hover:text-white"><Mail className="h-3 w-3" /> sales.asvengg@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
