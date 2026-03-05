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
        incrementAttempts();
      } else {
        setStatus("error");
        setMessage("Ошибка при отправке. Пожалуйста, попробуйте позже.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Ошибка при отправке. Проверьте подключение к интернету.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-12 pb-20 lg:pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-teal-50/50 to-sky-100/30"></div>

      <Container className="relative z-10 flex flex-col items-center justify-between lg:flex-row gap-12 lg:gap-8 mb-16">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-slate-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight"
          >
            Бережное плавание для гармоничного развития вашего малыша
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg leading-relaxed text-slate-600 xl:text-xl"
          >
            Многопрофильный семейный центр. Снимаем гипертонус, укрепляем иммунитет и нервную систему через игру и мягкую адаптацию к воде. Без слез и стресса.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          {blocked ? (
            <div className="w-full max-w-md p-8 glass-card">
              Попробуйте завтра — превышен лимит.
            </div>
          ) : (
            <form
              id="lead-form"
              className="w-full max-w-md gap-5 p-8 glass-card flex flex-col"
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">Запишитесь на бережную экскурсию</h3>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="parentName"
                  className="text-sm font-medium text-slate-600"
                >
                  Ваше имя *
                </label>
                <input
                  id="parentName"
                  name="parentName"
                  required
                  placeholder="Имя"
                  className="w-full border border-slate-200 bg-white/50 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                  disabled={status === "loading"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-600"
                >
                  Телефон *
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  placeholder="+7 000 000 00 00"
                  className="w-full border border-slate-200 bg-white/50 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                  disabled={status === "loading"}
                  value={phone}
                  onChange={handlePhoneChange}
                  pattern="\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}"
                  inputMode="numeric"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="childAgeYears"
                  className="text-sm font-medium text-slate-600"
                >
                  Возраст ребенка
                </label>
                <div className="flex gap-4">
                  <input
                    id="childAgeYears"
                    name="childAgeYears"
                    type="number"
                    min="0"
                    max="17"
                    placeholder="Годы"
                    className="w-1/2 border border-slate-200 bg-white/50 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                    disabled={status === "loading"}
                  />
                  <input
                    id="childAgeMonths"
                    name="childAgeMonths"
                    type="number"
                    min="0"
                    max="11"
                    placeholder="Месяцы"
                    className="w-1/2 border border-slate-200 bg-white/50 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-3xl px-6 py-4 text-lg font-bold bg-sky-400 text-white shadow-soft transition-all hover:bg-sky-500 hover:shadow-lg disabled:bg-slate-300 disabled:cursor-not-allowed"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? "Отправка..." : "Записаться на экскурсию"}
              </motion.button>

              <div className="flex items-start gap-2 text-xs text-slate-500 mt-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  disabled={status === "loading"}
                  className="mt-0.5 rounded text-sky-400 focus:ring-sky-400"
                />
                <label htmlFor="consent" className="leading-tight">
                  Нажимая кнопку, я соглашаюсь с {" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline text-sky-500">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              {status === "success" && (
                <p className="text-teal-600 text-center mt-2 font-medium">{message}</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-2 font-medium">{message}</p>
              )}
            </form>
          )}
        </motion.div>
      </Container>
    </motion.section>
  );
}
