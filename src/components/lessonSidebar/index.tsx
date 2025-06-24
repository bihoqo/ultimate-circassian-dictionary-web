import { cn } from "~/utils/classNames";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { IoChevronForward, IoChevronBack, IoClose } from "react-icons/io5";
import { LESSONS_LIST } from "~/components/theLangPath/panels";
import { ITheLangPathPanel } from "~/interfaces/theLangPath";

export default function LessonSidebar({ panels }: { panels: ITheLangPathPanel[] }) {
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
          "fixed top-0 left-0 z-50 h-full w-[175px] transform border-r border-[#cecec3] bg-white shadow-md transition-transform duration-300 sm:w-[200px] md:w-[300px]",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#cecec3] p-4">
          <h2 className="text-xl font-bold text-black">Lessons</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
            <IoClose size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto">
          {/* Lessons List */}
          <div className="flex flex-col gap-2 p-1 lg:p-4">
            {LESSONS_LIST.map((lesson) => (
              <button
                key={lesson.index}
                onClick={() => navigateToLesson(lesson.index, 0)}
                className={cn(
                  "rounded-md px-1 py-1 text-left transition-colors duration-200 hover:bg-gray-100 md:px-2",
                  selectedLesson?.index === lesson.index
                    ? "font-bold text-[#f27141]"
                    : "font-medium text-[#4a7324]",
                )}
              >
                {lesson.index}. {lesson.title}
              </button>
            ))}
          </div>

          {/* Panels List */}
          {selectedLesson && (
            <div className="mb-24 flex flex-col gap-2 border-t border-[#cecec3] p-1 md:p-4">
              {/* Added margin at the bottom */}
              <h2 className="text-left text-lg font-medium">Exercise</h2>
              {panels.map((panel, idx) => (
                <button
                  key={idx}
                  onClick={() => navigateToLesson(selectedLesson.index, idx)}
                  className={cn(
                    "rounded-md px-1 py-1 text-left transition-colors duration-200 hover:bg-gray-100 md:px-2",
                    Number(panelIdx) === idx
                      ? "font-bold text-[#f27141]"
                      : "font-medium text-[#4a7324]",
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
          "fixed top-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#f27141] text-white shadow-md transition-all hover:bg-[#f29e7e]",
          "-translate-y-1/2 transform",
          isOpen ? "left-[175px] sm:left-[200px] md:left-[300px]" : "left-2",
        )}
      >
        {isOpen ? <IoChevronBack size={32} /> : <IoChevronForward size={32} />}
      </button>
    </>
  );
}
