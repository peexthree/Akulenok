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
          
          autoPlay
          muted
          loop
          playsInline
            preload="metadata"
          controls
       poster="/video/poster.jpg"
          aria-label="Ролик о центре «Акулёнок»"
         >
          <source src="/video/hero_small.webm" type="video/webm" />
          <source src="/video/hero_small.mp4" type="video/mp4" />
        </video>
      </div>
    </Container>
  );
}
