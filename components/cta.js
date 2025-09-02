import React from "react";
import Container from "./container";

function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-blue-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Готовы на пробное занятие?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Оставьте заявку — подберём удобное время и формат.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#lead-form"
            rel="noopener noreferrer"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-white bg-orange-500 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-orange-600"
          >
            Записаться
          </a>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(Cta);