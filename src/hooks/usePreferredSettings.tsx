import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { PREFERRED_SETTINGS_KEY } from "~/constants/cache";
import { IPreferredSettings } from "~/interfaces";
import { clampNumber } from "~/utils/number";
import { settingsAtom } from "~/jotai/atoms";
import {
  DEFAULT_SETTINGS,
  MAX_ORIGIN_FONT_SIZE,
  MAX_TRANSLATION_FONT_SIZE,
  MIN_ORIGIN_FONT_SIZE,
  MIN_TRANSLATION_FONT_SIZE,
} from "~/constants/setting";
// Helper function to load settings from localStorage
const loadSettingsFromLocalStorage = (): IPreferredSettings => {
  const savedSettings = localStorage.getItem(PREFERRED_SETTINGS_KEY);

  if (!savedSettings) {
    return DEFAULT_SETTINGS;
  }

  try {
    const parsedSettings: Partial<IPreferredSettings> = JSON.parse(savedSettings);

    // Merge parsed settings with default settings
    return {
      circassianFontSize: parsedSettings.circassianFontSize ?? DEFAULT_SETTINGS.circassianFontSize,
      translationFontSize:
        parsedSettings.translationFontSize ?? DEFAULT_SETTINGS.translationFontSize,
      isTooltipTranslationChecked:
        parsedSettings.isTooltipTranslationChecked ?? DEFAULT_SETTINGS.isTooltipTranslationChecked,
      isInlineTranslationChecked:
        parsedSettings.isInlineTranslationChecked ?? DEFAULT_SETTINGS.isInlineTranslationChecked,
    };
  } catch (e) {
    console.error("Failed to parse saved settings, using defaults.", e);
    return DEFAULT_SETTINGS;
  }
};

// Helper function to save settings to localStorage
const saveSettingsToLocalStorage = (settings: IPreferredSettings) => {
  localStorage.setItem(PREFERRED_SETTINGS_KEY, JSON.stringify(settings));
};

// Custom hook to use preferred settings with Jotai
export const usePreferredSettings = () => {
  const [settings, setSettings] = useAtom(settingsAtom);

  // Load settings on initial render
  useEffect(() => {
    const loadedSettings = loadSettingsFromLocalStorage();

    // Ensure values are within valid ranges using the clampValue utility
    const clampedSettings = {
      circassianFontSize: clampNumber(
        loadedSettings.circassianFontSize,
        MIN_ORIGIN_FONT_SIZE,
        MAX_ORIGIN_FONT_SIZE,
      ),
      translationFontSize: clampNumber(
        loadedSettings.translationFontSize,
        MIN_ORIGIN_FONT_SIZE,
        MAX_ORIGIN_FONT_SIZE,
      ),
      isTooltipTranslationChecked: loadedSettings.isTooltipTranslationChecked,
      isInlineTranslationChecked: loadedSettings.isInlineTranslationChecked,
    };

    setSettings(clampedSettings);
  }, [setSettings]);

  // Save settings function
  const saveSettings = useCallback(
    (newSettings: Partial<IPreferredSettings>) => {
      const updatedSettings: IPreferredSettings = {
        ...settings,
        ...newSettings,
        circassianFontSize: clampNumber(
          newSettings.circassianFontSize ?? settings.circassianFontSize,
          MIN_ORIGIN_FONT_SIZE,
          MAX_ORIGIN_FONT_SIZE,
        ),
        translationFontSize: clampNumber(
          newSettings.translationFontSize ?? settings.translationFontSize,
          MIN_TRANSLATION_FONT_SIZE,
          MAX_TRANSLATION_FONT_SIZE,
        ),
      };

      setSettings(updatedSettings); // Update atom state
      saveSettingsToLocalStorage(updatedSettings); // Persist in localStorage
    },
    [settings, setSettings],
  );

  return { settings, saveSettings };
};
