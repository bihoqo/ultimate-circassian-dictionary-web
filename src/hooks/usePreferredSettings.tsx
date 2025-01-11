import { useState, useEffect, useCallback } from "react";
import { PREFERRED_SETTINGS_KEY } from "~/constants/cache";
import { IPreferredSettings } from "~/interfaces";
import { clampNumber } from "~/utils/number";

// Constants for font size ranges
export const MIN_FONT_SIZE = 1;
export const MAX_FONT_SIZE = 10;

// Default settings as a single constant
export const DEFAULT_SETTINGS: IPreferredSettings = {
  circassianFontSize: 5,
  translationFontSize: 5,
  isTooltipTranslationChecked: true,
  isInlineTranslationChecked: true,
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
};

export const usePreferredSettings = () => {
  const [settings, setSettings] = useState<IPreferredSettings>(DEFAULT_SETTINGS);

  // Load settings from localStorage
  const loadSettings = useCallback(() => {
    const savedSettings = localStorage.getItem(PREFERRED_SETTINGS_KEY);

    if (!savedSettings) {
      return setSettings(DEFAULT_SETTINGS);
    }

    try {
      const parsedSettings: Partial<IPreferredSettings> = JSON.parse(savedSettings);

      // Merge parsed settings with default settings
      const updatedSettings: IPreferredSettings = {
        circassianFontSize:
          parsedSettings.circassianFontSize ?? DEFAULT_SETTINGS.circassianFontSize,
        translationFontSize:
          parsedSettings.translationFontSize ?? DEFAULT_SETTINGS.translationFontSize,
        isTooltipTranslationChecked:
          parsedSettings.isTooltipTranslationChecked ??
          DEFAULT_SETTINGS.isTooltipTranslationChecked,
        isInlineTranslationChecked:
          parsedSettings.isInlineTranslationChecked ?? DEFAULT_SETTINGS.isInlineTranslationChecked,
      };

      // Ensure values are within valid ranges using the clampValue utility
      setSettings({
        circassianFontSize: clampNumber(
          updatedSettings.circassianFontSize,
          MIN_FONT_SIZE,
          MAX_FONT_SIZE,
        ),
        translationFontSize: clampNumber(
          updatedSettings.translationFontSize,
          MIN_FONT_SIZE,
          MAX_FONT_SIZE,
        ),
        isTooltipTranslationChecked: updatedSettings.isTooltipTranslationChecked,
        isInlineTranslationChecked: updatedSettings.isInlineTranslationChecked,
      });
    } catch (e) {
      console.error("Failed to parse saved settings, using defaults.", e);
      setSettings(DEFAULT_SETTINGS);
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback(
    (newSettings: Partial<IPreferredSettings>) => {
      const updatedSettings = {
        ...settings,
        ...newSettings,
        circassianFontSize: clampNumber(
          newSettings.circassianFontSize ?? settings.circassianFontSize,
          MIN_FONT_SIZE,
          MAX_FONT_SIZE,
        ),
        translationFontSize: clampNumber(
          newSettings.translationFontSize ?? settings.translationFontSize,
          MIN_FONT_SIZE,
          MAX_FONT_SIZE,
        ),
      };
      setSettings(updatedSettings);
      localStorage.setItem(PREFERRED_SETTINGS_KEY, JSON.stringify(updatedSettings));
    },
    [settings],
  );

  // Load settings on initial render
  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  return { settings, saveSettings };
};
