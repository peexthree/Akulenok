import React from "react";

export default function Testimonials() {
  return (
    <div className="w-screen">
      <div
         className="w-full h-[80vh] overflow-y-scroll"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <iframe
          src="https://yandex.ru/maps-reviews-widget/125018811972?comments"
            className="w-full h-[1200px]"
          style={{ border: "none" }}
          frameBorder="0"
           scrolling="yes"
          title='Отзывы о бассейне "Акуленок"'
        ></iframe>
      </div>
    </div>
  );
}
