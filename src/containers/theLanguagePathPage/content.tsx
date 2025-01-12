import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { cn } from "~/utils/classNames";
import SettingsSvg from "~/components/svg/settingsSvg";
import SettingsPanel from "~/components/settingsPanel";
import SwitchReadingOrTranslation from "~/components/switchReadingOrTranslation";
import { LESSONS_LIST } from "~/constants/lessons";

export default function TheLanguagePathContentContainer() {
  const router = useRouter();
  const { lessonIdx, panelIdx } = router.query;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for managing the settings panel

  const selectedLesson = LESSONS_LIST[Number(lessonIdx)];
  const selectedPanelComponent = selectedLesson.panelIdxList[Number(panelIdx)];

  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main className="bg-white w-full relative block">
        <h1></h1>
        <div className="mx-auto w-11/12 flex flex-row">
          {/* Sidebar with lessons */}
          <div className="flex-[2_2_0%] border-r border-solid border-black flex flex-col justify-start items-start gap-2 pt-4">
            {LESSONS_LIST.map((lesson) => {
              return (
                <button
                  key={lesson.lessonIdx}
                  onClick={() => router.push(`/the-language-path/${lesson.lessonIdx}`)} // Navigate on click
                  className={cn(
                    "font-black",
                    selectedLesson.lessonIdx === lesson.lessonIdx
                      ? "text-red-500 hover:text-red-500/50"
                      : "text-black hover:text-black/50",
                  )}
                >
                  {lesson.lessonIdx}. {lesson.title}
                </button>
              );
            })}
          </div>

          {/* Main content area */}
          <div className="flex flex-col gap-2 flex-[3_3_0%] border-solid border-black p-4">
            {/* Settings */}
            <div className="flex flex-row justify-between items-center w-full mb-8">
              <div />
              <div className="self-center">
                <SwitchReadingOrTranslation />
              </div>
              <div className="self-center">
                <SettingsSvg
                  className="self-end hover:opacity-70 cursor-pointer"
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                />
              </div>
            </div>

            {/* Selected lesson component */}
            {selectedPanelComponent}
          </div>
        </div>
        {/* Integrating the SettingsPanel component */}
        <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(!isSettingsOpen)} />
      </main>
    </>
  );
}
