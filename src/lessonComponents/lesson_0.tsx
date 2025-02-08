import LessonTable, { LessonTableCell } from "~/components/lessons/lessonTable";
import React from "react";
import PanelDiv from "../components/panelDiv";

export function Lesson_0_1() {
  const content = [
    [
      <LessonTableCell
        firstRow="А"
        secondRow="Атакъэ"
        imgUrl={"/lessons/suad/0061.jpg"}
        langToTranslationMap={{ En: "Rooster", Ar: "ديك" }}
      />,
      <LessonTableCell
        firstRow="Б"
        secondRow="Блэ"
        imgUrl={"/lessons/suad/0026.jpg"}
        langToTranslationMap={{ En: "Snake", Ar: "أفعى" }}
      />,
      <LessonTableCell
        firstRow="В"
        secondRow="Витамин"
        imgUrl={"/lessons/suad/0029.jpg"}
        langToTranslationMap={{ En: "Vitamin", Ar: "فيتامين" }}
      />,
      <LessonTableCell
        firstRow="Г"
        secondRow="Адыгаер"
        imgUrl={"/lessons/suad/0045.jpg"}
        langToTranslationMap={{ En: "Adygea", Ar: "أديغيا" }}
      />,
      <LessonTableCell
        firstRow="ГЪ"
        secondRow="Гъэмаф"
        imgUrl={"/lessons/suad/0048.jpg"}
        langToTranslationMap={{ En: "Summer", Ar: "صيف" }}
      />,
      <LessonTableCell
        firstRow="Д"
        secondRow="Дэ"
        imgUrl={"/lessons/suad/0057.jpg"}
        langToTranslationMap={{ En: "Nut", Ar: "جوز" }}
      />,
    ],
    [
      <LessonTableCell
        firstRow="ДЖ"
        secondRow="Джэмышх"
        imgUrl={"/lessons/suad/0041.jpg"}
        langToTranslationMap={{ En: "Spoon", Ar: "ملعقة" }}
      />,
      <LessonTableCell
        firstRow="ДЗ"
        secondRow="Дзэ"
        imgUrl={"/lessons/suad/0052.jpg"}
        langToTranslationMap={{ En: "Army", Ar: "جيش" }}
      />,
      <LessonTableCell
        firstRow="Е"
        secondRow="Еджэ"
        imgUrl={"/lessons/suad/0004.jpg"}
        langToTranslationMap={{ En: "Reads", Ar: "يقرأ" }}
      />,
      <LessonTableCell
        firstRow="Ж"
        secondRow="Жэ"
        imgUrl={"/lessons/suad/0022.jpg"}
        langToTranslationMap={{ En: "Mouth", Ar: "فم" }}
      />,
      <LessonTableCell
        firstRow="ЖЪ"
        secondRow="Жъапхъэ"
        imgUrl={"/lessons/suad/0055.jpg"}
        langToTranslationMap={{ En: "Frying pan", Ar: "مقلاة" }}
      />,
      <LessonTableCell
        firstRow="ЖЬ"
        secondRow="Жьыбгъэ"
        imgUrl={"/lessons/suad/0050.jpg"}
        langToTranslationMap={{ En: "Wind", Ar: "ريح" }}
      />,
    ],
    [
      <LessonTableCell
        firstRow="З"
        secondRow="Зы"
        imgUrl={"/lessons/suad/0015.jpg"}
        langToTranslationMap={{ En: "One", Ar: "واحد" }}
      />,
      <LessonTableCell
        firstRow="И"
        secondRow="Иныжъ"
        imgUrl={"/lessons/suad/0003.jpg"}
        langToTranslationMap={{ En: "Giant", Ar: "عملاق" }}
      />,
      <LessonTableCell
        firstRow="Й"
        secondRow="Пцэжъый"
        imgUrl={"/lessons/suad/0038.jpg"}
        langToTranslationMap={{ En: "Fish", Ar: "سمكه" }}
      />,
      <LessonTableCell
        firstRow="К"
        secondRow="Коцы"
        imgUrl={"/lessons/suad/0010.jpg"}
        langToTranslationMap={{ En: "Wheat", Ar: "قمح" }}
      />,
      <LessonTableCell
        firstRow="КЪ"
        secondRow="Къамэ"
        imgUrl={"/lessons/suad/0049.jpg"}
        langToTranslationMap={{ En: "Stature – Dagger", Ar: "قامة – خنجر" }}
      />,
      <LessonTableCell
        firstRow="КI"
        secondRow="КIэ"
        imgUrl={"/lessons/suad/0040.jpg"}
        langToTranslationMap={{ En: "Tail", Ar: "ذيل" }}
      />,
    ],
    [
      <LessonTableCell
        firstRow="Л"
        secondRow="Лы"
        imgUrl={"/lessons/suad/0062.jpg"}
        langToTranslationMap={{ En: "Meat", Ar: "لحم" }}
      />,
      <LessonTableCell
        firstRow="ЛЪ"
        secondRow="Лъакъо"
        imgUrl={"/lessons/suad/00064.jpg"}
        langToTranslationMap={{ En: "Leg", Ar: "رجل" }}
      />,
      <LessonTableCell
        firstRow="М"
        secondRow="Мышъэ"
        imgUrl={"/lessons/suad/0002.jpg"}
        langToTranslationMap={{ En: "Bear", Ar: "دب" }}
      />,
      <LessonTableCell
        firstRow="Н"
        secondRow="Натрыф"
        imgUrl={"/lessons/suad/0043.jpg"}
        langToTranslationMap={{ En: "Corn", Ar: "ذرة" }}
      />,
      <LessonTableCell
        firstRow="О"
        secondRow="Осы"
        imgUrl={"/lessons/suad/0009.jpg"}
        langToTranslationMap={{ En: "Snow", Ar: "ثلج" }}
      />,
      <LessonTableCell
        firstRow="П"
        secondRow="Пыжъы"
        imgUrl={"/lessons/suad/0039.jpg"}
        langToTranslationMap={{ En: "Hedgehog", Ar: "قنفذ" }}
      />,
    ],
    [
      <LessonTableCell
        firstRow="ПI"
        secondRow="ПIэ"
        imgUrl={"/lessons/suad/0019.jpg"}
        langToTranslationMap={{ En: "Butterfly", Ar: "فراش" }}
      />,
      <LessonTableCell
        firstRow="Р"
        secondRow="Хъурай"
        imgUrl={"/lessons/suad/0059.jpg"}
        langToTranslationMap={{ En: "Circle", Ar: "دائرة" }}
      />,
      <LessonTableCell
        firstRow="С"
        secondRow="Санэ"
        imgUrl={"/lessons/suad/0004.jpg"}
        langToTranslationMap={{ En: "Grapes", Ar: "عنب" }}
      />,
      <LessonTableCell
        firstRow="Т"
        secondRow="Tыгъужъ"
        imgUrl={"/lessons/suad/0013.jpg"}
        langToTranslationMap={{ En: "Wolf", Ar: "ذئب" }}
      />,
      <LessonTableCell
        firstRow="ТI"
        secondRow="ТIы"
        imgUrl={"/lessons/suad/0036.jpg"}
        langToTranslationMap={{ En: "Ramb", Ar: "كبش" }}
      />,
      <LessonTableCell
        firstRow="У"
        secondRow="Унэ"
        imgUrl={"/lessons/suad/0008.jpg"}
        langToTranslationMap={{ En: "House", Ar: "بيت" }}
      />,
    ],
    [
      <LessonTableCell
        firstRow="Ф"
        secondRow="Фыжьы"
        imgUrl={"/lessons/suad/0037.jpg"}
        langToTranslationMap={{ En: "White", Ar: "أبيض" }}
      />,
      <LessonTableCell
        firstRow="Х"
        secondRow="Хы"
        imgUrl={"/lessons/suad/0016.jpg"}
        langToTranslationMap={{ En: "Six", Ar: "ستة" }}
      />,
      <LessonTableCell
        firstRow="ХЪ"
        secondRow="Хъагъэ"
        imgUrl={"/lessons/suad/0018.jpg"}
        langToTranslationMap={{ En: "Net/Embroidered", Ar: "شبكة/ مطرز" }}
      />,
      <LessonTableCell
        firstRow="ХЬ"
        secondRow="Хьэ"
        imgUrl={"/lessons/suad/0027.jpg"}
        langToTranslationMap={{ En: "Bough", Ar: "غصن" }}
      />,
      <LessonTableCell
        firstRow="Ц"
        secondRow="Цыгъо"
        imgUrl={"/lessons/suad/0061.jpg"}
        langToTranslationMap={{ En: "Mouse", Ar: "فار" }}
      />,
      <LessonTableCell
        firstRow="ЦӀ цI"
        secondRow="ЦӀыргъ"
        imgUrl={"/lessons/suad/0063.jpg"}
        langToTranslationMap={{ En: "Snail", Ar: "حلزون" }}
      />,
    ],
    [
      <LessonTableCell
        firstRow="Ч"
        secondRow="Чэ"
        imgUrl={"/lessons/suad/0032.jpg"}
        langToTranslationMap={{ En: "Lake", Ar: "بحيرة" }}
      />,
      <LessonTableCell
        firstRow="ЧI"
        secondRow="ЧIы"
        imgUrl={"/lessons/suad/0042.jpg"}
        langToTranslationMap={{ En: "Garden", Ar: "حديقة" }}
      />,
      <LessonTableCell
        firstRow="Ш"
        secondRow="Шыуэ"
        imgUrl={"/lessons/suad/0017.jpg"}
        langToTranslationMap={{ En: "Seven", Ar: "سبعة" }}
      />,
      <LessonTableCell
        firstRow="Щ"
        secondRow="Пщэшъо"
        imgUrl={"/lessons/suad/0034.jpg"}
        langToTranslationMap={{ En: "Pliers", Ar: "زرادية" }}
      />,
      <LessonTableCell
        firstRow="ШI"
        secondRow="ШIэ"
        imgUrl={"/lessons/suad/0051.jpg"}
        langToTranslationMap={{ En: "Horse", Ar: "حصان" }}
      />,
    ],
    [
      <LessonTableCell
        firstRow="Ы"
        secondRow="Псышъо"
        imgUrl={"/lessons/suad/0035.jpg"}
        langToTranslationMap={{ En: "Eagle", Ar: "نسر" }}
      />,
      <LessonTableCell
        firstRow="Э"
        secondRow="Эфэ"
        imgUrl={"/lessons/suad/0012.jpg"}
        langToTranslationMap={{ En: "Master", Ar: "سيد" }}
      />,
      <LessonTableCell
        firstRow="Ю"
        secondRow="Юмэз"
        imgUrl={"/lessons/suad/0060.jpg"}
        langToTranslationMap={{ En: "Star", Ar: "نجمة" }}
      />,
      <LessonTableCell
        firstRow="Я"
        secondRow="Яты"
        imgUrl={"/lessons/suad/0063.jpg"}
        langToTranslationMap={{ En: "Goat", Ar: "ماعز" }}
      />,
    ],
  ];

  return (
    <PanelDiv>
      <LessonTable contentMatrix={content} showIndexes={false} className="w-fit" />
    </PanelDiv>
  );
}
