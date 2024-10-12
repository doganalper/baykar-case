import { cn } from "@/utils/cn";

export type BorderedButtonProps = React.PropsWithChildren & {
  variant: "amber" | "white";
  size: "m" | "l" | "xl";
  href: string;
  className?: string;
};

const variantClasses = {
  amber: "border-amber-900 text-amber-900 ",
  white: "text-white border-white",
};

const sizeClasses = {
  m: "text-base px-7",
  l: "text-xl px-8",
  xl: "text-2xl px-[48px]",
};

export function BorderedButton({
  children,
  variant,
  size,
  href,
  className,
}: BorderedButtonProps) {
  return (
    <a
      className={cn(
        "py-3 border-2 font-medium rounded-lg tracking-loose",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      href={href}
    >
      {children}
    </a>
  );
}
