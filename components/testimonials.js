import React from "react";

export default function Testimonials() {
   return (
    <div className="w-full flex justify-center">
      <div
        className="max-w-[560px] w-full h-96 overflow-y-scroll"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <iframe
          src="https://yandex.ru/maps-reviews-widget/125018811972?comments"
          width="560"
          height="800"
          style={{ border: "none" }}
          frameBorder="0"
          scrolling="no"
          title='Отзывы о бассейне "Акуленок"'
        ></iframe>
      </div>
    </div>
  );
}
