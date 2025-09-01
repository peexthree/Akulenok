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
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Видео о центре Акулёнок"
          frameBorder="0"   // ✅ исправлено
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen   // ✅ исправлено
        ></iframe>
      </div>
    </Container>
  );
}