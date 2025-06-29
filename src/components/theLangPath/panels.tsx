import React from "react";
import TheLangPathTable, { TheLangPathTableCell } from "~/components/theLangPath/theLangPathTable";
import {
  ITheLangPathCharacter,
  ITheLangPathCharacterBank,
  ITheLangPathDialogBubble,
  ITheLangPathExamplesInEachLangTableRow,
  ITheLangPathLesson,
  ITheLangPathLetterIntroductionTableRow,
  ITheLangPathPart,
  ITheLangPathPoem,
} from "~/interfaces/theLangPath";
import TheLangPathDialogBubble from "~/components/theLangPath/theLangPathDialogBubble";
import TheLangPathPoem from "~/components/theLangPath/theLangPathPoem";

export const LESSONS_LIST: ITheLangPathLesson[] = [
  {
    index: 0,
    title: "The Letters",
  },
  {
    index: 1,
    title: "Welcome",
  },
  {
    index: 2,
    title: "How are You?",
  },
  {
    index: 3,
    title: "What is The Price of This?",
  },
  {
    index: 4,
    title: "What is The Time",
  },
  {
    index: 5,
    title: "How Can I Help You?",
  },
  {
    index: 6,
    title: "Family Life",
  },
];

export function convertDataToPanelPartComponent(panelPart: ITheLangPathPart): React.ReactNode {
  switch (panelPart.type) {
    case "letterIntroduction":
      return _handleLetterIntroductionTableRow(
        panelPart.data as ITheLangPathLetterIntroductionTableRow[],
        4,
      );
    case "exampleInEachLang":
      return _handleExamplesInEachLangTableRow(
        panelPart.data as ITheLangPathExamplesInEachLangTableRow[],
        4,
      );
    case "dialogBubble":
      return _handleDialogBubble(panelPart.data as ITheLangPathDialogBubble);
    case "poem":
      return _handlePoem(panelPart.data as ITheLangPathPoem);
    default:
      return <p>Not Found</p>;
  }
}

export function _handleLetterIntroductionTableRow(
  data: ITheLangPathLetterIntroductionTableRow[],
  numberOfColumns = 4,
): React.ReactNode {
  const contentMatrix: React.ReactNode[][] = [];
  let currentRow: React.ReactNode[] = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    currentRow.push(
      <TheLangPathTableCell
        key={row.letter}
        firstRow={row.letter}
        secondRow={row.wordExample}
        imgUrl={`/theLangPath/lesson_0/pictures/${row.imgUrl}`}
        langToTranslationMap={row.translationsMap}
      />,
    );

    if (currentRow.length === numberOfColumns || i === data.length - 1) {
      contentMatrix.push(currentRow);
      currentRow = [];
    }
  }

  return (
    <TheLangPathTable
      contentMatrix={contentMatrix}
      showIndexes={false}
      className=""
      showBackgroundColors={true}
    />
  );
}

export function _handleExamplesInEachLangTableRow(
  data: ITheLangPathExamplesInEachLangTableRow[],
  numberOfColumns = 4,
): React.ReactNode {
  const contentMatrix: React.ReactNode[][] = [];

  for (let i = 0; i < data.length; i += numberOfColumns) {
    const currentRow: React.ReactNode[] = [];

    for (let j = i; j < Math.min(i + numberOfColumns, data.length); j++) {
      currentRow.push(
        <TheLangPathTableCell
          key={data[j].cir}
          firstRow={data[j].cir}
          langToTranslationMap={{
            en: data[j].en,
            ar: data[j].ar,
            he: data[j].he,
          }}
        />,
      );
    }

    contentMatrix.push(currentRow);
  }

  return (
    <TheLangPathTable
      contentMatrix={contentMatrix}
      showIndexes={false}
      className=""
      showBackgroundColors={true}
    />
  );
}

export function _handleDialogBubble(data: ITheLangPathDialogBubble): React.ReactNode {
  return <TheLangPathDialogBubble data={data} />;
}

export function _handlePoem(data: ITheLangPathPoem): React.ReactNode {
  return <TheLangPathPoem data={data} />;
}
