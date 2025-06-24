import React from "react";
import { cn } from "~/utils/classNames";
import PlusSvg from "~/components/svg/plusSvg";
import MinusSvg from "~/components/svg/minusSvg";
import RestoreSvg from "~/components/svg/restoreSvg";
import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import {
  DEFAULT_SETTINGS,
  MAX_ORIGIN_FONT_SIZE,
  MAX_TRANSLATION_FONT_SIZE,
  MIN_ORIGIN_FONT_SIZE,
  MIN_TRANSLATION_FONT_SIZE,
} from "~/constants/setting";
import { DEFAULT_TRANSLATION_LANG_TO_NAME, ISupportedTranslationLang } from "~/interfaces";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FontSizeSettingProps {
  label: string;
  fontSize: number;
  min: number;
  max: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

function FontSizeSetting({
  label,
  fontSize,
  min,
  max,
  defaultValue,
  onChange,
}: FontSizeSettingProps) {
  const decrease = () => onChange(fontSize - 1);
  const increase = () => onChange(fontSize + 1);
  const restore = () => onChange(defaultValue);

  return (
    <div className="mt-6">
      <span className="font-semibold">{label}</span>
      <div className="mt-3 flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between sm:gap-x-2">
        <p className="whitespace-nowrap">Font size</p>
        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:gap-2">
          {/* Minus button */}
          <MinusSvg
            className="h-8 w-8 cursor-pointer hover:opacity-50 sm:h-6 sm:w-6"
            onClick={decrease}
            isDisabled={fontSize === min}
          />

          {/* Slider + size + plus + reset in a row on desktop */}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start sm:gap-2">
            <input
              type="range"
              min={min}
              max={max}
              step={1}
              value={fontSize}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full max-w-[180px] py-2 sm:max-w-[200px] sm:py-0"
            />

            <span className="w-[32px] text-center">{fontSize}</span>

            <PlusSvg
              className="h-8 w-8 cursor-pointer hover:opacity-50 sm:h-6 sm:w-6"
              onClick={increase}
              isDisabled={fontSize === max}
            />

            <RestoreSvg
              className="h-8 w-8 cursor-pointer hover:opacity-50 sm:h-6 sm:w-6"
              onClick={restore}
              isDisabled={fontSize === defaultValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const { settings, saveSettings } = usePreferredSettings();
  const { circassianFontSize, translationFontSize, translationLangs } = settings;

  function changeCircassianFontSizeHandler(newValue: number) {
    if (newValue < MIN_ORIGIN_FONT_SIZE || MAX_ORIGIN_FONT_SIZE < newValue) {
      return;
    }
    saveSettings({ circassianFontSize: newValue });
  }

  function changeTranslationFontSizeHandler(newValue: number) {
    if (newValue < MIN_TRANSLATION_FONT_SIZE || MAX_TRANSLATION_FONT_SIZE < newValue) {
      return;
    }
    saveSettings({ translationFontSize: newValue });
  }

  function toggleTranslationLang(lang: ISupportedTranslationLang) {
    if (translationLangs.includes(lang)) {
      saveSettings({ translationLangs: translationLangs.filter((l) => l !== lang) });
    } else {
      saveSettings({ translationLangs: [...translationLangs, lang] });
    }
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/30" onClick={onClose}></div>}

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full max-h-screen w-[200px] transform overflow-y-auto bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out sm:w-[300px] md:w-96",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Settings</h2>
          <button className="text-xl font-bold hover:opacity-50" onClick={onClose}>
            X
          </button>
        </div>

        {/* Translation Language settings */}
        <div className="mt-6">
          <span className="font-semibold">Translation Language</span>
          <div className="mt-3 flex flex-col gap-2">
            {Object.entries(DEFAULT_TRANSLATION_LANG_TO_NAME).map(([shortName, longName]) => (
              <label key={shortName} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={translationLangs.includes(shortName as ISupportedTranslationLang)}
                  onChange={() => toggleTranslationLang(shortName as ISupportedTranslationLang)}
                />
                {longName}
              </label>
            ))}
          </div>
        </div>

        <FontSizeSetting
          label="Circassian font"
          fontSize={circassianFontSize}
          min={MIN_ORIGIN_FONT_SIZE}
          max={MAX_ORIGIN_FONT_SIZE}
          defaultValue={DEFAULT_SETTINGS.circassianFontSize}
          onChange={changeCircassianFontSizeHandler}
        />

        <FontSizeSetting
          label="Translation font"
          fontSize={translationFontSize}
          min={MIN_TRANSLATION_FONT_SIZE}
          max={MAX_TRANSLATION_FONT_SIZE}
          defaultValue={DEFAULT_SETTINGS.translationFontSize}
          onChange={changeTranslationFontSizeHandler}
        />
      </div>
    </>
  );
}
