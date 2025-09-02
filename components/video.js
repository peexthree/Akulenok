import Container from "./container";
import SectionTitle from "./sectionTitle";

export default function Video() {
  return (
    <Container>
      <SectionTitle
        pretitle="Видео о центре"
        title="Познакомьтесь с «Акулёнком» ближе"
      >
        Короткий ролик о том, как проходят занятия в нашем бассейне и почему
        родители доверяют нам здоровье своих малышей.
      </SectionTitle>

      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://disk.yandex.ru/d/JDPRgVgQC-317Q/%D0%90%D0%BA%D1%83%D0%BB%D0%B5%D0%BD%D0%BE%D0%BA.mp4"
          title="Видео о центре Акулёнок"
          frameBorder="0"   // ✅ исправлено
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen   // ✅ исправлено
        ></iframe>
      </div>
    </Container>
  );
}