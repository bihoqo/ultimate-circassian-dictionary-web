import React from "react";
import { GenericSvgProps } from "~/interfaces";
import { cn } from "~/utils/classNames";

export default function RestoreSvg({
  width = "24",
  height = "24",
  className,
  fill = "none",
  isDisabled = false,
  onClick = () => {},
}: GenericSvgProps) {
  return (
    <svg
      onClick={isDisabled ? () => {} : onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      height={width}
      width={height}
      className={cn({ "opacity-50": isDisabled }, className)}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3.06 13a9 9 0 1 0 .49 -4.087" />
      <path d="M3 4.001v5h5" />
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
}
