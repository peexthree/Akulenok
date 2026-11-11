import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { UserIcon, UserGroupIcon, SparklesIcon } from "@heroicons/react/24/outline";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-tr from-sky-100/40 to-blue-50/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

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
        {formats.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-soft flex flex-col h-full justify-start transition-all duration-300 hover:shadow-xl group"
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <item.icon className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
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
        className="mt-10 p-8 lg:p-10 bg-gradient-to-r from-sky-50 to-white rounded-[2.5rem] border border-sky-100 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <h4 className="text-xl font-bold text-slate-900 mb-6">Важно знать о занятиях:</h4>
        <ul className="text-slate-600 space-y-4 list-none text-lg font-medium relative z-10">
          {[
            "Форматы занятий: индивидуальный, мини-группы, семейное.",
            "Длительность — от 30 минут (по показаниям индивидуально).",
            "Первая встреча — знакомство с тренером и подбор программы под ребёнка.",
          ].map((text, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="shrink-0 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mt-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Container>
  );
}
