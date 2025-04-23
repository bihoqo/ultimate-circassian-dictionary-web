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
        <div className="flex flex-row items-center justify-center p-8 text-4xl">Loading...</div>
      );
    }

    if (isPanelsOfSelectedLessonErrored) {
      return (
        <div className="flex flex-row items-center justify-center p-8 text-4xl">
          Error loading lesson
        </div>
      );
    }

    if (!panelsOfSelectedLesson || panelsOfSelectedLesson.length === 0) {
      return (
        <div className="flex flex-row items-center justify-center p-8 text-4xl">
          Lesson not found
        </div>
      );
    }

    const selectedPanel = panelsOfSelectedLesson[currentPanelIdx];
    if (!selectedPanel) {
      return (
        <div className="flex flex-row items-center justify-center p-8 text-4xl">
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
      <main className="relative flex min-h-screen w-full flex-col bg-white">
        {/* Title - Display selected lesson and panel information */}
        <div className="w-full border-b border-solid border-[#cecec3] py-4 text-center">
          <span className="rounded-md px-1 py-1 text-2xl font-black text-[#f27141] transition-colors duration-200 hover:hover:bg-gray-100">
            {selectedLesson.title}
          </span>
          <span className="text-4xl font-bold text-[#f27141]">/</span>
          <span className="rounded-md px-1 py-1 text-2xl font-black text-[#f27141] transition-colors duration-200 hover:hover:bg-gray-100">
            {panelsOfSelectedLesson[currentPanelIdx]?.title || "Panel not selected"}
          </span>
        </div>

        <div className="flex w-full flex-row px-0 sm:px-1 md:px-2 xl:mx-auto xl:px-3 2xl:w-11/12 2xl:px-4">
          {/* Sidebar with lessons */}
          <LessonSidebar panels={panelsOfSelectedLesson} />

          {/* Main content area */}
          <div className="flex w-full flex-col gap-2 overflow-hidden overflow-y-auto border-solid border-[#cecec3] px-1 pt-4 pb-14 md:px-2 lg:px-4">
            {/* Settings */}
            <div className="mb-8 flex w-full flex-row items-center justify-center">
              <div className="self-center">
                <SwitchReadingOrTranslation />
              </div>
            </div>

            {/* Selected lesson component */}
            <div className="mb-16 flex w-full flex-row items-center justify-center">
              {selectedPanelComponent}
            </div>
          </div>
        </div>

        {/* Previous and Next buttons - fixed at the bottom */}
        <div className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-center gap-4 border-t border-[#cecec3] bg-white py-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPanelIdx === 0}
            className={cn(
              "rounded px-4 py-2",
              currentPanelIdx === 0
                ? "cursor-not-allowed text-black opacity-50"
                : "bg-[#f27141] text-white hover:bg-[#f27141]/75",
            )}
          >
            Previous
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPanelIdx === panelsOfSelectedLesson.length - 1}
            className={cn(
              "rounded px-4 py-2",
              currentPanelIdx === panelsOfSelectedLesson.length - 1
                ? "cursor-not-allowed text-black opacity-50"
                : "bg-[#f27141] text-white hover:bg-[#f27141]/75",
            )}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
