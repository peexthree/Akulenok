"use client";
import Head from "next/head";
import dynamic from "next/dynamic";

// 1. Статические импорты (LCP - первый экран должен быть мгновенным)
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustBar from "../components/TrustBar";
import About from "../components/about";
import WaveDivider from "../components/WaveDivider";

// 2. Исправленные динамические импорты (явно берем .default)
const Methodology = dynamic(() => import("../components/methodology").then(m => m.default));
const JourneyTimeline = dynamic(() => import("../components/JourneyTimeline").then(m => m.default));
const Video = dynamic(() => import("../components/video").then(m => m.default));
const Benefits = dynamic(() => import("../components/benefits").then(m => m.default));
const Services = dynamic(() => import("../components/services").then(m => m.default));
const Checklist = dynamic(() => import("../components/checklist").then(m => m.default));
const Team = dynamic(() => import("../components/team").then(m => m.default));
const Schedule = dynamic(() => import("../components/schedule").then(m => m.default));
const Pricing = dynamic(() => import("../components/pricing").then(m => m.default));
const Testimonials = dynamic(() => import("../components/testimonials").then(m => m.default));
const Gallery = dynamic(() => import("../components/gallery").then(m => m.default));
const Safety = dynamic(() => import("../components/safety").then(m => m.default));
const Faq = dynamic(() => import("../components/faq").then(m => m.default));
const LoyalClients = dynamic(() => import("../components/loyalClients").then(m => m.default));
const Location = dynamic(() => import("../components/location").then(m => m.default));
const Cta = dynamic(() => import("../components/cta").then(m => m.default));
const Footer = dynamic(() => import("../components/footer").then(m => m.default));

export default function Home() {
  return (
    <>
      <Head>
        <title>Акулёнок • Центр грудничкового плавания • Туймазы</title>
        <meta name="description" content="Детский бассейн Акулёнок: грудничковое плавание, ЛФК, гидрореабилитация в Туймазах." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Акулёнок",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Столярова, 1",
                "addressLocality": "Туймазы",
                "addressCountry": "RU"
              },
              "telephone": "+7 927 303-99-77",
              "url": "https://akulenok.vercel.app"
            })
          }}
        />
      </Head>

      <main className="flex flex-col min-h-screen relative overflow-x-hidden bg-slate-50">
        <Navbar />
        
        <Hero />
        <WaveDivider waveColor="text-white" />
        <TrustBar />
        <About />

        <WaveDivider waveColor="text-sky-50" />
        <Methodology />
        <JourneyTimeline />

        <WaveDivider waveColor="text-white" />
        <Video />
        <Benefits />
        
        <Services />

        <Checklist />

        <WaveDivider waveColor="text-sky-50" />
        <Team />
        <Schedule />

        <Pricing />

        <WaveDivider waveColor="text-white" />
        <Testimonials />

        <Gallery />

        <Safety />
        <Faq />
        <LoyalClients />

        <Location />

        <Cta />
        <Footer />
      </main>
    </>
  );
}
