import { HeroColumn } from "@/components/Hero/hero-column";

export function HeroColumns() {
  return (
    <div className="hero__columns">
      <HeroColumn
        title="Nibh viverra"
        content="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        icon="cup"
      />
      <HeroColumn
        title="Cursus amet"
        content="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        icon="crown"
      />
      <HeroColumn
        title="Ipsum fermentum"
        content="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        icon="tv"
      />
    </div>
  );
}
