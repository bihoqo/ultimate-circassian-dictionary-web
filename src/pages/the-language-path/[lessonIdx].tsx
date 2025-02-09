import Head from "next/head";
import React, { lazy, Suspense } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { LESSONS_LIST } from "~/constants/lessons";
import TheLanguagePathHomeContainer, {
  TheLanguagePathLoadingScreen,
} from "~/containers/theLanguagePathPage/home";

// Lazy load the content container to optimize performance
const TheLanguagePathContentContainer = lazy(
  () => import("~/containers/theLanguagePathPage/content"),
);

type TheLanguagePathPageProps = {
  lessonIdx?: string;
};

export default function TheLanguagePathPage({ lessonIdx }: TheLanguagePathPageProps) {
  const router = useRouter();

  // If no lesson index is provided, show the home container
  if (!lessonIdx) {
    return (
      <>
        <Head>
          <title>Learn Circassian</title>
        </Head>
        <main className="w-full">
          <TheLanguagePathHomeContainer />
        </main>
      </>
    );
  }

  // If a lesson index is present, lazily load the content container
  return (
    <>
      <Head>
        <title>Learn Circassian - Lesson {lessonIdx}</title>
      </Head>
      <main className="w-full">
        <Suspense fallback={<TheLanguagePathLoadingScreen />}>
          <TheLanguagePathContentContainer />
        </Suspense>
      </main>
    </>
  );
}

// Static Site Generation - Generate static paths for lessons
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = LESSONS_LIST.map((lesson) => ({
    params: { lessonIdx: lesson.lessonIdx.toString() }, // Ensure lessonIdx is passed as a string
  }));

  return {
    paths,
    fallback: false, // If a path is not generated, it will return a 404
  };
};

// Get static props - Static generation with lesson data
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { lessonIdx } = params || {};

  return {
    props: {
      lessonIdx: lessonIdx || null,
    },
  };
};
