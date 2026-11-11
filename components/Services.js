import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { UserIcon, UserGroupIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const formats = [
  {
    title: "Индивидуально 1-на-1",
    desc: "Персональная программа под темп и задачи вашего ребёнка. Максимальное внимание тренера и бережная адаптация.",
    icon: UserIcon,
  },
  {
    title: "Мини-группы и семья",
    desc: "Общение со сверстниками или совместное плавание родителей с малышами в тёплой, поддерживающей атмосфере.",
    icon: UserGroupIcon,
  },
  {
    title: "Знакомство и диагностика",
    desc: "На первом занятии тренер оценивает навыки ребёнка в воде и подбирает оптимальный формат регулярных тренировок.",
    icon: SparklesIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <Container id="services" className="py-24 relative z-10 scroll-mt-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <SectionTitle
        pretitle="Форматы занятий"
        title="Подберём комфортный ритм для каждого малыша"
      >
        Вы можете выбрать персональные тренировки или занятия в небольшой группе с опытным инструктором.
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-3"
      >
        {formats.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="glass-card p-8 flex flex-col h-full justify-start transition-all duration-300 hover:shadow-xl group"
          >
            <div
              className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm ${
                idx === 2
                  ? "bg-rose-50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white"
                  : "bg-sky-100/80 text-sky-600 group-hover:bg-sky-500 group-hover:text-white"
              }`}
            >
              <item.icon className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl lg:text-2xl font-extrabold text-[#0C1A2E] mb-3 tracking-tight">
              {item.title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="mt-10 p-8 lg:p-10 bg-gradient-to-r from-[#ECF8FF]/90 via-white/90 to-rose-50/70 backdrop-blur-xl rounded-3xl border border-white/90 shadow-soft relative overflow-hidden"
      >
        <h4 className="text-xl font-extrabold text-[#0C1A2E] mb-6">Важно знать о занятиях:</h4>
        <ul className="text-slate-600 space-y-4 list-none text-lg font-medium relative z-10">
          {[
            "Форматы занятий: индивидуальные, в мини-группах, семейные.",
            "Длительность - от 30 минут (по показаниям индивидуально).",
            "Первая встреча - знакомство с тренером и подбор программы под ребёнка.",
          ].map((text, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircleIcon className="shrink-0 w-6 h-6 text-sky-500 mt-1" aria-hidden="true" />
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Container>
  );
}
