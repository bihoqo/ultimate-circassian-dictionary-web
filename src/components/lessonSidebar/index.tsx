import { LESSONS_LIST } from "~/constants/lessons";
import { cn } from "~/utils/classNames";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { IoChevronForward, IoChevronBack, IoClose } from "react-icons/io5";

export default function LessonSidebar() {
  const router = useRouter();
  const { lessonIdx, panelIdx } = router.query;
  const selectedLesson = LESSONS_LIST[Number(lessonIdx)];
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  async function navigateToLesson(lessonIdx: number, panelIdx: number) {
    const params = new URLSearchParams();
    params.append("lessonIdx", lessonIdx.toString());
    params.append("panelIdx", panelIdx.toString());
    await router.push(`/the-language-path?${params.toString()}`);
  }

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Sidebar Panel */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 h-full w-[300px] bg-white shadow-md border-r border-[#cecec3] transform transition-transform duration-300 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#cecec3]">
          <h2 className="text-xl font-bold text-black">Lessons</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
            <IoClose size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full">
          {/* Lessons List */}
          <div className="flex flex-col gap-2 p-4">
            {LESSONS_LIST.map((lesson) => (
              <button
                key={lesson.lessonIdx}
                onClick={() => navigateToLesson(lesson.lessonIdx, 0)}
                className={cn(
                  "px-2 py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 text-left",
                  selectedLesson?.lessonIdx === lesson.lessonIdx
                    ? "text-[#f27141] font-bold"
                    : "text-[#4a7324] font-medium",
                )}
              >
                {lesson.lessonIdx}. {lesson.title}
              </button>
            ))}
          </div>

          {/* Panels List */}
          {selectedLesson && (
            <div className="flex flex-col gap-2 p-4 border-t border-[#cecec3] mb-24">
              {/* Added margin at the bottom */}
              <h2 className="text-lg font-medium text-left">Exercise</h2>
              {selectedLesson.panelIdxList.map((panel, idx) => (
                <button
                  key={idx}
                  onClick={() => navigateToLesson(selectedLesson.lessonIdx, idx)}
                  className={cn(
                    "px-2 py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 text-left",
                    Number(panelIdx) === idx
                      ? "text-[#f27141] font-bold"
                      : "text-[#4a7324] font-medium",
                  )}
                >
                  {panel.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Arrow Button - Moves with Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-1/2 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-[#f27141] text-white shadow-md hover:bg-[#f29e7e] transition-all",
          "transform -translate-y-1/2",
          isOpen ? "left-[300px]" : "left-2",
        )}
      >
        {isOpen ? <IoChevronBack size={32} /> : <IoChevronForward size={32} />}
      </button>
    </>
  );
}
