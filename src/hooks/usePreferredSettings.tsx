import { useState, useEffect, useCallback } from "react";
import { PREFERRED_SETTINGS_KEY } from "~/constants/cache";
import { IPreferredSettings } from "~/interfaces";

// Constants for font size ranges
export const MIN_CIR_FONT_SIZE = 12;
export const MAX_CIR_FONT_SIZE = 24;
export const MIN_TRANS_FONT_SIZE = 12;
export const MAX_TRANS_FONT_SIZE = 24;

// Default settings as a single constant
export const DEFAULT_SETTINGS: IPreferredSettings = {
  circassianFontSize: 16,
  translationFontSize: 16,
  isTooltipTranslationChecked: true,
  isInlineTranslationChecked: true,
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

      // Ensure values are within valid ranges
      setSettings({
        circassianFontSize: Math.min(
          MAX_CIR_FONT_SIZE,
          Math.max(MIN_CIR_FONT_SIZE, updatedSettings.circassianFontSize),
        ),
        translationFontSize: Math.min(
          MAX_TRANS_FONT_SIZE,
          Math.max(MIN_TRANS_FONT_SIZE, updatedSettings.translationFontSize),
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
      const updatedSettings = { ...settings, ...newSettings };
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
