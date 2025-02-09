import { LESSONS_LIST } from "~/constants/lessons";
import { cn } from "~/utils/classNames";
import React from "react";
import { useRouter } from "next/router";

export default function LessonSidebar() {
  const router = useRouter();
  const { lessonIdx, panelIdx } = router.query;
  const selectedLesson = LESSONS_LIST[Number(lessonIdx)];

  async function navigateToLesson(lessonIdx: number, panelIdx: number) {
    const params = new URLSearchParams();
    params.append("lessonIdx", lessonIdx.toString());
    params.append("panelIdx", panelIdx.toString());
    await router.push(`/the-language-path?${params.toString()}`);
  }

  if (!selectedLesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="flex flex-row gap-2 w-full">
      {/* Left */}
      <div className="flex-[3_3_0%] flex flex-col justify-start items-start gap-2 pt-4 border-solid border-black border-r">
        {LESSONS_LIST.map((lesson) => {
          return (
            <button
              key={lesson.lessonIdx}
              onClick={() => navigateToLesson(lesson.lessonIdx, 0)}
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

      {/* Right */}
      <div className="flex-[2_2_0%] flex flex-col justify-start items-start gap-2 pt-4">
        {selectedLesson.panelIdxList.map((panel, idx) => {
          return (
            <button
              key={idx}
              onClick={() => navigateToLesson(selectedLesson.lessonIdx, idx)}
              className={cn(
                "font-black",
                Number(panelIdx) === idx
                  ? "text-red-500 hover:text-red-500/50"
                  : "text-black hover:text-black/50",
              )}
            >
              {panel.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
