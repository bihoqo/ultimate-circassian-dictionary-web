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
          En: "Hello. My name is Nart. What is your name?",
          Ar: "نارت: مرحبا. أنا اسمي نارت. أنت ما هو اسمك ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Аслъан"
        originText="Сэ сцlэр Аслъан."
        translationText={{
          En: "My name is Aslan.",
          Ar: "أسلان :  أنا اسمي أسلان.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нарт"
        originText="Тыдэ укъикIыра, Аслъан?"
        translationText={{
          En: "From where are you Aslan?",
          Ar: " نارت : من أين أنت أسلان؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Аслъан"
        originText="Сэ Истамбулы сыкъекIы. О тыдэ укъикIыра?"
        translationText={{
          En: "I am from Istanbul. And you?",
          Ar: "أسلان: أنا من إسطنبول . من أين أنت ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нарт"
        originText="Сэ Налчыкы сыкъекlы."
        translationText={{
          En: "I am from Nalchik.",
          Ar: "نارت : أنا من نالتشيك.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_1_3() {
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

export function Lesson_1_4() {
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

export function Lesson_1_5() {
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

export function Lesson_1_6() {
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

export function Lesson_1_7() {
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

export function Lesson_1_8() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Разэ"
        originText="Уимафэ шIу, сэ сцIэр Нэфыш Разэ."
        translationText={{
          En: "Good morning, my name is Razé.",
          Ar: "رازة: نهارك سعيد  ، أنا اسمي رازة.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Hypбый"
        originText="Уимафэ шIу. Сэ сцIэр Гъоркlожъ Hypбый."
        translationText={{
          En: "Good morning. My name is Gorkoj Hypбый.",
          Ar: "نوربي: نهارك سعيد ، أنا اسمي غوركؤج نوربي.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Разэ"
        originText="Къысфэгъэгъу, сыдa пцIэр?"
        translationText={{
          En: "Excuse me, what is your name?",
          Ar: "رازة: عفوا، ما هو اسمك ؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Hypбый"
        originText="Гъоркlожъ Hypбый, сэ Дузджэм сыщыщ. О тыдэ ущыщa?"
        translationText={{
          En: "Gorkoj Hypбый, I am from Duzdjem. Where are you from?",
          Ar: "نوربي: غوركؤج نوربي، أنا من دُزجه، من أين أنت؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Разэ"
        originText="Сэ Iэнкъэрэм сыщыщ."
        translationText={{
          En: "I am from Anqara.",
          Ar: "رازة: أنا من أنقره.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_1_9() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Озырмэс"
        originText="Уимафэ шIу, сэ сцIэр Уджыхъу Озырмэс."
        translationText={{
          En: "Good morning, my name is Ujyhu Ozirmes.",
          Ar: "وَزِرمس: نهارك سعيد  ، أنا اسمي وِجوخ وَزِرمس.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Чан"
        originText="Уимафэ шIу, ныбджэгъу Озырмэс, Сэ сцIэр Хьэлэо Чан."
        translationText={{
          En: "Good morning, my name is Ujyhu, my name is Heleo Chan.",
          Ar: "تشان: نهارك سعيد  ، صديقي وِجوخ وَزِرمس. أنا اسمي حَلَوه تشان.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Озырмэс"
        originText="Тыдэ укъикIыра?"
        translationText={{
          En: "Where are you from?",
          Ar: "وَزِرمس: من أين أنت؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Чан"
        originText="Сэ Пэнэхэсы сыщыщ, оры?"
        translationText={{
          En: "I am from Panakes, and you?",
          Ar: "تشان: أنا من بنة-خهس. أنت؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Озырмэс"
        originText="ТIуапсэ сыщыщ."
        translationText={{
          En: "I am from Tjwaps.",
          Ar: "وَزِرمس: أنا من  طوابسه.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_1_10() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симаз"
        originText="Уипчыхьэ шIу."
        translationText={{
          En: "Good evening.",
          Ar: "سيماز: مساء الخير.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Къазбэч"
        originText="Уипчыхьэ шIу, сэ сцIэр Гъунэжьыкъо Къазбэч."
        translationText={{
          En: "Good evening, my name is Gunéjyko Kъazbэch.",
          Ar: "قازبَتش: مساء الخير، أنا اسمي غوه-نَجِقوه قربَتش",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симаз"
        originText="Къысфэгъэгъу, сыдa пцIэр?"
        translationText={{
          En: "Excuse me, what is your name?",
          Ar: "سيماز: عفوا، ما هو اسمك؟",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Къазбэч"
        originText="Гъунэжьыкъо, Гъунэжьыкъо Къазбэч."
        translationText={{
          En: "Gunéjyko, Gunéjyko Kъazbэch.",
          Ar: "قازبَتش: غوه-نَجِقوه، غوه-نَجِقوه قربَتش.",
        }}
        inlineTranslations={[]}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симаз"
        originText="Сэ сцIэр Симаз, Джантыгъ Симаз."
        translationText={{
          En: "My name is Simaz, Jantig Simaz.",
          Ar: "سيماز: أنا اسمي سيماز، جانتِغ سيماز.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_1_11() {
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

export function Lesson_1_12() {
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

export function Lesson_1_13() {
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

export function Lesson_1_14() {
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

export function Lesson_1_15() {
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

export function Lesson_1_16() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Тембот"
        originText="Сэ сцlэр Мэщбэшlэ Тембот. Сэ 40 синыбжь. Мыекъопэ къалэ сыщэпсэу. Мекъуапэ Адыгаем икъэлэ шъхьаl. Сэ сыпхъашl. унэхэр пхъэкlэ сшlынхэр сикlас."
        translationText={{
          En: "My name is Mashbashah Tembot. I am 40 years old. I live in the city of Maikop. Maikop is the capital of Adygea. I am a carpenter. I like building houses with wood.",
          Ar: "أنا اسمي مَشبَشّأه تيمبوت. أنا عمري 40. أعيش في مدينة مايكوب. مايكوب هي عاصمة الأديغي. أنا نجار. أحب بناء البيوت بالخشب.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_1_17() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Бибэрс"
        originText="Сэ сцlэр Хъут Бибэрс. Сэ Чэркескы сыщэпсэу. Черкеск республикэм Черкеск икъэлэ шъхьаl. 37 синыбжь. Сэ сытхакlу. усэхэр Адыгабзэкlэ стхынхэр сикlас. къэсщагъ. Бынэу кlэлэцlыкlуищ сиl."
        translationText={{
          En: "My name is Khuut Bibers. I live in Cherkessk. Cherkessk is the capital of the Circassian republic. I am 37 years old. I am a writer. I like writing poetry in Adyghe. I am married. I have three young children.",
          Ar: "أنا اسمي خُت بيبرس. أنا أعيش في تشركيسك. تشركيسك هي عاصمة جمهورية الشركس. عمري 37. أنا كاتب. أحب كتابة الأشعار بالأديغابزة. متزوج. لدي ثلاثة أولاد صغار.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_1_18() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Синэмис"
        originText="Сэ сцlэр Цэй Синэмис . 25 синыбжь. Налчыкы сыдэс. Налчык Къэбэртаим икъэлэ шъхьаl. Сэ сыегъэджакlу. Адыгабзэ есэгъаджэх. Адыгабзэр сикlас. Джыри езгъэджэнхэр сикlас. Сэ сыдэкlуагъ. Пшъашъэ сиl, Синэ ыцlэр, илъэситlу ыныбжь."
        translationText={{
          En: "My name is Tzei Sinemis. I am 25 years old. I live in Nalchik. Nalchik is the capital of Kabardino-Balkaria. I am a teacher. I teach Adyghe. I love Adyghe. I also love teaching. I am married. I have a daughter, her name is Sina, she is two years old.",
          Ar: "أنا اسمي تزي سينميس. عمري 25. أسكن في نالتشيك. نالتشيك هي عاصمة القبرتاي. أنا معلمة. أعلم الأديغابزة. أحب الأديغابزة. وأيضا أحب التعليم. أنا متزوجة. لدي إبنة، اسمها سينا ، عمرها سنتين.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
