import Head from "next/head";
import React, { lazy, Suspense } from "react";
import { useRouter } from "next/router";
import TheLanguagePathHomeContainer, {
  TheLanguagePathLoadingScreen,
} from "~/containers/theLanguagePathPage/home";

// Lazy load the content container to optimize performance
const TheLanguagePathContentContainer = lazy(
  () => import("~/containers/theLanguagePathPage/content"),
);

export default function TheLanguagePathPage() {
  const router = useRouter();
  const { lessonIdx } = router.query;

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
