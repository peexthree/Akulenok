import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactButtons from "./contactButtons";
import Container from "./container";
import PrivacyPolicy from "./privacyPolicy";
export default function Hero() {
   const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

       // Сохраняем ссылку на форму, т.к. после await React очищает объект события
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      parentName: fd.get("parentName"),
      phone: fd.get("phone"),
      childAge: fd.get("childAge"),
      timePref: fd.get("timePref"),
      utm: typeof window !== "undefined" ? window.location.search || "" : "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Заявка отправлена! Мы свяжемся с вами.");
       form.reset();
      } else {
        setStatus("error");
        setMessage("Не удалось отправить. Попробуйте ещё раз.");
      }
    } catch (err) {
console.error(err);
      setStatus("error");
      setMessage("Ошибка сети. Попробуйте ещё раз.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
       className="relative"
    >
      <Image
     src="/img/akulenok-mascot.png"
        alt="Детский бассейн Акулёнок"
        fill
        priority
    className="object-contain object-right scale-90"
      />
     
     <Container className="relative z-10 flex flex-wrap pt-20">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-aqua-dark lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-aqua-background">
              Старт для здоровья вашего малыша с 3&nbsp;месяцев            </h1>
                <p className="py-5 text-xl leading-normal text-aqua-dark/80 lg:text-xl xl:text-xl dark:text-aqua-background/80">
             Опытные тренеры и сертифицированное оборудование для детей с 3 месяцев.
Запишитесь на пробное занятие :
            </p>

               {/* ==== Форма записи ==== */}
              <motion.form
                id="lead-form"
                 className="mt-8 grid w-full max-w-md gap-3 p-6 bg-white/70 rounded-lg"
                onSubmit={handleSubmit}
              >
                <motion.input
                  name="parentName"
                  required
                  placeholder="Ваше имя"
                   className="border p-3 rounded bg-white/70"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.input
                  name="phone"
                  required
                  placeholder="Телефон"
                 className="border p-3 rounded bg-white/70"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.input
                  name="childAge"
                  placeholder="Возраст ребёнка"
                  className="border p-3 rounded bg-white/70"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.input
                  name="timePref"
                  placeholder="Удобное время для связи"
                  className="border p-3 rounded bg-white/70"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.button
                  type="submit"
                 className="bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {status === "loading" ? "Отправка..." : "Записаться на пробное занятие"}
                </motion.button>
                {status === "success" && (
                  <p className="text-green-600 mt-2">{message}</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-2">{message}</p>
                )}
               </motion.form>
  <PrivacyPolicy />
              <div className="mt-5">
                <ContactButtons wide={true} />
              </div>
          </div>
        </div>
      </Container>

     <Container className="relative z-10">
  <div className="text-xl text-aqua-dark dark:text-aqua-background">
    Нам доверяют уже более <span className="text-orange-500">200</span> семей в Туймазах
  </div>
</Container>
     </motion.section>
  );
}
