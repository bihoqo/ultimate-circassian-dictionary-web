import { cn } from "~/utils/classNames";
import Image from "next/image";
import React from "react";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";
import { getCharacterByName } from "~/components/theLangPath/panels";
import { ITheLangPathDialogBubble } from "~/interfaces/theLangPath";
import useWindowSize from "~/hooks/useWindowDimensions";

export default function TheLangPathDialogBubble({ data }: { data: ITheLangPathDialogBubble }) {
  const { width } = useWindowSize();
  const { leftOrRight, characterName, originText, langToTranslationMap } = data;
  const character = getCharacterByName(characterName);
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, isTranslationChecked, translationLangs } =
    settings;

  // Split the cirText into words
  const cirTextWords = originText.split(" ");

  return (
    <div className="mx-auto flex w-full flex-col gap-4 border-b-2 border-solid border-gray-300 pb-2">
      <div
        className={cn("flex items-start gap-1 sm:gap-2 md:gap-4", {
          "flex-row": leftOrRight === "left",
          "flex-row-reverse": leftOrRight === "right",
        })}
      >
        {/* Avatar and name */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src={character.avatar}
            alt={character.name}
            width={width < 640 ? 45 : 65}
            height={width < 640 ? 45 : 65}
            unoptimized
            className={cn(
              width < 640
                ? "max-h-[45px] min-h-[45px] max-w-[45px] min-w-[45px]"
                : "max-h-[65px] min-h-[65px] max-w-[65px] min-w-[65px]",
              {
                "scale-x-[-1]": leftOrRight === "right",
              },
            )}
          />
          <p
            className={cn(
              "text-2xl font-bold",
              leftOrRight === "left" ? "text-[#f27141]" : "text-[#4a7324]",
              TEXT_SIZE_MAP[circassianFontSize],
            )}
          >
            {character.name}
          </p>
        </div>

        {/* Dialog bubble and translation container */}
        <div className="flex flex-col">
          <div className="relative">
            <div
              className={cn(
                "relative flex flex-row flex-wrap gap-2 rounded-sm border border-solid p-2 sm:gap-3 sm:p-3 md:gap-4 md:p-4",
                { "border-[#f19f76] bg-[#fbddd1]": leftOrRight === "left" },
                { "border-[#96c07e] bg-[#d6e8ce]": leftOrRight === "right" },
              )}
            >
              {cirTextWords.map((word, idx) => (
                <div key={idx} className="flex w-fit flex-col flex-wrap gap-1">
                  <span
                    className={cn(
                      "leading-none font-semibold text-black",
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
              className={cn("absolute top-4 h-0 w-0", {
                // Spike styles for "left"
                "-left-2 border-t-[10px] border-r-[10px] border-b-[10px] border-t-transparent border-r-[#fbddd1] border-b-transparent":
                  leftOrRight === "left",
                // Spike styles for "right"
                "-right-2 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-[#d6e8ce]":
                  leftOrRight === "right",
              })}
            />
          </div>

          {/* Translation text */}
          <div
            className={cn(
              "mt-2 flex flex-col gap-3 text-[#333333]",
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
      </div>
    </div>
  );
}
