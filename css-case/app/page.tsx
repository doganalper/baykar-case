import { Hero } from "@/components/Hero";
import { ShowcaseBecause } from "@/components/Showcases/Because";
import { ShowcaseBest } from "@/components/Showcases/Best";
import { ShowcaseGrow } from "@/components/Showcases/Grow";
import { ShowcaseJoinUs } from "@/components/Showcases/JoinUs";
import { ShowcaseShoes } from "@/components/Showcases/Shoes";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowcaseBest />
      <ShowcaseJoinUs />
      <ShowcaseBecause />
      <ShowcaseGrow />
      <ShowcaseShoes />
    </>
  );
}
