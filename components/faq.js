"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import Container from "./container";

const faqs = [
  {
      question: "Насколько безопасно?",
    answer: "Вода соответствует санитарным нормам (нет озонирования), а тренер рядом на каждом шаге делают занятия безопасными.",
  },
  {
     question: "Что делать, если ребёнок боится воды?",
    answer:
      "Инструкторы мягко помогают адаптироваться, постепенно знакомя малыша с водой. Для тех, кто боится воды — всегда можно прийти на экскурсию и познакомиться лично со структурой центра изнутри.",
  },
  {
    question: "Что нужно взять с собой?",
    answer: "Памперс для плавания (можно приобрести у нас), полотенце, любимую игрушку, сланцы/сменную обувь, мочалку и средство для купания (шампунь, мыло).",
  },
  {
    question: "Форматы занятий",
    answer: "Пробное (850 руб) - Для того, чтобы протестировать и понять нужно ли это, ощутить на себе, познакомиться с центром, тренером, с диагностикой воды. Разовое - Полноценное стандартное занятие.",
  },
  {
    question: "Сколько длится занятие?",
    answer: "Одно занятие длится 30 минут.",
  },
];

function FAQ() {
  return (
    <Container className="p-8">
      <div id="faq" className="w-full max-w-2xl mx-auto scroll-mt-24">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="rounded-lg bg-gray-50 p-4 shadow ">
                  <Disclosure.Button className="flex w-full justify-between items-center text-left text-gray-900 font-medium ">
                    {faq.question}
                    <ChevronUpIcon
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-gray-600 ">
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
