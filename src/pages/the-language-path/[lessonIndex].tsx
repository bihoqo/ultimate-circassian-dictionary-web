import Head from "next/head";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { LESSON_LIST } from "~/constants/content";
import { cn } from "~/utils/classNames";
import { ICharacter } from "~/interfaces";
import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";
import LessonTable from "~/components/lessons/lessonTable";
import SettingsSvg from "~/components/svg/settingsSvg";
import SettingsPanel from "~/components/settingsPanel";

const CHARACTERS: ICharacter[] = [
  {
    name: "Данэ",
    avatar: "/lessons/faces/14.png",
  },
  {
    name: "Сэтэнай",
    avatar: "/lessons/faces/10.png",
  },
];

export default function TheLanguagePathPage() {
  const router = useRouter();
  const { lessonIndex } = router.query;

  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for managing the settings panel

  const selectedLessonComponent = useMemo(() => {
    switch (lessonIndex) {
      case "1":
        return <Lesson_1 />;
      case "2":
        return <Lesson_2 />;
      case "3":
        return <Lesson_3 />;
      default:
        return <Lesson_1 />;
    }
  }, [lessonIndex]);

  // Function to toggle the settings panel
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main className="bg-white w-full relative">
        {" "}
        {/* Relative for the overlay positioning */}
        <div className="mx-auto w-11/12 flex flex-row">
          {/* Sidebar with lessons */}
          <div className="flex-[2_2_0%] border-r border-solid border-black flex flex-col justify-start items-start gap-2 pt-4">
            {LESSON_LIST.map((lesson, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => router.push(`/the-language-path/${idx + 1}`)} // Navigate on click
                  className={cn(
                    "font-black",
                    Number(lessonIndex) === idx + 1
                      ? "text-red-500 hover:text-red-500/50"
                      : "text-black hover:text-black/50",
                  )}
                >
                  {idx + 1}. {lesson}
                </button>
              );
            })}
          </div>

          {/* Main content area */}
          <div className="flex flex-col gap-2 flex-[3_3_0%] border-solid border-black p-4">
            <SettingsSvg
              className="self-end hover:opacity-70 cursor-pointer"
              onClick={toggleSettings}
            />
            {selectedLessonComponent}
          </div>
        </div>
        {/* Integrating the SettingsPanel component */}
        <SettingsPanel isOpen={isSettingsOpen} onClose={toggleSettings} />
      </main>
    </>
  );
}

function Lesson_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        character={CHARACTERS[0]}
        originText="Уимафэ шlу. Сэ сцIэр Данэ. О сыда пцlэр?"
        translationText="Good day. My name is Dana. What is your name?"
        inlineTranslations={[
          "your day",
          "good",
          "I",
          "my name is",
          "Dana",
          "you",
          "what is",
          "your name",
        ]}
      />
      <LessonDialogBubble
        leftOrRight="right"
        character={CHARACTERS[1]}
        originText="Сэ сцlэр Сэтэнай."
        translationText="My name is Satanay."
        inlineTranslations={["I", "name is", "Satanay"]}
      />
    </div>
  );
}

function Lesson_2() {
  const origin = [
    ["О-сы", "Уа-сэ", "Са-сэ", "Си-мэ"],
    ["Се-сы", "Уис", "Е-сы", "Мы-е"],
    ["Ис", "Уа-е", "Сис", "Е-о"],
    ["У-сэ", "Мэу", "Ау", "Сэ"],
  ];

  const translation = [
    ["snow", "price", "girl", "Sima"],
    ["I'm swimming", "you're sitting inside", "he's swimming", "apple"],
    ["he's sitting inside", "rainy weather", "I'm sitting inside", "he's hitting it"],
    ["poem", "here", "there", "I"],
  ];

  return (
    <div className="flex flex-col gap-6">
      <LessonTable
        originTextMatrix={origin}
        translationTextMatrix={translation}
        showIndexes={true}
      />
    </div>
  );
}

function Lesson_3() {
  const origin = [
    ["О-сы", "Уа-сэ", "Са-сэ", "Си-мэ"],
    ["Се-сы", "Уис", "Е-сы", "Мы-е"],
    ["Ис", "Уа-е", "Сис", "Е-о"],
    ["У-сэ", "Мэу", "Ау", "Сэ"],
  ];

  const translation = [
    ["snow", "price", "girl", "Sima"],
    ["I'm swimming", "you're sitting inside", "he's swimming", "apple"],
    ["he's sitting inside", "rainy weather", "I'm sitting inside", "he's hitting it"],
    ["poem", "here", "there", "I"],
  ];

  return (
    <div className="flex flex-col gap-6">
      <LessonTable
        originTextMatrix={origin}
        translationTextMatrix={translation}
        showIndexes={true}
        gapBetweenRows={10}
      />
    </div>
  );
}
