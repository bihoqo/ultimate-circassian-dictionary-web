import Head from "next/head";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import SwitchReadingOrTranslation from "~/components/switchReadingOrTranslation";
import LessonSidebar from "~/components/lessonSidebar";
import { cn } from "~/utils/classNames";
import { useQuery } from "@tanstack/react-query";
import { ITheLangPathPanel } from "~/interfaces/theLangPath";
import { convertDataToPanelPartComponent, LESSONS_LIST } from "~/components/theLangPath/panels";
import PanelDiv from "~/components/panelDiv";

export default function TheLanguagePathContentContainer() {
  const router = useRouter();
  const { lessonIdx, panelIdx } = router.query;
  const selectedLesson = LESSONS_LIST[Number(lessonIdx)];
  const currentPanelIdx = Number(panelIdx);

  const {
    data: panelsOfSelectedLesson = [],
    isLoading: isPanelsOfSelectedLessonLoading,
    isError: isPanelsOfSelectedLessonErrored,
  } = useQuery({
    staleTime: 6000000,
    gcTime: 6000000,
    retry: 1,
    queryKey: ["panelsOfSelectedLesson", lessonIdx],
    queryFn: async (): Promise<ITheLangPathPanel[]> => {
      if (!lessonIdx || !selectedLesson) {
        return [];
      }

      try {
        const response = await fetch(`/theLangPath/content/lesson_${lessonIdx}.json`);
        if (!response.ok) {
          console.error(`Failed to load lesson data for lesson ${lessonIdx}`);
          return [];
        }
        return response.json();
      } catch (error) {
        console.error("Error fetching lesson data:", error);
        return [];
      }
    },
  });

  const selectedPanelComponent = useMemo((): React.ReactNode => {
    if (isPanelsOfSelectedLessonLoading) {
      return (
        <div className="flex flex-row justify-center items-center text-4xl p-8">Loading...</div>
      );
    }

    if (isPanelsOfSelectedLessonErrored) {
      return (
        <div className="flex flex-row justify-center items-center text-4xl p-8">
          Error loading lesson
        </div>
      );
    }

    if (!panelsOfSelectedLesson || panelsOfSelectedLesson.length === 0) {
      return (
        <div className="flex flex-row justify-center items-center text-4xl p-8">
          Lesson not found
        </div>
      );
    }

    const selectedPanel = panelsOfSelectedLesson[currentPanelIdx];
    if (!selectedPanel) {
      return (
        <div className="flex flex-row justify-center items-center text-4xl p-8">
          Panel not found
        </div>
      );
    }

    return (
      <PanelDiv audioPath={selectedPanel.audio}>
        {selectedPanel.parts.map((part, idx) => {
          return (
            <div className="w-full" key={idx}>
              {convertDataToPanelPartComponent(part)}
            </div>
          );
        })}
      </PanelDiv>
    );
  }, [
    currentPanelIdx,
    isPanelsOfSelectedLessonErrored,
    isPanelsOfSelectedLessonLoading,
    panelsOfSelectedLesson,
  ]);

  const handlePrevious = async () => {
    if (currentPanelIdx > 0) {
      await router.push({
        query: { lessonIdx, panelIdx: currentPanelIdx - 1 },
      });
    }
  };

  const handleNext = async () => {
    if (currentPanelIdx < panelsOfSelectedLesson.length - 1) {
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
            {panelsOfSelectedLesson[currentPanelIdx]?.title || "Panel not selected"}
          </span>
        </div>

        <div className="w-full 2xl:w-11/12 px-0 sm:px-1 md:px-2 xl:px-3 2xl:px-4 xl:mx-auto flex flex-row">
          {/* Sidebar with lessons */}
          <LessonSidebar panels={panelsOfSelectedLesson} />

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
            disabled={currentPanelIdx === panelsOfSelectedLesson.length - 1}
            className={cn(
              "px-4 py-2 rounded",
              currentPanelIdx === panelsOfSelectedLesson.length - 1
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
