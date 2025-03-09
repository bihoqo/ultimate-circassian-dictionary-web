import LessonDialogBubble, {
  ITheLangPathDialogBubble,
} from "~/components/lessons/lessonDialogBubble";
import React from "react";
import PanelDiv from "../panelDiv";

export function Lesson_1_1() {
  const content: ILessonDialogBubbleProps[] = [
    {
      leftOrRight: "left",
      characterName: "Данэ",
      originText: "Уимафэ шlу. Сэ сцIэр Данэ. О сыда пцlэр?",
      langToTranslationMap: {
        en: "Good day. My name is Dana. What is your name?",
        ar: "دانا: نهارك سعيد ، أنا اسمي  دانا ، أنت ما هو اسمك ؟",
        he: "יום טוב. שמי דנה. מה שמך?",
      },
    },
    {
      leftOrRight: "right",
      characterName: "Сэтэнай",
      originText: "Сэ сцlэр Сэтэнай.",
      langToTranslationMap: {
        en: "My name is Satenai.",
        ar: "ستناي: أنا اسمي ستناي",
        he: "שמי סטנאי.",
      },
    },
    {
      leftOrRight: "left",
      characterName: "Данэ",
      originText: "Тыдэ укъикIыра?",
      langToTranslationMap: {
        en: "From where are you?",
        ar: "دانا: من أين أنت؟",
        he: "מאיפה אתה?",
      },
    },
    {
      leftOrRight: "right",
      characterName: "Сэтэнай",
      originText: "Сэ Мыекъуапэ сыкъекIы.",
      langToTranslationMap: {
        en: "I am from Maykop.",
        ar: "ستناي: أنا من مايكوب.",
        he: "אני ממיקופ.",
      },
    },
  ];

  return (
    <PanelDiv>
      {content.map((props, index) => {
        return <LessonDialogBubble key={index} {...props} />;
      })}
    </PanelDiv>
  );
}

export function Lesson_1_2() {
  const content: ILessonDialogBubbleProps[] = [
    {
      leftOrRight: "left",
      characterName: "Нарт",
      originText: "Фэсапщи. Сэ сцIэр Нарт. О сыда пцlэр?",
      langToTranslationMap: {
        en: "Hello. My name is Nart. What is your name?",
        ar: "نارت: مرحبا. أنا اسمي نارت. أنت ما هو اسمك ؟",
        he: "שלום. שמי נארט. מה שמך?",
      },
    },
    {
      leftOrRight: "right",
      characterName: "Аслъан",
      originText: "Сэ сцlэр Аслъан.",
      langToTranslationMap: {
        en: "My name is Aslan.",
        ar: "أسلان :  أنا اسمي أسلان.",
        he: "שמי אסלאן.",
      },
    },
    {
      leftOrRight: "left",
      characterName: "Нарт",
      originText: "Тыдэ укъикIыра, Аслъан?",
      langToTranslationMap: {
        en: "From where are you Aslan?",
        ar: " نارت : من أين أنت أسلان؟",
        he: "מאיפה אתה אסלאן?",
      },
    },
    {
      leftOrRight: "right",
      characterName: "Аслъан",
      originText: "Сэ Истамбулы сыкъекIы. О тыдэ укъикIыра?",
      langToTranslationMap: {
        en: "I am from Istanbul. And you?",
        ar: "أسلان: أنا من إسطنبول . من أين أنت ؟",
        he: "אני מאיסטנבול. ואתה?",
      },
    },
    {
      leftOrRight: "left",
      characterName: "Нарт",
      originText: "Сэ Налчыкы сыкъекlы.",
      langToTranslationMap: {
        en: "I am from Nalchik.",
        ar: "نارت : أنا من نالتشيك.",
        he: "אני מנלצ'יק.",
      },
    },
  ];

  return (
    <PanelDiv>
      {content.map((props, index) => {
        return <LessonDialogBubble key={index} {...props} />;
      })}
    </PanelDiv>
  );
}

