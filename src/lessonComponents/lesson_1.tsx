import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";
import React from "react";

export function Lesson_1_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Уимафэ шlу. Сэ сцIэр Данэ. О сыда пцlэр?"
        translationText={{
          En: "Good day. My name is Dana. What is your name?",
          Ar: "دانا: نهارك سعيد ، أنا اسمي  دانا ، أنت ما هو اسمك ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Сэ сцlэр Сэтэнай."
        translationText={{
          En: "My name is Satenai.",
          Ar: "ستناي: أنا اسمي ستناي",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Тыдэ укъикIыра?"
        translationText={{
          En: "From where are you?",
          Ar: "دانا: من أين أنت؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Сэ Мыекъуапэ сыкъекIы."
        translationText={{
          En: "I am from Maykop.",
          Ar: "ستناي: أنا من مايكوب.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_1_2() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нарт"
        originText="Фэсапщи. Сэ сцIэр Нарт. О сыда пцlэр?"
        translationText={{
          En: "",
          Ar: "نارت: مرحبا. أنا اسمي نارت. أنت ما هو اسمك ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Аслъан"
        originText="Сэ сцlэр Аслъан."
        translationText={{
          En: "",
          Ar: "أسلان :  أنا اسمي أسلان.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нарт"
        originText="Тыдэ укъикIыра, Аслъан?"
        translationText={{
          En: "",
          Ar: " نارت : من أين أنت أسلان؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Аслъан"
        originText="Сэ Истамбулы сыкъекIы. О тыдэ укъикIыра?"
        translationText={{
          En: "",
          Ar: "أسلان: أنا من إسطنبول . من أين أنت ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нарт"
        originText="Сэ Налчыкы сыкъекlы."
        translationText={{
          En: "",
          Ar: "نارت : أنا من نالتشيك.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
