"use client";

import { GrowSlideItem } from "@/components/Showcases/Grow/grow-slide-item";

import Image from "next/image";
import React from "react";

export function ShowcaseGrow() {
  const [active, setActive] = React.useState(0);
  return (
    <section className="grow__section">
      <h5 className="section__header">Grow your collection</h5>
      <p className="grow__section-content">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
        rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
        neque placerat at bibendum quam tellus.
      </p>
      <div className="grow__section-picker">
        <div className="grow__section-slider-container">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <GrowSlideItem
                onClick={() => {
                  setActive(idx);
                }}
                key={idx}
                text="Bibendum tellus"
                active={idx === active}
              />
            ))}
        </div>
        <Image
          src="/grow.png"
          width={944}
          height={556}
          alt="Grow Section Image"
          className="min-w-full h-auto grow__section-image hidden md:block"
        />
        <Image
          src="/grow-small.png"
          width={361}
          height={259}
          alt="Grow Section Image"
          className="min-w-full h-auto grow__section-image md:hidden"
        />
      </div>
      <Image
        src="/waves.png"
        width={1400}
        height={720}
        alt=""
        className="absolute hidden md:block bottom-[-3px] left-0 min-w-full h-auto z-[-1]"
      />
      <Image
        src="/waves-small.png"
        fill
        alt=""
        className="absolute md:hidden bottom-[-3px] left-0 min-w-full h-auto z-[-1]"
      />
    </section>
  );
}
