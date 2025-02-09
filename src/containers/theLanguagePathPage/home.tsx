import React from "react";
import { useRouter } from "next/navigation";
import { LESSONS_LIST } from "~/constants/lessons";
import queryString from "query-string";
import Image from "next/image";

export default function TheLanguagePathHomeContainer() {
  const router = useRouter();
  return (
    <div
      className="w-full h-full min-h-screen bg-cover bg-center bg-no-repeat py-4"
      style={{
        backgroundImage: `url('/lessons/menu/bg2.jpg')`,
      }}
    >
      <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-row justify-center items-center">
          <Image src="/lessons/menu/P7.png" width={350} height={350} alt="Lessons" />
        </div>
        <h1 className="text-6xl font-black text-white text-center">БЗЭМ ИЛЪАГЪУ</h1>
        <h2 className="text-4xl font-black text-white text-center">
          Чэтэо Мэруан, Мышъэ Хъун Суӏад, Гъукӏэлӏ Махыр
        </h2>
        <h2 className="text-4xl font-black text-white text-center">2024</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-1/2 mx-auto">
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
      </div>
    </div>
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
      className="cursor-pointer border-2 border-solid border-white flex flex-row gap-2 justify-start items-center min-h-[80px] bg-transparent hover:bg-white/50 rounded-lg"
      onClick={onClick}
    >
      <div className="flex flex-col justify-start items-start h-full">
        <div className="bg-[#5faf06] h-full px-4 flex flex-col justify-center items-center text-3xl text-white font-bold ml-4 rounded-b-lg">
          {lessonIndex}
        </div>
        <div className="mb-2" />
      </div>
      <p className="text-3xl font-boldhover:underline text-left pr-2 text-white">{title}</p>
    </button>
  );
}
