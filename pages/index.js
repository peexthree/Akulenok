import Head from "next/head";
import dynamic from "next/dynamic";

// ✅ Компоненты, которые должны быть отрендерены только на клиенте
const Navbar = dynamic(() => import("../components/navbar"), { ssr: false });
const Faq = dynamic(() => import("../components/faq"), { ssr: false });
const PopupWidget = dynamic(() => import("../components/popupWidget"), { ssr: false });

// Остальные компоненты, которые не вызывают ошибок
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import About from "../components/about";
import Services from "../components/services";
import Schedule from "../components/schedule";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery";
import Location from "../components/location";
import Cta from "../components/cta";
import Footer from "../components/footer";
import ContactButtons from "../components/contactButtons";
import Video from "../components/video";

import { benefitOne, benefitTwo } from "../components/data";

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
      <div className="mt-8"><ContactButtons /></div>
      <About />
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
      <Schedule />
      <Pricing />

      <SectionTitle pretitle="Отзывы" title="Что говорят наши клиенты" />
      <Testimonials />

      <SectionTitle pretitle="Галерея" title="Фотогалерея" />
      <Gallery />
      
      <SectionTitle pretitle="Вопросы" title="Часто задаваемые вопросы" />
      <Faq />
      
      <SectionTitle pretitle="Контакты" title="Наш адрес и контакты" />
      <Location />
      
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}