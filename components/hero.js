import { useState } from "react";
import Image from "next/image";
import ContactButtons from "./contactButtons";
import Container from "./container";
import heroImg from "../public/img/hero.png";

export default function Hero() {
  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
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
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Детский бассейн и ЛФК в Туймазах
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              От 3 месяцев. Тёплая стерильная вода, опытные тренеры, видеонаблюдение для родителей. Запишитесь на пробное занятие — заботимся о здоровье и развитии вашего малыша.
            </p>

            {/* ==== Форма записи ==== */}
            <form
              id="lead-form"
              className="mt-8 grid gap-3 max-w-md"
              onSubmit={handleSubmit}
            >
              <input name="parentName" required placeholder="Ваше имя" className="border p-3 rounded" disabled={status === 'loading'} />
              <input name="phone" required placeholder="Телефон" className="border p-3 rounded" disabled={status === 'loading'} />
              <input name="childAge" placeholder="Возраст ребёнка" className="border p-3 rounded" disabled={status === 'loading'} />
              <input name="timePref" placeholder="Удобное время" className="border p-3 rounded" disabled={status === 'loading'} />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded p-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Отправка..." : "Записаться на пробное занятие"}
              </button>
              {status === "success" && (
                <p className="text-green-600 mt-2">{message}</p>
              )}
              {status === "error" && (
                <p className="text-red-600 mt-2">{message}</p>
              )}
            </form>

            <div className="mt-5">
              <ContactButtons wide={true} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              src={heroImg}
               width={616}
              height={617}
              alt="Детский бассейн Акулёнок"
              loading="eager"
              priority
 className="w-full h-auto"
              sizes="(max-width:1024px) 100vw, 616px"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center text-center">
          <div className="text-xl text-gray-700 dark:text-white">
            Нам доверяют более <span className="text-indigo-600">200</span> семей в Туймазах
          </div>
        </div>
      </Container>
    </>
  );
}