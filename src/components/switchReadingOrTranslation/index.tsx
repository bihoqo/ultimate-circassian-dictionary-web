import { usePreferredSettings } from "~/hooks/usePreferredSettings";
import { cn } from "~/utils/classNames";

export default function SwitchReadingOrTranslation() {
  const { settings, saveSettings } = usePreferredSettings(); // Load settings from the custom hook

  const options = ["Translation", "Reading"];
  const selectedOption = settings.isTranslationChecked ? "Translation" : "Reading"; // Load initial state based on settings

  const handleClick = (option: string) => {
    const isTranslationChecked = option === "Translation";
    saveSettings({ isTranslationChecked }); // Save the selected option to settings
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-full p-1 w-64">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={cn(
            "flex items-center justify-center w-1/2 rounded-full py-2 transition-all duration-300",
            {
              "bg-white shadow text-black": selectedOption === option,
              "text-gray-500": selectedOption !== option,
            },
          )}
        >
          {option === "Translation" ? (
            <span className="mr-2">
              <i className="fas fa-book"></i> {/* Replace with an icon library */}
            </span>
          ) : (
            <span className="mr-2">
              <i className="fas fa-file-alt"></i> {/* Replace with an icon library */}
            </span>
          )}
          {option}
        </button>
      ))}
    </div>
  );
}
