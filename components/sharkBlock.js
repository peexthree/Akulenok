import React from "react";
import Image from "next/image";
import Container from "./container";
import ContactButtons from "./contactButtons";

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
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Есть вопросы? Напиши мне
        </h3>
        <ContactButtons vertical={true} wide={true} />
      </div>
    </Container>
  );
}

export default React.memo(SharkBlock);