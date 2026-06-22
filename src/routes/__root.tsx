import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";
import { PreHeader } from "../components/site/PreHeader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ASV Engineering Solutions | Industrial Tooling Supplier Tamil Nadu" },
      { name: "description", content: "ASV Engineering Solutions is a premium industrial tooling supplier for CNC cutting tools, tool holding systems, carbide inserts, metalworking fluids and precision engineering solutions in Tamil Nadu." },
      { name: "author", content: "ASV Engineering Solutions" },
      { property: "og:title", content: "ASV Engineering Solutions | Industrial Tooling Supplier Tamil Nadu" },
      { property: "og:description", content: "Premium B2B industrial website for CNC tooling, carbide inserts, tool holding systems, metalworking fluids and manufacturing solutions." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ASV Engineering Solutions" },
      { property: "og:url", content: "https://asv-precision-evg.lovable.app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ASV Engineering Solutions | Industrial Tooling Supplier Tamil Nadu" },
      { name: "twitter:description", content: "Industrial tooling supplier, CNC tool distributor and precision engineering solutions partner." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ASV Engineering Solutions",
        url: "https://asv-precision-evg.lovable.app",
        telephone: "+91 97871 18179",
        email: "sales.asvengg@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 3, 60 Feet Road, V.M Nagar Extn, JJ Salai",
          addressLocality: "Tiruvallur",
          addressRegion: "Tamil Nadu",
          postalCode: "602001",
          addressCountry: "IN"
        }
      })
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <PreHeader />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
