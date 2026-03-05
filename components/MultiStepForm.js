import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MultiStepForm({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    goal: "",
    name: "",
    phone: "",
  });
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("7")) value = value.slice(1);
    value = value.substring(0, 10);
    let formatted = "+7";
    if (value.length > 0) formatted += " " + value.slice(0, 3);
    if (value.length >= 4) formatted += " " + value.slice(3, 6);
    if (value.length >= 7) formatted += " " + value.slice(6, 8);
    if (value.length >= 9) formatted += " " + value.slice(8, 10);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      parentName: formData.name,
      phone: formData.phone,
      childAge: formData.age,
      timePref: formData.goal,
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
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setStep(1);
          setFormData({ age: "", goal: "", name: "", phone: "" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: "100%", scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 25, stiffness: 200 } },
    exit: { opacity: 0, y: "100%", scale: 0.95, transition: { duration: 0.2 } },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 sm:p-0">
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-lg bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="w-16 h-16 bg-teal-100 text-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Отлично!</h3>
            <p className="text-slate-600">Мы получили вашу заявку и скоро свяжемся с вами.</p>
          </motion.div>
        ) : (
          <form onSubmit={step === 3 ? handleSubmit : handleNext} className="flex flex-col h-full min-h-[300px]">
            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="h-full bg-sky-400"
                initial={{ width: "33%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <div className="flex-grow relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="absolute inset-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-balance">Сколько месяцев или лет вашему малышу?</h3>
                    <div className="space-y-4">
                      {["0-3 месяца", "3-6 месяцев", "6-12 месяцев", "От 1 года до 3 лет", "Старше 3 лет"].map((option) => (
                        <label key={option} className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.age === option ? 'border-sky-400 bg-sky-50 text-sky-900' : 'border-slate-100 hover:border-sky-200'}`}>
                          <input type="radio" name="age" value={option} checked={formData.age === option} onChange={handleChange} className="sr-only" />
                          <span className="text-lg font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="absolute inset-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-balance">Какая главная цель занятий?</h3>
                    <div className="space-y-4">
                      {[
                        { title: "ЛФК и снятие тонуса", desc: "Мягкая гимнастика и гидрореабилитация" },
                        { title: "Укрепление иммунитета", desc: "Закаливание и здоровый сон" },
                        { title: "Научиться плавать", desc: "Раннее плавание и уверенность в воде" },
                        { title: "Просто попробовать", desc: "Хотим посмотреть, понравится ли" }
                      ].map((option) => (
                        <label key={option.title} className={`flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.goal === option.title ? 'border-sky-400 bg-sky-50 text-sky-900' : 'border-slate-100 hover:border-sky-200'}`}>
                          <input type="radio" name="goal" value={option.title} checked={formData.goal === option.title} onChange={handleChange} className="sr-only" />
                          <span className="text-lg font-bold">{option.title}</span>
                          <span className="text-sm text-slate-500 mt-1">{option.desc}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="absolute inset-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-balance">Оставьте контакты для связи</h3>
                    <p className="text-slate-500 mb-6">Наш педиатр перезвонит вам, чтобы обсудить детали и подобрать удобное время.</p>

                    <div className="space-y-5">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full border-b-2 border-slate-200 bg-transparent px-0 py-3 text-lg focus:outline-none focus:border-sky-400 transition-colors placeholder-transparent"
                        />
                        <label className="absolute left-0 top-3 text-lg text-slate-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-sky-400 peer-valid:-top-3.5 peer-valid:text-sm">
                          Как к вам обращаться?
                        </label>
                      </div>

                      <div className="relative mt-8">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder=" "
                          className="peer w-full border-b-2 border-slate-200 bg-transparent px-0 py-3 text-lg focus:outline-none focus:border-sky-400 transition-colors placeholder-transparent"
                        />
                        <label className="absolute left-0 top-3 text-lg text-slate-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-sky-400 peer-valid:-top-3.5 peer-valid:text-sm">
                          Номер телефона
                        </label>
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 mt-4 text-sm">Произошла ошибка при отправке. Попробуйте еще раз.</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 flex gap-4 pt-4 border-t border-slate-100">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-4 rounded-full font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Назад
                </button>
              )}

              <button
                type="submit"
                disabled={step === 1 ? !formData.age : step === 2 ? !formData.goal : status === "loading"}
                className="flex-1 py-4 rounded-full font-bold text-white bg-sky-400 hover:bg-sky-500 transition-all disabled:opacity-50 shadow-soft disabled:shadow-none"
              >
                {step === 3 ? (status === "loading" ? "Отправка..." : "Отправить") : "Далее"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
