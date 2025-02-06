import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";
import { LESSON_CHARACTERS } from "~/constants/lessons";
import React from "react";

export function Lesson_2_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        character={LESSON_CHARACTERS[0]}
        originText="Уимафэ шlу. Сэ сцIэр Данэ. О сыда пцlэр?"
        translationText="Good day. My name is Dana. What is your name?"
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
        character={LESSON_CHARACTERS[1]}
        originText="Сэ сцlэр Сэтэнай."
        translationText="My name is Satanay."
        inlineTranslations={["I", "name is", "Satanay"]}
      />
    </div>
  );
}
