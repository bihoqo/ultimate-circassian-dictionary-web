import React from "react";
import TheLangPathTable, { TheLangPathTableCell } from "~/components/theLangPath/theLangPathTable";
import PanelDiv from "~/components/panelDiv";
import {
  ITheLangPathCharacter,
  ITheLangPathCharacterBank,
  ITheLangPathExamplesInEachLangTableRow,
  ITheLangPathLesson,
  ITheLangPathLetterIntroductionTableRow,
  ITheLangPathPanel,
  ITheLangPathPart,
} from "~/interfaces/theLangPath";

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

export const LESSON_CHARACTERS: ITheLangPathCharacterBank[] = [
  {
    names: ["Данэ", "Нэрыт", "lазэ", "Нэрыс", "Дэнэф", "Разэ", "Симаз", "Симэ", "Синэмис"],
    avatar: "/theLangPath/faces/14.png",
  },
  {
    names: ["Сэтэнай", "Нэф", "Нэфын"],
    avatar: "/theLangPath/faces/10.png",
  },
  {
    names: [
      "Нарт",
      "Енал",
      "Заур",
      "Блан",
      "Пэрыт",
      "Hypбый",
      "Озырмэс",
      "Къазбэч",
      "Батыр",
      "Джэбагъ",
      "Бибэрс",
    ],
    avatar: "/theLangPath/faces/4.png",
  },
  {
    names: ["Аслъан", "Чан", "Озырмэдж", "Пщымаф", "Тембот"],
    avatar: "/theLangPath/faces/13.png",
  },
];

export function getCharacterByName(name: string): ITheLangPathCharacter {
  const found = LESSON_CHARACTERS.find((character) => {
    return character.names.includes(name);
  });
  return {
    name: name,
    avatar: found?.avatar || "/theLangPath/faces/16.png",
  };
}

export function convertDataToPanelComponent(panelPart: ITheLangPathPart): React.ReactNode {
  switch (panelPart.type) {
    case "letterIntroduction":
      return convertLetterIntroductionRowArrayToPanelComponent(
        panelPart.data as ITheLangPathLetterIntroductionTableRow[],
        panelPart.audio,
      );
    case "exampleInEachLang":
      return convertExampleInEachLangRowToPanelComponent(
        panelPart.data as ITheLangPathExamplesInEachLangTableRow[],
        panelPart.audio,
      );
  }
}

function _convertLetterIntroductionRowArrayToReactNodeMatrix(
  data: ITheLangPathLetterIntroductionTableRow[],
  numberOfColumns = 6,
): React.ReactNode[][] {
  const contentMatrix: React.ReactNode[][] = [];
  let currentRow: React.ReactNode[] = [];
  let index = 0;

  for (const row of data) {
    const node = (
      <TheLangPathTableCell
        key={row.letter}
        firstRow={row.letter} // Extract first part of the letter
        secondRow={row.wordExample}
        imgUrl={`/theLangPath/lesson_0/pictures/${row.imgUrl}`}
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

function _convertExampleInEachLangRowToReactNodeMatrix(
  data: ITheLangPathExamplesInEachLangTableRow[],
  columnsPerRow: number = 4,
): React.ReactNode[][] {
  const result: React.ReactNode[][] = [];
  for (let i = 0; i < data.length; i += columnsPerRow) {
    const row = data
      .slice(i, i + columnsPerRow)
      .map((cell) => (
        <TheLangPathTableCell
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
  data: ITheLangPathLetterIntroductionTableRow[],
  audioPath: string,
) {
  return (
    <PanelDiv audioPath={audioPath}>
      <TheLangPathTable
        contentMatrix={_convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function convertExampleInEachLangRowToPanelComponent(
  data: ITheLangPathExamplesInEachLangTableRow[],
  audioPath: string,
) {
  return (
    <PanelDiv audioPath={audioPath}>
      <TheLangPathTable
        contentMatrix={_convertExampleInEachLangRowToReactNodeMatrix(data, 4)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}
