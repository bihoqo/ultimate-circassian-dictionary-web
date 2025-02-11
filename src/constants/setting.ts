// Constants for font size ranges
import { IPreferredSettings } from "~/interfaces";

export const MIN_ORIGIN_FONT_SIZE = 1;
export const MAX_ORIGIN_FONT_SIZE = 12;
export const MIN_TRANSLATION_FONT_SIZE = 1;
export const MAX_TRANSLATION_FONT_SIZE = 10;

// Default settings as a single constant
export const DEFAULT_SETTINGS: IPreferredSettings = {
  circassianFontSize: 5,
  translationFontSize: 3,
  isTranslationChecked: true,
  translationLangs: ["En", "Ar"],
};

export const TEXT_SIZE_MAP: Record<number, string> = {
  1: "text-xs",
  2: "text-sm",
  3: "text-base",
  4: "text-lg",
  5: "text-xl",
  6: "text-2xl",
  7: "text-3xl",
  8: "text-4xl",
  9: "text-5xl",
  10: "text-6xl",
  11: "text-7xl",
  12: "text-8xl",
};
