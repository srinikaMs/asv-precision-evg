import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Download, Phone, MessageCircle } from "lucide-react";
import { Reveal, Stagger, Item, itemVariants } from "../components/site/Reveal";
import { categories } from "./products";

function getProduct(slug: string) {
  for (const category of categories) {
    const product = category.products.find((item) => item.slug === slug);
    if (product) return { product, category };
  }
  return null;
}

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const result = getProduct(params.slug);
    if (!result) throw notFound();
    return result;
  },
  head: ({ params }) => {
    const result = getProduct(params.slug);
    if (!result) {
      return {
        meta: [
          { title: "Product Not Found | ASV Precision" },
          { property: "og:url", content: `https://asv-precision-evg.lovable.app/products/${params.slug}` },
        ],
        links: [{ rel: "canonical", href: `https://asv-precision-evg.lovable.app/products/${params.slug}` }],
      };
    }

    return {
      meta: [
        { title: `${result.product.name} | ${result.category.name} | ASV Precision` },
        { name: "description", content: result.product.description },
        { property: "og:title", content: `${result.product.name} | ASV Precision` },
        { property: "og:description", content: result.product.description },
        { property: "og:url", content: `https://asv-precision-evg.lovable.app/products/${params.slug}` },
        { property: "og:image", content: result.product.image },
        { name: "twitter:image", content: result.product.image },
      ],
      links: [{ rel: "canonical", href: `https://asv-precision-evg.lovable.app/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: result.product.name,
            description: result.product.description,
            image: [result.product.image],
            brand: result.product.brands.map((brand: string) => ({ "@type": "Brand", name: brand })),
            category: result.category.name,
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const data = Route.useLoaderData();
  const { product, category } = data;
  const gallery = [product.image, category.banner, product.image];
  const related = category.products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="hero-grad text-white py-24">
        <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="text-xs text-white/60">
              <Link to="/" className="hover:text-white">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/products" className="hover:text-white">
                Products
              </Link>{" "}
              / {product.name}
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">{product.name}</h1>
            <p className="mt-4 max-w-2xl text-white/75">{product.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.brands.map((brand: string) => (
                <span key={brand} className="glass rounded-full px-4 py-1.5 text-sm font-semibold text-white">
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 font-semibold text-navy hover:bg-blue-50 transition shadow-xl"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:sales.asvengg@gmail.com?subject=Catalogue%20Request%20-%20ASV%20Precision"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-7 py-3.5 font-semibold text-white hover:bg-white/15 transition"
              >
                Download Catalogue <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
          <img src={product.image} alt={product.name} className="rounded-2xl w-full h-[380px] object-cover shadow-2xl" width={1024} height={1024} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid lg:grid-cols-[1.15fr_0.85fr] gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold text-navy">Product Gallery</h2>
            </Reveal>
            <Stagger className="mt-8 grid md:grid-cols-3 gap-4">
              {gallery.map((image: string, index: number) => (
                <Item key={`${image}-${index}`} variants={itemVariants} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                  <img src={image} alt={`${product.name} gallery ${index + 1}`} className="h-56 w-full object-cover" loading="lazy" width={1024} height={1024} />
                </Item>
              ))}
            </Stagger>

            <Reveal delay={0.08}>
              <h2 className="mt-12 text-3xl font-extrabold text-navy">Applications</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-mute leading-relaxed">
                {product.name} is suited for demanding machining environments where stability, repeatability and productivity matter. ASV Precision supports application matching based on component material, machine capability and production goals.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <h2 className="mt-12 text-3xl font-extrabold text-navy">Technical Specifications</h2>
            </Reveal>
            <div className="mt-6 grid gap-3">
              {product.features.map((feature: string) => (
                <div key={feature} className="rounded-xl border border-border p-4 text-sm text-ink flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-navy">Industries Served</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.industries.map((industry: string) => (
                    <span key={industry} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                      {industry}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-sm text-mute">Category: {category.name}</div>
                <div className="mt-2 text-sm text-mute">Associated Brands: {product.brands.join(" · ")}</div>
                <div className="mt-6 grid gap-3">
                  <Link to="/contact" className="inline-flex items-center justify-between rounded-xl bg-brand p-4 font-semibold text-white hover:bg-navy transition">
                    Request Quote Form <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:sales.asvengg@gmail.com?subject=Catalogue%20Request%20-%20ASV%20Precision"
                    className="inline-flex items-center justify-between rounded-xl border border-border p-4 font-semibold text-ink hover:bg-brand-soft transition"
                  >
                    Download Catalogue <Download className="h-4 w-4 text-brand" />
                  </a>
                  <a
                    href="https://wa.me/917338936926?text=Hi%2C%20I%27m%20interested%20in%20the%20product%20from%20ASV%20Precision."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-xl border border-border p-4 font-semibold text-ink hover:bg-brand-soft transition"
                  >
                    WhatsApp Enquiry <MessageCircle className="h-4 w-4 text-brand" />
                  </a>
                  <a href="tel:+919787118179" className="inline-flex items-center justify-between rounded-xl border border-border p-4 font-semibold text-ink hover:bg-brand-soft transition">
                    Contact Sales <Phone className="h-4 w-4 text-brand" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-navy">Related Products</h2>
          </Reveal>
          <Stagger className="mt-8 grid md:grid-cols-3 gap-5">
            {related.map((item) => (
              <Item key={item.slug} variants={itemVariants} className="rounded-xl border border-border bg-white overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
                <img src={item.image} alt={item.name} className="h-48 w-full object-cover" loading="lazy" width={1024} height={1024} />
                <div className="p-5">
                  <h3 className="font-bold text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm text-mute leading-relaxed">{item.description}</p>
                  <Link to="/products/$slug" params={{ slug: item.slug }} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    View Product <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
