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
} from "~/interfaces/theLangPath";
import TheLangPathDialogBubble from "~/components/theLangPath/theLangPathDialogBubble";

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
  return (
    <TheLangPathDialogBubble
      leftOrRight={data.leftOrRight}
      characterName={data.characterName}
      originText={data.originText}
      langToTranslationMap={{
        en: data.langToTranslationMap.en,
        ar: data.langToTranslationMap.ar,
        he: data.langToTranslationMap.he,
      }}
    />
  );
}
