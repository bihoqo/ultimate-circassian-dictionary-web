// Helper type for a table cell
import React, { useState } from "react";
import { cn } from "~/utils/classNames";

interface SwitchTableCell {
  text: {
    en?: string;
    west?: string;
    east?: string;
  };
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

interface SwitchTableProps {
  headers: SwitchTableCell[][];
  rows: SwitchTableCell[][];
}

export const SwitchTable: React.FC<SwitchTableProps> = ({ headers, rows }) => {
  const [dialect, setDialect] = useState<"West" | "East">("West");

  const renderCellContent = (cell: SwitchTableCell) => {
    if (cell.text.en) {
      return cell.text.en;
    }
    return dialect === "West" ? cell.text.west : cell.text.east;
  };

  const renderRow = (row: SwitchTableCell[], isHeader = false) => (
    <tr className={cn({ "bg-orange-100": isHeader })}>
      {row.map((cell, idx) => {
        const Tag = isHeader ? "th" : "td";
        return (
          <Tag
            key={idx}
            rowSpan={cell.rowSpan}
            colSpan={cell.colSpan}
            className={cn("border border-gray-300 px-4 py-2", cell.className)}
          >
            {renderCellContent(cell)}
          </Tag>
        );
      })}
    </tr>
  );

  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={() => setDialect("West")}
          className={cn(
            "rounded px-3 py-1 text-sm font-medium",
            dialect === "West" ? "bg-blue-600 text-white" : "bg-gray-200",
          )}
        >
          Western
        </button>
        <button
          onClick={() => setDialect("East")}
          className={cn(
            "rounded px-3 py-1 text-sm font-medium",
            dialect === "East" ? "bg-blue-600 text-white" : "bg-gray-200",
          )}
        >
          Eastern
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="mb-4 w-full min-w-[600px] border-collapse border border-gray-300">
          <thead>{headers.map((headerRow, idx) => renderRow(headerRow, true))}</thead>
          <tbody>{rows.map((row, idx) => renderRow(row))}</tbody>
        </table>
      </div>
    </div>
  );
};
