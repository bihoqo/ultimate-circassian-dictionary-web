import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import ContainerDiv from "~/components/containerDiv";

export default function GrammarPage() {
  // return (
  //   <>
  //     <Head>
  //       <title>Learn Circassian - Grammar</title>
  //     </Head>
  //     <main>
  //       <ContainerDiv className="p-4">
  //         <div className="flex flex-col items-center justify-center gap-4 text-center">
  //           <h1 className="text-4xl font-bold text-blue-600">Grammar</h1>
  //           <p className="text-lg text-gray-600">
  //             This page is currently in the works. Stay tuned for updates!
  //           </p>
  //         </div>
  //       </ContainerDiv>
  //     </main>
  //   </>
  // );

  // TODO - Add content to this page
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
      <main>
        <ContainerDiv className="p-4">
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
