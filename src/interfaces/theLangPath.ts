import { ILangToTranslationMap } from "~/interfaces/index";

export interface ITheLangPathLetterIntroductionTableRow {
  letter: string;
  imgUrl: string;
  wordExample: string;
  translationsMap: ILangToTranslationMap;
}

export interface ITheLangPathExamplesInEachLangTableRow {
  cir: string;
  ar: string;
  en: string;
  he: string;
}

export interface ITheLangPathLesson {
  title: string;
  index: number;
}

export interface ITheLangPathPart {
  type: ITheLangPathPanelType;
  data: ITheLangPathPanelData;
}

export interface ITheLangPathPanel {
  title: string;
  audio: string;
  parts: ITheLangPathPart[];
}

export interface ITheLangPathDialogBubble {
  leftOrRight: "left" | "right";
  characterName: string;
  originText: string;
  langToTranslationMap: ILangToTranslationMap;
}

export interface ITheLangPathCharacterBank {
  names: string[];
  avatar: string;
}

export interface ITheLangPathCharacter {
  name: string;
  avatar: string;
}

export type ITheLangPathPanelType = "letterIntroduction" | "exampleInEachLang" | "dialogBubble";
export type ITheLangPathPanelData =
  | ITheLangPathLetterIntroductionTableRow[]
  | ITheLangPathExamplesInEachLangTableRow[]
  | ITheLangPathDialogBubble;
