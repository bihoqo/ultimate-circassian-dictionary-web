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
        "w-full max-w-screen",
        "bg-amber-50",
        "gap-2 px-4 py-8",
        "3xl:max-w-screen-3xl flex flex-col items-center justify-center xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
