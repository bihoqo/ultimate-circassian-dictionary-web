import { ILangToTranslationMap } from "~/interfaces/index";

export interface ITheLangPathLetterIntroductionRow {
  letter: string;
  imgUrl: string;
  wordExample: string;
  translationsMap: ILangToTranslationMap;
}

export interface ITheLangPathExampleInEachLangRow {
  cir: string;
  ar: string;
  en: string;
  he: string;
}

export interface ITheLangPathLesson {
  title: string;
  index: number;
  panels: ITheLangPathPanel[];
}

export type ITheLangPathPanelType = "letterIntroduction" | "exampleInEachLang";
export type ITheLangPathPanelData =
  | ITheLangPathLetterIntroductionRow[]
  | ITheLangPathExampleInEachLangRow[];

export interface ITheLangPathPanel {
  title: string;
  audio: string;
  type: ITheLangPathPanelType;
  data: ITheLangPathPanelData;
}
