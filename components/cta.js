import React from "react";
import clsx from "clsx";
import Container from "./container";
import Button from "./Button";
import Image from "next/image";

function Cta() {
  return (
     <Container className="mb-16">
     <div
        className={clsx(
          "flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-aqua-accent px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl",
          "transform transition duration-300 hover:scale-105 hover:shadow-lg animate-press-me"
        )}
      >
        <div className="flex-grow text-center lg:text-left">
         <h2 className="text-2xl font-semibold lg:text-3xl">
            Готовы на пробное занятие?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Оставьте заявку — подберём удобное время и формат.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
     <div className="flex items-center justify-center">
            <Button
              href="#lead-form"
              className="w-full bg-orange-500 text-white text-lg lg:text-xl px-8 py-4 lg:px-10 lg:py-5 hover:bg-orange-600"
            >
              Записаться
            </Button>
            <Image
              src="/img/look.png"
              alt="look"
              width={256}
              height={256}
              className="ml-4"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(Cta);