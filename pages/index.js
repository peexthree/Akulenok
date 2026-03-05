import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustBar from "../components/TrustBar";
import SectionTitle from "../components/sectionTitle";
import LazyLoad from "../components/lazy";
import WaveDivider from "../components/WaveDivider";

const About = dynamic(() => import("../components/about"));
const Safety = dynamic(() => import("../components/safety"));
const Services = dynamic(() => import("../components/services"));
const Benefits = dynamic(() => import("../components/benefits"));
const Methodology = dynamic(() => import("../components/methodology"));
const JourneyTimeline = dynamic(() => import("../components/JourneyTimeline"));
const Checklist = dynamic(() => import("../components/checklist"));
const Team = dynamic(() => import("../components/team"));
const Schedule = dynamic(() => import("../components/schedule"));
const Pricing = dynamic(() => import("../components/pricing"));
const Testimonials = dynamic(() => import("../components/testimonials"));
const Gallery = dynamic(() => import("../components/gallery"));
const Location = dynamic(() => import("../components/location"));
const Cta = dynamic(() => import("../components/cta"));
const Footer = dynamic(() => import("../components/footer"));
const Video = dynamic(() => import("../components/video"));
const Faq = dynamic(() => import("../components/faq"));
const LoyalClients = dynamic(() => import("../components/loyalClients"));

export default function Home() {
  return (
    // ГЛАВНЫЙ ФИКС: main контейнер с overflow-x-hidden блокирует горизонтальный скролл
    <main className="flex flex-col min-h-screen relative overflow-x-hidden bg-slate-50">
      <Head>
        <title>Акулёнок • Центр грудничкового плавания • Детский бассейн • ЛФК в Туймазах</title>
        <meta name="description" content="Детский бассейн «Акулёнок» в Туймазах: грудничковое плавание, ЛФК, гидрореабилитация. Занятия для детей от 3 месяцев." />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Акулёнок",
              "image": "https://akulenok.tmz/img/hero.png", // Если домен .tmz тестовый, не забудь сменить на проде
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
      <Hero />
      
      {/* Актуальный пропс для белой волны */}
      <WaveDivider waveColor="text-white" />
      <TrustBar />
      
      <LazyLoad>
        <About />
      </LazyLoad>

      {/* Голубая волна */}
      <WaveDivider waveColor="text-sky-50" />
      <LazyLoad>
        <Methodology />
      </LazyLoad>

      <LazyLoad>
        <JourneyTimeline />
      </LazyLoad>

      <WaveDivider waveColor="text-white" />
      <LazyLoad>
        <Video />
      </LazyLoad>

      <WaveDivider waveColor="text-sky-50" />
      <LazyLoad>
        <SectionTitle
          title="С нами удобно"
          className="text-white opacity-80"
        />
        <Benefits />
      </LazyLoad>

      <LazyLoad id="services" className="scroll-mt-32">
        <Services />
      </LazyLoad>

      <LazyLoad>
        <Checklist />
      </LazyLoad>

      <WaveDivider waveColor="text-white" />
      <LazyLoad>
        <Team />
      </LazyLoad>

      <LazyLoad>
        <Schedule />
      </LazyLoad>

      <LazyLoad id="pricing" className="scroll-mt-32">
        <Pricing />
      </LazyLoad>

      <WaveDivider waveColor="text-sky-50" />
      <LazyLoad>
        <Testimonials />
      </LazyLoad>

      <LazyLoad id="gallery" className="scroll-mt-32">
        <Gallery />
      </LazyLoad>

      <LazyLoad>
        <Safety />
      </LazyLoad>

      <LazyLoad id="faq" className="scroll-mt-32">
        <Faq />
      </LazyLoad>

      <LazyLoad id="loyal" className="scroll-mt-32">
        <LoyalClients />
      </LazyLoad>

      <LazyLoad id="contacts" className="scroll-mt-32">
        <Location />
      </LazyLoad>

      <WaveDivider waveColor="text-sky-400" />
      <LazyLoad>
        <Cta />
      </LazyLoad>

      <LazyLoad>
        <Footer />
      </LazyLoad>
    </main>
  );
}
