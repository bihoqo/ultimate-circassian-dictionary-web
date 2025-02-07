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

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const { settings, saveSettings } = usePreferredSettings();

  const {
    circassianFontSize,
    translationFontSize,
    isInlineTranslationChecked,
    isTooltipTranslationChecked,
    translationLang,
  } = settings;

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

        <div className="mt-4">
          <div className="mt-4">
            <span className="font-semibold">Circassian font</span>
            <div className="flex flex-row justify-between gap-2 mt-2">
              <p>Font size</p>
              <div className="flex flex-row gap-2">
                <MinusSvg
                  height="24"
                  width="24"
                  className="cursor-pointer hover:opacity-50"
                  onClick={() => changeCircassianFontSizeHandler(circassianFontSize - 1)}
                  isDisabled={circassianFontSize === MIN_ORIGIN_FONT_SIZE}
                />
                <span>{circassianFontSize}</span>
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
                  onClick={() =>
                    changeCircassianFontSizeHandler(DEFAULT_SETTINGS.circassianFontSize)
                  }
                  isDisabled={circassianFontSize === DEFAULT_SETTINGS.circassianFontSize}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="font-semibold">Word By Word Translation</span>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isInlineTranslationChecked}
                  onChange={() =>
                    saveSettings({ isInlineTranslationChecked: !isInlineTranslationChecked })
                  }
                />
                In-line
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isTooltipTranslationChecked}
                  onChange={() =>
                    saveSettings({ isTooltipTranslationChecked: !isTooltipTranslationChecked })
                  }
                />
                Tooltip
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <span className="font-semibold">Translation font</span>
          <div className="flex flex-row justify-between gap-2 mt-2">
            <p>Font size</p>
            <div className="flex flex-row gap-2">
              <MinusSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeTranslationFontSizeHandler(translationFontSize - 1)}
                isDisabled={translationFontSize === MIN_TRANSLATION_FONT_SIZE}
              />
              <span>{translationFontSize}</span>
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

        <div className="mt-4">
          <span className="font-semibold">Translation Language</span>
          <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="translationLang"
                value="Arabic"
                checked={translationLang === "Ar"}
                onChange={() => saveSettings({ translationLang: "Ar" })}
              />
              Arabic
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="translationLang"
                value="English"
                checked={translationLang === "En"}
                onChange={() => saveSettings({ translationLang: "En" })}
              />
              English
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
