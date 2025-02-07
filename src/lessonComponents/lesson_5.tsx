import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";
import React from "react";

export function Lesson_5_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Хэтa мыр ?"
        translationText={{
          En: "Who is this?",
          Ar: "دانا: من هذا ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Мыр Хъут Синэ."
        translationText={{
          En: "This is K'hut Sine.",
          Ar: "نفن: هذا خُت سينه.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Тыдэ ар къикlыра?"
        translationText={{
          En: "Where is she from?",
          Ar: "دانا: من أين هي ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Ар Нарткъалэ къекlы."
        translationText={{
          En: "She is from Nartkala.",
          Ar: "نفن: إنها من نارتقاله",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Тыдэ щыl а Нарткъалэr?"
        translationText={{
          En: "Where is Nartkala located?",
          Ar: "دانا: أين تقع نارتقاله؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Къэбэртаим ит."
        translationText={{
          En: "It is located in the Kabertay.",
          Ar: "نفن: تقع في القبرتاي.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Ар адыгабзэкIэ мэгyщыIа?"
        translationText={{
          En: "Does she speak Adyghe?",
          Ar: "دانا: هل هي تتحدث الأديغية؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Ары, ар адыгабзэкIэ мэгyщыIэ."
        translationText={{
          En: "Yes, she speaks Adyghe.",
          Ar: "نفن: نعم هي تتحدث الاديغية.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
