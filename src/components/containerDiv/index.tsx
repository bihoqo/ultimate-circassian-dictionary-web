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
        "3xl:max-w-screen-3xl mx-auto mt-16 mb-40 flex w-[97%] flex-col items-center justify-center gap-2 rounded-sm bg-white pt-2 pb-8 shadow-xl sm:pt-4 xl:w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
