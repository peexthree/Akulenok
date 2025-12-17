import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "./container";

const MAX_ATTEMPTS_PER_DAY = 4;
const STORAGE_KEY = "leadFormAttempts";

const steps = [
  {
    id: "contact",
    title: "Как с вами связаться?",
    description: "Оставьте имя и номер, чтобы мы быстро подтвердили время.",
  },
  {
    id: "age",
    title: "Возраст малыша",
    description: "Подбираем нагрузку под возраст и самочувствие.",
  },
  {
    id: "time",
    title: "Когда перезвонить?",
    description: "Укажем удобный интервал и зафиксируем слот.",
  },
];

export default function Hero() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [blocked, setBlocked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    parentName: "",
    childAgeYears: "",
    childAgeMonths: "",
    timePref: "",
    consent: false,
  });

  const getAttempts = () => {
    if (typeof window === "undefined") {
      return { count: 0, date: new Date().toDateString() };
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return { count: 0, date: new Date().toDateString() };
    return JSON.parse(stored);
  };

  useEffect(() => {
    const current = getAttempts();
    const today = new Date().toDateString();
    if (current.date !== today) {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count: 0, date: today }),
      );
      return;
    }
    if (current.count >= MAX_ATTEMPTS_PER_DAY) {
      setBlocked(true);
    }
  }, []);

  const incrementAttempts = () => {
    const current = getAttempts();
    const today = new Date().toDateString();
    const nextAttempts =
      current.date === today
        ? { ...current, count: current.count + 1 }
        : { count: 1, date: today };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAttempts));
    if (nextAttempts.count >= MAX_ATTEMPTS_PER_DAY) {
      setBlocked(true);
    }
  };

  const handlePhoneChange = (value) => {
    let cleaned = value.replace(/\D/g, "");
    if (cleaned.startsWith("7")) cleaned = cleaned.slice(1);
    cleaned = cleaned.substring(0, 10);
    let formatted = "+7";
    if (cleaned.length > 0) formatted += ` ${cleaned.slice(0, 3)}`;
    if (cleaned.length >= 4) formatted += ` ${cleaned.slice(3, 6)}`;
    if (cleaned.length >= 7) formatted += ` ${cleaned.slice(6, 8)}`;
    if (cleaned.length >= 9) formatted += ` ${cleaned.slice(8, 10)}`;
    setPhone(formatted);
  };

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const validateStep = () => {
    if (currentStep === 0) {
      return formData.parentName.trim().length > 1 && phone.match(/\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/);
    }
    if (currentStep === 1) {
      return (
        (formData.childAgeYears !== "" || formData.childAgeMonths !== "") &&
        Number(formData.childAgeYears || 0) >= 0 &&
        Number(formData.childAgeMonths || 0) >= 0
      );
    }
    if (currentStep === 2) {
      return Boolean(formData.timePref) && formData.consent;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (blocked || !validateStep()) return;

    setStatus("loading");
    setMessage("");

    const years = formData.childAgeYears;
    const months = formData.childAgeMonths;
    let childAge = "";
    if (years) childAge += `${years} г`;
    if (months) childAge += `${childAge ? " " : ""}${months} мес`;

    const payload = {
      parentName: formData.parentName,
      phone,
      childAge,
      timePref: formData.timePref,
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
        setCurrentStep(0);
        setFormData({
          parentName: "",
          childAgeYears: "",
          childAgeMonths: "",
          timePref: "",
          consent: false,
        });
        setPhone("");
      } else {
        setStatus("error");
        setMessage("Не удалось отправить. Попробуйте ещё раз.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Ошибка сети. Попробуйте ещё раз.");
    } finally {
      incrementAttempts();
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-neutral-900"
    >
      <div className="absolute inset-0">
        <Image
          src="/img/gallery/pool1.jpg"
          alt="Детский бассейн Акулёнок"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-neutral-900/30" />
      </div>

      <Container className="relative z-10 grid gap-10 pt-24 pb-16 lg:grid-cols-12 lg:items-center">
        <div className="space-y-6 text-white lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold shadow-soft ring-1 ring-white/20">
            Прогрев воды 32°C • ЛФК и гидрореабилитация • Сопровождение педиатра
          </p>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Научим малыша любить воду с 3 месяцев
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Мягкая адаптация, игра и результат, который видят родители. Реальный бассейн, сертифицированные тренеры и забота о безопасности.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              type="button"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-300"
            >
              Записаться на пробное занятие
            </motion.button>
            <div className="flex gap-3">
              <motion.a
                href="https://wa.me/79273039977"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white shadow-soft backdrop-blur transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-300"
              >
                Написать в WhatsApp
              </motion.a>
              <motion.a
                href="tel:+79273039977"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white shadow-soft backdrop-blur transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-300"
              >
                Позвонить
              </motion.a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">
              <span className="h-3 w-3 rounded-full bg-green-400" aria-hidden />
              Более 300 семей уже с нами
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">
              <span className="h-3 w-3 rounded-full bg-accent-400" aria-hidden />
              Сертификаты и методика ЛФК
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-white/95 p-6 shadow-soft backdrop-blur dark:bg-neutral-900/80">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-brand-700">Шаг {currentStep + 1} из {steps.length}</p>
                <p className="text-lg font-bold text-neutral-900 dark:text-white">{steps[currentStep].title}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{steps[currentStep].description}</p>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">2 минуты</span>
            </div>
            <div className="mb-4 h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div
                className="h-2 rounded-full bg-brand-500 transition-[width]"
                style={{ width: `${progress}%` }}
                aria-hidden
              />
            </div>

            {blocked ? (
              <div className="rounded-xl bg-neutral-100 p-4 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-50">
                Попробуйте завтра — превышен лимит заявок на сегодня.
              </div>
            ) : (
              <form id="lead-form" className="space-y-4" onSubmit={handleSubmit}>
                {currentStep === 0 && (
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-neutral-800 dark:text-neutral-100" htmlFor="parentName">
                      Представьтесь, пожалуйста
                    </label>
                    <input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleFieldChange("parentName", e.target.value)}
                      required
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm transition focus:border-brand-500 focus:ring-brand-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
                      placeholder="Ваше имя"
                      disabled={status === "loading"}
                    />
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-neutral-800 dark:text-neutral-100" htmlFor="phone">
                        Номер телефона
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        pattern="\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}"
                        inputMode="numeric"
                        placeholder="+7 000 000 00 00"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm transition focus:border-brand-500 focus:ring-brand-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
                        disabled={status === "loading"}
                        aria-describedby="phone-help"
                      />
                      <p id="phone-help" className="text-xs text-neutral-500">Используем только для связи по заявке</p>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-neutral-800 dark:text-neutral-100" htmlFor="childAgeYears">
                      Возраст малыша
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        id="childAgeYears"
                        name="childAgeYears"
                        type="number"
                        min="0"
                        max="17"
                        value={formData.childAgeYears}
                        onChange={(e) => handleFieldChange("childAgeYears", e.target.value)}
                        placeholder="Годы"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm transition focus:border-brand-500 focus:ring-brand-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
                        disabled={status === "loading"}
                      />
                      <input
                        id="childAgeMonths"
                        name="childAgeMonths"
                        type="number"
                        min="0"
                        max="11"
                        value={formData.childAgeMonths}
                        onChange={(e) => handleFieldChange("childAgeMonths", e.target.value)}
                        placeholder="Месяцы"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm transition focus:border-brand-500 focus:ring-brand-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
                        disabled={status === "loading"}
                      />
                    </div>
                    <p className="text-xs text-neutral-500">Нужна хотя бы одна цифра, чтобы подобрать программу</p>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-neutral-800 dark:text-neutral-100" htmlFor="timePref">
                      Удобное время для звонка
                    </label>
                    <input
                      id="timePref"
                      name="timePref"
                      type="time"
                      value={formData.timePref}
                      onChange={(e) => handleFieldChange("timePref", e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm transition focus:border-brand-500 focus:ring-brand-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
                      disabled={status === "loading"}
                      required
                    />
                    <label className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-200">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500 dark:border-neutral-600"
                        checked={formData.consent}
                        onChange={(e) => handleFieldChange("consent", e.target.checked)}
                        required
                        aria-label="Я согласен на обработку персональных данных"
                      />
                      <span>
                        Я согласен с {" "}
                        <a
                          href="/privacy"
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-brand-500 underline-offset-4"
                        >
                          Политикой конфиденциальности
                        </a>
                      </span>
                    </label>
                  </div>
                )}

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 0 || status === "loading"}
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-neutral-700 ring-1 ring-neutral-200 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-200 dark:ring-neutral-700 dark:hover:bg-neutral-800"
                  >
                    Назад
                  </button>
                  {currentStep < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={status === "loading" || !validateStep()}
                      className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-300"
                    >
                      Далее
                    </button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={status === "loading" || !validateStep()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-accent-200"
                    >
                      {status === "loading" ? "Отправка..." : "Отправить заявку"}
                    </motion.button>
                  )}
                </div>

                {status === "success" && (
                  <p className="text-sm text-green-600">{message}</p>
                )}
                {status === "error" && <p className="text-sm text-red-600">{message}</p>}
              </form>
            )}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
