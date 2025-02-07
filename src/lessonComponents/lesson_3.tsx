import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";
import React from "react";

export function Lesson_3_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Блан"
        originText="Тыдэ укъикIыра?"
        translationText={{
          En: "From where are you?",
          Ar: "من أين أنت؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Дэнэф"
        originText="Хэусае сыкъекlы."
        translationText={{
          En: "I am from Khousai.",
          Ar: "أنا من خهوساي.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Блан"
        originText="Сыда пцIэр?"
        translationText={{
          En: "What is your name?",
          Ar: "ما هو اسمك؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Дэнэф"
        originText="lэбрэдж Дэнэф."
        translationText={{
          En: "My name is Lebredzh Denef.",
          Ar: "لبزو دنف.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Блан"
        originText="Сыда бзэу пшlэхэрэр?"
        translationText={{
          En: "What languages do you know?",
          Ar: "أية لغات تعرف؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Дэнэф"
        originText="Адыгабзэрэ урысыбзэрэ."
        translationText={{
          En: "Adyghe and Russian.",
          Ar: "الأديغابزة والروسية.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_3_2() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Пэрыт"
        originText="Сэ сцlэр Пэрыт, Хъун Пэрыт."
        translationText={{
          En: "My name is Perit, Khun Perit.",
          Ar: "برت: أنا اسمي برت،",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Пэрыт"
        originText="Сэ Аманы сыщэпсэу"
        translationText={{
          En: "I live in Amman.",
          Ar: "خُن برت. أنا أعيش في عمان.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Пэрыт"
        originText="Сэ адыгабзэрэ арапыбзэрэ сэшlэ."
        translationText={{
          En: "I know Adyghe and Arabic.",
          Ar: "أنا أعرف الأديغية والعربية.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
