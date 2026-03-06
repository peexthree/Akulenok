"use client";
import Head from "next/head";
import dynamic from "next/dynamic";

// 1. Обязательные импорты для первого экрана и пасхалок
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustBar from "../components/TrustBar";
import About from "../components/about";
import WaveDivider from "../components/WaveDivider";
import { SharkProvider } from "../components/SharkProvider"; // Наш центр пасхалок

// Ленивый импорт тяжелых блоков
const Methodology = dynamic(() => import("../components/methodology"));
const JourneyTimeline = dynamic(() => import("../components/JourneyTimeline"));
const Video = dynamic(() => import("../components/video"));
const Benefits = dynamic(() => import("../components/benefits"));
const Services = dynamic(() => import("../components/services"));
const Checklist = dynamic(() => import("../components/checklist"));
const Team = dynamic(() => import("../components/team"));
const Schedule = dynamic(() => import("../components/schedule"));
const Pricing = dynamic(() => import("../components/pricing"));
const Testimonials = dynamic(() => import("../components/testimonials"));
const Gallery = dynamic(() => import("../components/gallery"));
const Safety = dynamic(() => import("../components/safety"));
const Faq = dynamic(() => import("../components/faq"));
const LoyalClients = dynamic(() => import("../components/loyalClients"));
const Location = dynamic(() => import("../components/location"));
const Cta = dynamic(() => import("../components/cta"));
const Footer = dynamic(() => import("../components/footer"));

export default function Home() {
  return (
    <SharkProvider>
      <main className="flex flex-col min-h-screen relative overflow-x-hidden bg-slate-50">
        <Head>
          <title>Акулёнок • Центр грудничкового плавания • ЛФК в Туймазах</title>
          <meta name="description" content="Детский бассейн «Акулёнок» в Туймазах: грудничковое плавание, ЛФК, гидрореабилитация. Занятия для детей от 1 месяца." />
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Акулёнок",
                "image": "https://akulenok.tmz/img/hero.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "ул. Столярова, 1",
                  "addressLocality": "Туймазы",
                  "addressCountry": "RU"
                },
                "telephone": "+7 927 303-99-77",
                "priceRange": "₽₽",
                "openingHours": "Mo-Su 10:00-21:00",
                "url": "https://akulenok.tmz"
              })
            }}
          />
        </Head>

        {/* Навигация с 5-кликовой пасхалкой (если добавил туда handleLogoClick) */}
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
        
        <div id="services" className="scroll-mt-24">
          <Services />
        </div>

        {/* Чек-лист с пасхалкой сонара (если добавил туда startPress) */}
        <Checklist />

        <WaveDivider waveColor="text-sky-50" />
        <Team />

        <Schedule />

        <div id="pricing" className="scroll-mt-24">
          <Pricing />
        </div>

        <WaveDivider waveColor="text-white" />
        <Testimonials />

        <div id="gallery" className="scroll-mt-24">
          <Gallery />
        </div>

        <Safety />

        <div id="faq" className="scroll-mt-24">
          <Faq />
        </div>

        <div id="loyal" className="scroll-mt-24">
          <LoyalClients />
        </div>

        <div id="contacts" className="scroll-mt-24">
          <Location />
        </div>

        <Cta />
        <Footer />
      </main>
    </SharkProvider>
  );
}
