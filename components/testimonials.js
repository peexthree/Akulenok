
import React from "react";
import Container from "./container";


export default function Testimonials() {
  return (
    <Container>
  <div className="w-full overflow-hidden rounded-2xl">
        <iframe
          src="https://yandex.ru/maps-reviews-widget/125018811972?comments"
          style={{ width: "100%", height: "400px", border: "none", overflow: "hidden" }}
          frameBorder="0"
          title='Отзывы о бассейне "Акуленок"'
        ></iframe>
      </div>
      
    </Container>
  );
}
