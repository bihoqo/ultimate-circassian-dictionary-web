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
import { ISupportedTranslationLang } from "~/interfaces";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
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
          "fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Settings</h2>
          <button className="text-xl font-bold hover:opacity-50 " onClick={onClose}>
            X
          </button>
        </div>

        {/* Circassian font size settings */}
        <div className="mt-4">
          <span className="font-semibold">Circassian font</span>
          <div className="flex flex-row justify-between gap-2 mt-2 items-center">
            <p>Font size</p>
            <div className="flex flex-row gap-2 items-center">
              <MinusSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeCircassianFontSizeHandler(circassianFontSize - 1)}
                isDisabled={circassianFontSize === MIN_ORIGIN_FONT_SIZE}
              />

              <div className="relative flex items-center w-48">
                {" "}
                {/* Increased width here */}
                <input
                  type="range"
                  min={MIN_ORIGIN_FONT_SIZE}
                  max={MAX_ORIGIN_FONT_SIZE}
                  step={1}
                  value={circassianFontSize}
                  onChange={(e) => changeCircassianFontSizeHandler(Number(e.target.value))}
                  className="w-full" // Ensures the slider fills the parent width
                />
              </div>

              <span className="w-[16px]">{circassianFontSize}</span>

              <PlusSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeCircassianFontSizeHandler(circassianFontSize + 1)}
                isDisabled={circassianFontSize === MAX_ORIGIN_FONT_SIZE}
              />
              <RestoreSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeCircassianFontSizeHandler(DEFAULT_SETTINGS.circassianFontSize)}
                isDisabled={circassianFontSize === DEFAULT_SETTINGS.circassianFontSize}
              />
            </div>
          </div>
        </div>

        {/* Translation font size settings */}
        <div className="mt-4">
          <span className="font-semibold">Translation font</span>
          <div className="flex flex-row justify-between gap-2 mt-2">
            <p>Font size</p>
            <div className="flex flex-row gap-2 items-center">
              <MinusSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeTranslationFontSizeHandler(translationFontSize - 1)}
                isDisabled={translationFontSize === MIN_TRANSLATION_FONT_SIZE}
              />

              {/* Increased width here */}
              <input
                type="range"
                min={MIN_TRANSLATION_FONT_SIZE}
                max={MAX_TRANSLATION_FONT_SIZE}
                value={translationFontSize}
                onChange={(e) => changeTranslationFontSizeHandler(Number(e.target.value))}
                className="w-48"
              />

              <span className="w-[16px]">{translationFontSize}</span>

              <PlusSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeTranslationFontSizeHandler(translationFontSize + 1)}
                isDisabled={translationFontSize === MAX_TRANSLATION_FONT_SIZE}
              />

              <RestoreSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() =>
                  changeTranslationFontSizeHandler(DEFAULT_SETTINGS.translationFontSize)
                }
                isDisabled={translationFontSize === DEFAULT_SETTINGS.translationFontSize}
              />
            </div>
          </div>
        </div>

        {/* Translation Language settings */}
        <div className="mt-4">
          <span className="font-semibold">Translation Language</span>
          <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={translationLangs.includes("Ar")}
                onChange={() => toggleTranslationLang("Ar")}
              />
              Arabic
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={translationLangs.includes("En")}
                onChange={() => toggleTranslationLang("En")}
              />
              English
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
