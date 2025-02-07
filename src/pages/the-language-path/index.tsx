import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import TheLanguagePathHomeContainer from "~/containers/theLanguagePathPage/home";
import TheLanguagePathContentContainer from "~/containers/theLanguagePathPage/content";

export default function TheLanguagePathPage() {
  const router = useRouter();
  const { lessonIdx } = router.query;

  if (!lessonIdx) {
    return (
      <>
        <Head>
          <title>Learn Circassian</title>
        </Head>
        <main>
          <TheLanguagePathHomeContainer />
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main className="w-full">
        <TheLanguagePathContentContainer />
      </main>
    </>
  );
}
