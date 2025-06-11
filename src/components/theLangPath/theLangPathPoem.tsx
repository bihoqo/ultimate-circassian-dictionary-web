import React from "react";
import { cn } from "~/utils/classNames";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";
import { ITheLangPathPoem } from "~/interfaces/theLangPath";

export default function TheLangPathPoem({ data }: { data: ITheLangPathPoem }) {
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, isTranslationChecked, translationLangs } =
    settings;

  const maxFontSize = Math.max(...Object.keys(TEXT_SIZE_MAP).map(Number));
  const titleFontSize = Math.min(circassianFontSize + 2, maxFontSize);

  return (
    <div className="mx-auto flex w-full flex-col gap-6 rounded-lg border-2 border-solid border-orange-300 bg-orange-100 p-4">
      {/* Title */}
      <div className="text-center">
        <h2
          className={cn("font-bold text-orange-600 drop-shadow-sm", TEXT_SIZE_MAP[titleFontSize])}
        >
          {data.title.originText}
        </h2>
        <div
          className={cn(
            "mt-2 flex flex-col gap-1 text-gray-700",
            TEXT_SIZE_MAP[translationFontSize],
            { hidden: !isTranslationChecked },
          )}
        >
          {translationLangs.map((lang) => (
            <p key={lang}>{data.title.langToTranslationMap[lang]}</p>
          ))}
        </div>
      </div>

      {/* Stanzas */}
      {data.stanzas.map((stanza, idx) => (
        <div key={idx} className="mb-6 flex flex-col gap-3">
          <p
            className={cn(
              "leading-snug font-semibold text-black",
              TEXT_SIZE_MAP[circassianFontSize],
            )}
          >
            {stanza.originText}
          </p>
          <div
            className={cn(
              "flex flex-col gap-2 text-[#333333]",
              TEXT_SIZE_MAP[translationFontSize],
              { hidden: !isTranslationChecked },
            )}
          >
            {translationLangs.map((lang) => (
              <p key={lang}>{stanza.langToTranslationMap[lang]}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
