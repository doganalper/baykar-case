import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  onClick?: () => void;
};
export function ArrowRounded({ className, onClick }: Props) {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      onClick={onClick}
      className={cn("cursor-pointer", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1_1221)">
        <rect
          x="4"
          y="3"
          width="46"
          height="46"
          rx="23"
          stroke="#78350F"
          strokeWidth="2"
        />
        <path
          d="M33.5 26H21H33.5ZM21 26L27 20L21 26ZM21 26L27 32L21 26Z"
          fill="#78350F"
        />
        <path
          d="M21 26L27 32M33.5 26H21H33.5ZM21 26L27 20L21 26Z"
          stroke="#78350F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1_1221"
          x="0"
          y="0"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1221"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_1221"
            result="effect2_dropShadow_1_1221"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_1221"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
