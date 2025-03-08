import { ILangToTranslationMap } from "~/interfaces";
import lessonData from "./lesson_0.json";

export interface ILetterIntroductionRow {
  letter: string;
  imgUrl: string;
  wordExample: string;
  translationsMap: ILangToTranslationMap;
}

export interface IExampleInEachLangRow {
  cir: string;
  ar: string;
  en: string;
  he: string;
}

interface ILesson0Panel {
  title: string;
  type: "letterIntroduction" | "exampleInEachLang";
  data: ILetterIntroductionRow[] | IExampleInEachLangRow[];
}

function getLesson0Content(): ILesson0Panel[] {
  return lessonData as ILesson0Panel[];
}

export default getLesson0Content;
