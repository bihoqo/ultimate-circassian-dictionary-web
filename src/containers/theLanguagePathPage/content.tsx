import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import SettingsSvg from "~/components/svg/settingsSvg";
import SettingsPanel from "~/components/settingsPanel";
import SwitchReadingOrTranslation from "~/components/switchReadingOrTranslation";
import { LESSONS_LIST } from "~/constants/lessons";
import LessonSidebar from "~/components/lessonSidebar";

export default function TheLanguagePathContentContainer() {
  const router = useRouter();
  const { lessonIdx, panelIdx } = router.query;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for managing the settings panel
  const selectedLesson = LESSONS_LIST[Number(lessonIdx) - 1];

  if (!selectedLesson) {
    return (
      <div className="flex flex-row justify-center items-center text-4xl p-8">Lesson not found</div>
    );
  }

  const selectedPanelComponent = selectedLesson.panelIdxList[Number(panelIdx)].component;
  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main className="bg-white w-full relative block">
        {/* Title */}
        <div className="w-11/12 mx-auto border-b border-black border-solid">
          <h1 className="text-3xl underline">{selectedLesson.title}</h1>
        </div>

        <div className="mx-auto w-11/12 flex flex-row">
          {/* Sidebar with lessons */}
          <div className="flex flex-row gap-2 w-[500px] border-r border-solid border-black">
            <LessonSidebar />
          </div>

          {/* Main content area */}
          <div className="flex flex-col gap-2 w-full border-solid border-black px-4 pt-4 pb-14">
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
