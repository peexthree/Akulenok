import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

import Button from "./Button";
import Container from "./container";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      <Image
        src="/img/akulenok-mascot.png"
        alt="Детский бассейн Акулёнок"
        fill
        priority
        className="object-contain object-center md:object-right scale-90 animate-swim"
      />

      <Container className="relative z-10 flex flex-wrap pt-20">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-12 space-y-6">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-aqua-dark lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-aqua-background">
              Научим малыша любить воду с 3&nbsp;месяцев
            </h1>
            <p className="text-xl leading-relaxed text-aqua-dark/80 lg:text-xl dark:text-aqua-background/80">
              Мягкая адаптация, игра и результат, который видят родители. Свяжитесь с нами и мы расскажем, как сделать первое знакомство с водой безопасным и радостным.
            </p>
            <div className="w-full max-w-xl rounded-xl bg-white/80 p-6 shadow-xl backdrop-blur dark:bg-aqua-dark/80">
              <div className="flex flex-col gap-2">
                <span className="text-sm uppercase tracking-wide text-aqua-dark/70 dark:text-aqua-background/70">
                  Быстрая связь
                </span>
                <p className="text-2xl font-semibold text-aqua-dark dark:text-aqua-background">
                  Позвоните или напишите нам — мы онлайн.
                </p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Button
                  href="tel:+79273039977"
                  className="bg-orange-500 text-white shadow-lg shadow-orange-200 hover:bg-orange-600"
                >
                  <span className="flex items-center gap-2">
                    <FiPhoneCall className="text-xl" />
                    Позвонить
                  </span>
                </Button>
                <Button
                  href="https://t.me/+79273039977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-aqua-accent text-white shadow-lg shadow-aqua-accent/40 hover:bg-aqua-dark"
                >
                  <span className="flex items-center gap-2">
                    <FaTelegramPlane className="text-xl" />
                    Написать в Telegram
                  </span>
                </Button>
              </div>
              <p className="mt-4 text-sm text-aqua-dark/70 dark:text-aqua-background/70">
                Мы перезваниваем в течение 10 минут ежедневно с 9:00 до 21:00.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative z-10 pb-12">
        <div className="text-xl text-aqua-dark dark:text-aqua-background">
          Нам доверяют уже более <span className="text-orange-500">300</span> семей в Туймазах
        </div>
      </Container>
    </motion.section>
  );
}
