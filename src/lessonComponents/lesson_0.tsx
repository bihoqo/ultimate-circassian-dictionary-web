import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import React from "react";
import PanelDiv from "../components/panelDiv";

export function Lesson_0_1() {
  const data: string[][] = [
    ["А а", "/lessons/suad/0061.jpg", "Атакъэ", "ديك", "Rooster"],
    ["Б б", "/lessons/suad/0026.jpg", "Блэ", "أفعى", "Snake"],
    ["В в", "/lessons/suad/0029.jpg", "Витамин", "فيتامين", "Vitamin"],
    ["Г г", "/lessons/suad/0045.jpg", "Адыгаер", "أديغيا", "Adygea"],
    ["ГЪ гъ", "/lessons/suad/0048.jpg", "Гъэмаф", "صيف", "summer"],
    ["Д д", "/lessons/suad/0057.jpg", "Дэ", "جوز", "Nut"],
    ["ДЖ дж", "/lessons/suad/0041.jpg", "Джэмышх", "ملعقة", "Spoon"],
    ["ДЗ дз", "/lessons/suad/0052.jpg", "Дзэ", "جيش", "Army"],
    ["Е е", "/lessons/suad/0007.jpg", "Еджэ", "يقرأ", "Reads"],
    ["Ж", "/lessons/suad/0022.jpg", "Жэ", "فم", "Mouth"],
    ["ЖЪ", "/lessons/suad/0055.jpg", "Жъапхъэ", "مقلاة", "Frying pan"],
    ["ЖЬ", "/lessons/suad/0050.jpg", "Жьыбгъэ", "ريح", "Wind"],
    ["З з", "/lessons/suad/0015.jpg", "Зы", "واحد", "One"],
    ["И и", "/lessons/suad/0006.jpg", "Иныжъ", "عملاق", "Giant"],
    ["Й й", "/lessons/suad/0038.jpg", "Пцэжъый", "سمكه", "Fish"],
    ["К к", "/lessons/suad/0010.jpg", "Коцы", "قمح", "Wheat"],
    ["КЪ къ", "/lessons/suad/0049.jpg", "Къамэ", "قامة – خنجر", "Stature – Dagger"],
    ["КI кI", "/lessons/suad/0040.jpg", "КIэ", "ذيل", "Tail"],
    ["Л л", "/lessons/suad/0062.jpg", "Лы", "لحم", "Meat"],
    ["ЛЪ лъ", "/lessons/suad/0064.jpg", "Лъакъо", "رجل", "Leg"],
    ["М м", "/lessons/suad/0002.jpg", "Мышъэ", "دب", "Bear"],
    ["Н н", "/lessons/suad/0043.jpg", "Натрыф", "ذرة", "Corn"],
    ["О о", "/lessons/suad/0009.jpg", "Осы", "ثلج", "Snow"],
    ["П п", "/lessons/suad/0039.jpg", "Пыжъы", "قنفذ", "Hedgehog"],
    ["ПI пI", "/lessons/suad/0019.jpg", "ПIэ", "فراش", "Butterfly"],
    ["Р р", "/lessons/suad/0059.jpg", "Хъурай", "دائرة", "Circle"],
    ["С с", "/lessons/suad/0004.jpg", "Санэ", "عنب", "Grapes"],
    ["Т т", "/lessons/suad/0013.jpg", "Tыгъужъ", "ذئب", "Wolf"],
    ["ТI тI", "/lessons/suad/0036.jpg", "ТIы", "كبش", "Ram"],
    ["У у", "/lessons/suad/0008.jpg", "Унэ", "بيت", "House"],
    ["Ф ф", "/lessons/suad/0037.jpg", "Фыжьы", "أبيض", "White"],
    ["Х х", "/lessons/suad/0016.jpg", "Хы", "ستة", "Six"],
    ["ХЪ хъ", "/lessons/suad/0018.jpg", "Хъагъэ", "شبكة/ مطرز", "Net/Embroidered"],
    ["ХЬ хь", "/lessons/suad/0020.jpg", "Хьэ", "كلب", "Dog"],
    ["Ц ц", "/lessons/suad/0063.jpg", "Цыгъо", "فار", "Mouse"],
    ["ЦӀ цI", "/lessons/suad/0025.jpg", "ЦӀыргъ", "حلزون", "Snail"],
    ["Ч ч", "/lessons/suad/0046.jpg", "Чэркеся", "شركيسيا", "Circassia"],
    ["ЧЪ чъ", "/lessons/suad/0053.jpg", "Чъыгы", "شجره", "Tree"],
    ["ЧӀ чI", "/lessons/suad/0031.jpg", "ЧӀы", "أرض", "Earth"],
    ["Ш ш", "/lessons/suad/0011.jpg", "Шы", "حصان", "Horse"],
    ["ШЪ шъ", "/lessons/suad/0100.jpg", "Шъэ", "مئه", "Hundred"],
    ["Щ щ", "/lessons/suad/0014.jpg", "Щэ", "حليب", "Milk"],
    ["Ы ы", "/lessons/suad/0005.jpg", "Сыд", "ماذا", "What"],
    ["Э э", "/lessons/suad/0003.jpg", "Iэ", "يد", "Hand"],
    ["Я я", "/lessons/suad/0023.jpg", "ЯтIэ", "تراب", "Dust"],
    ["I I", "/lessons/suad/0012.jpg", "Iанэ", "طاولة", "Table"],
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_2() {
  const data: string[][] = [
    ["А а", "0061.jpg", "Атакъэ", "ديك", "Rooster"],
    ["О о", "0009.jpg", "Осы", "ثلج", "Snow"],
    ["Э э", "0003.jpg", "Iэ", "يد", "Hand"],
    ["Ы ы", "0005.jpg", "Сыд", "ماذا", "What"],
    ["У у", "0008.jpg", "Унэ", "بيت", "House"],
    ["И и", "0006.jpg", "Иныжъ", "عملاق", "Giant"],
    ["Е е", "0007.jpg", "Еджэ", "يقرأ", "Reading"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_2b() {
  const data: string[][] = [
    ["М м", "0002.jpg", "Мышъэ", "دب", "Bear"],
    ["С с", "0004.jpg", "Санэ", "عنب", "Grapes"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_3() {
  const data = [
    [
      { cir: "О-сы", ar: "ثلج", en: "Snow" },
      { cir: "Уа-сэ", ar: "سعر", en: "Price" },
      { cir: "Са-сэ", ar: "(فتاة)  ساسه", en: "Sasa (name)" },
      { cir: "Си-мэ", ar: "سيما  (اسم)", en: "Sima (name)" },
    ],
    [
      { cir: "Се-сы", ar: "أسبح", en: "Swim" },
      { cir: "Уис", ar: "أنت موجود في الداخل", en: "You are inside" },
      { cir: "Е-сы", ar: "يسبح", en: "Swims" },
      { cir: "Мы-е", ar: "التفاح البري", en: "Wild apple" },
    ],
    [
      { cir: "Ис", ar: "موجود في الداخل", en: "Inside" },
      { cir: "Уа-е", ar: "عاصفه", en: "Storm" },
      { cir: "Сис", ar: "أنا موجود في الداخل", en: "I am inside" },
      { cir: "Е-о", ar: "يضرب", en: "Hits" },
    ],
    [
      { cir: "У-сэ", ar: "شعر", en: "Hair" },
      { cir: "Мэу", ar: "هنا", en: "Here" },
      { cir: "Ау", ar: "لكن", en: "But" },
      { cir: "Сэ", ar: "أنا", en: "I" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_4() {
  const data: string[][] = [
    ["К к", "0010.jpg", "Коцы", "قمح", "Wheat"],
    ["Т т", "0013.jpg", "Tыгъужъ", "ذئب", "Wolf"],
    ["I I", "0012.jpg", "Iанэ", "طاولة", "Table"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_5() {
  const data = [
    [
      { cir: "Тат", ar: "أب", en: "Father" },
      { cir: "Тет", ar: "موجود على / أبينا", en: "Is on / Our father" },
      { cir: "УиӀ", ar: "لديك", en: "You have" },
      { cir: "ТиӀ", ar: "لدينا", en: "We have" },
    ],
    [
      { cir: "Ку", ar: "عربة", en: "Carriage" },
      { cir: "А-Ӏо", ar: "يقولون", en: "They say" },
      { cir: "У-тет", ar: "تقف على", en: "Stand on" },
      { cir: "Ӏа-тэ", ar: "كومة", en: "Pile" },
    ],
    [
      { cir: "Уа-тэ", ar: "مطرقة", en: "Hammer" },
      { cir: "О-ку-о", ar: "أنت تصرخ", en: "You scream" },
      { cir: "А-те-Ӏэ", ar: "يلمسهم من فوق", en: "Touch them from above" },
      { cir: "Те-о", ar: "يطرق على", en: "Knocks on" },
    ],
    [
      { cir: "Ты-Ӏут", ar: "نحن نقف أمام", en: "We stand in front of" },
      { cir: "Тэ-ку-о", ar: "نصرخ", en: "We scream" },
      { cir: "Та-те-Ӏэ", ar: "نلمسهم من فوق", en: "We touch them from above" },
      { cir: "Е-Ӏуа-тэ", ar: "يحكي / يسرد", en: "He tells" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_6() {
  const data: string[][] = [
    ["Ш ш", "0011.jpg", "Шы", "حصان / أَخ", "Horse"],
    ["Щ щ", "0014.jpg", "Щэ", "حليب", "Milk"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_7() {
  const data = [
    [
      { cir: "Шы", ar: "حصان / أَخ", en: "Horse" },
      { cir: "Шэ", ar: "دَسَم", en: "Milk" },
      { cir: "Шэщ", ar: "اسطبل حصان", en: "Horse stable" },
      { cir: "Шыу", ar: "فارس", en: "Knight" },
    ],
    [
      { cir: "Ша-о", ar: "ساىق عربة خيل", en: "Rider" },
      { cir: "Ша-Iо", ar: "حظيرة خيل", en: "Horse stable" },
      { cir: "Шэ-сы", ar: "محامي / كفيل", en: "Lawyer / Guarantor" },
      { cir: "Ша-ко", ar: "شهد / قرص العسل", en: "Honey" },
    ],
    [
      { cir: "Щы-сэ", ar: "مثال", en: "Example" },
      { cir: "Ща-тэ", ar: "القشده", en: "Cream" },
      { cir: "ЩыI", ar: "موجود", en: "Exists" },
      { cir: "Щы", ar: "ثلاث", en: "Three" },
    ],
    [
      { cir: "Щыс", ar: "جالس", en: "Sitting" },
      { cir: "Щыщ", ar: "ينتمي إلى / منه", en: "Belongs to / From it" },
      { cir: "Е-щы", ar: "يقيس / يحلب", en: "Measures / Milks" },
      { cir: "Е-щэ", ar: "يبيع", en: "Sells" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_8() {
  const data: string[][] = [
    ["Я я", "0023.jpg", "ЯтIэ", "تراب", "Dust"],
    ["Й й", "0038.jpg", "Пцэжъый", "سمكه", "Fish"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_9() {
  const data = [
    [
      { cir: "Я-е", ar: "سمين جدًا / اسطوانة", en: "Very fat / Cylinder" },
      { cir: "Сай", ar: "ثوب نسائي أديغي", en: "" },
      { cir: "С-ят", ar: "أَبي", en: "Father" },
      { cir: "ЯI", ar: "لديهم", en: "They have" },
    ],
    [
      { cir: "Яш", ar: "أَخوهم", en: "Their brother" },
      { cir: "Я-ты", ar: "يدفعون", en: "They pay" },
      { cir: "Iой", ar: "ثغاء", en: "Thug" },
      { cir: "О-у-я", ar: "هل هو لك؟", en: "Is it yours?" },
    ],
    [
      { cir: "Я-тэ", ar: "أَبوه", en: "His father" },
      { cir: "Я-щэ", ar: "يبيعون", en: "They sell" },
      { cir: "Я-тэш", ar: "عمه", en: "His uncle" },
      { cir: "Яй", ar: "لهم", en: "For them" },
    ],
    [
      { cir: "Ий", ar: "له", en: "His" },
      { cir: "О-уй", ar: "لك", en: "For you" },
      { cir: "Сэ-сый", ar: "لي", en: "For me" },
      { cir: "Тэ-тый", ar: "لنا", en: "For us" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_10() {
  const data: string[][] = [
    ["П п", "0039.jpg", "Пыжъы", "قُنفذ", "Hedgehog"],
    ["Р р", "0059.jpg", "Хъурай", "دائرة", "Circle"],
    ["Н н", "0043.jpg", "Натрыф", "ذرة", "Corn"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_11() {
  const data = [
    [
      { cir: "На-сып", ar: "ناسب (اسم)", en: "Suitable (name)" },
      { cir: "Си-нэ", ar: "سينة (اسم) / عيني", en: "Sin (name) / My eyes" },
      { cir: "Пэ-рыт", ar: "برت  (اسم) / قائد", en: "Bert (name) / Leader" },
      {
        cir: "Сэ-тэ-най",
        ar: "ستناي (اسم) / زهرة جميلة جدا",
        en: "Stenai (name) / Very beautiful flower",
      },
    ],
    [
      { cir: "Iа-пэ", ar: "طرف الإصبع / الكف", en: "Fingertip / Palm" },
      { cir: "Пщы-нэ", ar: "أكورديون", en: "Accordion" },
      { cir: "Псы-нэ", ar: "بئر", en: "Well" },
      { cir: "Ны-сэ", ar: "عروس", en: "Bride" },
    ],
    [
      { cir: "Ре-ты", ar: "يعطيه", en: "Gives it" },
      { cir: "Псы", ar: "ماء", en: "Water" },
      { cir: "Нэпс", ar: "دمعة", en: "Tear" },
      { cir: "Па-Iо", ar: "قبعة", en: "Hat" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_12() {
  const data: string[][] = [
    ["З з", "0015.jpg", "Зы", "واحد", "One"],
    ["Х х", "0016.jpg", "Хы", "ستة", "Six"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_13() {
  const data = [
    [
      { cir: "Мэ-зы", ar: "غابه", en: "Forest" },
      { cir: "Ма-зэ", ar: "مازة (اسم) / قمر", en: "Maza (name) / Moon" },
      { cir: "Си-маз", ar: "سيماز (اسم) / قمري", en: "Simaz (name) / Lunar" },
      { cir: "Мэ-зах", ar: "مظلم", en: "Dark" },
    ],
    [
      { cir: "За-о", ar: "حرب", en: "War" },
      { cir: "Зы-рыз", ar: "واحداً واحداً", en: "One by one" },
      { cir: "Нэз", ar: "حافة", en: "Edge" },
      { cir: "Тэ-рэз", ar: "صحيح", en: "Correct" },
    ],
    [
      { cir: "Сэ-тхэ", ar: "أكتب", en: "Write" },
      { cir: "О-тхэ", ar: "تكتب", en: "You write" },
      { cir: "Тэ-тхэ", ar: "نكتب", en: "We write" },
      { cir: "Е-тхы", ar: "يكتب", en: "Writes" },
    ],
    [
      { cir: "Ма-тхэ", ar: "يكتب", en: "Writes" },
      { cir: "Ха-сэ", ar: "نادي / جمعية", en: "Club / Association" },
      { cir: "Ха-тэ", ar: "حقل", en: "Field" },
      { cir: "Хе-у-ты", ar: "يطبع / يسجل", en: "Prints / Records" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_14() {
  const data: string[][] = [
    ["Ч ч", "0046.jpg", "Чэркеся", "شركسيا", "Circassia"],
    ["Ц ц", "0063.jpg", "Цыгъо", "فأر", "Mouse"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_15() {
  const data = [
    [
      { cir: "Цу", ar: "ثور", en: "Bull" },
      { cir: "Цо", ar: "----", en: "----" },
      { cir: "Цуа-о", ar: "ضارب الثور", en: "Bullfighter" },
      { cir: "Те-у-цо", ar: "يدعس على", en: "Tramples" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_16() {
  const data = [
    [
      { cir: "Чэ-мы", ar: "بقرة", en: "Cow" },
      { cir: "Апч", ar: "زجاج", en: "Glass" },
      { cir: "Пчэн", ar: "سعال", en: "Cough" },
      { cir: "Чэ-рке-ся", ar: "شركسيا", en: "Circassia" },
    ],
    [
      { cir: "Чан", ar: "حاد", en: "Sharp" },
      { cir: "Чэ-щы", ar: "ليل", en: "Night" },
      { cir: "Чы-Iу", ar: "زِر", en: "Button" },
      { cir: "Псы-чэт", ar: "بطة", en: "Duck" },
    ],
    [
      { cir: "Пцэ", ar: "سمكة كبيرة", en: "Big fish" },
      { cir: "Цы-зэ", ar: "سنجاب", en: "Squirrel" },
      { cir: "На-пцэ", ar: "حاجب", en: "Eyebrow" },
      { cir: "Ца-цэ", ar: "شوكة / سيخ", en: "Fork / Skewer" },
    ],
    [
      { cir: "Цы-пэ", ar: "طرف / نهاية", en: "End" },
      { cir: "Ца-пэ", ar: "حرف السن", en: "Tooth letter" },
      { cir: "Псы-цу", ar: "جاموس", en: "Buffalo" },
      { cir: "Цу-мпэ", ar: "فريز / توت أرضي", en: "Strawberry / Ground berry" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_17() {
  const data: string[][] = [
    ["Д д", "0057.jpg", "Дэ", "جوز", "Nut"],
    ["Л л", "0062.jpg", "Лы", "لحم", "Meat"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_18() {
  const data = [
    [
      { cir: "Да-хэ", ar: "جميل", en: "Beautiful" },
      {
        cir: "Дэс",
        ar: "يجلس في مكان محاط بشيء/ يسكن",
        en: "Sits in a place surrounded by something / Lives",
      },
      { cir: "Ма-дэ", ar: "يخيط", en: "Sews" },
      { cir: "Сыд", ar: "? ماذا", en: "What" },
    ],
    [
      { cir: "Тхы-дэ", ar: "قصة / تاريخ", en: "Story / History" },
      { cir: "Iу-дан", ar: "خيط", en: "Thread" },
      { cir: "Да-нэ", ar: "حرير", en: "Silk" },
      { cir: "Дэ-шхын", ar: "غذاء", en: "Food" },
    ],
    [
      { cir: "Мэ-лы", ar: "غنم", en: "Sheep" },
      { cir: "Мы-лы", ar: "جليد", en: "Ice" },
      { cir: "Нал", ar: "نال (اسم) / حدوة الحصان", en: "Nal (name) / Horse's bridle" },
      { cir: "Нал-мэс", ar: "نالمس (اسم) / الماس", en: "Nalmes (name) / Diamond" },
    ],
    [
      { cir: "Лэпс", ar: "مرق اللحم", en: "Meat broth" },
      { cir: "Чы-лэ", ar: "قرية / مدينة", en: "Village / City" },
      { cir: "Ла-нлэ", ar: "رَخو", en: "Soft" },
      { cir: "Лэ-ныс-тэ", ar: "مقص", en: "Scissors" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_19() {
  const data: string[][] = [
    ["Б б", "0026.jpg", "Блэ", "أفعى", "Snake"],
    ["Г г", "0045.jpg", "Адыгаер", "الأديغاية", "Adygea"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_20() {
  const data = [
    [
      { cir: "Гу", ar: "قلب", en: "Heart" },
      { cir: "Го", ar: "-----", en: "-----" },
      { cir: "Гу-щыI", ar: "كلمة", en: "Word" },
      { cir: "У-гощ", ar: "توزيع", en: "Distribution" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_21() {
  const data = [
    [
      { cir: "Бэщ", ar: "عصا", en: "Stick" },
      { cir: "Бын", ar: "أبناء", en: "Sons" },
      { cir: "Бай", ar: "غني", en: "Rich" },
      { cir: "Бзэ", ar: "لغة", en: "Language" },
    ],
    [
      { cir: "Бзы-у", ar: "عصفور", en: "Bird" },
      { cir: "Ба-тыр", ar: "بطل", en: "Hero" },
      { cir: "Ща-бзэ", ar: "سهم", en: "Arrow" },
      { cir: "Быр-сыр", ar: "زحام / شغب", en: "Crowd / Riot" },
    ],
    [
      { cir: "А-ды-гэ", ar: "أديغة", en: "Adygea" },
      { cir: "Бэ-гын", ar: "تورُم", en: "Tumor" },
      { cir: "Гу-псэ", ar: "قريب", en: "Near" },
      { cir: "Гу-пшыс", ar: "فكرة", en: "Idea" },
    ],
    [
      { cir: "Бгы", ar: "خصر", en: "Waist" },
      { cir: "Гырз", ar: "ارتجاج / صوت الرعد", en: "Concussion / Thunder" },
      { cir: "Го-гон", ar: "ابريق", en: "Teapot" },
      { cir: "Гы-ны", ar: "بارود", en: "Gunpowder" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_22() {
  const data: string[][] = [
    ["Ж ж", "0022.jpg", "Жэ", "فم", "Mouth"],
    ["Ф ф", "0037.jpg", "Фыжьы", "أبيض", "White"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_23() {
  const data = [
    [
      { cir: "Жа-нэ", ar: "جانة (قبيلة اديغية)", en: "Zhane (Adyghe tribe)" },
      { cir: "Жэ-ры-Iу", ar: "شفهي", en: "Oral" },
      { cir: "Жа-бзэ", ar: "كلام / اللغة المحكية", en: "Speech / Spoken language" },
      { cir: "Жэ", ar: "فم / زحافة الثلج", en: "Mouth / Snowdrift" },
    ],
    [
      { cir: "Жын", ar: "التقيؤ", en: "Vomiting" },
      { cir: "Жэ-маф", ar: "مبارك الكلام", en: "Blessed speech" },
      { cir: "Жэ-май", ar: "قليل الكلام", en: "Few words" },
      { cir: "Бжиз", ar: "مقدار شبر (وحدة طول)", en: "Amount of an inch (length unit)" },
    ],
    [
      { cir: "Фай", ar: "يريد / ضروري", en: "Wants / Necessary" },
      { cir: "Фа-бэ", ar: "دافئ", en: "Warm" },
      { cir: "Ха-фэ", ar: "حامض", en: "Sour" },
      { cir: "Iо-фы", ar: "عمل / أمر", en: "Work / Command" },
    ],
    [
      { cir: "Фа-еп", ar: "لا يريد / غير ضروري", en: "Does not want / Not necessary" },
      { cir: "Зэ-фэс", ar: "لقاء / مؤتمر", en: "Meeting / Conference" },
      { cir: "За-фэ", ar: "عادل / مستقيم", en: "Fair / Straight" },
      { cir: "На-трыф", ar: "ذُرة", en: "Corn" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_24() {
  const data: string[][] = [["В в", "0029.jpg", "Витамин", "فيتامين", "Vitamin"]];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_25() {
  const data = [
    [
      { cir: "Ви-рус", ar: "فايروس", en: "Virus" },
      { cir: "Ви-за", ar: "تأشيرة", en: "Visa" },
      { cir: "Ваз", ar: "مزهرية", en: "Vase" },
      { cir: "Ви-та-мин", ar: "فيتامين", en: "Vitamin" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_26() {
  const data: string[][] = [
    ["КЪ къ", "0049.jpg", "Къамэ", "قامة / الخنجر الأدغي القفقاسي", "Stature – Dagger"],
    ["КI кI", "0040.jpg", "КIэ", "ذيل", "Tail"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_27() {
  const data = [
    [
      { cir: "КIу", ar: "إمشي", en: "Walk" },
      { cir: "КIо", ar: "طريقة مشي", en: "Walking method" },
      { cir: "КIуа-кIэ", ar: "يمشي", en: "Walks" },
      { cir: "Ма-кIо", ar: "----", en: "----" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_28() {
  const data = [
    [
      { cir: "Ма-къэ", ar: "صوت", en: "Sound" },
      { cir: "Къэ-Iу", ar: "مسموع", en: "Audible" },
      { cir: "Къы-сэт", ar: "أعطني", en: "Give me" },
      { cir: "Къа-шыкъ", ar: "ملعقة كبيرة / مغرفة", en: "Large spoon / Scoop" },
    ],
    [
      { cir: "А-та-къэ", ar: "ديك", en: "Rooster" },
      { cir: "Копкъ", ar: "الوِرك", en: "Fork" },
      { cir: "Ра-та-къо", ar: "يرمون فيه", en: "Throw in it" },
      { cir: "Къу-та-мэ", ar: "غصن", en: "Branch" },
    ],
    [
      { cir: "КIа-псэ", ar: "حبل", en: "Rope" },
      { cir: "КIэ-нкIэ", ar: "بيضة", en: "Egg" },
      { cir: "Мэ-такI", ar: "سلة جديدة", en: "New basket" },
      { cir: "Си-кIас", ar: "أحب", en: "Love" },
    ],
    [
      { cir: "КIо-дын", ar: "ضياع / تلَف", en: "Loss" },
      { cir: "Ша-кIо", ar: "صياد", en: "Hunter" },
      { cir: "Мы-шкIу", ar: "بلوط", en: "Oak" },
      { cir: "Мэ-ткIу", ar: "يذوب", en: "Melts" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_29() {
  const data: string[][] = [
    ["ДЖ дж", "0041.jpg", "Джэмышх", "ملعقة", "Spoon"],
    ["ГЪ гъ", "0048.jpg", "Гъэмаф", "صيف", "summer"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_30() {
  const data = [
    [
      { cir: "Джа-нэ", ar: "قميص / ثوب", en: "Shirt" },
      { cir: "Къуа-джэ", ar: "قرية", en: "Village" },
      { cir: "Джа-е", ar: "حوت / قرموط", en: "Whale" },
      { cir: "Е-джэ", ar: "يقرأ", en: "Reads" },
    ],
    [
      { cir: "Джыр", ar: "الآن", en: "Now" },
      { cir: "Джа-дэ", ar: "كبير", en: "Big" },
      { cir: "Мэ-джэ-гу", ar: "يلعب", en: "Plays" },
      { cir: "Мардж", ar: "نداء نجدة", en: "Distress call" },
    ],
    [
      { cir: "Дэ-гъу", ar: "جيد", en: "Good" },
      { cir: "Мэ-гъы", ar: "يبكي", en: "Cries" },
      { cir: "Хэ-гъэгу", ar: "دولة", en: "State" },
      { cir: "У-на-гъо", ar: "عائلة", en: "Family" },
    ],
    [
      { cir: "Гъу-сэ", ar: "صديق", en: "Friend" },
      { cir: "Гъа-тхэ", ar: "ربيع", en: "Spring" },
      { cir: "Гъуа-нэ", ar: "ثقب فتحة", en: "Hole" },
      { cir: "Гъу-нджэ", ar: "مرآة", en: "Mirror" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_31() {
  const data: string[][] = [
    ["ХЬ хь", "0020.jpg", "Хьэ", "كلب", "Dog"],
    ["ХЪ хъ", "0018.jpg", "Хъагъэ", "زخرفة/ شبكة", "Net/Embroidered"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_32() {
  const data = [
    [
      { cir: "Хьа-кIэ", ar: "ضيف", en: "Guest" },
      { cir: "Тхьа-мыкI", ar: "مسكين", en: "Poor" },
      { cir: "Къе-хьы", ar: "يجلب", en: "Brings" },
      { cir: "Мэ-хьа-къу", ar: "ينبح", en: "Barks" },
    ],
    [
      { cir: "Тхьа-пэ", ar: "ورقة", en: "Paper" },
      { cir: "Хьа-лыгъу", ar: "خبز", en: "Bread" },
      { cir: "Тхьа-ркъо", ar: "حمامة", en: "Dove" },
      { cir: "Тхьа-кIум-кIыхь", ar: "أرنب", en: "Rabbit" },
    ],
    [
      { cir: "Пхъэ", ar: "خشب", en: "Wood" },
      { cir: "Хъо-хъу", ar: "دعاء / ثناء", en: "Prayer / Praise" },
      { cir: "Хъу-рай", ar: "دائرة", en: "Circle" },
      { cir: "Пхъэ-нкIыпхъ", ar: "مكنسة", en: "Broom" },
    ],
    [
      { cir: "Мэ-хъы-е", ar: "يتحرك", en: "Moves" },
      { cir: "Хъу-пхъэ", ar: "مؤدب", en: "Polite" },
      { cir: "Тхъа-гъо", ar: "سرور / سعادة", en: "Joy / Happiness" },
      { cir: "Мэ-ла-хъо", ar: "راع", en: "Shepherd" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_33() {
  const data: string[][] = [["ЛЪ лъ", "0064.jpg", "Лъакъо", "رِجْل", "Leg"]];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell key={letter} firstRow={letter} />,
      <LessonTableCell key={letter} imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_34() {
  const data = [
    [
      { cir: "Лъы", ar: "دم", en: "Blood" },
      { cir: "Тхылъ", ar: "كتاب", en: "Book" },
      { cir: "Ас-лъан", ar: "أسد", en: "Lion" },
      { cir: "Лъэ-шэу", ar: "بشدة", en: "Strongly" },
    ],
    [
      { cir: "Лъа-гэ", ar: "عالي", en: "High" },
      { cir: "Къэ-плъан", ar: "نمر", en: "Tiger" },
      { cir: "Iэ-плъэкI", ar: "منشفة", en: "Towel" },
      { cir: "Еп-лъы", ar: "ينظر", en: "Looks" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_35() {
  const data: string[][] = [
    ["ЖЬ жь", "0050.jpg", "Жьыбгъэ", "ريح", "Wind"],
    ["ЖЪ жъ", "0055.jpg", "Жъапхъэ", "مقلاة", "Frying pan"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_36() {
  const data = [
    [
      { cir: "Жъу", ar: "محروث", en: "Plowed" },
      { cir: "Жъо", ar: "جمر", en: "Embers" },
      { cir: "Жъуа-гъэ", ar: "----", en: "----" },
      { cir: "Жъо-ку", ar: "----", en: "----" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_37() {
  const data = [
    [
      { cir: "Жьы-бгъэ", ar: "ريح", en: "Wind" },
      { cir: "Фы-жьы", ar: "أبيض", en: "White" },
      { cir: "Тхъэ-жьхэу", ar: "بسعادة", en: "Happily" },
      { cir: "Жьыф", ar: "مروحة", en: "Fan" },
    ],
    [
      { cir: "Ежь", ar: "هو", en: "He" },
      { cir: "Та-дэ-жьы", ar: "عندنا", en: "We have" },
      { cir: "Жьау", ar: "ظل", en: "Shadow" },
      { cir: "Лъе-жьэ", ar: "يلاحق", en: "Follows" },
    ],
    [
      { cir: "Жъа-пхъэ", ar: "مقلاة", en: "Frying pan" },
      { cir: "Нэ-нэжъ", ar: "جدة", en: "Grandmother" },
      { cir: "бгъэжъ", ar: "نسر", en: "Eagle" },
      { cir: "Чэт-жъый", ar: "صوص", en: "Sauce" },
    ],
    [
      { cir: "Жъуа-гъо", ar: "نجمة", en: "Star" },
      { cir: "Жъо-на-кIо", ar: "فلاح / حارث", en: "Farmer" },
      { cir: "Сэ-гу-за-жъо", ar: "أنا مستعجل", en: "I am in a hurry" },
      { cir: "Хьа-лыжъу", ar: "حلوز / فطائر", en: "Pancakes" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_38() {
  const data: string[][] = [
    ["ШЪ шъ", "0100.jpg", "Шъэ", "مائة", "Hundred"],
    ["ШI шI", "0017.jpg", "ПшIы", "عشرة", "Ten"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_39() {
  const data = [
    [
      { cir: "Шъу", ar: "لون", en: "Color" },
      { cir: "Шъо", ar: "أنتم", en: "You" },
      { cir: "Шъуа-шэ", ar: "الزي لباس / كامل", en: "Dress / Whole" },
      { cir: "Шъо-у", ar: "عسل", en: "Honey" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_40() {
  const data = [
    [
      { cir: "ШIу", ar: "خير", en: "Good" },
      { cir: "ШIо", ar: "قولوا", en: "Say" },
      { cir: "ШIу-гуащ", ar: "الحماة", en: "The in-laws" },
      { cir: "ШIо-и", ar: "وسخ", en: "Dirty" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_41() {
  const data = [
    [
      { cir: "Шъа-о", ar: "ولد / عريس", en: "lad" },
      { cir: "Пшъа-шъэ", ar: "بنت", en: "girl" },
      { cir: "Ды-шъэ", ar: "ذهب", en: "gold" },
      { cir: "Шъхьэ", ar: "رأس", en: "head" },
    ],
    [
      { cir: "Шъуа-е", ar: "جرذ", en: "rat" },
      { cir: "Шъо-хэр", ar: "الألوان", en: "colors" },
      { cir: "Шъуе-дэIу", ar: "استمعوا له", en: "listen to it" },
      { cir: "Шъоф", ar: "فلاة / برّية", en: "wilderness / fields" },
    ],
    [
      { cir: "ШIэ-ны-гъэ", ar: "عِلْم", en: "knowledge" },
      { cir: "ШIы-хьа-фы", ar: "فزعة (عمل مجاني طوعي جماعي لمساعدة أحدهم", en: "volunteer work" },
      { cir: "Е-шIы", ar: "يصنع / يعمل / يبني", en: "make" },
      { cir: "ШIэх", ar: "سريعاً", en: "quickly" },
    ],
    [
      { cir: "Гу-шIуа-гъо", ar: "فرحة / سعادة", en: "joy" },
      { cir: "Е-гъэ-гу-шIо", ar: "يُفرح / يُسعد", en: "make happy" },
      { cir: "ШIо-дэ-хэн", ar: "يعجبه / يجده جميلاً", en: "like" },
      { cir: "ШIу-шIагъ", ar: "عمل الخير", en: "do good" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_42() {
  const data: string[][] = [["ЦI цI", "0025.jpg", "Цъыргъ", "حلزون", "Snail"]];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_43() {
  const data = [
    [
      { cir: "ЦIы-кIу", ar: "صغير", en: "Small" },
      { cir: "ШIу-цIэ", ar: "أسود", en: "Black" },
      { cir: "Мэ-кIэ-цIых", ar: "يبيضون", en: "They lay eggs" },
      { cir: "ПцIашхъу", ar: "طائر السنونو", en: "Parrot" },
    ],
    [
      { cir: "ЦIы-фы", ar: "إنسان", en: "Human" },
      { cir: "ЦIэ-рыIу", ar: "مشهور", en: "Famous" },
      { cir: "СцIэ", ar: "اسمي", en: "My name" },
      { cir: "У-цIы-ны-гъэ", ar: "إبتل", en: "Tested" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_44() {
  const data: string[][] = [
    ["ЧЪ чъ", "0053.jpg", "Чъыгы", "شجرة", "Tree"],
    ["ЧӀ чI", "0031.jpg", "ЧӀы", "أرض", "Earth"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_45() {
  const data = [
    [
      { cir: "Чъа-гъэ", ar: "ركض", en: "Ran" },
      { cir: "Чъы-е", ar: "نوم", en: "Sleep" },
      { cir: "Къэ-ла-пчъэ", ar: "بوابة", en: "Gate" },
      { cir: "Чъы-гы-уIу", ar: "نقار الخشب", en: "Woodpecker" },
    ],
    [
      { cir: "Чъэ-пы", ar: "الصقيع", en: "Frost" },
      { cir: "Чъы-Iэ", ar: "برد", en: "Cold" },
      { cir: "Къа-те-чъэу", ar: "يتجاوزهم", en: "Pass them" },
      { cir: "Чъы-гы-шхо", ar: "شجرة كبيرة", en: "Big tree" },
    ],
    [
      { cir: "ЧIы-гу", ar: "سؤال", en: "Question" },
      { cir: "У-пчIэ", ar: "غراب", en: "Raven" },
      { cir: "Къуан-чIэ", ar: "موجود في الاسفل", en: "Exists below" },
      { cir: "ЧIэлъ", ar: "كوكب الأرض / الحقل / التربة", en: "Earth" },
    ],
    [
      { cir: "ЧIа-хьэ", ar: "يذهب تحت", en: "Goes under" },
      { cir: "ЧIэт", ar: "يقف تحت", en: "Stands under" },
      { cir: "ЧIы-сыс", ar: "زلزال", en: "Earthquake" },
      { cir: "ЧIы-хъу-мбый", ar: "الخُلد", en: "Eternal life" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_46() {
  const data: string[][] = [
    ["ТӀ тI", "0036.jpg", "ТӀы", "كَبْش", "Ram"],
    ["ПӀ пI", "0019.jpg", "ПӀэ", "سرير", "Bed"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_47() {
  const data = [
    [
      { cir: "Я-тIэ", ar: "التراب", en: "Dust" },
      { cir: "ТIыс", ar: "اقعد", en: "Sit" },
      { cir: "Е-тIа-нэ", ar: "بعد ذلك", en: "After that" },
      { cir: "ТIупщ", ar: "اترك", en: "Leave" },
    ],
    [
      { cir: "На-тIэ", ar: "جبين", en: "Forehead" },
      { cir: "Е-тIы-ргу", ar: "يدفع", en: "Push" },
      { cir: "Е-тIа-тэ", ar: "يفك / يحّل عقدة", en: "Untie" },
      { cir: "ТIу-рытIу", ar: "مثنى مثنى", en: "Dual dual" },
    ],
    [
      { cir: "ПIэ-кIор", ar: "سرير", en: "Bed" },
      { cir: "ПIэ-техъу", ar: "غطاء السرير", en: "Bed cover" },
      { cir: "ПIэ-шъхьагъ", ar: "مسند رأس السرير", en: "Headboard" },
      { cir: "Е-пIы-ртIы", ar: "يدهس / يمعس", en: "Crush" },
    ],
    [
      { cir: "ПIуа-гъэр", ar: "الذي قلتة", en: "Which you said" },
      { cir: "ПIуа-блэ", ar: "الحصيرة", en: "Mat" },
      { cir: "Iэ-пIо-кIэ", ar: "بالمفروشات", en: "With the furnishings" },
      { cir: "Зэ-ра-пIо-рэр", ar: "كما تقول", en: "As you say" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={true}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_48() {
  const data: string[][] = [
    ["ЛӀ лI", "0056.jpg", "ЛӀы", "رجل", "Man"],
    ["ДЗ дз", "0052.jpg", "Дзэ", "جيش", "Army"],
  ];

  const contentMatrix: React.ReactNode[][] = data.map((row) => {
    const [letter, imgUrl, secondRow, arTranslation, enTranslation] = row;
    return [
      <LessonTableCell firstRow={letter} />,
      <LessonTableCell imgUrl={`/lessons/suad/${imgUrl}`} />,
      <LessonTableCell
        secondRow={secondRow}
        langToTranslationMap={{ En: enTranslation, Ar: arTranslation }}
      />,
    ];
  });

  return (
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={false}
      />
    </PanelDiv>
  );
}

export function Lesson_0_49() {
  const data = [
    [
      { cir: "ЛIыжъ", ar: "عجوز", en: "Old-man" },
      { cir: "ПлIы", ar: "أربعة", en: "Four" },
      { cir: "е-чъэ-лIагъ", ar: "ركض إلى", en: "Ran to" },
      { cir: "ПлIа-нэ", ar: "ربع", en: "Quarter" },
    ],
    [
      { cir: "ЛIы-гъэ", ar: "رجولة / شجاعة", en: "Manhood" },
      { cir: "IаплI", ar: "كامل الذراع", en: "Full arm" },
      { cir: "У-лIэн", ar: "تموت", en: "Die" },
      { cir: "У-лIын", ar: "تكون رجلا / شجاعا", en: "Become a man / brave" },
    ],
    [
      { cir: "Е-дзы", ar: "يرمي", en: "Throws" },
      { cir: "Ба-дзэ", ar: "ذباب", en: "Fly" },
      { cir: "Дзы-о", ar: "كيس / شِوَال", en: "Bag" },
      { cir: "бэ-дзэ-огъу", ar: "شهر يوليو", en: "July" },
    ],
    [
      { cir: "Хьа-ндзу", ar: "كوم دريس كبير", en: "Big pile of clothes" },
      { cir: "Дзон", ar: "يحجز الماء / يسد المجرى المائي", en: "Blocks water / blocks waterway" },
      { cir: "Бэ-дзэ-рым", ar: "في السوق", en: "In the market" },
      { cir: "Ти-дзэ-кIолI", ar: "جندينا", en: "Our soldier" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}

export function Lesson_0_50() {
  const data = [
    [
      { cir: "А-ды-га-ер", ar: "الأديغاية", en: "The Adyghean" },
      { cir: "Гу", ar: "قلب", en: "Heart" },
      { cir: "Гъэ-маф", ar: "صيف", en: "Summer" },
    ],
    [
      { cir: "Жэ", ar: "فم", en: "Mouth" },
      { cir: "Жьы-бгъэ", ar: "ريح", en: "Wind" },
      { cir: "Жъа-пхъэ", ar: "مقلاة", en: "Frying pan" },
      { cir: "Жъуа-гъо", ar: "نجمة", en: "Star" },
    ],
    [
      { cir: "Ко-цы", ar: "قمح", en: "Wheat" },
      { cir: "КIэ", ar: "ذيل جديد", en: "New tail" },
      { cir: "Ма-кIо", ar: "يمشي / يسير", en: "Walks" },
      { cir: "Къа-мэ", ar: "القامة / غنجر أديغي", en: "Adyghean stature" },
    ],
    [
      { cir: "Лы", ar: "لحم", en: "Meat" },
      { cir: "Лъа-къо", ar: "رِجْل", en: "Leg" },
      { cir: "ЛIы", ar: "رجُل", en: "Man" },
    ],
    [
      { cir: "Пы-жъы", ar: "قنفذ", en: "Hedgehog" },
      { cir: "ПIэ", ar: "سرير", en: "Bed" },
    ],
    [
      { cir: "Ты-гъужъ", ar: "ذئب", en: "Wolf" },
      { cir: "ТIы", ar: "كبش", en: "Ram" },
    ],
    [
      { cir: "Цы-гъо", ar: "فأر", en: "Mouse" },
      { cir: "Цу-мпэ", ar: "توت أرضي", en: "Earth berry" },
      { cir: "ЦIыргъ", ar: "حلزون", en: "Snail" },
    ],
    [
      { cir: "Чэ-рке-ся", ar: "شركيسيا", en: "Sharki" },
      { cir: "Чъы-гы", ar: "شجرة", en: "Tree" },
      { cir: "ЧIы", ar: "أرض", en: "Earth" },
    ],
    [
      { cir: "Шы", ar: "أخ / حصان", en: "Brother / Horse" },
      { cir: "Щэ", ar: "حليب", en: "Milk" },
      { cir: "Шъхьэ", ar: "رأس", en: "Head" },
      { cir: "Шъо-хэр", ar: "الألوان", en: "Colors" },
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
    <PanelDiv>
      <LessonTable
        contentMatrix={contentMatrix}
        showIndexes={false}
        className="w-fit"
        showBackgroundColors={true}
      />
    </PanelDiv>
  );
}
