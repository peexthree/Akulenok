import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";

const MAX_ATTEMPTS_PER_DAY = 5;

export default function Hero() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [blocked, setBlocked] = useState(false);

  const getAttempts = () => {
    if (typeof window === "undefined") return { count: 0, date: "" };
    const saved = localStorage.getItem("leadAttempts");
    if (saved) return JSON.parse(saved);
    return { count: 0, date: "" };
  };

  const saveAttempts = (attempts) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("leadAttempts", JSON.stringify(attempts));
    }
  };

  const incrementAttempts = () => {
    const attempts = getAttempts();
    const today = new Date().toDateString();

    // Ensure counter resets if date changed since last fetch
    if (attempts.date !== today) {
      attempts.count = 1;
      attempts.date = today;
    } else {
      attempts.count += 1;
    }

    saveAttempts(attempts);
    if (attempts.count >= MAX_ATTEMPTS_PER_DAY) {
      setBlocked(true);
    }
  };

  useEffect(() => {
    const attempts = getAttempts();
    const today = new Date().toDateString();
    if (attempts.date !== today) {
      saveAttempts({ count: 0, date: today });
      return;
    }
    if (attempts.count >= MAX_ATTEMPTS_PER_DAY) {
      setBlocked(true);
    }
  }, []);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("7")) value = value.slice(1);
    value = value.substring(0, 10);
    let formatted = "+7";
    if (value.length > 0) formatted += " " + value.slice(0, 3);
    if (value.length >= 4) formatted += " " + value.slice(3, 6);
    if (value.length >= 7) formatted += " " + value.slice(6, 8);
    if (value.length >= 9) formatted += " " + value.slice(8, 10);
    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (blocked) return;
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const years = fd.get("childAgeYears");
    const months = fd.get("childAgeMonths");
    let childAge = "";
    if (years) childAge += `${years} г`;
    if (months) childAge += `${childAge ? " " : ""}${months} мес`;
    const payload = {
      parentName: fd.get("parentName"),
      phone: phone,
      childAge,
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
        setPhone("");
      } else {
        setStatus("error");
        setMessage("Не удалось отправить. Попробуйте ещё раз.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Ошибка сети. Попробуйте ещё раз.");
    } finally {
      incrementAttempts();
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
        src="/ocean-bg.webp"
        alt="Детский бассейн Акулёнок"
        fill
        priority
        className="object-cover object-center"
      />
     
      <Container className="relative z-10 flex flex-wrap lg:flex-nowrap pt-20 lg:pt-32 pb-20 items-center justify-between">
        <div className="flex items-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-aqua-dark lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Больше чем бассейн: здоровье для всей семьи
            </h1>
            <p className="py-5 text-xl leading-normal text-aqua-dark/80 lg:text-2xl xl:text-2xl ">
              Многопрофильный семейный центр, укрепим здоровье каждого члена семьи, потому что все услуги центра направлены на физическое и психическое состояние наших гостей. Решаем такие боли как: тонус, отставание в развитии, гиперактивность. Закажите обратный звонок:
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {blocked ? (
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl ">
              Попробуйте завтра — превышен лимит.
            </div>
          ) : (
            <motion.form
              id="lead-form"
              className="w-full max-w-md gap-4 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col "
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="parentName"
                  className="text-sm font-medium text-gray-700 "
                >
                  Ваше имя *
                </label>
                <motion.input
                  id="parentName"
                  name="parentName"
                  required
                  placeholder="Имя"
                  className="border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-aqua-accent  "
                  disabled={status === "loading"}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700 "
                >
                  Телефон *
                </label>
                <motion.input
                  id="phone"
                  name="phone"
                  required
                  placeholder="+7 000 000 00 00"
                  className="border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-aqua-accent  "
                  disabled={status === "loading"}
                  value={phone}
                  onChange={handlePhoneChange}
                  pattern="\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}"
                  inputMode="numeric"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="childAgeYears"
                  className="text-sm font-medium text-gray-700 "
                >
                  Возраст ребенка
                </label>
                <div className="flex gap-4">
                  <motion.input
                    id="childAgeYears"
                    name="childAgeYears"
                    type="number"
                    min="0"
                    max="17"
                    placeholder="Годы"
                    className="border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-aqua-accent   w-1/2"
                    disabled={status === "loading"}
                    whileFocus={{ scale: 1.01 }}
                  />
                  <motion.input
                    id="childAgeMonths"
                    name="childAgeMonths"
                    type="number"
                    min="0"
                    max="11"
                    placeholder="Месяцы"
                    className="border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-aqua-accent   w-1/2"
                    disabled={status === "loading"}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="timePref"
                  className="text-sm font-medium text-gray-700 "
                >
                  Желаемое время
                </label>
                <motion.input
                  id="timePref"
                  name="timePref"
                  type="time"
                  className="border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-aqua-accent  "
                  disabled={status === "loading"}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-lg font-bold bg-aqua-accent text-white transition-colors hover:bg-aqua-dark disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? "Отправка..." : "Отправить"}
              </motion.button>

              <div className="flex items-start gap-2 text-xs text-gray-500 mt-4">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  disabled={status === "loading"}
                  className="mt-0.5 accent-aqua-accent"
                />
                <label htmlFor="consent" className="leading-tight">
                  Нажимая кнопку «отправить» я соглашаюсь с {" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline text-aqua-accent">
                    политикой конфиденциальности и офертой
                  </a>
                </label>
              </div>

              {status === "success" && (
                <p className="text-green-600 text-center mt-2">{message}</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center mt-2">{message}</p>
              )}
            </motion.form>
          )}
        </div>
      </Container>

      <Container className="relative z-10">
        <div className="text-xl text-center lg:text-left text-aqua-dark  pb-10">
          Нам доверяют уже более <span className="text-aqua-accent font-bold">300</span> семей в Туймазах
        </div>
      </Container>
    </motion.section>
  );
}
