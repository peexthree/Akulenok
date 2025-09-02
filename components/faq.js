"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import Container from "./container";

const faqs = [
  {
    question: "Как записаться?",
    answer: "Оставьте заявку через форму на сайте или напишите нам в WhatsApp.",
  },
  {
    question: "Где вы находитесь?",
    answer: "Мы работаем в Туймазах, ул. Октябрьская 18/2.",
  },
  {
    question: "Какие услуги предоставляете?",
    answer: "Грудничковое плавание с 3 месяцев и индивидуальные занятия ЛФК.",
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