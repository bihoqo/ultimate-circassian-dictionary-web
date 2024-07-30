import React, { ReactNode, useState } from "react";
import { cn } from "~/utils/classNames";

function HoverBox({ children }: { children: ReactNode }) {
  return (
    <div className="absolute bottom-full left-0 mb-2 rounded border bg-white p-2 shadow-lg">
      {children}
    </div>
  );
}

export function TranslateText({ children }: { children: ReactNode }) {
  return <span className="text-black-500">{children}</span>;
}

// TODO(artur): Find better name, preferably short, as it should be used a lot whenever some highlighting is needed.
export function HighlightText({ children }: { children: ReactNode }) {
  return <span className="font-bold text-blue-500">{children}</span>;
}

export default function CText({
  children,
  ipa,
  className,
}: {
  children: ReactNode | ReactNode[];
  ipa?: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative">
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn("text-black-500 font-bold", className)}
      >
        {children}
      </span>
      {/*
        TODO(artur): Implement a way to automatically generate IPA from the text.
        NOTE(artur): The orthography is not 100% phonetic, thus it is not possible to 
              generate completely correct IPA 100% all the time. 
              For example пI could either mean /p'/ or /p?/, depending on the word.
              For this one should also probably a small link to some orthography guide. 
        TODO(artur): Probably it is best to color code whether the IPA is autogenerated or not. 
                     Maybe grey, if autogenerated, black if by hand.

      */}
      {isHovered && ipa && <HoverBox>{"/" + ipa + "/"}</HoverBox>}
    </span>
  );
}
