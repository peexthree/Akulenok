"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Cta() {
  const [showForm, setShowForm] = useState(false);
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;
    if (!parentName.trim() || !phone.trim()) {
      setErrorMsg("Пожалуйста, заполните имя и телефон");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: parentName.trim(),
          phone: phone.trim(),
          childAge: childAge.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Ошибка при отправке. Попробуйте еще раз.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Ошибка сети. Попробуйте позже.");
    }
  };

  return (
    <Container className="mb-24 relative overflow-visible">
      {/* Маскот-указатель */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -top-16 right-0 lg:right-12 z-20 hidden md:block"
      >
        <Image
          src="/img/look.png"
          alt="Указывающий акулёнок"
          width={220}
          height={220}
          className="drop-shadow-2xl rotate-[-10deg]"
        />
      </motion.div>

      <div
        className={clsx(
          "relative flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl gap-8 mx-auto text-white",
          "bg-gradient-to-r from-sky-500 to-aqua-dark p-8 lg:p-16 rounded-[3rem] shadow-2xl",
          "overflow-hidden border-4 border-white/20"
        )}
      >
        {/* Декоративные пузырьки на фоне */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-4 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-white rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 flex-grow text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black leading-tight tracking-tighter drop-shadow-md"
          >
            Готовы на <br /> пробное занятие?
          </motion.h2>
          <p className="mt-4 text-xl font-medium leading-relaxed tracking-wide text-sky-50 opacity-95">
            Оставьте заявку — подберём удобное время и формат для вашего малыша.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 w-full lg:w-auto flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-orange-500 text-white text-xl font-black tracking-wide leading-snug px-8 py-5 rounded-2xl shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.6)] hover:-translate-y-1 transition-all duration-300 border border-orange-300/50"
            >
              Записаться онлайн
            </button>
            <a
              href="tel:+79273039977"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md text-white text-xl font-black tracking-wide leading-snug px-8 py-5 rounded-2xl hover:bg-white/30 hover:-translate-y-1 transition-all duration-300 border border-white/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить
            </a>
          </div>
        </div>
      </div>

      {/* Модальное окно формы записи */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-slate-800 rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl border border-sky-100 relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 rounded-full"
              >
                ✕
              </button>

              <h3 className="text-2xl font-black mb-2 text-slate-900">Запись на занятие</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">Заполните форму, и мы перезвоним вам в течение 15 минут.</p>

              {status === "success" ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Заявка принята!</h4>
                  <p className="text-slate-600 text-sm">Мы свяжемся с вами в ближайшее время для подтверждения времени.</p>
                  <button
                    onClick={() => { setShowForm(false); setStatus("idle"); }}
                    className="mt-4 px-6 py-3 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600"
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Екатерина"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Возраст ребёнка
                    </label>
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder="6 месяцев"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                    />
                  </div>

                  {/* Обязательный чекбокс согласия */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs font-medium text-slate-600 leading-snug">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 text-sky-500 focus:ring-sky-500 w-4 h-4 shrink-0"
                      />
                      <span>
                        Соглашаюсь с{" "}
                        <Link href="/privacy" target="_blank" className="text-sky-500 underline hover:text-sky-600">
                          Политикой конфиденциальности
                        </Link>{" "}
                        и даю согласие на обработку персональных данных.
                      </span>
                    </label>
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-bold text-red-500">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={!agreed || status === "loading"}
                    className={clsx(
                      "w-full py-4 rounded-xl font-black text-white transition-all shadow-md mt-4",
                      agreed && status !== "loading"
                        ? "bg-orange-500 hover:bg-orange-600 cursor-pointer active:scale-95"
                        : "bg-slate-300 cursor-not-allowed opacity-70"
                    )}
                  >
                    {status === "loading" ? "Отправка..." : "Отправить заявку"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default React.memo(Cta);
