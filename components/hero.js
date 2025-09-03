import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactButtons from "./contactButtons";
import Container from "./container";

export default function Hero() {
   const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const fd = new FormData(e.currentTarget);
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
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setMessage("Не удалось отправить. Попробуйте ещё раз.");
      }
    } catch (err) {
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
               Здоровое и счастливое будущее вашего малыша начинается здесь
            </h1>
              <p className="py-5 text-xl leading-normal text-aqua-dark/80 lg:text-xl xl:text-xl dark:text-aqua-background/80">
              Безопасное плавание для малышей от 3&nbsp;месяцев с опытными инструкторами.
            </p>

               {/* ==== Форма записи ==== */}
              <motion.form
                id="lead-form"
                className="mt-8 grid w-full max-w-md gap-3"
                onSubmit={handleSubmit}
              >
                <motion.input
                  name="parentName"
                  required
                  placeholder="Ваше имя"
                  className="border p-3 rounded"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.input
                  name="phone"
                  required
                  placeholder="Телефон"
                  className="border p-3 rounded"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.input
                  name="childAge"
                  placeholder="Возраст ребёнка"
                  className="border p-3 rounded"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.input
                  name="timePref"
                  placeholder="Удобное время"
                  className="border p-3 rounded"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.button
                  type="submit"
                  className="bg-aqua-accent text-white hover:bg-aqua-dark disabled:bg-aqua-dark/50 disabled:cursor-not-allowed"
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
<div className="mt-5">
                <ContactButtons wide={true} />
              </div>
          </div>
        </div>
      </Container>

     <Container className="relative z-10">
  <div className="text-xl text-aqua-dark dark:text-aqua-background">
    Нам доверяют более <span className="text-orange-500">200</span> семей в Туймазах
  </div>
</Container>
     </motion.section>
  );
}
