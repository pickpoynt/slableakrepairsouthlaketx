import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BarabooPlumbingInfo from "@/components/landing/BarabooPlumbingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>plumber baraboo wi Location</title>
        <meta name="description" content="plumber baraboo wi Location - Specialized plumbing solutions, leak detection & residential infrastructure services in Baraboo, WI. Call (877) 792-1410 for local experts." />
        <meta name="keywords" content="plumber baraboo wi, Baraboo plumber, plumbing repair Baraboo, emergency plumber Baraboo, Sauk County plumbing, Baraboo leak detection" />
        <link rel="canonical" href="https://baraboo-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Baraboo Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Baraboo",
              "addressRegion": "WI",
              "postalCode": "53913",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.4711",
              "longitude": "-89.7443"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Baraboo, WI"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in Baraboo, Wisconsin. Specialized in technical diagnostics, infrastructure restoration, and master-licensed care for Sauk County property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Residential Plumbing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baraboo Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Baraboo, Wisconsin"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Baraboo Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sauk County Leak Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Baraboo District Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Water Quality Optimization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber baraboo wi Location - Baraboo Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in Baraboo, Wisconsin. Technical restoration and infrastructure maintenance for Sauk County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baraboo-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber baraboo wi Location
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Baraboo Plumbing Pros</span>
            </>
          }
          subtitle="Baraboo's trusted authority for resilient home infrastructure. We provide precision diagnostics, technical restoration, and master-licensed support for Sauk County property owners near Devil's Lake and Circus World. Wisconsin Engineering Excellence."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?auto=format&fit=crop&q=80&w=2000"
          badge="BARABOO AUTHORIZED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <BarabooPlumbingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
