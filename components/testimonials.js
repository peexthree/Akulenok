import React from "react";

export default function Testimonials() {
  return (
 <div className="w-full">
      <div
         className="w-full max-w-2xl mx-auto h-[80vh] overflow-y-scroll"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <iframe
          src="https://yandex.ru/maps-reviews-widget/125018811972?comments"
           className="w-full h-[1200px]"
          style={{ border: "none" }}
          frameBorder="0"
           scrolling="yes"
          title='Отзывы о нас с Яндекса'
        ></iframe>
      </div>
       </div>
  );
}
