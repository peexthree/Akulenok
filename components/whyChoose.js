import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const items = [
  { title: "Безопасность", icon: <ShieldCheckIcon /> },
  { title: "Опытные тренеры", icon: <UserGroupIcon /> },
  { title: "Результат за 2 месяца", icon: <ChartBarIcon /> },
  { title: "Весело детям", icon: <SparklesIcon /> },
];

export default function WhyChoose() {
  return (
    <Container>
      <div className="grid gap-8 py-8 md:grid-cols-4 sm:grid-cols-2">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
              {React.cloneElement(item.icon, { className: "w-8 h-8 text-blue-600" })}
            </div>
            <p className="mt-4 font-medium">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}