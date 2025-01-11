import { IPreferredSettings } from "~/interfaces";
import { atom } from "jotai";
import { DEFAULT_SETTINGS } from "~/constants/setting";

export const settingsAtom = atom<IPreferredSettings>(DEFAULT_SETTINGS);
