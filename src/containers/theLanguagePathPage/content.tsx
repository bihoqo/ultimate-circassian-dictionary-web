import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import SettingsSvg from "~/components/svg/settingsSvg";
import SettingsPanel from "~/components/settingsPanel";
import SwitchReadingOrTranslation from "~/components/switchReadingOrTranslation";
import LessonSidebar from "~/components/lessonSidebar";
import { cn } from "~/utils/classNames";
import { LESSONS_LIST } from "~/constants/lessons";

export default function TheLanguagePathContentContainer() {
  const router = useRouter();
  const { lessonIdx, panelIdx } = router.query;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for managing the settings panel
  const selectedLesson = LESSONS_LIST[Number(lessonIdx)];

  if (!selectedLesson) {
    return (
      <div className="flex flex-row justify-center items-center text-4xl p-8">Lesson not found</div>
    );
  }

  const currentPanelIdx = Number(panelIdx);
  const selectedPanelComponent = selectedLesson.panelIdxList[currentPanelIdx]?.component;

  const handlePrevious = async () => {
    if (currentPanelIdx > 0) {
      await router.push({
        query: { lessonIdx, panelIdx: currentPanelIdx - 1 },
      });
    }
  };

  const handleNext = async () => {
    if (currentPanelIdx < selectedLesson.panelIdxList.length - 1) {
      await router.push({
        query: { lessonIdx, panelIdx: currentPanelIdx + 1 },
      });
    }
  };

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
            <div className="flex flex-row justify-center items-center w-full mb-16">
              {selectedPanelComponent}
            </div>
          </div>
        </div>

        {/* Previous and Next buttons - fixed at the bottom */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center items-center gap-4 bg-white py-4 border-t border-black">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPanelIdx === 0}
            className={cn(
              "px-4 py-2 rounded ",
              currentPanelIdx === 0
                ? "opacity-50 cursor-not-allowed"
                : "bg-green-300/80 hover:bg-green-300/50",
            )}
          >
            Previous
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPanelIdx === selectedLesson.panelIdxList.length - 1}
            className={cn(
              "px-4 py-2 rounded",
              currentPanelIdx === selectedLesson.panelIdxList.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "bg-green-300/80 hover:bg-green-300/50",
            )}
          >
            Next
          </button>
        </div>

        {/* Integrating the SettingsPanel component */}
        <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(!isSettingsOpen)} />
      </main>
    </>
  );
}
