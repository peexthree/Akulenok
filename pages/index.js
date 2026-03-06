"use client"; // Важно: раз используем motion и динамику
import Head from "next/head";
import dynamic from "next/dynamic";

// Обычный импорт для первого экрана (КРИТИЧНО для LCP и SEO)
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustBar from "../components/TrustBar";
import About from "../components/about";
import WaveDivider from "../components/WaveDivider";

// Ленивый импорт только для того, что не видно сразу
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
const Location = dynamic(() => import("../components/location")); // Тяжелая карта!
const Cta = dynamic(() => import("../components/cta"));
const Footer = dynamic(() => import("../components/footer"));

export default function Home() {
  return (
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
              "image": "https://akulenok.tmz/img/hero.png", // Не забудь поменять домен перед релизом!
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

      <Navbar />
      
      {/* ПЕРВЫЙ ЭКРАН (Грузится сразу) */}
      <Hero />
      
      {/* Переход от темного Hero к белому TrustBar */}
      <WaveDivider waveColor="text-white" />
      <TrustBar />
      
      {/* About обычно идет на белом или светло-сером фоне */}
      <About />

      {/* ОСТАЛЬНОЕ (Грузится лениво по мере скролла) */}
      <WaveDivider waveColor="text-sky-50" />
      <Methodology />
      <JourneyTimeline />

      <WaveDivider waveColor="text-white" />
      <Video />

      <Benefits />
      
      <div id="services" className="scroll-mt-24">
        <Services />
      </div>

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
  );
}
