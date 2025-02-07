import { ICharacter, ICharacterBank, ILesson } from "~/interfaces";
import { Lesson_1_1, Lesson_1_2 } from "~/lessonComponents/lesson_1";
import { Lesson_2_1, Lesson_2_2, Lesson_2_3 } from "~/lessonComponents/lesson_2";
import { Lesson_3_1, Lesson_3_2 } from "~/lessonComponents/lesson_3";
import { Lesson_4_1, Lesson_4_2, Lesson_4_3 } from "~/lessonComponents/lesson_4";
import {
  Lesson_5_1,
  Lesson_5_2,
  Lesson_5_3,
  Lesson_5_4,
  Lesson_5_5,
} from "~/lessonComponents/lesson_5";

export const LESSON_CHARACTERS: ICharacterBank[] = [
  {
    names: ["Данэ", "Нэрыт", "lазэ", "Нэрыс", "Дэнэф", "Разэ", "Симаз", "Симэ"],
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
    ],
    avatar: "/lessons/faces/4.png",
  },
  {
    names: ["Аслъан", "Чан", "Озырмэдж", "Пщымаф"],
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
    lessonIdx: 1,
    title: "Conversation 1",
    panelIdxList: [
      { title: "Зэдэгущы1эгъу 1", component: <Lesson_1_1 /> },
      { title: "Зэдэгущы1эгъу 2", component: <Lesson_1_2 /> },
    ],
  },
  {
    lessonIdx: 2,
    title: "Conversation 2",
    panelIdxList: [
      { title: "Зэдэгущы1эгъу 1", component: <Lesson_2_1 /> },
      { title: "Зэдэгущы1эгъу 2", component: <Lesson_2_2 /> },
      { title: "Зэдэгущы1эгъу 3", component: <Lesson_2_3 /> },
    ],
  },
  {
    lessonIdx: 3,
    title: "Conversation 3",
    panelIdxList: [
      { title: "Зэдэгущы1эгъу 1", component: <Lesson_3_1 /> },
      { title: "Зэдэгущы1эгъу 2", component: <Lesson_3_2 /> },
    ],
  },
  {
    lessonIdx: 4,
    title: "Conversation 4",
    panelIdxList: [
      { title: "Зэдэгущы1эгъу 1", component: <Lesson_4_1 /> },
      { title: "Зэдэгущы1эгъу 2", component: <Lesson_4_2 /> },
      { title: "Зэдэгущы1эгъу 3", component: <Lesson_4_3 /> },
    ],
  },
  {
    lessonIdx: 5,
    title: "Conversation 5",
    panelIdxList: [
      { title: "Зэдэгущы1эгъу 1", component: <Lesson_5_1 /> },
      { title: "Зэдэгущы1эгъу 2", component: <Lesson_5_2 /> },
      { title: "Зэдэгущы1эгъу 3", component: <Lesson_5_3 /> },
      { title: "Зэдэгущы1эгъу 4", component: <Lesson_5_4 /> },
      { title: "Зэдэгущы1эгъу 5", component: <Lesson_5_5 /> },
    ],
  },
];
