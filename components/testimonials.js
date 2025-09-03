import React from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/img/user1.jpg",
    quote: "Мой сын перестал бояться воды уже после первых занятий.",
  },
  {
    image: "/img/user2.jpg",
    quote: "Дочка с радостью бежит в бассейн каждую неделю.",
  },
  {
    image: "/img/user3.jpg",
    quote: "Инструкторы внимательные и добрые, нам очень нравится.",
  },
];


export default function Testimonials() {
  return (
   <Container>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={t.image}
              alt="Отзыв"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <p className="mt-4 text-sm text-gray-600 max-w-xs">"{t.quote}"</p>
          </motion.div>
        ))}
      </div>
     </Container>
  );
}
