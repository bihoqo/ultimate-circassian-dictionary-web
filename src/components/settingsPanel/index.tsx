import React from "react";
import { cn } from "~/utils/classNames";
import PlusSvg from "~/components/svg/plusSvg";
import MinusSvg from "~/components/svg/minusSvg";
import RestoreSvg from "~/components/svg/restoreSvg";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MINIMUM_CIRCASSIAN_FONT_SIZE = 12;
const MAXIMUM_CIRCASSIAN_FONT_SIZE = 24;
const DEFAULT_CIRCASSIAN_FONT_SIZE = 16;
const MAXIMUM_TRANSLATION_FONT_SIZE = 24;
const MINIMUM_TRANSLATION_FONT_SIZE = 12;
const DEFAULT_TRANSLATION_FONT_SIZE = 16;

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const [circassianFontSize, setCircassianFontSize] = React.useState(DEFAULT_CIRCASSIAN_FONT_SIZE);
  const [translationFontSize, setTranslationFontSize] = React.useState(
    DEFAULT_TRANSLATION_FONT_SIZE,
  );

  function changeCircassianFontSizeHandler(newValue: number) {
    if (newValue < MINIMUM_CIRCASSIAN_FONT_SIZE || newValue > MAXIMUM_CIRCASSIAN_FONT_SIZE) {
      return;
    }
    setCircassianFontSize(newValue);
  }

  function changeTranslationFontSizeHandler(newValue: number) {
    if (newValue < MINIMUM_TRANSLATION_FONT_SIZE || newValue > MAXIMUM_TRANSLATION_FONT_SIZE) {
      return;
    }
    setTranslationFontSize(newValue);
  }

  return (
    <>
      {/* Overlay that shows when the settings panel is open */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>}

      {/* Settings panel */}
      <div
        className={cn(
          "fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full", // Slide in/out
        )}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Settings</h2>
          <button className="text-xl font-bold hover:opacity-50 " onClick={onClose}>
            X
          </button>
        </div>

        {/* Settings content */}
        <div className="mt-4">
          {/* Circassian font settings */}
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
                  isDisabled={circassianFontSize === MINIMUM_CIRCASSIAN_FONT_SIZE}
                />
                <span className="">{circassianFontSize}</span>
                <PlusSvg
                  height="24"
                  width="24"
                  className="cursor-pointer hover:opacity-50"
                  onClick={() => changeCircassianFontSizeHandler(circassianFontSize + 1)}
                  isDisabled={circassianFontSize === MAXIMUM_CIRCASSIAN_FONT_SIZE}
                />
                <RestoreSvg
                  height="24"
                  width="24"
                  className="cursor-pointer hover:opacity-50"
                  onClick={() => changeCircassianFontSizeHandler(DEFAULT_CIRCASSIAN_FONT_SIZE)}
                  isDisabled={circassianFontSize === MAXIMUM_CIRCASSIAN_FONT_SIZE}
                />
              </div>
            </div>
          </div>

          {/* Word by word translation settings */}
          <div className="mt-4">
            <span className="font-semibold">Word By Word Translation</span>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                In-line
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Tooltip
              </label>
            </div>
          </div>
        </div>

        {/* Translation settings */}
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
                isDisabled={translationFontSize === MINIMUM_TRANSLATION_FONT_SIZE}
              />
              <span className="">{translationFontSize}</span>
              <PlusSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeTranslationFontSizeHandler(translationFontSize + 1)}
                isDisabled={translationFontSize === MAXIMUM_TRANSLATION_FONT_SIZE}
              />
              <RestoreSvg
                height="24"
                width="24"
                className="cursor-pointer hover:opacity-50"
                onClick={() => changeTranslationFontSizeHandler(DEFAULT_TRANSLATION_FONT_SIZE)}
                isDisabled={translationFontSize === MAXIMUM_TRANSLATION_FONT_SIZE}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
