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
    ["Е е", "/lessons/suad/0004.jpg", "Еджэ", "يقرأ", "Reads"],
    ["Ж", "/lessons/suad/0022.jpg", "Жэ", "فم", "Mouth"],
    ["ЖЪ", "/lessons/suad/0055.jpg", "Жъапхъэ", "مقلاة", "Frying pan"],
    ["ЖЬ", "/lessons/suad/0050.jpg", "Жьыбгъэ", "ريح", "Wind"],
    ["З з", "/lessons/suad/0015.jpg", "Зы", "واحد", "One"],
    ["И и", "/lessons/suad/0003.jpg", "Иныжъ", "عملاق", "Giant"],
    ["Й й", "/lessons/suad/0038.jpg", "Пцэжъый", "سمكه", "Fish"],
    ["К к", "/lessons/suad/0010.jpg", "Коцы", "قمح", "Wheat"],
    ["КЪ къ", "/lessons/suad/0049.jpg", "Къамэ", "قامة – خنجر", "Stature – Dagger"],
    ["КI кI", "/lessons/suad/0040.jpg", "КIэ", "ذيل", "Tail"],
    ["Л л", "/lessons/suad/0062.jpg", "Лы", "لحم", "Meat"],
    ["ЛЪ лъ", "/lessons/suad/00064.jpg", "Лъакъо", "رجل", "Leg"],
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

export function Lesson_0_3() {
  const data2: string[][] = [
    ["О-сы", "Уа-сэ", "Са-сэ", "Си-мэ", "ثلج", "سعر", "(فتاة)  ساسه", "سيما  (اسم)"],
    ["Се-сы", "Уис", "Е-сы", "Мы-е", "أسبح", "أنت موجود في الداخل", "يسبح", "التفاح البري"],
    ["Ис", "Уа-е", "Сис", "Е-о", "موجود في الداخل", "عاصفه", "أنا موجود في الداخل", "يضرب"],
    ["У-сэ", "Мэу", "Ау", "Сэ", "شعر", "هنا", "لكن", "أنا"],
  ];

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
