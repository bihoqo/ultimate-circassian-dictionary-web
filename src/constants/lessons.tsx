import { ICharacter, ICharacterBank, ILesson } from "~/interfaces";
import { Lesson_1_1, Lesson_1_2 } from "~/lessonComponents/lesson_1";
import { Lesson_2_1, Lesson_2_2, Lesson_2_3 } from "~/lessonComponents/lesson_2";

export const LESSON_CHARACTERS: ICharacterBank[] = [
  {
    names: ["Данэ", "Нэрыт", "lазэ", "Нэрыс"],
    avatar: "/lessons/faces/14.png",
  },
  {
    names: ["Сэтэнай", "Нэф"],
    avatar: "/lessons/faces/10.png",
  },
  {
    names: ["Нарт", "Енал", "Заур"],
    avatar: "/lessons/faces/4.png",
  },
  {
    names: ["Аслъан"],
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
];
