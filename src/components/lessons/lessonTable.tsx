import React from "react";
import { cn } from "~/utils/classNames";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { TEXT_SIZE_MAP } from "~/constants/setting";

interface LessonTableProps {
  headers?: React.ReactNode[]; // Headers for the table
  originTextMatrix?: React.ReactNode[][]; // Rows data
  translationTextMatrix?: React.ReactNode[][]; // Rows data
  footer?: React.ReactNode[]; // Footer for the table
  showIndexes?: boolean; // Whether to show index column
  gapBetweenRows?: number; // Space between rows
}

export default function LessonTable({
  originTextMatrix = [],
  translationTextMatrix = [],
  gapBetweenRows = 0,
  showIndexes = false,
  headers = [],
  footer = [],
}: LessonTableProps) {
  const { settings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize } = settings;

  return (
    <table className="w-full border-collapse text-sm">
      {/* Table Head */}
      <thead className={cn({ hidden: headers.length === 0 })}>
        <tr>
          <th className={cn("bg-[#ed7c31] text-white font-bold", { hidden: !showIndexes })}>#</th>
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-300 px-4 py-2 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {originTextMatrix.map((row, rowIndex) => {
          const translationRow = translationTextMatrix[rowIndex] || [];
          return (
            <tr
              key={rowIndex}
              className={cn("border-2 border-solid text-black", {
                "bg-[#fcece8] border-[#ed7d31]": rowIndex % 2 === 0,
                "bg-[#ebf1e9] border-[#70ad47]": rowIndex % 2 !== 0,
              })}
              style={{ marginBottom: `${gapBetweenRows}px` }} // Apply the gap between rows
            >
              {/* Show Index Column */}
              {showIndexes && (
                <td
                  className={cn("font-bold text-white text-center px-1", {
                    "bg-[#ed7d31]": rowIndex % 2 === 0,
                    "bg-[#70ad47]": rowIndex % 2 !== 0,
                  })}
                >
                  {rowIndex + 1}
                </td>
              )}

              {/* Render Row Data */}
              {row.map((cell, cellIndex) => {
                const translationCell = translationRow[cellIndex] || "";
                return (
                  <td
                    key={cellIndex}
                    className={cn("border-2 border-solid px-4 py-2", {
                      "bg-[#fcece8] border-[#ed7d31]": rowIndex % 2 === 0,
                      "bg-[#ebf1e9] border-[#70ad47]": rowIndex % 2 !== 0,
                    })}
                  >
                    <div className="flex flex-col">
                      {/* Origin Word */}
                      <span
                        className={cn(
                          "text-black font-semibold hover:text-blue-400",
                          TEXT_SIZE_MAP[circassianFontSize],
                        )}
                      >
                        {cell}
                      </span>

                      {/* Translation Text */}
                      <span
                        className={cn(
                          "text-gray-600 font-medium mt-1",
                          TEXT_SIZE_MAP[translationFontSize],
                        )}
                      >
                        {translationCell}
                      </span>
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>

      {/* Table Footer */}
      <tfoot className={cn({ hidden: footer.length === 0 })}>
        <tr>
          {showIndexes && <td></td>}
          {footer.map((footerCell, index) => (
            <td key={index} className="border px-4 py-2">
              {footerCell}
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
