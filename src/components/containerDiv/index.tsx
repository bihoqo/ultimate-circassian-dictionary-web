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
        "mx-auto mt-2 mb-2 gap-2 py-8",
        "3xl:max-w-screen-3xl flex flex-col items-center justify-center rounded-sm xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
