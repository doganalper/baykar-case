import { HeroButtons } from "@/components/Hero/hero-buttons";
import { HeroImage } from "@/components/Hero/hero-image";
import { HeroColumns } from "@/components/Hero/hero-columns";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text-content">
          <h1 className="hero__text-content-title">Collectible Sneakers</h1>
          <p>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <HeroButtons />
        </div>
        <HeroImage />
      </div>
      <HeroColumns />
      <div className="hero__diagonal"></div>
    </section>
  );
}
