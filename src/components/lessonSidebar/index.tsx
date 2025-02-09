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
      {/* Left (Lessons) */}
      <div className="flex-[3_3_0%] flex flex-col justify-start items-start gap-2 pt-4 border-solid border-black border-r overflow-y-auto max-h-[500px] px-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-2 text-center w-full">- Lessons -</h2>
        {LESSONS_LIST.map((lesson) => {
          return (
            <button
              key={lesson.lessonIdx}
              onClick={() => navigateToLesson(lesson.lessonIdx, 0)}
              className={cn(
                "font-black px-2 py-1 rounded-md transition-colors duration-200",
                selectedLesson.lessonIdx === lesson.lessonIdx
                  ? "text-red-500 bg-gray-200 hover:bg-gray-300"
                  : "text-black hover:bg-gray-100",
              )}
            >
              {lesson.lessonIdx}. {lesson.title}
            </button>
          );
        })}
      </div>

      {/* Right (Panels) */}
      <div className="flex-[2_2_0%] flex flex-col justify-start items-start gap-2 pt-4 overflow-y-auto max-h-[500px] px-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-2 text-center w-full">- Panels -</h2>
        {selectedLesson.panelIdxList.map((panel, idx) => {
          return (
            <button
              key={idx}
              onClick={() => navigateToLesson(selectedLesson.lessonIdx, idx)}
              className={cn(
                "font-black px-2 py-1 rounded-md transition-colors duration-200",
                Number(panelIdx) === idx
                  ? "text-red-500 bg-gray-200 hover:bg-gray-300"
                  : "text-black hover:bg-gray-100",
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
