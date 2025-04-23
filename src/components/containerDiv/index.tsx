import React from "react";
import { cn } from "~/utils/classNames";

export default function ContainerDiv({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[97%] xl:w-full",
        "bg-white shadow-xl",
        "py-8 mx-auto mb-5 mt-5 gap-2",
        "flex flex-col items-center justify-center rounded-sm xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
