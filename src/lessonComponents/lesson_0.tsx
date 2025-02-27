import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import React from "react";
import PanelDiv from "../components/panelDiv";

export function Lesson_0_1() {
  const data: string[][] = [
    ["А а", "/lessons/lesson_0/pictures/0061.png", "Атакъэ", "ديك", "Rooster", "תרנגול"],
    ["Б б", "/lessons/lesson_0/pictures/0026.png", "Блэ", "أفعى", "Snake", "נחש"],
    ["В в", "/lessons/lesson_0/pictures/0029.png", "Витамин", "فيتامين", "Vitamin", "ויטמין"],
    ["Г г", "/lessons/lesson_0/pictures/0045.png", "Адыгаер", "أديغيا", "Adygea", "אדיגיא"],
    ["ГЪ гъ", "/lessons/lesson_0/pictures/0048.png", "Гъэмаф", "صيف", "summer", "קיץ"],
    ["Д д", "/lessons/lesson_0/pictures/0057.png", "Дэ", "جوز", "Nut", "אגוז"],
    ["ДЖ дж", "/lessons/lesson_0/pictures/0041.png", "Джэмышх", "ملعقة", "Spoon", "כף"],
    ["ДЗ дз", "/lessons/lesson_0/pictures/0052.png", "Дзэ", "جيش", "Army", "צבא"],
    ["Е е", "/lessons/lesson_0/pictures/0007.png", "Еджэ", "يقرأ", "Reads", "קורא"],
    ["Ж", "/lessons/lesson_0/pictures/0022.png", "Жэ", "فم", "Mouth", "פה"],
    ["ЖЪ", "/lessons/lesson_0/pictures/0055.png", "Жъапхъэ", "مقلاة", "Frying pan", "מחבת"],
    ["ЖЬ", "/lessons/lesson_0/pictures/0050.png", "Жьыбгъэ", "ريح", "Wind", "רוח"],
    ["З з", "/lessons/lesson_0/pictures/0015.png", "Зы", "واحد", "One", "אחד"],
    ["И и", "/lessons/lesson_0/pictures/0006.png", "Иныжъ", "عملاق", "Giant", "ענק"],
    ["Й й", "/lessons/lesson_0/pictures/0038.png", "Пцэжъый", "سمكه", "Fish", "דג"],
    ["К к", "/lessons/lesson_0/pictures/0010.png", "Коцы", "قمح", "Wheat", "חיטה"],
    ["КЪ къ", "/lessons/lesson_0/pictures/0049.png", "Къамэ", "قامة – خنجر", "Dagger", "חרב קטן"],
    ["КI кI", "/lessons/lesson_0/pictures/0040.png", "КIэ", "ذيل", "Tail", "זנב"],
    ["Л л", "/lessons/lesson_0/pictures/0062.png", "Лы", "لحم", "Meat", "בשר"],
    ["ЛЪ лъ", "/lessons/lesson_0/pictures/0028.png", "Лъакъо", "رجل", "Leg", "רגל"],
    ["М м", "/lessons/lesson_0/pictures/0002.png", "Мышъэ", "دب", "Bear", "דוב"],
    ["Н н", "/lessons/lesson_0/pictures/0043.png", "Натрыф", "ذرة", "Corn", "תירס"],
    ["О о", "/lessons/lesson_0/pictures/0009.png", "Осы", "ثلج", "Snow", "שלג"],
    ["П п", "/lessons/lesson_0/pictures/0039.png", "Пыжъы", "قنفذ", "Hedgehog", "קיפוד"],
    ["ПI пI", "/lessons/lesson_0/pictures/0019.png", "ПIэ", "فراش", "Butterfly", "פרפר"],
    ["Р р", "/lessons/lesson_0/pictures/0059.png", "Хъурай", "دائرة", "Circle", "מעגל"],
    ["С с", "/lessons/lesson_0/pictures/0004.png", "Санэ", "عنب", "Grapes", "ענבים"],
    ["Т т", "/lessons/lesson_0/pictures/0013.png", "Tыгъужъ", "ذئب", "Wolf", "זאב"],
    ["ТI тI", "/lessons/lesson_0/pictures/0036.png", "ТIы", "كبش", "Ram", "כבש"],
    ["У у", "/lessons/lesson_0/pictures/0008.png", "Унэ", "بيت", "House", "בית"],
    ["Ф ф", "/lessons/lesson_0/pictures/0037.png", "Фыжьы", "أبيض", "White", "לבן"],
    ["Х х", "/lessons/lesson_0/pictures/0016.png", "Хы", "ستة", "Six", "שש"],
    [
      "ХЪ хъ",
      "/lessons/lesson_0/pictures/0018.png",
      "Хъагъэ",
      "شبكة/ مطرز",
      "Net/Embroidered",
      "רשת/רקמה",
    ],
    ["ХЬ хь", "/lessons/lesson_0/pictures/0020.png", "Хьэ", "كلب", "Dog", "כלב"],
    ["Ц ц", "/lessons/lesson_0/pictures/0063.png", "Цыгъо", "فار", "Mouse", "עכבר"],
    ["ЦӀ цI", "/lessons/lesson_0/pictures/0025.png", "ЦӀыргъ", "حلزون", "Snail", "חלזון"],
    ["Ч ч", "/lessons/lesson_0/pictures/0046.png", "Чэркеся", "شركيسيا", "Circassia", "צ'רקסיה"],
    ["ЧЪ чъ", "/lessons/lesson_0/pictures/0053.png", "Чъыгы", "شجره", "Tree", "עץ"],
    ["ЧӀ чI", "/lessons/lesson_0/pictures/0031.png", "ЧӀы", "أرض", "Earth", "אדמה"],
    ["Ш ш", "/lessons/lesson_0/pictures/0011.png", "Шы", "حصان", "Horse", "סוס"],
    ["ШЪ шъ", "/lessons/lesson_0/pictures/0100.png", "Шъэ", "مئه", "Hundred", "מאה"],
    ["Щ щ", "/lessons/lesson_0/pictures/0014.png", "Щэ", "حليب", "Milk", "חלב"],
    ["Ы ы", "/lessons/lesson_0/pictures/0005.png", "Сыд", "ماذا", "What", "מה"],
    ["Э э", "/lessons/lesson_0/pictures/0003.png", "Iэ", "يد", "Hand", "יד"],
    ["Я я", "/lessons/lesson_0/pictures/0023.png", "ЯтIэ", "تراب", "Dust", "אבק"],
    ["I I", "/lessons/lesson_0/pictures/0012.png", "Iанэ", "طاولة", "Table", "שולחן"],
  ];

  // Convert to ReactNode matrix
  const contentMatrix: React.ReactNode[][] = [];
  let currentRow: React.ReactNode[] = [];

  data.forEach((row, index) => {
    const [letter, imgUrl, example, arTranslation, enTranslation] = row;
    const node = (
      <LessonTableCell
        key={letter}
        firstRow={letter.split(" ")[0]} // Extract first part of the letter
        secondRow={example}
        imgUrl={imgUrl}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />
    );

    currentRow.push(node);

    if (currentRow.length === 6 || index === data.length - 1) {
      contentMatrix.push(currentRow);
      currentRow = [];
    }
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\0_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_2() {
  const data: string[][] = [
    ["А а", "0061.png", "Атакъэ", "ديك", "Rooster", "תרנגול"],
    ["О о", "0009.png", "Осы", "ثلج", "Snow", "שלג"],
    ["Э э", "0003.png", "Iэ", "يد", "Hand", "יד"],
    ["Ы ы", "0005.png", "Сыд", "ماذا", "What", "מה"],
    ["У у", "0008.png", "Унэ", "بيت", "House", "בית"],
    ["И и", "0006.png", "Иныжъ", "عملاق", "Giant", "ענק"],
    ["Е е", "0007.png", "Еджэ", "يقرأ", "Reading", "קורא"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\1_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_2b() {
  const data: string[][] = [
    ["М м", "0002.png", "Мышъэ", "دب", "Bear", "דוב"],
    ["С с", "0004.png", "Санэ", "عنب", "Grapes", "ענבים"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\1_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_3() {
  const data = [
    [
      { cir: "О-сы", ar: "ثلج", en: "Snow", he: "שלג" },
      { cir: "Уа-сэ", ar: "سعر", en: "Price", he: "מחיר" },
      { cir: "Са-сэ", ar: "(فتاة)  ساسه", en: "Sasa (name)", he: "סאסה (שם)" },
      { cir: "Си-мэ", ar: "سيما  (اسم)", en: "Sima (name)", he: "סימה (שם)" },
    ],
    [
      { cir: "Се-сы", ar: "أسبح", en: "Swim", he: "אני שוחה" },
      { cir: "Уис", ar: "أنت موجود في الداخل", en: "You are inside", he: "אתה בפנים" },
      { cir: "Е-сы", ar: "يسبح", en: "Swims", he: "הוא שוחה" },
      { cir: "Мы-е", ar: "التفاح البري", en: "Wild apple", he: "תפוח בר" },
    ],
    [
      { cir: "Ис", ar: "موجود في الداخل", en: "Inside", he: "בפנים" },
      { cir: "Уа-е", ar: "عاصفه", en: "Storm", he: "סופה" },
      { cir: "Сис", ar: "أنا موجود في الداخل", en: "I am inside", he: "אני בפנים" },
      { cir: "Е-о", ar: "يضرب", en: "Hits", he: "הוא מכה" },
    ],
    [
      { cir: "У-сэ", ar: "شعر", en: "Hair", he: "שיער" },
      { cir: "Мэу", ar: "هنا", en: "Here", he: "כאן" },
      { cir: "Ау", ar: "لكن", en: "But", he: "אבל" },
      { cir: "Сэ", ar: "أنا", en: "I", he: "אני" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\1_3.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_4() {
  const data: string[][] = [
    ["К к", "0010.png", "Коцы", "قمح", "Wheat", "חיטה"],
    ["Т т", "0013.png", "Tыгъужъ", "ذئب", "Wolf", "זאב"],
    ["I I", "0012.png", "Iанэ", "طاولة", "Table", "שולחן"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\2_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_5() {
  const data = [
    [
      { cir: "Тат", ar: "أب", en: "Father", he: "אבא" },
      { cir: "Тет", ar: "موجود على / أبينا", en: "Is on / Our father", he: "יש על / אבינו" },
      { cir: "УиӀ", ar: "لديك", en: "You have", he: "יש לך" },
      { cir: "ТиӀ", ar: "لدينا", en: "We have", he: "יש לנו" },
    ],
    [
      { cir: "Ку", ar: "عربة", en: "Carriage", he: "עגלה" },
      { cir: "А-Ӏо", ar: "يقولون", en: "They say", he: "הם אומרים" },
      { cir: "У-тет", ar: "تقف على", en: "Stand on", he: "עומד על" },
      { cir: "Ӏа-тэ", ar: "كومة", en: "Pile", he: "ערימה" },
    ],
    [
      { cir: "Уа-тэ", ar: "مطرقة", en: "Hammer", he: "פטיש" },
      { cir: "О-ку-о", ar: "أنت تصرخ", en: "You scream", he: "אתה צועק" },
      { cir: "А-те-Ӏэ", ar: "يلمسهم من فوق", en: "Touch them from above", he: "נוגע בהם מלמעלה" },
      { cir: "Те-о", ar: "يطرق على", en: "Knocks on", he: "דופק על" },
    ],
    [
      { cir: "Ты-Ӏут", ar: "نحن نقف أمام", en: "We stand in front of", he: "אנחנו עומדים מול" },
      { cir: "Тэ-ку-о", ar: "نصرخ", en: "We scream", he: "אנחנו צועקים" },
      {
        cir: "Та-те-Ӏэ",
        ar: "نلمسهم من فوق",
        en: "We touch them from above",
        he: "אנחנו נוגעים בהם מלמעלה",
      },
      { cir: "Е-Ӏуа-тэ", ar: "يحكي / يسرد", en: "He tells", he: "הוא מספר" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\2_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_6() {
  const data: string[][] = [
    ["Ш ш", "0011.png", "Шы", "حصان / أَخ", "Horse", "סוס"],
    ["Щ щ", "0014.png", "Щэ", "حليب", "Milk", "חלב"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\3_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_7() {
  const data = [
    [
      { cir: "Шы", ar: "حصان / أَخ", en: "Horse", he: "סוס" },
      { cir: "Шэ", ar: "دَسَم", en: "Milk", he: "חלב" },
      { cir: "Шэщ", ar: "اسطبل حصان", en: "Horse stable", he: "אורוות סוסים" },
      { cir: "Шыу", ar: "فارس", en: "Knight", he: "אביר" },
    ],
    [
      { cir: "Ша-о", ar: "ساىق عربة خيل", en: "Rider", he: "רוכב עגלה" },
      { cir: "Ша-Iо", ar: "حظيرة خيل", en: "Horse stable", he: "אורוות סוסים" },
      { cir: "Шэ-сы", ar: "محامي / كفيل", en: "Guarantor", he: "ערב" },
      { cir: "Ша-ко", ar: "شهد / قرص العسل", en: "Honey", he: "דבש / קשת דבש" },
    ],
    [
      { cir: "Щы-сэ", ar: "مثال", en: "Example", he: "דוגמה" },
      { cir: "Ща-тэ", ar: "القشده", en: "Cream", he: "קרם" },
      { cir: "ЩыI", ar: "موجود", en: "Exists", he: "קיים" },
      { cir: "Щы", ar: "ثلاث", en: "Three", he: "שלוש" },
    ],
    [
      { cir: "Щыс", ar: "جالس", en: "Sitting", he: "יושב" },
      { cir: "Щыщ", ar: "ينتمي إلى / منه", en: "Belongs to / From it", he: "שייך ל / ממנו" },
      { cir: "Е-щы", ar: "يقيس / يحلب", en: "Measures / Milks", he: "מודד / מחלב" },
      { cir: "Е-щэ", ar: "يبيع", en: "Sells", he: "מוכר" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\3_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_8() {
  const data: string[][] = [
    ["Я я", "0023.png", "ЯтIэ", "تراب", "Dust", "אבק"],
    ["Й й", "0038.png", "Пцэжъый", "سمكه", "Fish", "דג"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\4_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_9() {
  const data = [
    [
      { cir: "Я-е", ar: "سمين جدًا / اسطوانة", en: "Very fat / Cylinder", he: "מאוד שמן / גליל" },
      { cir: "Сай", ar: "ثوب نسائي أديغي", en: "Lady dress" },
      { cir: "С-ят", ar: "أَبي", en: "My father", he: "אבי" },
      { cir: "ЯI", ar: "لديهم", en: "They have", he: "יש להם" },
    ],
    [
      { cir: "Яш", ar: "أَخوهم", en: "Their brother", he: "אחיהם" },
      { cir: "Я-ты", ar: "يدفعون", en: "They pay", he: "הם משלמים" },
      { cir: "Iой", ar: "ثغاء", en: "Thug", he: "גנב" },
      { cir: "О-у-я", ar: "هل هو لك؟", en: "Is it yours?", he: "האם זה שלך?" },
    ],
    [
      { cir: "Я-тэ", ar: "أَبوه", en: "His father", he: "אביו" },
      { cir: "Я-щэ", ar: "يبيعون", en: "They sell", he: "הם מוכרים" },
      { cir: "Я-тэш", ar: "عمه", en: "His uncle", he: "דודו" },
      { cir: "Яй", ar: "لهم", en: "For them", he: "להם" },
    ],
    [
      { cir: "Ий", ar: "له", en: "His", he: "שלו" },
      { cir: "О-уй", ar: "لك", en: "For you", he: "לך" },
      { cir: "Сэ-сый", ar: "لي", en: "For me", he: "לי" },
      { cir: "Тэ-тый", ar: "لنا", en: "For us", he: "לנו" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\4_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_10() {
  const data: string[][] = [
    ["П п", "0039.png", "Пыжъы", "قُنفذ", "Hedgehog", "קיפוד"],
    ["Р р", "0059.png", "Хъурай", "دائرة", "Circle", "מעגל"],
    ["Н н", "0043.png", "Натрыф", "ذرة", "Corn", "תירס"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\5_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_11() {
  const data = [
    [
      { cir: "На-сып", ar: "ناسب (اسم)", en: "Nasip (name)", he: "נאסיפ (שם)" },
      {
        cir: "Си-нэ",
        ar: "سينة (اسم) / عيني",
        en: "Sina (name) / My eyes",
        he: "סינה (שם) / עיני",
      },
      {
        cir: "Пэ-рыт",
        ar: "برت  (اسم) / قائد",
        en: "Perit (name) / Leader",
        he: "פריט (שם) / מנהיג",
      },
      {
        cir: "Сэ-тэ-най",
        ar: "ستناي (اسم) / زهرة جميلة جدا",
        en: "Stenai (name) / Very beautiful flower",
        he: "סטנאי (שם) / פרח יפה מאוד",
      },
    ],
    [
      { cir: "Iа-пэ", ar: "طرف الإصبع / الكف", en: "Fingertip / Palm", he: "קצה האצבע / כף היד" },
      { cir: "Пщы-нэ", ar: "أكورديون", en: "Accordion", he: "אקורדיון" },
      { cir: "Псы-нэ", ar: "بئر", en: "Well", he: "באר" },
      { cir: "Ны-сэ", ar: "عروس", en: "Bride", he: "כלה" },
    ],
    [
      { cir: "Ре-ты", ar: "يعطيه", en: "Gives it", he: "נותן לו" },
      { cir: "Псы", ar: "ماء", en: "Water", he: "מים" },
      { cir: "Нэпс", ar: "دمعة", en: "Tear", he: "דמעה" },
      { cir: "Па-Iо", ar: "قبعة", en: "Hat", he: "כובע" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\5_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_12() {
  const data: string[][] = [
    ["З з", "0015.png", "Зы", "واحد", "One", "אחד"],
    ["Х х", "0016.png", "Хы", "ستة", "Six", "שש"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\6_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_13() {
  const data = [
    [
      { cir: "Мэ-зы", ar: "غابه", en: "Forest", he: "יער" },
      { cir: "Ма-зэ", ar: "مازة (اسم) / قمر", en: "Maza (name) / Moon", he: "מאזה (שם) / ירח" },
      {
        cir: "Си-маз",
        ar: "سيماز (اسم) / قمري",
        en: "Simaz (name) / Lunar",
        he: "סימאז (שם) / לוני",
      },
      { cir: "Мэ-зах", ar: "مظلم", en: "Dark", he: "אפל" },
    ],
    [
      { cir: "За-о", ar: "حرب", en: "War", he: "מלחמה" },
      { cir: "Зы-рыз", ar: "واحداً واحداً", en: "One by one", he: "אחד אחד" },
      { cir: "Нэз", ar: "حافة", en: "Edge", he: "קצה" },
      { cir: "Тэ-рэз", ar: "صحيح", en: "Correct", he: "נכון" },
    ],
    [
      { cir: "Сэ-тхэ", ar: "أكتب", en: "Write", he: "כתוב" },
      { cir: "О-тхэ", ar: "تكتب", en: "You write", he: "את כותבת" },
      { cir: "Тэ-тхэ", ar: "نكتب", en: "We write", he: "אנחנו כותבים" },
      { cir: "Е-тхы", ar: "يكتب", en: "Writes", he: "הוא כותב" },
    ],
    [
      { cir: "Ма-тхэ", ar: "يكتب", en: "Writes", he: "הוא כותב" },
      { cir: "Ха-сэ", ar: "نادي / جمعية", en: "Club / Association", he: "מועדון / אגודה" },
      { cir: "Ха-тэ", ar: "حقل", en: "Field", he: "שדה" },
      { cir: "Хе-у-ты", ar: "يطبع / يسجل", en: "Prints / Records", he: "מדפיס / מרשים" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\6_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_14() {
  const data: string[][] = [
    ["Ч ч", "0046.png", "Чэркеся", "شركسيا", "Circassia", "צ'רקסיה"],
    ["Ц ц", "0063.png", "Цыгъо", "فأر", "Mouse", "עכבר"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\7_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_15() {
  const data = [
    [
      { cir: "Цу", ar: "ثور", en: "Bull", he: "שור" },
      { cir: "Цо", ar: "-----", en: "-----", he: "-----" },
      { cir: "Цуакъэ", ar: "أحذية", en: "shoes", he: "נעליים" },
      { cir: "Цуа-о", ar: "ضارب الثور", en: "Bullfighter", he: "מלחמת שורים" },
      { cir: "Те-у-цо", ar: "يدعس على", en: "Tramples", he: "דורס" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\7_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_16() {
  const data = [
    [
      { cir: "Чэ-мы", ar: "بقرة", en: "Cow", he: "פרה" },
      { cir: "Апч", ar: "زجاج", en: "Glass", he: "זכוכית" },
      { cir: "Пчэн", ar: "سعال", en: "Cough", he: "שיעול" },
      { cir: "Чэ-рке-ся", ar: "شركسيا", en: "Circassia", he: "צ'רקסיה" },
    ],
    [
      { cir: "Чан", ar: "حاد", en: "Sharp", he: "חד" },
      { cir: "Чэ-щы", ar: "ليل", en: "Night", he: "לילה" },
      { cir: "Чы-Iу", ar: "زِر", en: "Button", he: "כפתור" },
      { cir: "Псы-чэт", ar: "بطة", en: "Duck", he: "ברווז" },
    ],
    [
      { cir: "Пцэ", ar: "سمكة كبيرة", en: "Big fish", he: "דג גדול" },
      { cir: "Цы-зэ", ar: "سنجاب", en: "Squirrel", he: "סנאי" },
      { cir: "На-пцэ", ar: "حاجب", en: "Eyebrow", he: "גבה" },
      { cir: "Ца-цэ", ar: "شوكة / سيخ", en: "Fork / Skewer", he: "מזלג / קבב" },
    ],
    [
      { cir: "Цы-пэ", ar: "طرف / نهاية", en: "End", he: "קצה" },
      { cir: "Ца-пэ", ar: "حرف السن", en: "Tooth letter", he: "אות שן" },
      { cir: "Псы-цу", ar: "جاموس", en: "Buffalo", he: "בפאלו" },
      { cir: "Цу-мпэ", ar: "فريز / توت أرضي", en: "Strawberry / Ground berry", he: "תות אדמה" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\7_3.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_17() {
  const data: string[][] = [
    ["Д д", "0057.png", "Дэ", "جوز", "Nut", "אגוז"],
    ["Л л", "0062.png", "Лы", "لحم", "Meat", "בשר"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\8_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_18() {
  const data = [
    [
      { cir: "Да-хэ", ar: "جميل", en: "Beautiful", he: "יפה" },
      {
        cir: "Дэс",
        ar: "يجلس في مكان محاط بشيء/ يسكن",
        en: "Sits in a place surrounded by something / Lives In",
        he: "יושב במקום מוקף במשהו / חי ב",
      },
      { cir: "Ма-дэ", ar: "يخيط", en: "Sews", he: "תופר" },
      { cir: "Сыд", ar: "? ماذا", en: "What", he: "מה" },
    ],
    [
      { cir: "Тхы-дэ", ar: "قصة / تاريخ", en: "Story / History", he: "סיפור / היסטוריה" },
      { cir: "Iу-дан", ar: "خيط", en: "Thread", he: "חוט" },
      { cir: "Да-нэ", ar: "حرير", en: "Silk", he: "משי" },
      { cir: "Дэ-шхын", ar: "غذاء", en: "Food", he: "אוכל" },
    ],
    [
      { cir: "Мэ-лы", ar: "غنم", en: "Sheep", he: "כבשה" },
      { cir: "Мы-лы", ar: "جليد", en: "Ice", he: "קרח" },
      {
        cir: "Нал",
        ar: "نال (اسم) / حدوة الحصان",
        en: "Nal (name) / Horse's bridle",
        he: "נאל (שם) / רסיס הסוס",
      },
      {
        cir: "Нал-мэс",
        ar: "نالمس (اسم) / الماس",
        en: "Nalmes (name) / Diamond",
        he: "נאלמס (שם) / יהלום",
      },
    ],
    [
      { cir: "Лэпс", ar: "مرق اللحم", en: "Meat broth", he: "מרק בשר" },
      { cir: "Чы-лэ", ar: "قرية / مدينة", en: "Village / City", he: "כפר / עיר" },
      { cir: "Ла-нлэ", ar: "رَخو", en: "Soft", he: "רך" },
      { cir: "Лэ-ныс-тэ", ar: "مقص", en: "Scissors", he: "מספרים" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\8_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_19() {
  const data: string[][] = [
    ["Б б", "0026.png", "Блэ", "أفعى", "Snake", "נחש"],
    ["Г г", "0045.png", "Адыгаер", "الأديغاية", "Adygea", "אדיגיה"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\9_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_20() {
  const data = [
    [
      { cir: "Гу", ar: "قلب", en: "Heart", he: "לב" },
      { cir: "Го", ar: "-----", en: "-----", he: "-----" },
      { cir: "Гу-щыI", ar: "كلمة", en: "Word", he: "מילה" },
      { cir: "У-гощ", ar: "توزيع", en: "Distribution", he: "הפצה" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\9_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_21() {
  const data = [
    [
      { cir: "Бэщ", ar: "عصا", en: "Stick", he: "מקל" },
      { cir: "Бын", ar: "أبناء", en: "Sons", he: "בנים" },
      { cir: "Бай", ar: "غني", en: "Rich", he: "עשיר" },
      { cir: "Бзэ", ar: "لغة", en: "Language", he: "שפה" },
    ],
    [
      { cir: "Бзы-у", ar: "عصفور", en: "Bird", he: "ציפור" },
      { cir: "Ба-тыр", ar: "بطل", en: "Hero", he: "גיבור" },
      { cir: "Ща-бзэ", ar: "سهم", en: "Arrow", he: "חץ" },
      { cir: "Быр-сыр", ar: "زحام / شغب", en: "Crowd / Riot", he: "המון / מהומה" },
    ],
    [
      { cir: "А-ды-гэ", ar: "أديغة", en: "Adygea", he: "אדיגיה" },
      { cir: "Бэ-гын", ar: "تورُم", en: "Tumor", he: "גידול" },
      { cir: "Гу-псэ", ar: "قريب", en: "Near", he: "קרוב" },
      { cir: "Гу-пшыс", ar: "فكرة", en: "Idea", he: "רעיון" },
    ],
    [
      { cir: "Бгы", ar: "خصر", en: "Waist" },
      { cir: "Гырз", ar: "ارتجاج / صوت الرعد", en: "Concussion / Thunder", he: "אידם / רעם" },
      { cir: "Го-гон", ar: "ابريق", en: "Teapot", he: "קנקן" },
      { cir: "Гы-ны", ar: "بارود", en: "Gunpowder", he: "פודרה" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\\9_3.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_22() {
  const data: string[][] = [
    ["Ж ж", "0022.png", "Жэ", "فم", "Mouth", "פה"],
    ["Ф ф", "0037.png", "Фыжьы", "أبيض", "White", "לבן"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\10_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_23() {
  const data = [
    [
      {
        cir: "Жа-нэ",
        ar: "جانة (قبيلة اديغية)",
        en: "Zhane (Adyghe tribe)",
        he: "ז'אנה (שבט אדיגי)",
      },
      { cir: "Жэ-ры-Iу", ar: "شفهي", en: "Oral" },
      {
        cir: "Жа-бзэ",
        ar: "كلام / اللغة المحكية",
        en: "Speech / Spoken language",
        he: "דיבור / שפה מדוברת",
      },
      { cir: "Жэ", ar: "فم / زحافة الثلج", en: "Mouth / Snowdrift", he: "פה / שפת חורף" },
    ],
    [
      { cir: "Жын", ar: "التقيؤ", en: "Vomiting", he: "הקאה" },
      { cir: "Жэ-маф", ar: "مبارك الكلام", en: "Blessed speech", he: "דיבור מבורך" },
      { cir: "Жэ-май", ar: "قليل الكلام", en: "Few words", he: "מעט מילים" },
      {
        cir: "Бжиз",
        ar: "مقدار شبر (وحدة طول)",
        en: "Amount of an inch (length unit)",
        he: "כמות של אינץ' (יחידת אורך)",
      },
    ],
    [
      { cir: "Фай", ar: "يريد / ضروري", en: "Wants / Necessary", he: "רוצה / נחוץ" },
      { cir: "Фа-бэ", ar: "دافئ", en: "Warm", he: "חם" },
      { cir: "Ха-фэ", ar: "حامض", en: "Sour", he: "חמוץ" },
      { cir: "Iо-фы", ar: "عمل / أمر", en: "Work / Command", he: "עבודה / פקודה" },
    ],
    [
      {
        cir: "Фа-еп",
        ar: "لا يريد / غير ضروري",
        en: "Does not want / Not necessary",
        he: "לא רוצה / לא נחוץ",
      },
      { cir: "Зэ-фэс", ar: "لقاء / مؤتمر", en: "Meeting / Conference", he: "פגישה / כנס" },
      { cir: "За-фэ", ar: "عادل / مستقيم", en: "Fair / Straight", he: "הוגן / ישר" },
      { cir: "На-трыф", ar: "ذُرة", en: "Corn", he: "תירס" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\10_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_24() {
  const data: string[][] = [["В в", "0029.png", "Витамин", "فيتامين", "Vitamin", "ויטמין"]];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\11_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_25() {
  const data = [
    [
      { cir: "Ви-рус", ar: "فايروس", en: "Virus", he: "וירוס" },
      { cir: "Ви-за", ar: "تأشيرة", en: "Visa", he: "ויזה" },
      { cir: "Ваз", ar: "مزهرية", en: "Vase", he: "צנצנת" },
      { cir: "Ви-та-мин", ar: "فيتامين", en: "Vitamin", he: "ויטמין" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\11_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_26() {
  const data: string[][] = [
    ["КЪ къ", "0049.png", "Къамэ", "قامة / الخنجر الأدغي القفقاسي", "Dagger", "חרב"],
    ["КI кI", "0040.png", "КIэ", "ذيل", "Tail", "זנב"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\12_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_27() {
  const data = [
    [
      { cir: "КIу", ar: "إمشي", en: "Walk", he: "הליכה" },
      { cir: "КIо", ar: "طريقة مشي", en: "Walking method", he: "שיטת הליכה" },
      { cir: "КIуа-кIэ", ar: "يمشي", en: "Walks", he: "הולך" },
      { cir: "Ма-кIо", ar: "----", en: "He goes", he: "הוא הולך" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\12_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_28() {
  const data = [
    [
      { cir: "Ма-къэ", ar: "صوت", en: "Sound", he: "קול" },
      { cir: "Къэ-Iу", ar: "مسموع", en: "Audible", he: "נשמע" },
      { cir: "Къы-сэт", ar: "أعطني", en: "Give me", he: "תן לי" },
      {
        cir: "Къа-шыкъ",
        ar: "ملعقة كبيرة / مغرفة",
        en: "Large spoon / Scoop",
        he: "כף גדולה / כף חריפה",
      },
    ],
    [
      { cir: "А-та-къэ", ar: "ديك", en: "Rooster", he: "תרנגול" },
      { cir: "Копкъ", ar: "الوِرك", en: "Fork", he: "מזלג" },
      { cir: "Ра-та-къо", ar: "يرمون فيه", en: "Throw in it", he: "זורק בו" },
      { cir: "Къу-та-мэ", ar: "غصن", en: "Branch", he: "ענף" },
    ],
    [
      { cir: "КIа-псэ", ar: "حبل", en: "Rope", he: "חבל" },
      { cir: "КIэ-нкIэ", ar: "بيضة", en: "Egg", he: "ביצה" },
      { cir: "Мэ-такI", ar: "سلة جديدة", en: "New basket", he: "סל חדש" },
      { cir: "Си-кIас", ar: "أحب", en: "I like", he: "אני אוהב" },
    ],
    [
      { cir: "КIо-дын", ar: "ضياع / تلَف", en: "Loss", he: "אובדן" },
      { cir: "Ша-кIо", ar: "صياد", en: "Hunter", he: "צייד" },
      { cir: "Мы-шкIу", ar: "بلوط", en: "Oak", he: "אלון" },
      { cir: "Мэ-ткIу", ar: "يذوب", en: "Melts", he: "מתמס" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\12_3.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_29() {
  const data: string[][] = [
    ["ДЖ дж", "0041.png", "Джэмышх", "ملعقة", "Spoon", "כף"],
    ["ГЪ гъ", "0048.png", "Гъэмаф", "صيف", "summer", "קיץ"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\13_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_30() {
  const data = [
    [
      { cir: "Джа-нэ", ar: "قميص / ثوب", en: "Shirt", he: "חולצה" },
      { cir: "Къуа-джэ", ar: "قرية", en: "Village", he: "כפר" },
      { cir: "Джа-е", ar: "حوت / قرموط", en: "Whale", he: "לוויתן" },
      { cir: "Е-джэ", ar: "يقرأ", en: "Reads", he: "קורא" },
    ],
    [
      { cir: "Джыр", ar: "الآن", en: "Now", he: "עכשיו" },
      { cir: "Джа-дэ", ar: "كبير", en: "Big", he: "גדול" },
      { cir: "Мэ-джэ-гу", ar: "يلعب", en: "Plays", he: "משחק" },
      { cir: "Мардж", ar: "نداء نجدة", en: "Distress call", he: "קריאת עזרה" },
    ],
    [
      { cir: "Дэ-гъу", ar: "جيد", en: "Good", he: "טוב" },
      { cir: "Мэ-гъы", ar: "يبكي", en: "Cries", he: "בוכה" },
      { cir: "Хэ-гъэгу", ar: "دولة", en: "State", he: "מדינה" },
      { cir: "У-на-гъо", ar: "عائلة", en: "Family", he: "משפחה" },
    ],
    [
      { cir: "Гъу-сэ", ar: "صديق", en: "Friend", he: "חבר" },
      { cir: "Гъа-тхэ", ar: "ربيع", en: "Spring", he: "אביב" },
      { cir: "Гъуа-нэ", ar: "ثقب فتحة", en: "Hole", he: "חור" },
      { cir: "Гъу-нджэ", ar: "مرآة", en: "Mirror", he: "מראה" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\13_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_31() {
  const data: string[][] = [
    ["ХЬ хь", "0020.png", "Хьэ", "كلب", "Dog", "כלב"],
    ["ХЪ хъ", "0018.png", "Хъагъэ", "زخرفة/ شبكة", "Net/Embroidered", "רשת/מרורק"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\14_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_32() {
  const data = [
    [
      { cir: "Хьа-кIэ", ar: "ضيف", en: "Guest", he: "אורח" },
      { cir: "Тхьа-мыкI", ar: "مسكين", en: "Poor", he: "עני" },
      { cir: "Къе-хьы", ar: "يجلب", en: "Brings", he: "מביא" },
      { cir: "Мэ-хьа-къу", ar: "ينبح", en: "Barks", he: "נובח" },
    ],
    [
      { cir: "Тхьа-пэ", ar: "ورقة", en: "Paper", he: "נייר" },
      { cir: "Хьа-лыгъу", ar: "خبز", en: "Bread", he: "לחם" },
      { cir: "Тхьа-ркъо", ar: "حمامة", en: "Dove", he: "יונה" },
      { cir: "Тхьа-кIум-кIыхь", ar: "أرنب", en: "Rabbit", he: "ארנב" },
    ],
    [
      { cir: "Пхъэ", ar: "خشب", en: "Wood", he: "עץ" },
      { cir: "Хъо-хъу", ar: "دعاء / ثناء", en: "Prayer / Praise", he: "תפילה / שבח" },
      { cir: "Хъу-рай", ar: "دائرة", en: "Circle", he: "מעגל" },
      { cir: "Пхъэ-нкIыпхъ", ar: "مكنسة", en: "Broom", he: "מטאטא" },
    ],
    [
      { cir: "Мэ-хъы-е", ar: "يتحرك", en: "Moves", he: "נע" },
      { cir: "Хъу-пхъэ", ar: "مؤدب", en: "Polite", he: "מנומס" },
      { cir: "Тхъа-гъо", ar: "سرور / سعادة", en: "Joy / Happiness", he: "שמחה / אושר" },
      { cir: "Мэ-ла-хъо", ar: "راع", en: "Shepherd", he: "רועה" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell
          key={cell.cir}
          firstRow={cell.cir}
          langToTranslationMap={{ En: cell.en, Ar: cell.ar }}
        />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\14_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_33() {
  const data: string[][] = [["ЛЪ лъ", "0028.png", "Лъакъо", "رِجْل", "Leg", "רגל"]];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\15_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_34() {
  const data = [
    [
      { cir: "Лъы", ar: "دم", en: "Blood", he: "דם" },
      { cir: "Тхылъ", ar: "كتاب", en: "Book", he: "ספר" },
      { cir: "Ас-лъан", ar: "أسد", en: "Lion", he: "אריה" },
      { cir: "Лъэ-шэу", ar: "بشدة", en: "Strongly", he: "בחוזקה" },
    ],
    [
      { cir: "Лъа-гэ", ar: "عالي", en: "High", he: "גבוה" },
      { cir: "Къэ-плъан", ar: "نمر", en: "Tiger", he: "נמר" },
      { cir: "Iэ-плъэкI", ar: "منشفة", en: "Towel", he: "מגבת" },
      { cir: "Еп-лъы", ar: "ينظر", en: "Looks", he: "מסתכל" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\15_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_35() {
  const data: string[][] = [
    ["ЖЬ жь", "0050.png", "Жьыбгъэ", "ريح", "Wind", "רוח"],
    ["ЖЪ жъ", "0055.png", "Жъапхъэ", "مقلاة", "Frying pan", "מחבת"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\16_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_36() {
  const data = [
    [
      { cir: "Жъу", ar: "محروث", en: "Plowed", he: "חרוש" },
      { cir: "Жъо", ar: "جمر", en: "Embers", he: "גחלים" },
      { cir: "Жъуа-гъэ", ar: "محروث", en: "Plowed", he: "חרוש" },
      { cir: "Жъо-ку", ar: "الجَمْر، النار المتقدة", en: "Embers", he: "גחלים" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\16_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_37() {
  const data = [
    [
      { cir: "Жьы-бгъэ", ar: "ريح", en: "Wind", he: "רוח" },
      { cir: "Фы-жьы", ar: "أبيض", en: "White", he: "לבן" },
      { cir: "Тхъэ-жьхэу", ar: "بسعادة", en: "Happily", he: "בשמחה" },
      { cir: "Жьыф", ar: "مروحة", en: "Fan", he: "מאוורר" },
    ],
    [
      { cir: "Ежь", ar: "هو", en: "He", he: "הוא" },
      { cir: "Та-дэ-жьы", ar: "عندنا", en: "We have", he: "יש לנו" },
      { cir: "Жьау", ar: "ظل", en: "Shadow", he: "צל" },
      { cir: "Лъе-жьэ", ar: "يلاحق", en: "Follows", he: "עוקב" },
    ],
    [
      { cir: "Жъа-пхъэ", ar: "مقلاة", en: "Frying pan", he: "מחבת" },
      { cir: "Нэ-нэжъ", ar: "جدة", en: "Grandmother", he: "סבתא" },
      { cir: "бгъэжъ", ar: "نسر", en: "Eagle", he: "נשר" },
      { cir: "Чэт-жъый", ar: "صوص", en: "Sauce", he: "רוטב" },
    ],
    [
      { cir: "Жъуа-гъо", ar: "نجمة", en: "Star", he: "כוכב" },
      { cir: "Жъо-на-кIо", ar: "فلاح / حارث", en: "Farmer", he: "חקלאי" },
      { cir: "Сэ-гу-за-жъо", ar: "أنا مستعجل", en: "I am in a hurry", he: "אני ממהר" },
      { cir: "Хьа-лыжъу", ar: "حلوز / فطائر", en: "Pancakes", he: "פנקייקים" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\16_3.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_38() {
  const data: string[][] = [
    ["ШЪ шъ", "0100.png", "Шъэ", "مائة", "Hundred", "מאה"],
    ["ШI шI", "0017.png", "ПшIы", "عشرة", "Ten", "עשרה"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_39() {
  const data = [
    [
      { cir: "Шъу", ar: "لون", en: "Color", he: "צבע" },
      { cir: "Шъо", ar: "أنتم", en: "You", he: "אתם" },
      { cir: "Шъуа-шэ", ar: "الزي لباس / كامل", en: "Dress / Whole", he: "שמלה / כולו" },
      { cir: "Шъо-у", ar: "عسل", en: "Honey", he: "דבש" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_40() {
  const data = [
    [
      { cir: "ШIу", ar: "خير", en: "Good", he: "טוב" },
      { cir: "ШIо", ar: "قولوا", en: "Say", he: "אמרו" },
      { cir: "ШIу-гуащ", ar: "الحماة", en: "Mother in-law (one's wife's mother)", he: "חמות" },
      { cir: "ШIо-и", ar: "وسخ", en: "Dirty", he: "מלוכלך" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_3.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_41() {
  const data = [
    [
      { cir: "Шъа-о", ar: "ولد / عريس", en: "lad", he: "נער" },
      { cir: "Пшъа-шъэ", ar: "بنت", en: "girl", he: "ילדה" },
      { cir: "Ды-шъэ", ar: "ذهب", en: "gold", he: "זהב" },
      { cir: "Шъхьэ", ar: "رأس", en: "head", he: "ראש" },
    ],
    [
      { cir: "Шъуа-е", ar: "جرذ", en: "rat", he: "עכבר" },
      { cir: "Шъо-хэр", ar: "الألوان", en: "colors", he: "צבעים" },
      { cir: "Шъуе-дэIу", ar: "استمعوا له", en: "listen to it", he: "האזינו לו" },
      { cir: "Шъоф", ar: "فلاة / برّية", en: "wilderness / fields", he: "שדות" },
    ],
    [
      { cir: "ШIэ-ны-гъэ", ar: "عِلْم", en: "knowledge", he: "ידע" },
      {
        cir: "ШIы-хьа-фы",
        ar: "فزعة (عمل مجاني طوعي جماعي لمساعدة أحدهم",
        en: "volunteer work",
        he: "עבודה מתנדבת",
      },
      { cir: "Е-шIы", ar: "يصنع / يعمل / يبني", en: "make", he: "עושה" },
      { cir: "ШIэх", ar: "سريعاً", en: "quickly", he: "מהר" },
    ],
    [
      { cir: "Гу-шIуа-гъо", ar: "فرحة / سعادة", en: "joy", he: "שמחה" },
      { cir: "Е-гъэ-гу-шIо", ar: "يُفرح / يُسعد", en: "make happy", he: "משמח" },
      { cir: "ШIо-дэ-хэн", ar: "يعجبه / يجده جميلاً", en: "like", he: "אהב" },
      { cir: "ШIу-шIагъ", ar: "عمل الخير", en: "do good", he: "עשה טוב" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\17_4.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_42() {
  const data: string[][] = [["ЦI цI", "0025.png", "Цъыргъ", "حلزون", "Snail", "חלמיש"]];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\18_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_43() {
  const data = [
    [
      { cir: "ЦIы-кIу", ar: "صغير", en: "Small", he: "קטן" },
      { cir: "ШIу-цIэ", ar: "أسود", en: "Black", he: "שחור" },
      { cir: "Мэ-кIэ-цIых", ar: "يبيضون", en: "They lay eggs", he: "הם מניחים ביצים" },
      { cir: "ПцIашхъу", ar: "طائر السنونو", en: "Parrot", he: "תוכי" },
    ],
    [
      { cir: "ЦIы-фы", ar: "إنسان", en: "Human", he: "אדם" },
      { cir: "ЦIэ-рыIу", ar: "مشهور", en: "Famous", he: "מפורסם" },
      { cir: "СцIэ", ar: "اسمي", en: "My name", he: "שמי" },
      { cir: "У-цIы-ны-гъэ", ar: "إبتل", en: "Tested", he: "נבחן" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\18_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_44() {
  const data: string[][] = [
    ["ЧЪ чъ", "0053.png", "Чъыгы", "شجرة", "Tree", "עץ"],
    ["ЧӀ чI", "0031.png", "ЧӀы", "أرض", "Earth", "אדמה"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\19_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_45() {
  const data = [
    [
      { cir: "Чъа-гъэ", ar: "ركض", en: "Ran", he: "רץ" },
      { cir: "Чъы-е", ar: "نوم", en: "Sleep", he: "שינה" },
      { cir: "Къэ-ла-пчъэ", ar: "بوابة", en: "Gate", he: "שער" },
      { cir: "Чъы-гы-уIу", ar: "نقار الخشب", en: "Woodpecker", he: "קפוז" },
    ],
    [
      { cir: "Чъэ-пы", ar: "الصقيع", en: "Frost", he: "קרח" },
      { cir: "Чъы-Iэ", ar: "برد", en: "Cold", he: "קר" },
      { cir: "Къа-те-чъэу", ar: "يتجاوزهم", en: "Pass them", he: "עובר עליהם" },
      { cir: "Чъы-гы-шхо", ar: "شجرة كبيرة", en: "Big tree", he: "עץ גדול" },
    ],
    [
      { cir: "ЧIы-гу", ar: "سؤال", en: "Question", he: "שאלה" },
      { cir: "У-пчIэ", ar: "غراب", en: "Raven", he: "עורב" },
      { cir: "Къуан-чIэ", ar: "موجود في الاسفل", en: "Exists below", he: "קיים מתחת" },
      { cir: "ЧIэлъ", ar: "كوكب الأرض / الحقل / التربة", en: "Earth", he: "אדמה" },
    ],
    [
      { cir: "ЧIа-хьэ", ar: "يذهب تحت", en: "Goes under", he: "הולך מתחת" },
      { cir: "ЧIэт", ar: "يقف تحت", en: "Stands under", he: "עומד מתחת" },
      { cir: "ЧIы-сыс", ar: "زلزال", en: "Earthquake", he: "רעידת אדמה" },
      { cir: "ЧIы-хъу-мбый", ar: "الخُلد", en: "Eternal life", he: "חיי עולם" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\19_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_46() {
  const data: string[][] = [
    ["ТӀ тI", "0036.png", "ТӀы", "كَبْش", "Ram", "כבש"],
    ["ПӀ пI", "0019.png", "ПӀэ", "سرير", "Bed", "מיטה"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\20_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_47() {
  const data = [
    [
      { cir: "Я-тIэ", ar: "التراب", en: "Dust", he: "אבק" },
      { cir: "ТIыс", ar: "اقعد", en: "Sit", he: "שב" },
      { cir: "Е-тIа-нэ", ar: "بعد ذلك", en: "After that", he: "אחרי זה" },
      { cir: "ТIупщ", ar: "اترك", en: "Leave", he: "עזוב" },
    ],
    [
      { cir: "На-тIэ", ar: "جبين", en: "Forehead", he: "מצח" },
      { cir: "Е-тIы-ргу", ar: "يدفع", en: "Push", he: "דחף" },
      { cir: "Е-тIа-тэ", ar: "يفك / يحّل عقدة", en: "Untie", he: "פתח" },
      { cir: "ТIу-рытIу", ar: "مثنى مثنى", en: "Dual dual", he: "זוג זוג" },
    ],
    [
      { cir: "ПIэ-кIор", ar: "سرير", en: "Bed", he: "מיטה" },
      { cir: "ПIэ-техъу", ar: "غطاء السرير", en: "Bed cover", he: "שמיכה" },
      { cir: "ПIэ-шъхьагъ", ar: "مسند رأس السرير", en: "Headboard", he: "ראש מיטה" },
      { cir: "Е-пIы-ртIы", ar: "يدهس / يمعس", en: "Crush", he: "דפק" },
    ],
    [
      { cir: "ПIуа-гъэр", ar: "الذي قلتة", en: "Which you said", he: "שאמרת" },
      { cir: "ПIуа-блэ", ar: "الحصيرة", en: "Mat", he: "שטיח" },
      { cir: "Iэ-пIо-кIэ", ar: "بالمفروشات", en: "With the furnishings", he: "עם הרהיטים" },
      { cir: "Зэ-ра-пIо-рэр", ar: "كما تقول", en: "As you say", he: "כפי שאומרים" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\20_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_48() {
  const data: string[][] = [
    ["ЛӀ лI", "0056.png", "ЛӀы", "رجل", "Man", "איש"],
    ["ДЗ дз", "0052.png", "Дзэ", "جيش", "Army", "צבא"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/lesson_0/pictures/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\21_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_49() {
  const data = [
    [
      { cir: "ЛIыжъ", ar: "عجوز", en: "Old-man", he: "זקן" },
      { cir: "ПлIы", ar: "أربعة", en: "Four", he: "ארבע" },
      { cir: "е-чъэ-лIагъ", ar: "ركض إلى", en: "Ran to", he: "רץ אל" },
      { cir: "ПлIа-нэ", ar: "ربع", en: "Quarter", he: "רבע" },
    ],
    [
      { cir: "ЛIы-гъэ", ar: "رجولة / شجاعة", en: "Manhood", he: "גברות" },
      { cir: "IаплI", ar: "كامل الذراع", en: "Full arm", he: "זרוע מלאה" },
      { cir: "У-лIэн", ar: "تموت", en: "Die", he: "מת" },
      { cir: "У-лIын", ar: "تكون رجلا / شجاعا", en: "Become a man / brave", he: "הפך לגבר / אמיץ" },
    ],
    [
      { cir: "Е-дзы", ar: "يرمي", en: "Throws", he: "זורק" },
      { cir: "Ба-дзэ", ar: "ذباب", en: "Fly", he: "זבוב" },
      { cir: "Дзы-о", ar: "كيس / شِوَال", en: "Bag", he: "תיק" },
      { cir: "бэ-дзэ-огъу", ar: "شهر يوليو", en: "July", he: "יולי" },
    ],
    [
      { cir: "Хьа-ндзу", ar: "كوم دريس كبير", en: "Big pile of clothes", he: "ערימת בגדים גדולה" },
      {
        cir: "Дзон",
        ar: "يحجز الماء / يسد المجرى المائي",
        en: "Blocks water / blocks waterway",
        he: "חוסם מים / חוסם נתיב מים",
      },
      { cir: "Бэ-дзэ-рым", ar: "في السوق", en: "In the market", he: "בשוק" },
      { cir: "Ти-дзэ-кIолI", ar: "جندينا", en: "Our soldier", he: "חיילינו" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\21_2.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_50() {
  const data = [
    [
      { cir: "А-ды-га-ер", ar: "الأديغاية", en: "The Adyghean", he: "האדיגית" },
      { cir: "Гу", ar: "قلب", en: "Heart", he: "לב" },
      { cir: "Гъэ-маф", ar: "صيف", en: "Summer", he: "קיץ" },
    ],
    [
      { cir: "Жэ", ar: "فم", en: "Mouth", he: "פה" },
      { cir: "Жьы-бгъэ", ar: "ريح", en: "Wind", he: "רוח" },
      { cir: "Жъа-пхъэ", ar: "مقلاة", en: "Frying pan", he: "מחבת" },
      { cir: "Жъуа-гъо", ar: "نجمة", en: "Star", he: "כוכב" },
    ],
    [
      { cir: "Ко-цы", ar: "قمح", en: "Wheat", he: "חיטה" },
      { cir: "КIэ", ar: "ذيل جديد", en: "New tail", he: "זנב חדש" },
      { cir: "Ма-кIо", ar: "يمشي / يسير", en: "Walks", he: "הולך" },
      { cir: "Къа-мэ", ar: "القامة / غنجر أديغي", en: "Adyghean stature", he: "גובה אדיגי" },
    ],
    [
      { cir: "Лы", ar: "لحم", en: "Meat", he: "בשר" },
      { cir: "Лъа-къо", ar: "رِجْل", en: "Leg", he: "רגל" },
      { cir: "ЛIы", ar: "رجُل", en: "Man", he: "איש" },
    ],
    [
      { cir: "Пы-жъы", ar: "قنفذ", en: "Hedgehog", he: "קיפוד" },
      { cir: "ПIэ", ar: "سرير", en: "Bed", he: "מיטה" },
    ],
    [
      { cir: "Ты-гъужъ", ar: "ذئب", en: "Wolf", he: "זאב" },
      { cir: "ТIы", ar: "كبش", en: "Ram", he: "איל" },
    ],
    [
      { cir: "Цы-гъо", ar: "فأر", en: "Mouse", he: "עכבר" },
      { cir: "Цу-мпэ", ar: "توت أرضي", en: "Earth berry", he: "תות אדמה" },
      { cir: "ЦIыргъ", ar: "حلزون", en: "Snail", he: "חלזון" },
    ],
    [
      { cir: "Чэ-рке-ся", ar: "شركيسيا", en: "Sharki", he: "שרקיה" },
      { cir: "Чъы-гы", ar: "شجرة", en: "Tree", he: "עץ" },
      { cir: "ЧIы", ar: "أرض", en: "Earth", he: "אדמה" },
    ],
    [
      { cir: "Шы", ar: "أخ / حصان", en: "Brother / Horse", he: "אח / סוס" },
      { cir: "Щэ", ar: "حليب", en: "Milk", he: "חלב" },
      { cir: "Шъхьэ", ar: "رأس", en: "Head", he: "ראש" },
      { cir: "Шъо-хэр", ar: "الألوان", en: "Colors", he: "צבעים" },
    ],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    return row.map((cell) => {
      return (
        <LessonTableCell firstRow={cell.cir} langToTranslationMap={{ En: cell.en, Ar: cell.ar }} />
      );
    });
  });

  return (
    <PanelDiv audioPath="lessons\lesson_0\audio\22_1.mp3">
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className=""
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}
