import { ICharacter } from "~/interfaces";
import { ReactNode } from "react";
import { Lesson_1_1, Lesson_1_2, Lesson_1_3 } from "~/lessonComponents/lesson_1";

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

export const LESSONS_LIST: {
  lessonIdx: number;
  title: string;
  panelIdxList: ReactNode[];
}[] = [
  {
    lessonIdx: 0,
    title: "The Letters",
    panelIdxList: [<Lesson_1_1 />, <Lesson_1_2 />, <Lesson_1_3 />],
  },
];
