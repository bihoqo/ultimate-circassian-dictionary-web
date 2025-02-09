import React from "react";
import ContainerDiv from "~/components/containerDiv";
import { useRouter } from "next/navigation";
import { LESSONS_LIST } from "~/constants/lessons";
import queryString from "query-string";

export default function TheLanguagePathHomeContainer() {
  const router = useRouter();
  return (
    <ContainerDiv className="p-4">
      <h1 className="text-3xl">Western Circassian Lessons:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {LESSONS_LIST.map((lesson) => {
          const params: string = queryString.stringify({
            lessonIdx: lesson.lessonIdx,
            panelIdx: 0,
          });

          return (
            <LessonButton
              key={lesson.lessonIdx}
              title={lesson.title}
              lessonIndex={lesson.lessonIdx}
              onClick={() => router.push(`/the-language-path?${params}`)}
            />
          );
        })}
      </div>
    </ContainerDiv>
  );
}

function LessonButton({
  onClick,
  title,
  lessonIndex,
}: {
  onClick: () => void;
  title: string;
  lessonIndex: number;
}) {
  return (
    <button
      className="cursor-pointer border-2 border-solid border-[#68a629] flex flex-row gap-2 justify-start items-center min-h-[80px]"
      onClick={onClick}
    >
      <div className="flex flex-col justify-start items-start h-full">
        <div className="bg-[#68a629] h-full px-4 flex flex-col justify-center items-center text-3xl text-white font-bold ml-4 rounded-b-lg">
          {lessonIndex}
        </div>
        <div className="mb-2" />
      </div>
      <p className="text-3xl font-medium text-[#68a629] hover:underline text-left pr-2">{title}</p>
    </button>
  );
}
