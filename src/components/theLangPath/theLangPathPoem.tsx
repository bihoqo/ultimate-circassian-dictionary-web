import React from "react";
import { cn } from "~/utils/classNames";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";
import { ITheLangPathPoem, ITheLangPathPoemTitle } from "~/interfaces/theLangPath";

export function TheLangPathPoem({ originText, langToTranslationMap }: ITheLangPathPoem) {
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, isTranslationChecked, translationLangs } =
    settings;

  return (
    <div className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-orange-50 p-4 pb-2">
      <p className={cn("leading-none font-semibold text-black", TEXT_SIZE_MAP[circassianFontSize])}>
        {originText}
      </p>
      <div
        className={cn(
          "mt-2 flex flex-col gap-3 text-[#333333]",
          TEXT_SIZE_MAP[translationFontSize],
          { hidden: !isTranslationChecked },
        )}
      >
        {translationLangs.map((lang) => (
          <p key={lang}>{langToTranslationMap[lang]}</p>
        ))}
      </div>
    </div>
  );
}

export function TheLangPathPoemTitle({ title, langToTranslationMap }: ITheLangPathPoemTitle) {
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, isTranslationChecked, translationLangs } =
    settings;

  // Get max available font size key from the map
  const maxFontSize = Math.max(...Object.keys(TEXT_SIZE_MAP).map(Number));

  // Clamp the title font size to the max allowed size
  const titleFontSize = Math.min(circassianFontSize + 2, maxFontSize);

  return (
    <div className="mb-4 text-center">
      <h2 className={cn("font-bold text-orange-600 drop-shadow-sm", TEXT_SIZE_MAP[titleFontSize])}>
        {title}
      </h2>

      <div
        className={cn(
          "mt-2 flex flex-col gap-1 text-gray-700",
          TEXT_SIZE_MAP[translationFontSize],
          { hidden: !isTranslationChecked },
        )}
      >
        {translationLangs.map((lang) => (
          <p key={lang}>{langToTranslationMap[lang]}</p>
        ))}
      </div>
    </div>
  );
}
