import Image from "next/image";
import { ShoesTooltip } from "@/components/Showcases/Shoes/shoes-tooltip";

export function ShowcaseShoes() {
  return (
    <section className="shoes__section">
      <div className="shoes__section-earth-container">
        <ShoesTooltip className="shoes__section-tooltip-small" />
        <Image
          src="/earth.png"
          className="shoes__section-earth"
          alt=""
          height={633}
          width={1049}
        />
      </div>
      <ShoesTooltip className="shoes__section-tooltip-large" />
      <div className="shoes__section-content">
        <span className="shoes__section-content-count">11,658,467</span>
        <span className="shoes__section-content-text">Shoes Collected</span>
      </div>
    </section>
  );
}
