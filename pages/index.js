import Head from "next/head";
import { COMPANY_DETAILS } from "../config/company";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import WaveDivider from "../components/WaveDivider";
import Methodology from "../components/Methodology";
import JourneyTimeline from "../components/JourneyTimeline";
import Video from "../components/Video";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Fitness from "../components/Fitness";
import Checklist from "../components/Checklist";
import Team from "../components/Team";
import Schedule from "../components/Schedule";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Safety from "../components/Safety";
import Faq from "../components/FAQ";
import LoyalClients from "../components/LoyalClients";
import Location from "../components/Location";
import Cta from "../components/CTA";
import Footer from "../components/Footer";

const pageTitle = "Акулёнок — детский бассейн, женский и детский фитнес в Туймазах";
const pageDescription =
  "Семейный аквацентр «Акулёнок» в г. Туймазы: грудничковое и раннее плавание от 3 месяцев, женский фитнес и стретчинг, детская группа 3–7 лет (ритмика, ОФП, гимнастика) параллельно в соседних залах. Запись: +7 (927) 303-99-77.";
const ogImage = `${COMPANY_DETAILS.siteUrl}/img/logo-akulenok-social.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: COMPANY_DETAILS.name,
  description: pageDescription,
  url: `${COMPANY_DETAILS.siteUrl}/`,
  image: ogImage,
  telephone: COMPANY_DETAILS.phone,
  priceRange: "800–27120 ₽",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Столярова, 1",
    addressLocality: "Туймазы",
    addressRegion: "Республика Башкортостан",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.600103,
    longitude: 53.72839,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [COMPANY_DETAILS.vk, COMPANY_DETAILS.telegram],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${COMPANY_DETAILS.siteUrl}/`} />
        <link rel="preload" as="image" href="/video/poster.jpg" fetchPriority="high" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Акулёнок" />
        <meta property="og:url" content={`${COMPANY_DETAILS.siteUrl}/`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-x-clip bg-[#F6FBFF]">
        <Navbar />

        <Hero />
        <WaveDivider waveColor="text-[#F6FBFF]" />
        <TrustBar />
        <About />

        <WaveDivider waveColor="text-[#ECF8FF]" />
        <Methodology />
        <JourneyTimeline />

        <WaveDivider waveColor="text-white" />
        <Video />
        <Benefits />

        <Services />

        <Fitness />

        <Checklist />

        <WaveDivider waveColor="text-[#ECF8FF]" />
        <Team />
        <Schedule />

        <Pricing />

        <WaveDivider waveColor="text-[#F6FBFF]" />
        <Testimonials />

        <Gallery />

        <Safety />
        <Faq />
        <LoyalClients />

        <Location />

        <Cta />
        <Footer />
      </div>
    </>
  );
}
