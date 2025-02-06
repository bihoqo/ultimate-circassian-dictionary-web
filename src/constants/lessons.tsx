import { ICharacter, ILesson } from "~/interfaces";
import { Lesson_1_1, Lesson_1_2, Lesson_1_3 } from "~/lessonComponents/lesson_1";
import { Lesson_2_1 } from "~/lessonComponents/lesson_2";

export const LESSON_CHARACTERS: ICharacter[] = [
  {
    name: "Данэ",
    avatar: "/lessons/faces/14.png",
  },
  {
    name: "Сэтэнай",
    avatar: "/lessons/faces/10.png",
  },
];

export const LESSONS_LIST: ILesson[] = [
  {
    lessonIdx: 0,
    title: "The Letters",
    panelIdxList: [<Lesson_1_1 />, <Lesson_1_2 />, <Lesson_1_3 />],
  },
  {
    lessonIdx: 1,
    title: "1",
    panelIdxList: [<Lesson_2_1 />],
  },
];
