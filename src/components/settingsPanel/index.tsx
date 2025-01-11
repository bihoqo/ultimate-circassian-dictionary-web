import React from "react";
import { cn } from "~/utils/classNames";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
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
          <button
            className="text-xl font-bold hover:bg-gray-500 hover:text-white rounded-full py-1 px-2"
            onClick={onClose}
          >
            X
          </button>
        </div>

        {/* Settings content */}
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Theme</span>
            <button className="px-4 py-2 bg-gray-200 rounded-md">Light</button>
            <button className="px-4 py-2 bg-gray-200 rounded-md">Sepia</button>
            <button className="px-4 py-2 bg-gray-200 rounded-md">Dark</button>
          </div>

          <div className="mt-4">
            <span className="font-semibold">Quran Font</span>
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 bg-gray-200 rounded-md">Uthmani</button>
              <button className="px-4 py-2 bg-gray-200 rounded-md">IndoPak</button>
              <button className="px-4 py-2 bg-gray-200 rounded-md">Tajweed</button>
            </div>
          </div>

          <div className="mt-4">
            <span className="font-semibold">Word By Word</span>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Translation
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Transliteration
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Recitation
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
