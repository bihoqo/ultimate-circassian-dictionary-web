import React from "react";
import { cn } from "~/utils/classNames";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";
import { ILangToTranslationMap } from "~/interfaces";
import Image from "next/image";
import { ITheLangPathPoem } from "~/interfaces/theLangPath";

export default function TheLangPathPoem({ originText, langToTranslationMap }: ITheLangPathPoem) {
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, isTranslationChecked, translationLangs } =
    settings;
  return (
    <div className="gap-4pb-2 mx-auto flex w-full flex-col">
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
        {/* Translation */}
        {translationLangs.map((lang) => (
          <p key={lang}>{langToTranslationMap[lang]}</p>
        ))}
      </div>
    </div>
  );
}

export interface ILessonTableCellProps {
  firstRow?: string;
  secondRow?: string;
  imgUrl?: string;
  langToTranslationMap?: ILangToTranslationMap;
}

export function TheLangPathTableCell({
  firstRow,
  secondRow,
  imgUrl,
  langToTranslationMap,
}: ILessonTableCellProps) {
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, translationLangs, isTranslationChecked } =
    settings;

  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn("text-center font-semibold text-black", TEXT_SIZE_MAP[circassianFontSize], {
          hidden: !firstRow,
        })}
      >
        {firstRow}
      </div>
      <div
        className={cn("text-center font-semibold text-black", TEXT_SIZE_MAP[circassianFontSize], {
          hidden: !secondRow,
        })}
      >
        {secondRow}
      </div>
      {imgUrl && (
        <div className="flex justify-center">
          <div className="flex h-[65px] items-center">
            <Image src={imgUrl} alt="img" height={65} width={65} className="h-[65px] w-auto" />
          </div>
        </div>
      )}
      {langToTranslationMap && (
        <div className={cn("flex flex-col gap-1", { hidden: !isTranslationChecked })}>
          {translationLangs.map((lang) => {
            return (
              <div
                key={lang}
                className={cn(
                  "mt-1 text-center font-medium text-gray-600",
                  TEXT_SIZE_MAP[translationFontSize],
                )}
              >
                {langToTranslationMap[lang]}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
