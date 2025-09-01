import Head from "next/head";
import dynamic from "next/dynamic";

import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Location from "../components/location";
import ContactButtons from "../components/contactButtons";
import Pricing from "../components/pricing";
import Gallery from "../components/gallery";
import Services from "../components/services";
import About from "../components/about";
import Schedule from "../components/schedule";

// ✅ Исправлено: dynamic import для PopupWidget
const PopupWidget = dynamic(() => import("../components/popupWidget"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Акулёнок • Детский бассейн и ЛФК в Туймазах</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
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
                "addressCountry": "RU",
              },
              "telephone": "+7 927 303-99-77",
              "priceRange": "₽₽",
              "openingHours": "Mo-Su 10:00-21:00",
              "url": "https://akulenok.tmz",
            }),
          }}
        />
      </Head>

      <Navbar />
      <Hero />
      <div className="mt-8">
        <ContactButtons />
      </div>
      <Services />

      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <div id="benefits"></div>
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle pretitle="Watch a video" title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />

      <SectionTitle pretitle="Testimonials" title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <SectionTitle pretitle="Тарифы" title="Расписание и цены"></SectionTitle>
      <Pricing />

      <div id="testimonials"></div>
      <Testimonials />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Gallery />
      <div id="faq"></div>
      <Faq />
      <Cta />
      <Schedule />
      <Location />
      <Footer />

      {/* ✅ PopupWidget теперь только на клиенте */}
      <PopupWidget />
    </>
  );
}
