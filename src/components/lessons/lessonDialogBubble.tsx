import { ILangToTranslationMap } from "~/interfaces";
import { cn } from "~/utils/classNames";
import Image from "next/image";
import React from "react";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";
import { getCharacterByName } from "~/constants/lessons";

export interface ILessonDialogBubbleProps {
  leftOrRight: "left" | "right";
  characterName: string;
  originText: string;
  langToTranslationMap: ILangToTranslationMap;
}

export default function LessonDialogBubble({
  leftOrRight,
  characterName,
  originText,
  langToTranslationMap,
}: ILessonDialogBubbleProps) {
  const character = getCharacterByName(characterName);
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, isTranslationChecked, translationLangs } =
    settings;

  // Split the cirText into words
  const cirTextWords = originText.split(" ");

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className={cn("flex items-start gap-4", {
          "flex-row": leftOrRight === "left",
          "flex-row-reverse": leftOrRight === "right",
        })}
      >
        {/* Avatar and name */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src={character.avatar}
            alt={character.name}
            width={65}
            height={65}
            className={cn({ "scale-x-[-1]": leftOrRight === "right" })}
          />
          <p
            className={cn(
              "text-2xl font-bold",
              leftOrRight === "left" ? "text-[#f27141]" : "text-[#4a7324]",
            )}
          >
            {character.name}
          </p>
        </div>

        {/* Dialog bubble */}
        <div className="relative">
          <div
            className={cn(
              "border border-solid p-4 rounded-sm relative flex flex-row flex-wrap gap-4",
              { "bg-[#fbddd1] border-[#f19f76]": leftOrRight === "left" },
              { "bg-[#d6e8ce] border-[#96c07e]": leftOrRight === "right" },
            )}
          >
            {cirTextWords.map((word, idx) => (
              <div key={idx} className="flex flex-col gap-1 w-fit flex-wrap">
                <span
                  className={cn(
                    "text-black leading-none font-semibold",
                    TEXT_SIZE_MAP[circassianFontSize],
                  )}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>
          {/* Spike */}
          <div
            className={cn("absolute top-4 w-0 h-0", {
              // Spike styles for "left"
              "-left-2 border-t-[10px] border-t-transparent border-r-[10px] border-r-[#fbddd1] border-b-[10px] border-b-transparent":
                leftOrRight === "left",
              // Spike styles for "right"
              "-right-2 border-t-[10px] border-t-transparent border-l-[10px] border-l-[#d6e8ce] border-b-[10px] border-b-transparent":
                leftOrRight === "right",
            })}
          />
        </div>
      </div>

      {/* Translation text */}
      <div
        className={cn(
          "flex flex-col gap-3 border-b-2 border-solid border-gray-300 text-[#333333]",
          TEXT_SIZE_MAP[translationFontSize],
          { hidden: !isTranslationChecked },
          {
            // Align translation text based on the direction of the bubble
            "text-left": leftOrRight === "left",
            "text-right": leftOrRight === "right",
          },
        )}
      >
        {/* Translation */}
        {translationLangs.map((lang) => (
          <p key={lang}>{langToTranslationMap[lang]}</p>
        ))}
      </div>
    </div>
  );
}
