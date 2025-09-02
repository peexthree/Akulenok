"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import Container from "./container";

const faqs = [
  {
     question: "Не рано ли моему малышу начинать плавать?",
    answer:
      "Занятия подходят с 3 месяцев: мы учитываем особенности возраста и проводим тренировки в форме игры.",
  },
  {
     question: "Что делать, если ребёнок боится воды?",
    answer:
      "Инструкторы мягко помогают адаптироваться, постепенно знакомя малыша с водой и поддержкой родителя.",
  },
  {
    question: "Нужно ли присутствие родителей на занятии?",
    answer:
      "По желанию: можно заниматься вместе с мамой или оставлять малыша с тренером, наблюдая через видеонаблюдение.",
  },
];

function FAQ() {
  return (
    <Container className="p-8">
      <div className="w-full max-w-2xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="rounded-lg bg-gray-50 p-4 shadow dark:bg-trueGray-800">
                  <Disclosure.Button className="flex w-full justify-between items-center text-left text-gray-900 font-medium dark:text-gray-200">
                    {faq.question}
                    <ChevronUpIcon
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default React.memo(FAQ);