export function Lesson_1_3() {
  const content: ILessonDialogBubbleProps[] = [
    {
      leftOrRight: "left",
      characterName: "Нарт",
      originText: "Фэсапщи, сэ сцIэр Нарт, Налчыкы сащыщ.",
      langToTranslationMap: {
        en: "Hello, my name is Nart, I am from Nalchik.",
        ar: "نارت: مرحبا، أنا اسمي نارت، أنا من نالتشيك.",
        he: "שלום, שמי נארט, אני מנלצ'יק.",
      },
    },
    {
      leftOrRight: "right",
      characterName: "Аслъан",
      originText: "Къеблагъ, сэ сцIэр Аслъан, Истамбулы сащыщ.",
      langToTranslationMap: {
        en: "Welcome, my name is Aslan, I am from Istanbul.",
        ar: "أسلان: تفضل،  أنا اسمي أسلان، أنا من إسطنبول.",
        he: "ברוך הבא, שמי אסלאן, אני מאיסטנבול.",
      },
    },
  ];

  return (
    <PanelDiv>
      {content.map((props, index) => {
        return <LessonDialogBubble key={index} {...props} />;
      })}
    </PanelDiv>
  );
}

export function Lesson_1_4() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нэрыс"
        originText="Фэсапщи, сэ сцIэр Нэрыс."
        langToTranslationMap={{
          en: "Hello, my name is Nerys.",
          ar: "نَرِس: مرحبا، أنا اسمي نَرِس.",
          he: "שלום, שמי נאריס.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Заур"
        originText="Къеблагъ, сэ сцIэр Заур."
        langToTranslationMap={{
          en: "Welcome, my name is Zaur.",
          ar: "زاوِر: تفضل،  أنا اسمي زاوِر.",
          he: "ברוך הבא, שמי זאור.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нэрыс"
        originText="Къысфэгъэгъу, сыда пцIэр?"
        langToTranslationMap={{
          en: "Excuse me, what is your name?",
          ar: "نَرِس: عفوا، ما هو اسمك ؟",
          he: "סליחה, מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Заур"
        originText="Заур."
        langToTranslationMap={{
          en: "Zaur.",
          ar: "زاوِر: زاوِر.",
          he: "זאור.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Нэрыс"
        originText="Уимафэ шIу, Заур."
        langToTranslationMap={{
          en: "Good day, Zaur.",
          ar: "نَرِس: نهارك سعيد، زاوِر.",
          he: "יום טוב, זאור.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Заур"
        originText="Уимафэ шIу, Нэрыс."
        langToTranslationMap={{
          en: "Good day, Nerys.",
          ar: "زاوِر: نهارك سعيد، نَرِس.",
          he: "יום טוב, נאריס.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_5() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="lазэ"
        originText="Уипчэдыжь шIу, сэ сцIэр lазэ. Сыда о пцIэр?"
        langToTranslationMap={{
          en: "Good morning, my name is Laze. What is your name?",
          ar: "آزة: صباح الخير، أنا اسمي أزه، ما هو اسمك ؟",
          he: "בוקר טוב, שמי לאזה. מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэф"
        originText="Уипчэдыжь шIу, сэ сцIэр Нэф. Тыдэ ущыщ, lаз?"
        langToTranslationMap={{
          en: "Good morning, my name is Nef. Where are you from, Laze?",
          ar: "نَف: صباح الخير، أنا اسمي نَف. من أين أنت أز؟",
          he: "בוקר טוב, שמי נאף. מאיפה אתה לאזה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="lазэ"
        originText="Сэ Рихьаныем сыщыщ."
        langToTranslationMap={{
          en: "I am from Reyhanli.",
          ar: "أزه: أنا من الريحانية.",
          he: "אני מריחאניה.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_6() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Блан"
        originText="Тыдэ укъикIыра?"
        langToTranslationMap={{
          en: "From where are you?",
          ar: "من أين أنت؟",
          he: "מאיפה אתה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Дэнэф"
        originText="Хэусае сыкъекlы."
        langToTranslationMap={{
          en: "I am from Khousai.",
          ar: "أنا من خهوساي.",
          he: "אני מחוסאי.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Блан"
        originText="Сыда пцIэр?"
        langToTranslationMap={{
          en: "What is your name?",
          ar: "ما هو اسمك؟",
          he: "מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Дэнэф"
        originText="lэбрэдж Дэнэф."
        langToTranslationMap={{
          en: "My name is Abrej Denef.",
          ar: "لبزو دنف.",
          he: "שמי אברג' דנף.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Блан"
        originText="Сыда бзэу пшlэхэрэр?"
        langToTranslationMap={{
          en: "What languages do you know?",
          ar: "أية لغات تعرف؟",
          he: "אילו שפות אתה יודע?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Дэнэф"
        originText="Адыгабзэрэ урысыбзэрэ."
        langToTranslationMap={{
          en: "Adyghe and Russian.",
          ar: "الأديغابزة والروسية.",
          he: "אדיג'בזה ורוסית.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_7() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Пэрыт"
        originText="Сэ сцlэр Пэрыт, Хъун Пэрыт."
        langToTranslationMap={{
          en: "My name is Perit, Khun Perit.",
          ar: "برت: أنا اسمي برت،",
          he: "שמי פרית, חון פרית.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Пэрыт"
        originText="Сэ Аманы сыщэпсэу"
        langToTranslationMap={{
          en: "I live in Amman.",
          ar: "خُن برت. أنا أعيش في عمان.",
          he: "אני גר בעמאן.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Пэрыт"
        originText="Сэ адыгабзэрэ арапыбзэрэ сэшlэ."
        langToTranslationMap={{
          en: "I know Adyghe and Arabic.",
          ar: "أنا أعرف الأديغية والعربية.",
          he: "אני יודע אדיג'ה וערבית.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_8() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Разэ"
        originText="Уимафэ шIу, сэ сцIэр Нэфыш Разэ."
        langToTranslationMap={{
          en: "Good morning, my name is Razé.",
          ar: "رازة: نهارك سعيد  ، أنا اسمي رازة.",
          he: "בוקר טוב, שמי ראזה.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Hypбый"
        originText="Уимафэ шIу. Сэ сцIэр Гъоркlожъ Hypбый."
        langToTranslationMap={{
          en: "Good morning. My name is Gorkoj Hypбый.",
          ar: "نوربي: نهارك سعيد ، أنا اسمي غوركؤج نوربي.",
          he: "בוקר טוב. שמי גורקוג' נורבי.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Разэ"
        originText="Къысфэгъэгъу, сыдa пцIэр?"
        langToTranslationMap={{
          en: "Excuse me, what is your name?",
          ar: "رازة: عفوا، ما هو اسمك ؟",
          he: "סליחה, מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Hypбый"
        originText="Гъоркlожъ Hypбый, сэ Дузджэм сыщыщ. О тыдэ ущыщa?"
        langToTranslationMap={{
          en: "Gorkoj Hypбый, I am from Duzdjem. Where are you from?",
          ar: "نوربي: غوركؤج نوربي، أنا من دُزجه، من أين أنت؟",
          he: "גורקוג' נורבי, אני מדוזג'ם. מאיפה אתה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Разэ"
        originText="Сэ Iэнкъэрэм сыщыщ."
        langToTranslationMap={{
          en: "I am from Anqara.",
          ar: "رازة: أنا من أنقره.",
          he: "אני מאנקרה.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_9() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Озырмэс"
        originText="Уимафэ шIу, сэ сцIэр Уджыхъу Озырмэс."
        langToTranslationMap={{
          en: "Good morning, my name is Ujyhu Ozirmes.",
          ar: "وَزِرمس: نهارك سعيد  ، أنا اسمي وِجوخ وَزِرمس.",
          he: "בוקר טוב, שמי אוג'יחו אוזירמס.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Чан"
        originText="Уимафэ шIу, ныбджэгъу Озырмэс, Сэ сцIэр Хьэлэо Чан."
        langToTranslationMap={{
          en: "Good morning, my name is Ujyhu, my name is Heleo Chan.",
          ar: "تشان: نهارك سعيد  ، صديقي وِجوخ وَزِرمس. أنا اسمي حَلَوه تشان.",
          he: "בוקר טוב, שמי אוג'יחו, שמי חלאו צ'אן.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Озырмэс"
        originText="Тыдэ укъикIыра?"
        langToTranslationMap={{
          en: "Where are you from?",
          ar: "وَزِرمس: من أين أنت؟",
          he: "מאיפה אתה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Чан"
        originText="Сэ Пэнэхэсы сыщыщ, оры?"
        langToTranslationMap={{
          en: "I am from Panakes, and you?",
          ar: "تشان: أنا من بنة-خهس. أنت؟",
          he: "אני מפנקס, ואתה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Озырмэс"
        originText="ТIуапсэ сыщыщ."
        langToTranslationMap={{
          en: "I am from Tjwaps.",
          ar: "وَزِرمس: أنا من  طوابسه.",
          he: "אני מט'ואבס.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_10() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симаз"
        originText="Уипчыхьэ шIу."
        langToTranslationMap={{
          en: "Good evening.",
          ar: "سيماز: مساء الخير.",
          he: "ערב טוב.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Къазбэч"
        originText="Уипчыхьэ шIу, сэ сцIэр Гъунэжьыкъо Къазбэч."
        langToTranslationMap={{
          en: "Good evening, my name is Gunéjyko Kъazbэch.",
          ar: "قازبَتش: مساء الخير، أنا اسمي غوه-نَجِقوه قربَتش",
          he: "ערב טוב, שמי גונג'יקו קאזבצ'.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симаз"
        originText="Къысфэгъэгъу, сыдa пцIэр?"
        langToTranslationMap={{
          en: "Excuse me, what is your name?",
          ar: "سيماز: عفوا، ما هو اسمك؟",
          he: "סליחה, מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Къазбэч"
        originText="Гъунэжьыкъо, Гъунэжьыкъо Къазбэч."
        langToTranslationMap={{
          en: "Gunéjyko, Gunéjyko Kъazbэch.",
          ar: "قازبَتش: غوه-نَجِقوه، غوه-نَجِقوه قربَتش.",
          he: "גונג'יקו, גונג'יקו קאזבצ'.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симаз"
        originText="Сэ сцIэр Симаз, Джантыгъ Симаз."
        langToTranslationMap={{
          en: "My name is Simaz, Jantig Simaz.",
          ar: "سيماز: أنا اسمي سيماز، جانتِغ سيماز.",
          he: "שמי סימאז, ג'נטיג סימאז.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_11() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Хэтa мыр ?"
        langToTranslationMap={{
          en: "Who is this?",
          ar: "دانا: من هذا ؟",
          he: "מי זה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Мыр Хъут Синэ."
        langToTranslationMap={{
          en: "This is Khut Sine.",
          ar: "نفن: هذا خُت سينه.",
          he: "זה חות סינה.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Тыдэ ар къикlыра?"
        langToTranslationMap={{
          en: "Where is it from?",
          ar: "دانا: من أين هي  ؟",
          he: "מאיפה זה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Ар Нарткъалэ къекlы."
        langToTranslationMap={{
          en: "It is from Nartkale.",
          ar: "نفن: :  إنها من نارتقاله",
          he: "זה מנרטקלה.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Тыдэ щыl а Нарткъалэp?"
        langToTranslationMap={{
          en: "Where is Nartkale?",
          ar: "دانا: أين تقع نارتقاله؟",
          he: "איפה נרטקלה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Къэбэртаим ит."
        langToTranslationMap={{
          en: "It is in Khebertaim.",
          ar: "نفن: تقع في القبرتاي.",
          he: "זה בחברטאים.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Данэ"
        originText="Ар адыгабзэкIэ мэгyщыIа?"
        langToTranslationMap={{
          en: "Does she speak Adyghe?",
          ar: "دانا: هل هي تتحدث الأديغية؟",
          he: "האם היא מדברת אדיג'ה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Нэфын"
        originText="Ары, ар адыгабзэкIэ мэгyщыIэ."
        langToTranslationMap={{
          en: "Yes, she speaks Adyghe.",
          ar: "نفن: نعم هي تتحدث الاديغية.",
          he: "כן, היא מדברת אדיג'ה.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_12() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName=""
        originText="Адыгэбзэ тхыбзэхэр зэдгъэшlэщтых"
        langToTranslationMap={{
          en: "We will learn the Adyghe alphabet",
          ar: "سنتعلم الأحرف الأديغية",
          he: "נלמד את האלפבית האדיג'י",
        }}
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
    </PanelDiv>
  );
}

export function Lesson_1_13() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Уипчэдыжь шlу. Сыда плъэкъуацlэр?"
        langToTranslationMap={{
          en: "Good morning. What is your last name?",
          ar: "سيما: صباح الخير. ما هو اسم عائلتك ؟",
          he: "בוקר טוב. מה שם משפחתך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Гъукlэлl."
        langToTranslationMap={{
          en: "Gutchel.",
          ar: "ستناي: غوتشلأ.",
          he: "גוצ'ל.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Сыд? Тащ фэдэу птхыщт?"
        langToTranslationMap={{
          en: "What? How is it written?",
          ar: "سيما: ماذا ؟ كيف تكتب؟",
          he: "מה? איך זה כתוב?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Гу - кlэлл"
        langToTranslationMap={{
          en: "Gu - Chel",
          ar: "ستناي: غو-تشلأ.",
          he: "גו - צ'ל.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Дэгъу. Сыда пцlэр?"
        langToTranslationMap={{
          en: "Okay. What is your name?",
          ar: "سيما: حسنا. ما هو اسمك؟",
          he: "בסדר. מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Сэтэнай. Сэ - тэ - най"
        langToTranslationMap={{
          en: "Setenay. S - T - NAY.",
          ar: "ستناي: ستناي. س-ت-ناي",
          he: "סטנאי. ס - ט - נאי.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Симэ"
        originText="Дэгъу. Тыдэ ущыпсэурэ?"
        langToTranslationMap={{
          en: "Okay. Where do you live?",
          ar: "سيما: حسنا. أين تعيش؟",
          he: "בסדר. איפה אתה גר?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Сэтэнай"
        originText="Сэ мыекъуапэ сыщэпсэу."
        langToTranslationMap={{
          en: "I live in Maikop.",
          ar: "ستناي: أنا أعيش في مايكوب.",
          he: "אני גר במאיקופ.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_14() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Сыда пцIэр?"
        langToTranslationMap={{
          en: "What is your name?",
          ar: "باتر: ما هو اسمك؟",
          he: "מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Озырмэдж"
        originText="Озырмэдж"
        langToTranslationMap={{
          en: "Ozyrmedj",
          ar: "وزِرمج: وزِرمج.",
          he: "אוזירמדג'.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Къысфэгъэгъу, сыда пцIэр?"
        langToTranslationMap={{
          en: "Excuse me, what is your name?",
          ar: "باتر: عفوا، ما هو اسمك؟",
          he: "סליחה, מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Озырмэдж"
        originText="Озырмэдж"
        langToTranslationMap={{
          en: "Ozyrmedj",
          ar: "وزِرمج: وزِرمج.",
          he: "אוזירמדג'.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Тащ фэдэу птхыщт?"
        langToTranslationMap={{
          en: "How is it written?",
          ar: "باتر: كيف تكتب؟",
          he: "איך זה כתוב?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Озырмэдж"
        originText="О-зыр-мэдж"
        langToTranslationMap={{
          en: "O-Zyr-Medj",
          ar: "وزِرمج: و-زِر-مج",
          he: "אוזיר-מדג'.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Батыр"
        originText="Тхьэуегъэпсэу"
        langToTranslationMap={{
          en: "Thank you.",
          ar: "باتر: شكرا",
          he: "תודה.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_15() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Сыда пцIэр?"
        langToTranslationMap={{
          en: "What is your name?",
          ar: "جباغ: ما هو اسمك؟",
          he: "מה שמך?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Пщымаф"
        originText="Пщымаф"
        langToTranslationMap={{
          en: "Pshymaph",
          ar: "بشِماف: بشِماف",
          he: "פשימאף",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Пщэмыфа?"
        langToTranslationMap={{
          en: "Pshymaph?",
          ar: "جباغ: بشَمف",
          he: "פשימפה?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Пщымаф"
        originText="Хьау."
        langToTranslationMap={{
          en: "Yes.",
          ar: "بشِماف: لا",
          he: "כן.",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Тащ фэдэу птхыщт, къысэпlона?"
        langToTranslationMap={{
          en: "How is it written, can you tell me?",
          ar: "جباغ: كيف تكتب؟هل يمكن أن تقول لي؟",
          he: "איך זה כתוב, אתה יכול לומר לי?",
        }}
      />
      <LessonDialogBubble
        leftOrRight="right"
        characterName="Пщымаф"
        originText="Пщы-маф"
        langToTranslationMap={{
          en: "Pshy-maf",
          ar: "بشِماف: بشِ-ماف",
          he: "פשי-מאף",
        }}
      />
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Джэбагъ"
        originText="Тхьэуегъэпсэу"
        langToTranslationMap={{
          en: "Thank you.",
          ar: "جباغ: شكرا",
          he: "תודה.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_16() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Тембот"
        originText="Сэ сцlэр Мэщбэшlэ Тембот. Сэ 40 синыбжь. Мыекъопэ къалэ сыщэпсэу. Мекъуапэ Адыгаем икъэлэ шъхьаl. Сэ сыпхъашl. унэхэр пхъэкlэ сшlынхэр сикlас."
        langToTranslationMap={{
          en: "My name is Mashbashah Tembot. I am 40 years old. I live in the city of Maikop. Maikop is the capital of Adygea. I am a carpenter. I like building houses with wood.",
          ar: "أنا اسمي مَشبَشّأه تيمبوت. أنا عمري 40. أعيش في مدينة مايكوب. مايكوب هي عاصمة الأديغي. أنا نجار. أحب بناء البيوت بالخشب.",
          he: "שמי משבשה תמבוט. אני בן 40. אני גר בעיר מאיקופ. מאיקופ היא בירת אדיגיה. אני נגר. אני אוהב לבנות בתים מעץ.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_17() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Бибэрс"
        originText="Сэ сцlэр Хъут Бибэрс. Сэ Чэркескы сыщэпсэу. Черкеск республикэм Черкеск икъэлэ шъхьаl. 37 синыбжь. Сэ сытхакlу. усэхэр Адыгабзэкlэ стхынхэр сикlас. къэсщагъ. Бынэу кlэлэцlыкlуищ сиl."
        langToTranslationMap={{
          en: "My name is Khuut Bibers. I live in Cherkessk. Cherkessk is the capital of the Circassian republic. I am 37 years old. I am a writer. I like writing poetry in Adyghe. I am married. I have three young children.",
          ar: "أنا اسمي خُت بيبرس. أنا أعيش في تشركيسك. تشركيسك هي عاصمة جمهورية الشركس. عمري 37. أنا كاتب. أحب كتابة الأشعار بالأديغابزة. متزوج. لدي ثلاثة أولاد صغار.",
          he: "שמי חות ביברס. אני גר בצ'רקסק. צ'רקסק היא בירת הרפובליקה הצ'רקסית. בן 37. אני סופר. אני אוהב לכתוב שירים באדיג'ה. אני נשוי. יש לי שלושה ילדים קטנים.",
        }}
      />
    </PanelDiv>
  );
}

export function Lesson_1_18() {
  return (
    <PanelDiv>
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Синэмис"
        originText="Сэ сцlэр Цэй Синэмис . 25 синыбжь. Налчыкы сыдэс. Налчык Къэбэртаим икъэлэ шъхьаl. Сэ сыегъэджакlу. Адыгабзэ есэгъаджэх. Адыгабзэр сикlас. Джыри езгъэджэнхэр сикlас. Сэ сыдэкlуагъ. Пшъашъэ сиl, Синэ ыцlэр, илъэситlу ыныбжь."
        langToTranslationMap={{
          en: "My name is Tzei Sinemis. I am 25 years old. I live in Nalchik. Nalchik is the capital of Kabardino-Balkaria. I am a teacher. I teach Adyghe. I love Adyghe. I also love teaching. I am married. I have a daughter, her name is Sina, she is two years old.",
          ar: "أنا اسمي تزي سينميس. عمري 25. أسكن في نالتشيك. نالتشيك هي عاصمة القبرتاي. أنا معلمة. أعلم الأديغابزة. أحب الأديغابزة. وأيضا أحب التعليم. أنا متزوجة. لدي إبنة، اسمها سينا ، عمرها سنتين.",
          he: "שמי צ'י סינמיס. בת 25. אני גרה בנלצ'יק. נלצ'יק היא בירת קברדינו-בלקריה. אני מורה. אני מלמדת אדיג'ה. אני אוהבת אדיג'ה. אני גם אוהבת ללמד. אני נשואה. יש לי בת, שמה סינה, בת שנתיים.",
        }}
      />
    </PanelDiv>
  );
}
