import React from "react";
import Image from "next/image";
import Container from "./container";

function SharkBlock() {
  return (
    <Container>
      <div className="max-w-xs mx-auto my-12 bg-white text-center p-5 rounded-xl shadow-md">
        <Image
          src="/img/shark-code.gif"
          alt="Акула кодит"
          width={300}
          height={300}
          className="w-full h-auto mb-4"
        />
        <p className="text-gray-700">
          Привет! Я акула-программист. Пиши мне и я свяжусь!
        </p>
      </div>
    </Container>
  );
}

export default React.memo(SharkBlock);