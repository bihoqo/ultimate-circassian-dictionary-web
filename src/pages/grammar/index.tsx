import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import ContainerDiv from "~/components/containerDiv";

const featureFlagUnderConstruction = true;

export default function GrammarPage() {
  if (featureFlagUnderConstruction) {
    return (
      <>
        <Head>
          <title>Learn Circassian - Grammar</title>
        </Head>
        <main className="min-h-screen bg-white xl:w-1/2">
          <ContainerDiv className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold text-blue-600">Grammar</h1>
              <p className="text-lg text-gray-600">
                This page is currently in the works. Stay tuned for updates!
              </p>
            </div>
          </ContainerDiv>
        </main>
      </>
    );
  } else {
    const router = useRouter();

    const grammarTopics = [
      { name: "Nouns", path: "noun" },
      { name: "Verbs", path: "verb" },
      { name: "Phonology", path: "phonology" },
      { name: "Morphology", path: "morphology" },
      { name: "Numbers", path: "number" },
      { name: "Adverbs", path: "adverb" },
      { name: "Adjectives", path: "adjective" },
    ];
    return (
      <>
        <Head>
          <title>Learn Circassian</title>
        </Head>
        <main className="min-h-screen bg-white xl:w-1/2">
          <ContainerDiv className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              {grammarTopics.map((topic) => (
                <p
                  key={topic.path}
                  className="cursor-pointer text-3xl font-bold text-blue-600 hover:underline"
                  onClick={() => router.push(`/grammar/${topic.path}`)}
                >
                  {topic.name}
                </p>
              ))}
            </div>
          </ContainerDiv>
        </main>
      </>
    );
  }
}
