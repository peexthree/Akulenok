import Container from "./container";
import SectionTitle from "./sectionTitle";

export default function Video() {
  return (
    <Container>
      <SectionTitle
      
        title="Познакомьтесь с «Акулёнком» ближе"
      >
        Короткий ролик о том, как проходят занятия в нашем бассейне и почему
        родители доверяют нам здоровье своих малышей.
      </SectionTitle>

      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          className="h-full w-full object-cover"
          src="/video/hero_small.mp4"
          // Если добавишь webm — лучше через <source> (пример ниже).
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          controls
          poster="/video/poster.jpg" // опционально: положи превью в /public/video/poster.jpg
          aria-label="Ролик о центре «Акулёнок»"
        />
      </div>
    </Container>
  );
}
