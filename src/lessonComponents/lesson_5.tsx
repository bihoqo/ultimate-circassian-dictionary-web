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
          En: "This is Khut Sine.",
          Ar: "نفن: هذا خُت سينه.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Тыдэ ар къикlыра?"
        translationText={{
          En: "Where is it from?",
          Ar: "دانا: من أين هي  ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Ар Нарткъалэ къекlы."
        translationText={{
          En: "It is from Nartkale.",
          Ar: "نفن: :  إنها من نارتقاله",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Тыдэ щыl а Нарткъалэp?"
        translationText={{
          En: "Where is Nartkale?",
          Ar: "دانا: أين تقع نارتقاله؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Къэбэртаим ит."
        translationText={{
          En: "It is in Khebertaim.",
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

export function Lesson_5_2() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName=""
        originText="Адыгэбзэ тхыбзэхэр зэдгъэшlэщтых"
        translationText={{
          En: "We will learn the Adyghe alphabet",
          Ar: "سنتعلم الأحرف الأديغية",
        }}
        inlineTranslations={[]}
      />

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">А</th>
              <th className="border-b px-4 py-2">Б</th>
              <th className="border-b px-4 py-2">В</th>
              <th className="border-b px-4 py-2">Г</th>
              <th className="border-b px-4 py-2">ГЪ</th>
              <th className="border-b px-4 py-2">Д</th>
              <th className="border-b px-4 py-2">ДЖ</th>
              <th className="border-b px-4 py-2">ДЗ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">Е</td>
              <td className="border-b px-4 py-2">Ж</td>
              <td className="border-b px-4 py-2">ЖЪ</td>
              <td className="border-b px-4 py-2">ЖЬ</td>
              <td className="border-b px-4 py-2">З</td>
              <td className="border-b px-4 py-2">И</td>
              <td className="border-b px-4 py-2">Й</td>
              <td className="border-b px-4 py-2">К</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">КЪ</td>
              <td className="border-b px-4 py-2">Л</td>
              <td className="border-b px-4 py-2">ЛЪ</td>
              <td className="border-b px-4 py-2">М</td>
              <td className="border-b px-4 py-2">Н</td>
              <td className="border-b px-4 py-2">О</td>
              <td className="border-b px-4 py-2">П</td>
              <td className="border-b px-4 py-2">Р</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">С</td>
              <td className="border-b px-4 py-2">Т</td>
              <td className="border-b px-4 py-2">У</td>
              <td className="border-b px-4 py-2">Ф</td>
              <td className="border-b px-4 py-2">Х</td>
              <td className="border-b px-4 py-2">ХЪ</td>
              <td className="border-b px-4 py-2">ХЬ</td>
              <td className="border-b px-4 py-2">Ц</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Ч</td>
              <td className="border-b px-4 py-2">ЧЪ</td>
              <td className="border-b px-4 py-2">Ш</td>
              <td className="border-b px-4 py-2">ШЪ</td>
              <td className="border-b px-4 py-2">Щ</td>
              <td className="border-b px-4 py-2">Ы</td>
              <td className="border-b px-4 py-2">Э</td>
              <td className="border-b px-4 py-2">Я</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2" colSpan={8}>
                I
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Lesson_5_3() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Уипчэдыжь шlу. Сыда плъэкъуацlэр?"
        translationText={{
          En: "Good morning. What is your last name?",
          Ar: "سيما: صباح الخير. ما هو اسم عائلتك ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Гъукlэлl."
        translationText={{
          En: "Gutchel.",
          Ar: "ستناي: غوتشلأ.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Сыд? Тащ фэдэу птхыщт?"
        translationText={{
          En: "What? How is it written?",
          Ar: "سيما: ماذا ؟ كيف تكتب؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Гу - кlэлл"
        translationText={{
          En: "Gu - Chel",
          Ar: "ستناي: غو-تشلأ.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Дэгъу. Сыда пцlэр?"
        translationText={{
          En: "Okay. What is your name?",
          Ar: "سيما: حسنا. ما هو اسمك؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Сэтэнай. Сэ - тэ - най"
        translationText={{
          En: "Setenay. S - T - NAY.",
          Ar: "ستناي: ستناي. س-ت-ناي",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Дэгъу. Тыдэ ущыпсэурэ?"
        translationText={{
          En: "Okay. Where do you live?",
          Ar: "سيما: حسنا. أين تعيش؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Сэ мыекъуапэ сыщэпсэу."
        translationText={{
          En: "I live in Maikop.",
          Ar: "ستناي: أنا أعيش في مايكوب.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_5_4() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Сыда пцIэр?"
        translationText={{
          En: "What is your name?",
          Ar: "باتر: ما هو اسمك؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Озырмэдж"
        originText="Озырмэдж"
        translationText={{
          En: "Ozyrmedj",
          Ar: "وزِرمج: وزِرمج.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Къысфэгъэгъу, сыда пцIэр?"
        translationText={{
          En: "Excuse me, what is your name?",
          Ar: "باتر: عفوا، ما هو اسمك؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Озырмэдж"
        originText="Озырмэдж"
        translationText={{
          En: "Ozyrmedj",
          Ar: "وزِرمج: وزِرمج.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Тащ фэдэу птхыщт?"
        translationText={{
          En: "How is it written?",
          Ar: "باتر: كيف تكتب؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Озырмэдж"
        originText="О-зыр-мэдж"
        translationText={{
          En: "O-Zyr-Medj",
          Ar: "وزِرمج: و-زِر-مج",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Тхьэуегъэпсэу"
        translationText={{
          En: "Thank you.",
          Ar: "باتر: شكرا",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_5_5() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Сыда пцIэр?"
        translationText={{
          En: "What is your name?",
          Ar: "جباغ: ما هو اسمك؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Пщымаф"
        originText="Пщымаф"
        translationText={{
          En: "Pshymaph",
          Ar: "بشِماف: بشِماف",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Пщэмыфа?"
        translationText={{
          En: "Pshymaph?",
          Ar: "جباغ: بشَمف",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Пщымаф"
        originText="Хьау."
        translationText={{
          En: "Yes.",
          Ar: "بشِماف: لا",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Тащ фэдэу птхыщт, къысэпlона?"
        translationText={{
          En: "How is it written, can you tell me?",
          Ar: "جباغ: كيف تكتب؟هل يمكن أن تقول لي؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Пщымаф"
        originText="Пщы-маф"
        translationText={{
          En: "Pshy-maf",
          Ar: "بشِماف: بشِ-ماف",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Тхьэуегъэпсэу"
        translationText={{
          En: "Thank you.",
          Ar: "جباغ: شكرا",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
