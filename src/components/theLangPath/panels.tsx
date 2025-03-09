import React from "react";
import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import PanelDiv from "~/components/panelDiv";
import {
  ITheLangPathExampleInEachLangRow,
  ITheLangPathLesson,
  ITheLangPathLetterIntroductionRow,
  ITheLangPathPanel,
} from "~/interfaces/theLangPath";
import { ICharacter, ICharacterBank } from "~/interfaces";

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

export const LESSON_CHARACTERS: ICharacterBank[] = [
  {
    names: ["Данэ", "Нэрыт", "lазэ", "Нэрыс", "Дэнэф", "Разэ", "Симаз", "Симэ", "Синэмис"],
    avatar: "/lessons/faces/14.png",
  },
  {
    names: ["Сэтэнай", "Нэф", "Нэфын"],
    avatar: "/lessons/faces/10.png",
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
    avatar: "/lessons/faces/4.png",
  },
  {
    names: ["Аслъан", "Чан", "Озырмэдж", "Пщымаф", "Тембот"],
    avatar: "/lessons/faces/13.png",
  },
];

export function getCharacterByName(name: string): ICharacter {
  const found = LESSON_CHARACTERS.find((character) => {
    return character.names.includes(name);
  });
  return {
    name: name,
    avatar: found?.avatar || "/lessons/faces/16.png",
  };
}

export function convertDataToPanelComponent(panel: ITheLangPathPanel): React.ReactNode {
  switch (panel.type) {
    case "letterIntroduction":
      return convertLetterIntroductionRowArrayToPanelComponent(
        panel.data as ITheLangPathLetterIntroductionRow[],
        panel.audio,
      );
    case "exampleInEachLang":
      return convertExampleInEachLangRowToPanelComponent(
        panel.data as ITheLangPathExampleInEachLangRow[],
        panel.audio,
      );
  }
}

function _convertLetterIntroductionRowArrayToReactNodeMatrix(
  data: ITheLangPathLetterIntroductionRow[],
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

function _convertExampleInEachLangRowToReactNodeMatrix(
  data: ITheLangPathExampleInEachLangRow[],
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
  data: ITheLangPathLetterIntroductionRow[],
  audioPath: string,
) {
  return (
    <PanelDiv audioPath={audioPath}>
      <LessonTable
        contentMatrix={_convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function convertExampleInEachLangRowToPanelComponent(
  data: ITheLangPathExampleInEachLangRow[],
  audioPath: string,
) {
  return (
    <PanelDiv audioPath={audioPath}>
      <LessonTable
        contentMatrix={_convertExampleInEachLangRowToReactNodeMatrix(data, 4)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}
