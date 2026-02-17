import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TorringtonPlumbingInfo from "@/components/landing/TorringtonPlumbingInfo";
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
        <title>plumbers torrington ct</title>
        <meta name="description" content="plumbers torrington ct - Professional residential and commercial plumbing services in Torrington, CT. Emergency repairs, water heaters, and pipe services. Call (877) 792-1410." />
        <meta name="keywords" content="plumbers torrington ct, Torrington plumbing, emergency plumber Torrington, water heater repair Torrington, drain cleaning Litchfield County" />
        <link rel="canonical" href="https://plumbers-torrington-ct.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Plumber Torrington CT Pros",
            "image": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Torrington",
              "addressRegion": "CT",
              "postalCode": "06790",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.8001",
              "longitude": "-73.1212"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Torrington, CT"
            },
            "priceRange": "$$",
            "description": "Professional plumbing services in Torrington, Connecticut. Specialized in leak detection, water heater repair, and emergency plumbing for residential and commercial properties."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Plumber Torrington CT Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Torrington, Connecticut"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Torrington Plumbing Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pipe Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumbers torrington ct - Plumber Torrington CT Pros" />
        <meta property="og:description" content="Expert plumbing services in Torrington, CT. Rapid response for emergencies, water heaters, and installations in Litchfield County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plumbers-torrington-ct.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumbers torrington ct
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Plumber Torrington CT Pros</span>
            </>
          }
          subtitle="Torrington's trusted plumbing authorities. Delivering top-rated residential and commercial plumbing solutions. Serving Litchfield County with pride."
          image="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80"
          badge="TORRINGTON LICENSED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <TorringtonPlumbingInfo />
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
