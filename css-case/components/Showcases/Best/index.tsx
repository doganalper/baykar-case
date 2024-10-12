import { SignupButton } from "@/components/ui/signup-button";
import { ShowcaseBestColumn } from "@/components/Showcases/Best/showcase-best-column";

export function ShowcaseBest() {
  return (
    <section className="best-showcase__container">
      <div className="best-showcase__header">
        <h2 className="best-showcase__header-title section__header">The best of the best</h2>
        <SignupButton variant="white" size="xl" />
      </div>
      <div className="best-showcase__section">
        <div className="best-showcase__section-grid">
          <ShowcaseBestColumn
            img="/ShowcaseBest-1.png"
            title={"Title"}
            description={
              "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            }
          >
            <div className="absolute -z-10 w-[202px] h-[202px] left-5 -bottom-8 md:w-[271px] md:h-[271px] md:-left-8 md:top-44 rounded-[50px] bg-pink-700 opacity-75" />
          </ShowcaseBestColumn>
          <ShowcaseBestColumn
            img="/ShowcaseBest-2.png"
            title={"Title"}
            description={
              "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            }
          >
            <div className="absolute -z-10 w-[150px] h-[150px] top-28 -right-5 md:w-[161px] md:h-[161px] md:-top-6 md:-left-5 rounded-[50px] bg-sky-700 opacity-75"></div>
            <div className="absolute hidden md:block -z-10 -right-5 bottom-14 w-[130px] h-[130px] rounded-[30px] bg-amber-700 opacity-75"></div>
          </ShowcaseBestColumn>
          <ShowcaseBestColumn
            img="/ShowcaseBest-3.png"
            title={"Title"}
            description={
              "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            }
          >
            <div className="absolute -z-10 w-[150px] h-[150px] top-11 -left-4 md:w-[202px] md:h-[202px] md:top-auto md:left-1/4 md:-bottom-7 rounded-[30px] bg-fuchsia-700 opacity-75"></div>
            <div className="absolute hidden md:block -z-10 -right-10 top-16 w-[232px] h-[232px] rounded-[30px] bg-green-700 opacity-75"></div>
          </ShowcaseBestColumn>
        </div>
      </div>
    </section>
  );
}
