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
function DictionaryBox() {
  const [isSticky, setIsSticky] = React.useState(false);
  const boxRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    const currentRef = boxRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      {/* Invisible marker to track when the component leaves */}
      <div ref={boxRef} className="h-1" />

      {/* Actual sticky box */}
      <section
        className={`fixed right-0 left-0 z-50 transition-all duration-300 ${
          isSticky
            ? "top-0 mx-auto w-full max-w-3xl rounded-b-3xl bg-green-700 p-2 shadow-md shadow-black"
            : "relative my-10 rounded-3xl bg-green-700 p-5 text-center shadow-md shadow-black"
        }`}
      >
        {!isSticky && (
          <>
            <h1 className="text-2xl font-bold">Dictionary</h1>
            <p className="mt-2 mb-4 text-base">
              30+ bilingual dictionaries bridging Circassian with English, Russian, Arabic &
              Turkish.
            </p>
          </>
        )}
        <SearchContainer showOnMobile />
      </section>
    </>
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
          <DictionaryBox />
          <DictionaryListingContainer />
        </ContainerDiv>
      </main>
    </>
  );
}
