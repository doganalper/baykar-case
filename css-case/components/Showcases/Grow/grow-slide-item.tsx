import { PlayIcon } from "@/components/icons/play";
import { ArrowRight } from "@/components/icons/arrow-right";
import { cn } from "@/utils/cn";

type Props = {
  text: string;
  active: boolean;
  onClick: () => void;
};
export function GrowSlideItem({ text, active, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "grow__section-slide fill-slate-900",
        active && "grow__section-slide__active",
      )}
    >
      <PlayIcon inheritFill />
      <span>{text}</span>
      {active && (
        <div className="hidden lg:block">
          <ArrowRight />
        </div>
      )}
    </div>
  );
}
