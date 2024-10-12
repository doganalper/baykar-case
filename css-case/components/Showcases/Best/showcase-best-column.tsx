import { CartIcon } from "@/components/icons/cart";
import { BorderedButton } from "@/components/ui/bordered-button";
import { cn } from "@/utils/cn";
import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  img: string;
  title: string;
  description: string;
  children?: ReactNode[] | ReactNode;
};
export function ShowcaseBestColumn({
  children,
  img,
  title,
  description,
}: Props) {
  return (
    <div
      className={cn(
        "bg-slate-900 rounded-[10px] border border-slate-900 shadow-[0_0_15px_0_rgba(255,255,255,0.07),0_25px_50px_-12px_rgba(255,255,255,0.25)]",
        children && "relative",
      )}
    >
      <Image
        loading="lazy"
        src={img}
        width={395}
        height={220}
        alt={description}
        className="scale-[1.005] min-w-full rounded-t-[10px] h-auto"
      />
      <div className="p-8">
        <div className="space-y-4">
          <h6 className="font-bold text-2xl">{title}</h6>
          <p className="text-lg">{description}</p>
        </div>
        <BorderedButton
          className="w-full flex items-center justify-center mt-8 space-x-4"
          variant="white"
          size="l"
          href="#"
        >
          <>
            <CartIcon />
            <span>Buy Now</span>
          </>
        </BorderedButton>
      </div>
      {children ? children : null}
    </div>
  );
}
