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
       


<iframe width="720" height="405" src="https://youtu.be/6AvZo_1tx9k" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

      </div>
    </Container>
  );
}

