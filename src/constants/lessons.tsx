import { ICharacter, ICharacterBank, ILesson } from "~/interfaces";
import { Lesson_1_1, Lesson_1_2 } from "~/lessonComponents/lesson_1";

export const LESSON_CHARACTERS: ICharacterBank[] = [
  {
    names: ["Данэ", "Нэрыт", "lазэ"],
    avatar: "/lessons/faces/14.png",
  },
  {
    names: ["Сэтэнай"],
    avatar: "/lessons/faces/10.png",
  },
  {
    names: ["Нарт", "Енал"],
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
];
