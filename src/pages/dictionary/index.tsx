import Head from "next/head";
import React from "react";
import ContainerDiv from "../../components/containerDiv";
import Image from "next/image";
import SearchContainer from "~/containers/header/searchContainer";
import { DictionaryListingContainer } from "~/containers/dictionaryPage";

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

export default function DictionaryPage() {
  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main>
        <ContainerDiv>
          {/* HERO SECTION */}
          <section className="my-10 rounded-3xl bg-gradient-to-br from-green-800 to-green-100 p-5 text-center shadow-xl">
            <h1 className="text-2xl font-bold">Dictionary</h1>
            <p className="mt-2 mb-4 text-base">
              30+ bilingual dictionaries bridging Circassian with English, Russian, Arabic &
              Turkish.
            </p>
            <SearchContainer showOnMobile />
          </section>
          <DictionaryListingContainer />
        </ContainerDiv>
      </main>
    </>
  );
}
