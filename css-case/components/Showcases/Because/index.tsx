"use client";

import { BecauseSlideItem } from "@/components/Showcases/Because/because-slide-item";
import { ArrowRounded } from "@/components/icons/arrow-rounded";
import React from "react";

export function ShowcaseBecause() {
  const slider = React.useRef<HTMLDivElement>(null);
  function scrollSlider(direction: "left" | "right") {
    if (!slider.current) return;

    let scrollAmount = direction === "left" ? -240 : 240;
    slider.current.scrollTo({
      left: slider.current.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section className="because__section">
      <div className="because__header section__header">
        <span>Because they love us</span>
        <div className="because__header-buttons">
          <ArrowRounded onClick={() => scrollSlider("left")} />
          <ArrowRounded
            onClick={() => scrollSlider("right")}
            className="rotate-180"
          />
        </div>
      </div>
      <div className="because__slider-bg">
        <div className="because__slider-container" ref={slider}>
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
        </div>
      </div>
    </section>
  );
}
