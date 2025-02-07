import { ICharacter, ILesson } from "~/interfaces";
import { Lesson_1_1, Lesson_1_2, Lesson_1_3 } from "~/lessonComponents/lesson_1";
import { Lesson_2_1, Lesson_2_2 } from "~/lessonComponents/lesson_2";

export const LESSON_CHARACTERS: ICharacter[] = [
  {
    name: "Данэ",
    avatar: "/lessons/faces/14.png",
  },
  {
    name: "Сэтэнай",
    avatar: "/lessons/faces/10.png",
  },
  {
    name: "Нарт",
    avatar: "/lessons/faces/4.png",
  },
  {
    name: "Аслъан",
    avatar: "/lessons/faces/13.png",
  },
];

export function getCharacterByName(name: string): ICharacter {
  const found = LESSON_CHARACTERS.find((character) => character.name === name);
  if (found) {
    return found;
  }
  return {
    name: name,
    avatar: "/lessons/faces/16.png",
  };
}

export const LESSONS_LIST: ILesson[] = [
  {
    lessonIdx: 0,
    title: "The Letters",
    panelIdxList: [
      { title: "Panel", component: <Lesson_1_1 /> },
      { title: "Panel", component: <Lesson_1_2 /> },
      { title: "Panel", component: <Lesson_1_3 /> },
    ],
  },
  {
    lessonIdx: 1,
    title: "1",
    panelIdxList: [
      { title: "Зэдэгущы1эгъу 1", component: <Lesson_2_1 /> },
      { title: "Зэдэгущы1эгъу 2", component: <Lesson_2_2 /> },
    ],
  },
];
