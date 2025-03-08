import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import React from "react";
import PanelDiv from "../panelDiv";
import { ILangToTranslationMap } from "~/interfaces";
import lessonData from "~/constants/theLangPath/lesson_0.json";

export interface ILetterIntroductionRow {
  letter: string;
  imgUrl: string;
  wordExample: string;
  translationsMap: ILangToTranslationMap;
}

export interface IExampleInEachLangRow {
  cir: string;
  ar: string;
  en: string;
  he: string;
}

interface ILesson0Panel {
  title: string;
  audio: string;
  type: "letterIntroduction" | "exampleInEachLang";
  data: ILetterIntroductionRow[] | IExampleInEachLangRow[];
}

function getLesson0Content(): React.ReactNode {
  const content = lessonData as ILesson0Panel[];
  for (const panel of content) {
    switch (panel.type) {
      case "letterIntroduction":
        return convertLetterIntroductionRowArrayToPanelComponent(
          panel.data as ILetterIntroductionRow[],
          panel.audio,
        );
      case "exampleInEachLang":
        return convertExampleInEachLangRowToPanelComponent(
          panel.data as IExampleInEachLangRow[],
          panel.audio,
        );
    }
  }
}

function convertLetterIntroductionRowArrayToReactNodeMatrix(
  data: ILetterIntroductionRow[],
  numberOfColumns = 6,
): React.ReactNode[][] {
  const contentMatrix: React.ReactNode[][] = [];
  let currentRow: React.ReactNode[] = [];
  let index = 0;

  for (const row of data) {
    const node = (
      <LessonTableCell
        key={row.letter}
        firstRow={row.letter} // Extract first part of the letter
        secondRow={row.wordExample}
        imgUrl={`/lessons/lesson_0/pictures/${row.imgUrl}`}
        langToTranslationMap={row.translationsMap}
      />
    );

    currentRow.push(node);

    if (currentRow.length === numberOfColumns || index === data.length - 1) {
      contentMatrix.push(currentRow);
      currentRow = [];
    }

    index++;
  }

  return contentMatrix;
}

function convertExampleInEachLangRowToReactNodeMatrix(
  data: IExampleInEachLangRow[],
  columnsPerRow: number = 4,
): React.ReactNode[][] {
  const result: React.ReactNode[][] = [];
  for (let i = 0; i < data.length; i += columnsPerRow) {
    const row = data
      .slice(i, i + columnsPerRow)
      .map((cell) => (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ en: cell.en, ar: cell.ar, he: cell.he }}
        />
      ));
    result.push(row);
  }

  return result;
}

export function convertLetterIntroductionRowArrayToPanelComponent(
  data: ILetterIntroductionRow[],
  audioPath: string,
) {
  return (
    <PanelDiv audioPath={audioPath}>
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function convertExampleInEachLangRowToPanelComponent(
  data: IExampleInEachLangRow[],
  audioPath: string,
) {
  return (
    <PanelDiv audioPath={audioPath}>
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data, 4)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}
