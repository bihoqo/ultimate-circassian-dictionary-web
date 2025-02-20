import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import SwitchReadingOrTranslation from "~/components/switchReadingOrTranslation";
import LessonSidebar from "~/components/lessonSidebar";
import { cn } from "~/utils/classNames";
import { LESSONS_LIST } from "~/constants/lessons";

export default function TheLanguagePathContentContainer() {
  const router = useRouter();
  const { lessonIdx, panelIdx } = router.query;
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
      <main className="bg-white w-full relative flex flex-col min-h-screen">
        {/* Title - Display selected lesson and panel information */}
        <div className="text-center w-full border-b border-[#cecec3] border-solid py-4">
          <span className="text-2xl font-black px-1 py-1 rounded-md transition-colors duration-200 hover:hover:bg-gray-100 text-[#f27141]">
            {selectedLesson.title}
          </span>
          <span className="text-4xl font-bold text-[#f27141]">/</span>
          <span className="text-2xl font-black px-1 py-1 rounded-md transition-colors duration-200 hover:hover:bg-gray-100 text-[#f27141]">
            {selectedLesson.panelIdxList[currentPanelIdx]?.title || "Panel not selected"}
          </span>
        </div>

        <div className="w-full 2xl:w-11/12 px-0 sm:px-1 md:px-2 xl:px-3 2xl:px-4 xl:mx-auto flex flex-row">
          {/* Sidebar with lessons */}
          <LessonSidebar />

          {/* Main content area */}
          <div className="flex flex-col gap-2 w-full border-solid border-[#cecec3] px-1 md:px-2 lg:px-4 pt-4 pb-14 overflow-hidden overflow-y-auto">
            {/* Settings */}
            <div className="flex flex-row justify-center items-center w-full mb-8">
              <div className="self-center">
                <SwitchReadingOrTranslation />
              </div>
            </div>

            {/* Selected lesson component */}
            <div className="flex flex-row justify-center items-center w-full mb-16">
              {selectedPanelComponent}
            </div>
          </div>
        </div>

        {/* Previous and Next buttons - fixed at the bottom */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center items-center gap-4 bg-white py-4 border-t border-[#cecec3] z-10">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPanelIdx === 0}
            className={cn(
              "px-4 py-2 rounded",
              currentPanelIdx === 0
                ? "opacity-50 cursor-not-allowed text-black"
                : "bg-[#f27141] hover:bg-[#f27141]/75 text-white",
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
                ? "opacity-50 cursor-not-allowed text-black"
                : "bg-[#f27141] hover:bg-[#f27141]/75 text-white",
            )}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
