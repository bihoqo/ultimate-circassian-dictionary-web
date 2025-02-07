import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import React from "react";
import PanelDiv from "../components/panelDiv";

export function Lesson_0_1() {
  const origin = [
    <LessonTableCell
      letter="А"
      example="Атакъэ"
      langToTranslationMap={{ En: "Rooster", Ar: "ديك" }}
    />,
  ];

  return (
    <PanelDiv>
      <LessonTable
        originTextMatrix={origin}
        translationTextMatrix={translation}
        showIndexes={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_2() {
  const origin = [
    ["О-сы", "Уа-сэ", "Са-сэ", "Си-мэ"],
    ["Се-сы", "Уис", "Е-сы", "Мы-е"],
    ["Ис", "Уа-е", "Сис", "Е-о"],
    ["У-сэ", "Мэу", "Ау", "Сэ"],
  ];

  const translation = [
    ["snow", "price", "girl", "Sima"],
    ["I'm swimming", "you're sitting inside", "he's swimming", "apple"],
    ["he's sitting inside", "rainy weather", "I'm sitting inside", "he's hitting it"],
    ["poem", "here", "there", "I"],
  ];

  return (
    <div className="flex flex-col gap-6">
      <LessonTable
        originTextMatrix={origin}
        translationTextMatrix={translation}
        showIndexes={true}
      />
    </div>
  );
}

export function Lesson_0_3() {
  const origin = [
    ["О-сы", "Уа-сэ", "Са-сэ", "Си-мэ"],
    ["Се-сы", "Уис", "Е-сы", "Мы-е"],
    ["Ис", "Уа-е", "Сис", "Е-о"],
    ["У-сэ", "Мэу", "Ау", "Сэ"],
  ];

  const translation = [
    ["snow", "price", "girl", "Sima"],
    ["I'm swimming", "you're sitting inside", "he's swimming", "apple"],
    ["he's sitting inside", "rainy weather", "I'm sitting inside", "he's hitting it"],
    ["poem", "here", "there", "I"],
  ];

  return (
    <div className="flex flex-col gap-6">
      <LessonTable
        originTextMatrix={origin}
        translationTextMatrix={translation}
        showIndexes={true}
        gapBetweenRows={10}
      />
    </div>
  );
}
