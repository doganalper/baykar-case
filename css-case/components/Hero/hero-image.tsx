import Image from "next/image";

export function HeroImage() {
  return (
    <div className="hero__image-container">
      <div className="hero__image-display"></div>
      <Image
        src="/hero-sneaker.png"
        width={486}
        height={388}
        alt="Sneaker"
        className="hero__image"
      />
    </div>
  );
}
