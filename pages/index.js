"use client";
import Head from "next/head";
import dynamic from "next/dynamic";

// 1. Статические импорты (LCP - первый экран должен быть мгновенным)
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import WaveDivider from "../components/WaveDivider";

// 2. Исправленные динамические импорты (явно берем .default)
const Methodology = dynamic(() => import("../components/Methodology").then(m => m.default));
const JourneyTimeline = dynamic(() => import("../components/JourneyTimeline").then(m => m.default));
const Video = dynamic(() => import("../components/Video").then(m => m.default));
const Benefits = dynamic(() => import("../components/Benefits").then(m => m.default));
const Services = dynamic(() => import("../components/Services").then(m => m.default));
const Checklist = dynamic(() => import("../components/Checklist").then(m => m.default));
const Team = dynamic(() => import("../components/Team").then(m => m.default));
const Schedule = dynamic(() => import("../components/Schedule").then(m => m.default));
const Pricing = dynamic(() => import("../components/Pricing").then(m => m.default));
const Testimonials = dynamic(() => import("../components/Testimonials").then(m => m.default));
const Gallery = dynamic(() => import("../components/Gallery").then(m => m.default));
const Safety = dynamic(() => import("../components/Safety").then(m => m.default));
const Faq = dynamic(() => import("../components/FAQ").then(m => m.default));
const LoyalClients = dynamic(() => import("../components/LoyalClients").then(m => m.default));
const Location = dynamic(() => import("../components/Location").then(m => m.default));
const Cta = dynamic(() => import("../components/CTA").then(m => m.default));
const Footer = dynamic(() => import("../components/Footer").then(m => m.default));

export default function Home() {
  return (
    <>
      <Head>
        <title>Акулёнок • Центр грудничкового плавания • Туймазы</title>
        <meta name="description" content="Детский бассейн Акулёнок: грудничковое, раннее и семейное плавание в Туймазах." />
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
