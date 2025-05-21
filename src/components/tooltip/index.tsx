import React, { useState } from "react";
import { cn } from "~/utils/classNames";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";

interface ITopTooltipWithBottomSpikeProps {
  text: string | null | undefined;
  children: React.ReactNode;
  className?: string;
}

export default function TopTooltipWithBottomSpike({
  text,
  children,
  className = "",
}: ITopTooltipWithBottomSpikeProps) {
  const { settings } = usePreferredSettings();
  const [isVisible, setIsVisible] = useState(false);

  if (!text) {
    return <>{children}</>;
  }

  return (
    <div className="relative flex items-center">
      {/* Tooltip Content */}
      <div
        className={cn(
          `font-vt323 absolute rounded-[4px] bg-gray-800 px-3 py-2 text-sm whitespace-nowrap text-white transition-opacity duration-200`,
          "bottom-full left-1/2 mb-2 -translate-x-1/2 transform",
          { hidden: !isVisible },
          className,
        )}
      >
        {text}
        {/* Spike (Arrow) */}
        <div
          className={cn(
            `absolute h-3 w-3 rotate-45 transform bg-gray-800`,
            "-bottom-1 left-1/2 -translate-x-1/2",
          )}
        />
      </div>

      {/* Wrapped Children */}
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>
    </div>
  );
}
