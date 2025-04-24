import React from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import Image from "next/image";
import { LESSONS_LIST } from "~/components/theLangPath/panels";

export default function TheLanguagePathHomeContainer() {
  const router = useRouter();
  return (
    <div
      className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-4"
      style={{
        backgroundImage: `url('/theLangPath/menu/bg2.jpg')`,
      }}
    >
      <div className="flex flex-col gap-8 p-4">
        <div className="flex flex-row items-center justify-center">
          <Image src="/theLangPath/menu/P7.png" width={188} height={100} alt="Lessons" />
        </div>
        <h1 className="text-center text-[36px] font-black text-white">БЗЭМ ИЛЪАГЪУ</h1>
        <h2 className="text-center text-[28px] font-black text-white">
          Чэтэо Мэруан, Мышъэ Хъун Суӏад, Гъукӏэлӏ Махыр
        </h2>
        <h2 className="text-center text-[28px] font-black text-white">2024</h2>
        <div className="3xl:w-1/2 mx-auto grid w-full grid-cols-1 gap-4 sm:w-11/12 md:w-2/3 lg:grid-cols-2 xl:grid-cols-3 2xl:w-2/3">
          {LESSONS_LIST.map((lesson) => {
            const params: string = queryString.stringify({
              lessonIdx: lesson.index,
              panelIdx: 0,
            });

            return (
              <LessonButton
                key={lesson.index}
                title={lesson.title}
                lessonIndex={lesson.index}
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
      className="flex min-h-[80px] cursor-pointer flex-row items-center justify-start gap-2 rounded-lg border-2 border-solid border-white bg-transparent hover:bg-white/50"
      onClick={onClick}
    >
      <div className="flex h-full flex-col items-start justify-start">
        <div className="ml-4 flex h-full flex-col items-center justify-center rounded-b-lg bg-[#5faf06] px-4 text-3xl font-bold text-white">
          {lessonIndex}
        </div>
        <div className="mb-2" />
      </div>
      <p className="font-boldhover:underline pr-2 text-left text-[28px] text-white">{title}</p>
    </button>
  );
}

export function TheLanguagePathLoadingScreen() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-white">
      {/* Loading spinner */}
      <div className="loader mb-4 h-32 w-32 rounded-full border-8 border-t-8 border-gray-200 ease-linear"></div>
      <h1 className="text-center text-3xl font-semibold text-gray-700">Loading...</h1>
    </div>
  );
}
