import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactButtons from "./contactButtons";
import Container from "./container";
import PrivacyPolicy from "./privacyPolicy";
export default function Hero() {
   const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
const [phone, setPhone] = useState("");

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
    setStatus("loading");
    setMessage("");

       // Сохраняем ссылку на форму, т.к. после await React очищает объект события
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
      className="object-contain object-center md:object-right scale-90"
      />
     
     <Container className="relative z-10 flex flex-wrap pt-20">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-aqua-dark lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-aqua-background">
              Научим малыша любить воду с 3&nbsp;месяцев            </h1>
                <p className="py-5 text-xl leading-normal text-aqua-dark/80 lg:text-xl xl:text-xl dark:text-aqua-background/80">
             Мягкая адаптация, игра и результат, который видят родители.
Закажите обратный звонок :
            </p>

               {/* ==== Форма записи ==== */}
              <motion.form
                id="lead-form"
                className="mt-8 grid w-full max-w-md gap-3 p-6 bg-white/70 dark:bg-aqua-dark/70 rounded-lg"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="parentName"
                    className="text-xs md:text-sm text-aqua-dark/80 dark:text-aqua-background/80"
                  >
                    Как к Вам обращаться?
                  </label>
                  <motion.input
                    id="parentName"
                    name="parentName"
                    required
                    placeholder="Ваше имя"
                    className="border p-3 rounded bg-white/70 dark:bg-aqua-dark/40 dark:text-aqua-background"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  />
</div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-xs md:text-sm text-aqua-dark/80 dark:text-aqua-background/80"
                  >
                    Введите номер телефона
                  </label>
                  <motion.input
                      id="phone"
                    name="phone"
                    required
                    placeholder="+7 000 000 00 00"
                    className="border p-3 rounded bg-white/70 dark:bg-aqua-dark/40 dark:text-aqua-background"
                    disabled={status === "loading"}
                    value={phone}
                    onChange={handlePhoneChange}
                    pattern="\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}"
                    inputMode="numeric"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="childAgeYears"
                    className="text-xs md:text-sm text-aqua-dark/80 dark:text-aqua-background/80"
                  >
                    Введите возраст ребенка год/месяц
                  </label>
                  <div className="flex gap-2">
                    <motion.input
                      id="childAgeYears"
                      name="childAgeYears"
                      type="number"
                      min="0"
                      max="17"
                      placeholder="Годы"
                      className="border p-3 rounded bg-white/70 dark:bg-aqua-dark/40 dark:text-aqua-background w-1/2"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    />
                    <motion.input
                      id="childAgeMonths"
                      name="childAgeMonths"
                      type="number"
                      min="0"
                      max="11"
                      placeholder="Месяцы"
                      className="border p-3 rounded bg-white/70 dark:bg-aqua-dark/40 dark:text-aqua-background w-1/2"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="timePref"
                    className="text-xs md:text-sm text-aqua-dark/80 dark:text-aqua-background/80"
                  >
                    Введите желаемое время для связи с Вами
                  </label>
                  <motion.input
                    id="timePref"
                    name="timePref"
                    type="time"
                    className="border p-3 rounded bg-white/70 dark:bg-aqua-dark/40 dark:text-aqua-background"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  />
                </div>
               

                <div className="flex items-center gap-2 text-xs md:text-sm text-aqua-dark/80 dark:text-aqua-background/80">
                  <motion.input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    disabled={status === "loading"}
                    className="accent-orange-500"
                    whileTap={{ scale: 0.9 }}
                  />
                  <label htmlFor="consent">
                    Я согласен с {" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Политикой конфиденциальности
                    </a>
                  </label>
                </div>


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
    Нам доверяют уже более <span className="text-orange-500">300</span> семей в Туймазах
  </div>
</Container>
     </motion.section>
  );
}
