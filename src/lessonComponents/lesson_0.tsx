import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import React from "react";
import PanelDiv from "../components/panelDiv";

export function Lesson_0_1() {
  const content = [
    [
      <LessonTableCell
        firstRow="А"
        secondRow="Атакъэ"
        imgUrl={"/lessons/suad/0061.jpg"}
        langToTranslationMap={{ En: "Rooster", Ar: "ديك" }}
      />,
    ],
  ];

  return (
    <PanelDiv>
      <LessonTable contentMatrix={content} showIndexes={false} />
    </PanelDiv>
  );
}
