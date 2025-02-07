import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";
import LessonTable from "~/components/lessons/lessonTable";
import React from "react";

export function Lesson_0_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Уимафэ шlу. Сэ сцIэр Данэ. О сыда пцlэр?"
        translationText={{
          En: "Good day. My name is Dana. What is your name?",
          Ar: "",
        }}
        inlineTranslations={[
          "your day",
          "good",
          "I",
          "my name is",
          "Dana",
          "you",
          "what is",
          "your name",
        ]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Сэ сцlэр Сэтэнай."
        translationText={{
          En: "My name is Satanay.",
          Ar: "",
        }}
        inlineTranslations={["I", "name is", "Satanay"]}
      />
    </div>
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
