import Head from "next/head";
import React from "react";
import Image from "next/image";

import ContainerDiv from "~/components/containerDiv";
import { DictionaryListingContainer } from "~/containers/dictionaryPage";
import SearchContainer from "~/containers/header/searchContainer";

function EntryText() {
  return (
    <section className="mx-auto mb-10 max-w-3xl text-center md:text-left">
      <p className="text-base text-gray-700">
        Welcome to our dedicated platform for preserving the Circassian language! Our mission is to
        keep this rich linguistic heritage alive by offering access to over 30 comprehensive
        dictionaries for translations between Circassian and major languages including Russian,
        English, Arabic, and Turkish.
      </p>
      <p className="mt-6 text-base text-gray-700">
        Our collection spans both Western and Eastern Circassian, enabling translations to and from
        Turkish, English, Russian, and Arabic. We aim to assist Circassians worldwide in
        understanding advanced texts like newspapers, Nart Saga stories, and more.
      </p>
      <p className="mt-6 text-base text-gray-700">
        Explore our website and join us in our mission to preserve the beauty of Circassian for
        generations to come.
      </p>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main>
        <ContainerDiv>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <Image
              src="/fav/icon-1042x1042.png"
              width={200}
              height={200}
              alt="logo"
              className="rounded-xl"
            />
          </div>

          <EntryText />
          {/* HERO SECTION */}
          <section className="my-10 rounded-3xl bg-gradient-to-br from-green-800 to-green-100 p-5 text-center shadow-xl">
            <h1 className="text-2xl font-bold">Dictionary</h1>
            <p className="mt-2 mb-4 text-base">
              30+ bilingual dictionaries bridging Circassian with English, Russian, Arabic &
              Turkish.
            </p>
            <SearchContainer showOnMobile />
          </section>
        </ContainerDiv>
      </main>
    </>
  );
}
