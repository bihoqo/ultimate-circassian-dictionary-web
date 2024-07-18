export interface NameToTwitter {
  userName: string;
  twitterName: string;
}

export type NumberOrString = number | string;

export interface GenericSvgProps {
  width?: string;
  height?: string;
  overrideClassName?: string;
  fill?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export interface ApiResponse<T> {
  msg: string;
  http_code: number;
  success: boolean;
  data: T;
}

export interface ApiPaginationResponse<T> {
  msg: string;
  http_code: number;
  success: boolean;
  data: {
    page: number;
    size: number;
    result: T[] | null;
    total_count: number;
  };
}

export interface ApiWordDefinitionsResultsResponse {
  spelling: string;
  title: string;
  html: string;
  from_lang: string[];
  to_lang: string[];
}
export interface WordDefinitionsResults {
  spelling: string;
  title: string;
  html: string;
  fromLang: SupportedLang[];
  toLang: SupportedLang[];
}

export function getAllSupportedLangs(): SupportedLang[] {
  return Object.values(SupportedLang);
}

export function getSupportedLangForString(s: string): SupportedLang {
  switch (s) {
    case "Ady":
      return SupportedLang.Ady;
    case "Kbd":
      return SupportedLang.Kbd;
    case "En":
      return SupportedLang.En;
    case "Ru":
      return SupportedLang.Ru;
    case "Tr":
      return SupportedLang.Tr;
    case "Ar":
      return SupportedLang.Ar;
    case "He":
      return SupportedLang.He;
    default:
      throw new Error(`Invalid language: ${s}`);
  }
}

export enum SupportedLang {
  Ady = "Ady",
  Kbd = "Kbd",
  En = "En",
  Ru = "Ru",
  Tr = "Tr",
  Ar = "Ar",
  He = "He",
}

export interface ApiAutocompleteResponse {
  key: string;
  from_langs: string[];
  toLangs: string[];
}

export interface Autocomplete {
  key: string;
  fromLangs: SupportedLang[];
  toLangs: SupportedLang[];
}
