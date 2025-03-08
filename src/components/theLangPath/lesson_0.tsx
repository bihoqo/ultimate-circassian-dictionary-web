import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import React from "react";
import PanelDiv from "../panelDiv";
import { ILangToTranslationMap } from "~/interfaces";

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
    const row = data.slice(i, i + columnsPerRow).map((cell) => (
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


export function convertLetterIntroductionRowArrayToPanelComponent(data: ILetterIntroductionRow[], audioPath: string) {
  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\0_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_2() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\1_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_2b() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\1_2.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_3() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\1_3.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_4() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\2_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_5() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\2_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_6() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\3_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_7() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\3_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_8() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\4_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_9() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\4_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_10() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\5_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_11() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\5_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_12() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\6_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_13() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\6_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_14() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\7_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_15() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\7_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_16() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\7_3.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_17() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\8_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_18() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\8_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_19() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\9_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_20() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\9_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_21() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\9_3.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_22() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\10_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_23() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\10_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_24() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\11_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_25() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\11_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_26() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\12_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_27() {
  const data: IExampleInEachLangRow[][] =;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\12_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_28() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\12_3.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_29() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\13_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_30() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\13_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_31() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\14_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_32() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\14_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_33() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\15_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_34() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\15_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_35() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\16_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_36() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\16_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_37() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\16_3.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_38() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_39() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_40() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_3.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_41() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_4.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_42() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\18_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_43() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\18_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_44() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\19_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_45() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\19_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_46() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\20_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_47() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\20_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_48() {
  const data: ILetterIntroductionRow[] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\21_1.mp3">
      <LessonTable
        contentMatrix={convertLetterIntroductionRowArrayToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_49() {
  const data: IExampleInEachLangRow[][] = ;

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\21_2.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_50() {
  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\22_1.mp3">
      <LessonTable
        contentMatrix={convertExampleInEachLangRowToReactNodeMatrix(data)}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}
