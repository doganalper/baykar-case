import { cn } from "@/utils/cn";
import Image from "next/image";

type Props = {
  className?: string;
};
export function ShoesTooltip({ className }: Props) {
  return (
    <div className={cn("shoes__section-image-container", className)}>
      <Image
        src="/shoe-collected.png"
        width={266}
        height={200}
        alt=""
        className="shoes__section-image"
      />
      <div className="shoes__section-image-tooltip">
        Emma Simpson collected one pair of <span>Cool Shoes.</span>
        <div className="shoes__section-image-tooltip-arrow"></div>
        <div className="shoes__section-image-tooltip-arrow__circle"></div>
      </div>
    </div>
  );
}
