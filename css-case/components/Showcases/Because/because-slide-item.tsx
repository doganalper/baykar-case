import Image from "next/image";
import { BecauseSlideUser } from "@/components/Showcases/Because/because-slide-user";

type Props = {
  img: string;
  description: string;
};
export function BecauseSlideItem({ img, description }: Props) {
  return (
    <div className="because__slide-item">
      <Image src={img} width={124.4} height={32} alt={description} />
      <p className="because__slide-description">{description}</p>
      <BecauseSlideUser
        img="/user-thumb.png"
        name="Hellena John"
        occupation="Co-founder"
      />
    </div>
  );
}
