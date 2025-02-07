import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";
import React from "react";

export function Lesson_2_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нэрыт"
        originText="Фэсапщи, сэ сцIэр Нэрыт, Лащымэ сащыщ."
        translationText={{
          En: "Hello, my name is Neryt, I am from the Lash family.",
          Ar: "نَرِت: مرحبا، أنا اسمي نَرِت، أنا من آل لاش",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Енал"
        originText="Къеблагъ, сэ сцIэр Енал, Мышъэмэ сащыщ."
        translationText={{
          En: "Welcome, my name is Yenal, I am from the Myshe family.",
          Ar: "ينال: تفضل،  أنا اسمي ينال ، أنا من آل مِشَّه",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_2_2() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нэрыс"
        originText="Фэсапщи, сэ сцIэр Нэрыс."
        translationText={{
          En: "Hello, my name is Nerys.",
          Ar: "نَرِس: مرحبا، أنا اسمي نَرِس.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Заур"
        originText="Къеблагъ, сэ сцIэр Заур."
        translationText={{
          En: "Welcome, my name is Zaur.",
          Ar: "زاوِر: تفضل،  أنا اسمي زاوِر.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нэрыс"
        originText="Къысфэгъэгъу, сыда пцIэр?"
        translationText={{
          En: "Excuse me, what is your name?",
          Ar: "نَرِس: عفوا، ما هو اسمك ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Заур"
        originText="Заур."
        translationText={{
          En: "Zaur.",
          Ar: "زاوِر: زاوِر.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нэрыс"
        originText="Уимафэ шIу, Заур."
        translationText={{
          En: "Good day, Zaur.",
          Ar: "نَرِس: نهارك سعيد، زاوِر.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Заур"
        originText="Уимафэ шIу, Нэрыс."
        translationText={{
          En: "Good day, Nerys.",
          Ar: "زاوِر: نهارك سعيد، نَرِس.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_2_3() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="lазэ"
        originText="Уипчэдыжь шIу, сэ сцIэр lазэ. Сыда о пцIэр?"
        translationText={{
          En: "Good morning, my name is Laze. What is your name?",
          Ar: "آزة: صباح الخير، أنا اسمي أزه، ما هو اسمك ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэф"
        originText="Уипчэдыжь шIу, сэ сцIэр Нэф. Тыдэ ущыщ, lаз?"
        translationText={{
          En: "Good morning, my name is Nef. Where are you from, Laze?",
          Ar: "نَف: صباح الخير، أنا اسمي نَف. من أين أنت أز؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="lазэ"
        originText="Сэ Рихьаныем сыщыщ."
        translationText={{
          En: "I am from Reyhanli.",
          Ar: "أزه: أنا من الريحانية.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
