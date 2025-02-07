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
        translationText={{
          En: "Good day. My name is Dana. What is your name?",
          Ar: "دانا: نهارك سعيد ، أنا اسمي  دانا ، أنت ما هو اسمك ؟",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
