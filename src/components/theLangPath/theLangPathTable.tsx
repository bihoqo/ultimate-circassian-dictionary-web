import React from "react";
import { cn } from "~/utils/classNames";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";
import { ILangToTranslationMap } from "~/interfaces";
import Image from "next/image";

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
      className={cn("mx-auto w-full table-fixed border-collapse text-sm xl:w-11/12", className)}
      style={{ tableLayout: "fixed" }}
    >
      {/* Table Head */}
      <thead className={cn({ hidden: headersArray.length === 0 })}>
        <tr>
          {showIndexes && <th className="w-[40px] bg-[#ed7c31] font-bold text-white">#</th>}
          {headersArray.map((header, index) => (
            <th
              key={index}
              className="w-1/[columnCount] border border-gray-300 px-4 py-2 text-left"
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
              <td className="w-[40px] px-1 text-center font-bold text-white">{rowIndex + 1}</td>
            )}

            {/* Render Row Data */}
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={cn(
                  "w-1/[columnCount] h-full border-2 border-solid px-4 py-2 text-black",
                  {
                    "border-gray-300 bg-white": !showBackgroundColors,
                    "border-[#ed7d31] bg-[#fcece8]": rowIndex % 2 === 0 && showBackgroundColors,
                    "border-[#70ad47] bg-[#ebf1e9]": rowIndex % 2 !== 0 && showBackgroundColors,
                  },
                )}
              >
                <div className="flex h-full flex-col justify-center">
                  <span className="font-semibold text-black">{cell}</span>
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
            <td key={index} className="w-1/[columnCount] border px-4 py-2">
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
