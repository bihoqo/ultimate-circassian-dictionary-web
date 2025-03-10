import React from "react";
import { cn } from "~/utils/classNames";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";
import { ILangToTranslationMap } from "~/interfaces";
import Image from "next/image";
import TheLangPathDialogBubble from "~/components/theLangPath/theLangPathDialogBubble";

interface LessonTableProps {
  headersArray?: React.ReactNode[]; // Headers for the table
  contentMatrix?: React.ReactNode[][]; // Rows data
  footerArray?: React.ReactNode[]; // Footer for the table
  showIndexes?: boolean; // Whether to show index column
  gapBetweenRows?: number; // Space between rows
  className?: string;
  showBackgroundColors?: boolean;
}

export default function TheLangPathTable({
  contentMatrix = [],
  gapBetweenRows = 0,
  showIndexes = false,
  headersArray = [],
  footerArray = [],
  className,
  showBackgroundColors = true,
}: LessonTableProps) {
  return (
    <table
      className={cn("w-full xl:w-11/12 mx-auto border-collapse text-sm table-fixed", className)}
      style={{ tableLayout: "fixed" }}
    >
      {/* Table Head */}
      <thead className={cn({ hidden: headersArray.length === 0 })}>
        <tr>
          {showIndexes && <th className="bg-[#ed7c31] text-white font-bold w-[40px]">#</th>}
          {headersArray.map((header, index) => (
            <th
              key={index}
              className="border border-gray-300 px-4 py-2 text-left w-1/[columnCount]"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {contentMatrix.map((row, rowIndex) => (
          <tr key={rowIndex} style={{ marginBottom: `${gapBetweenRows}px` }}>
            {/* Show Index Column */}
            {showIndexes && (
              <td className="font-bold text-white text-center px-1 w-[40px]">{rowIndex + 1}</td>
            )}

            {/* Render Row Data */}
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={cn(
                  "border-2 border-solid px-4 py-2 text-black w-1/[columnCount] h-full",
                  {
                    "bg-white border-gray-300": !showBackgroundColors,
                    "bg-[#fcece8] border-[#ed7d31]": rowIndex % 2 === 0 && showBackgroundColors,
                    "bg-[#ebf1e9] border-[#70ad47]": rowIndex % 2 !== 0 && showBackgroundColors,
                  },
                )}
              >
                <div className="flex flex-col justify-center h-full">
                  <span className="text-black font-semibold">{cell}</span>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      {/* Table Footer */}
      <tfoot className={cn({ hidden: footerArray.length === 0 })}>
        <tr>
          {showIndexes && <td className="w-[40px]"></td>}
          {footerArray.map((footerCell, index) => (
            <td key={index} className="border px-4 py-2 w-1/[columnCount]">
              {footerCell}
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
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
        className={cn("text-center text-black font-semibold", TEXT_SIZE_MAP[circassianFontSize], {
          hidden: !firstRow,
        })}
      >
        {firstRow}
      </div>
      <div
        className={cn("text-center text-black font-semibold", TEXT_SIZE_MAP[circassianFontSize], {
          hidden: !secondRow,
        })}
      >
        {secondRow}
      </div>
      {imgUrl && (
        <div className="flex justify-center">
          <div className="h-[65px] flex items-center">
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
                  "text-center text-gray-600 font-medium mt-1",
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
