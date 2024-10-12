import { cn } from "@/utils/cn";
import React from "react";

type Props = React.PropsWithChildren & {
  title: string;
  className?: string;
};
export function FooterColumn({ className, title, children }: Props) {
  return (
    <div className={cn("footer__column", className)}>
      <span className="footer__column-title">{title}</span>
      {children}
    </div>
  );
}
