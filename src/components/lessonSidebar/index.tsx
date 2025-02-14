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
      <div className="flex-[3_3_0%] flex flex-col justify-start items-start gap-2 pt-4 border-solid border-[#cecec3] border-r overflow-y-auto max-h-[700px] px-0 xl:px-2 3xl:px-4">
        <h2 className="text-lg font-semibold mb-2 text-center w-full">- Lessons -</h2>
        {LESSONS_LIST.map((lesson) => {
          return (
            <button
              key={lesson.lessonIdx}
              onClick={() => navigateToLesson(lesson.lessonIdx, 0)}
              className={cn(
                "font-black px-1 py-1 rounded-md transition-colors duration-200 hover:hover:bg-gray-100 text-left",
                selectedLesson.lessonIdx === lesson.lessonIdx ? "text-[#f27141]" : "text-black",
              )}
            >
              {lesson.lessonIdx}. {lesson.title}
            </button>
          );
        })}
      </div>

      {/* Right (Panels) */}
      <div className="flex-[2_2_0%] flex flex-col justify-start items-start gap-2 pt-4 overflow-y-auto max-h-[700px] px-0 xl:px-2 3xl:px-4">
        <h2 className="text-lg font-semibold mb-2 text-center w-full">- Panels -</h2>
        {selectedLesson.panelIdxList.map((panel, idx) => {
          return (
            <button
              key={idx}
              onClick={() => navigateToLesson(selectedLesson.lessonIdx, idx)}
              className={cn(
                "font-black px-1 py-1 rounded-md transition-colors duration-200 hover:hover:bg-gray-100 text-left",
                Number(panelIdx) === idx ? "text-[#f27141]" : "text-black",
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
