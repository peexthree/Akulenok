import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import LazyLoad from "../components/lazy";

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
    <>
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

      <Navbar />

      <Hero />
    
      <LazyLoad>
        <About />
      </LazyLoad>

      <LazyLoad>
        <Methodology />
      </LazyLoad>

      <LazyLoad>
        <JourneyTimeline />
      </LazyLoad>

      <LazyLoad>
        <Video />
      </LazyLoad>

      <LazyLoad>
        <SectionTitle
          title="С нами удобно"
          className="text-white opacity-80"
        />
        <Benefits />
      </LazyLoad>

      <LazyLoad>
        <Services />
      </LazyLoad>

      <LazyLoad>
        <Checklist />
      </LazyLoad>

      <LazyLoad>
        <Team />
      </LazyLoad>

      <LazyLoad>
        <Schedule />
      </LazyLoad>

      <LazyLoad>
        <Pricing />
      </LazyLoad>

      <LazyLoad>
        <Testimonials />
      </LazyLoad>

      <LazyLoad>
        <Gallery />
      </LazyLoad>

      <LazyLoad>
        <Safety />
      </LazyLoad>

      <LazyLoad>
        <Faq />
      </LazyLoad>

      <LazyLoad>
        <LoyalClients />
      </LazyLoad>

      <LazyLoad>
        <Location />
      </LazyLoad>

      <LazyLoad>
        <Cta />
      </LazyLoad>

      <LazyLoad>
        <Footer />
      </LazyLoad>
    </>
  );
}
