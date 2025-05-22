import { GrammarBookContainer } from "~/styled-components";
import React, { useState } from "react";
import Head from "next/head";

// Helper type for a table cell
interface TableCell {
  text: {
    en?: string;
    west?: string;
    east?: string;
  };
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

interface PronounTableProps {
  headers: TableCell[][];
  rows: TableCell[][];
}

const SwitchTable: React.FC<PronounTableProps> = ({ headers, rows }) => {
  const [dialect, setDialect] = useState<"West" | "East">("West");

  const renderCellContent = (cell: TableCell) => {
    if (cell.text.en) {
      return cell.text.en;
    }
    return dialect === "West" ? cell.text.west : cell.text.east;
  };

  const renderRow = (row: TableCell[], isHeader = false) => (
    <tr className={isHeader ? "bg-blue-50" : "hover:bg-gray-50"}>
      {row.map((cell, idx) => {
        const Tag = isHeader ? "th" : "td";
        return (
          <Tag
            key={idx}
            rowSpan={cell.rowSpan}
            colSpan={cell.colSpan}
            className={`border border-gray-300 px-4 py-2 ${cell.className || ""}`.trim()}
          >
            {renderCellContent(cell)}
          </Tag>
        );
      })}
    </tr>
  );

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setDialect("West")}
          className={`rounded px-3 py-1 text-sm font-medium ${
            dialect === "West" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Western
        </button>
        <button
          onClick={() => setDialect("East")}
          className={`rounded px-3 py-1 text-sm font-medium ${
            dialect === "East" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
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

export default function PronounPage() {
  return (
    <>
      <Head>
        <title>Learn Circassian - Pronouns</title>
        <meta
          name="description"
          content="Learn about Circassian pronouns, including personal and demonstrative pronouns, their forms and usage."
        />
      </Head>
      <GrammarBookContainer>
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Pronouns</h1>

        <SwitchTable
          headers={[
            [
              { text: { en: "Plurality" }, rowSpan: 2 },
              { text: { en: "Case" }, rowSpan: 2 },
              { text: { en: "First-person" } },
              { text: { en: "Second-person" } },
            ],
          ]}
          rows={[
            [
              { text: { en: "Singular" }, rowSpan: 4 },
              { text: { en: "Absolutive" } },
              { text: { west: "сэ", east: "сэ" } },
              { text: { west: "о", east: "уэ" } },
            ],
            [
              { text: { en: "Ergative" } },
              { text: { west: "сэ", east: "сэ" } },
              { text: { west: "о", east: "уэ" } },
            ],
            [
              { text: { en: "Instrumental" } },
              { text: { west: "сэркӏэ", east: "сэркӏэ" } },
              { text: { west: "оркӏэ", east: "уэркӏэ" } },
            ],
            [
              { text: { en: "Adverbial" } },
              { text: { west: "сэрэу", east: "сэрэу" } },
              { text: { west: "орэу", east: "уэрэу" } },
            ],
            [
              { text: { en: "Plural" }, rowSpan: 4 },
              { text: { en: "Absolutive" } },
              { text: { west: "тэ", east: "дэ" } },
              { text: { west: "шъо", east: "фэ" } },
            ],
            [
              { text: { en: "Ergative" } },
              { text: { west: "тэ", east: "дэ" } },
              { text: { west: "шъо", east: "фэ" } },
            ],
            [
              { text: { en: "Instrumental" } },
              { text: { west: "тэркӏэ", east: "дэркӏэ" } },
              { text: { west: "шъоркӏэ", east: "фэркӏэ" } },
            ],
            [
              { text: { en: "Adverbial" } },
              { text: { west: "тэрэу", east: "дэрэу" } },
              { text: { west: "шъорэу", east: "фэрэу" } },
            ],
          ]}
        />
      </GrammarBookContainer>
    </>
  );
}
