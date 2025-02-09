import { ICharacter, ICharacterBank, ILesson } from "~/interfaces";
import {
  Lesson_1_1,
  Lesson_1_2,
  Lesson_1_3,
  Lesson_1_4,
  Lesson_1_5,
  Lesson_1_6,
  Lesson_1_7,
  Lesson_1_8,
  Lesson_1_9,
  Lesson_1_10,
  Lesson_1_11,
  Lesson_1_12,
  Lesson_1_13,
  Lesson_1_14,
  Lesson_1_15,
  Lesson_1_16,
  Lesson_1_17,
  Lesson_1_18,
} from "~/lessonComponents/lesson_1";
import { Lesson_0_1, Lesson_0_2, Lesson_0_3 } from "~/lessonComponents/lesson_0";

export const LESSON_CHARACTERS: ICharacterBank[] = [
  {
    names: ["Данэ", "Нэрыт", "lазэ", "Нэрыс", "Дэнэф", "Разэ", "Симаз", "Симэ", "Синэмис"],
    avatar: "/lessons/faces/14.png",
  },
  {
    names: ["Сэтэнай", "Нэф", "Нэфын"],
    avatar: "/lessons/faces/10.png",
  },
  {
    names: [
      "Нарт",
      "Енал",
      "Заур",
      "Блан",
      "Пэрыт",
      "Hypбый",
      "Озырмэс",
      "Къазбэч",
      "Батыр",
      "Джэбагъ",
      "Бибэрс",
    ],
    avatar: "/lessons/faces/4.png",
  },
  {
    names: ["Аслъан", "Чан", "Озырмэдж", "Пщымаф", "Тембот"],
    avatar: "/lessons/faces/13.png",
  },
];

export function getCharacterByName(name: string): ICharacter {
  const found = LESSON_CHARACTERS.find((character) => {
    return character.names.includes(name);
  });
  return {
    name: name,
    avatar: found?.avatar || "/lessons/faces/16.png",
  };
}

export const LESSONS_LIST: ILesson[] = [
  {
    lessonIdx: 0,
    title: "The Letters",
    panelIdxList: [
      { title: "0.1 Dialogue 1", component: <Lesson_0_1 /> },
      { title: "1.1 Dialogue 1", component: <Lesson_0_2 /> },
      { title: "1.2 Dialogue 1", component: <Lesson_0_3 /> },
    ],
  },
  {
    lessonIdx: 1,
    title: "Welcome",
    panelIdxList: [
      { title: "1.2 Dialogue 1", component: <Lesson_1_1 /> },
      { title: "1.2 Dialogue 2", component: <Lesson_1_2 /> },
      { title: "2.1 Dialogue 1", component: <Lesson_1_3 /> },
      { title: "2.1 Dialogue 2", component: <Lesson_1_4 /> },
      { title: "2.1 Dialogue 3", component: <Lesson_1_5 /> },
      { title: "3.1 Dialogue 1", component: <Lesson_1_6 /> },
      { title: "3.2 Dialogue 1", component: <Lesson_1_6 /> },
      { title: "4.1 Dialogue 1", component: <Lesson_1_7 /> },
      { title: "4.2 Dialogue 1", component: <Lesson_1_8 /> },
      { title: "4.2 Dialogue 2", component: <Lesson_1_9 /> },
      { title: "4.2 Dialogue 1", component: <Lesson_1_10 /> },
      { title: "7.1 Dialogue 1", component: <Lesson_1_11 /> },
      { title: "9.1 Dialogue 1", component: <Lesson_1_12 /> },
      { title: "9.2 Dialogue 1", component: <Lesson_1_13 /> },
      { title: "9.3 Dialogue 1", component: <Lesson_1_14 /> },
      { title: "9.3 Dialogue 2", component: <Lesson_1_15 /> },
      { title: "11.1 Dialogue 1", component: <Lesson_1_16 /> },
      { title: "11.1 Dialogue 2", component: <Lesson_1_17 /> },
      { title: "11.1 Dialogue 3", component: <Lesson_1_18 /> },
    ],
  },
];
