import Head from "next/head";
import dynamic from "next/dynamic";

import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import Services from "../components/services";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import FAQ from "../components/faq";
import Gallery from "../components/gallery";
import Location from "../components/location";
import Cta from "../components/cta";
import Footer from "../components/footer";
import ContactButtons from "../components/contactButtons";
import Video from "../components/video";
import About from "../components/about";

import { benefitOne, benefitTwo } from "../components/data";

const Navbar = dynamic(() => import("../components/navbar"), { ssr: false });
const PopupWidget = dynamic(() => import("../components/popupWidget"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Акулёнок • Детский бассейн и ЛФК в Туймазах</title>
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
      <div className="mt-8"><ContactButtons /></div>
      <Services />

      <SectionTitle
        pretitle="Почему мы"
        title="Почему родители выбирают «Акулёнок»"
      >
        Специализированный детский аквацентр: грудничковое плавание и лечебная физкультура в тёплой стерильной воде под присмотром опытных инструкторов.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Video />

      <SectionTitle pretitle="Расписание и цены" title="Цены и форматы" />
      <Pricing />

      <SectionTitle pretitle="Отзывы" title="Что говорят наши клиенты" />
      <Testimonials />

      <SectionTitle pretitle="Галерея" title="Фото из нашего бассейна" />
      <Gallery />

      <SectionTitle pretitle="FAQ" title="Часто задаваемые вопросы" />
      <FAQ />

      <Location />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}