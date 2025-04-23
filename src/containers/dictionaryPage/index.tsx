import React from "react";
import { USED_DICTS } from "~/constants/dicts";
import { RANDOM_COLORS } from "~/constants/colors";
import Image from "next/image";
import SearchContainer from "~/containers/header/searchContainer";
import BookSvg from "~/components/svg/bookSvg";
import ContainerDiv from "../../components/containerDiv";

export default function DictionaryShowContainer() {
  return (
    <div className="w-full">
      <Content />
    </div>
  );
}
function ScrollableContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-11/12 max-h-[500px] overflow-y-auto rounded-xl border border-gray-300 bg-white p-4 shadow-md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {USED_DICTS.map((dict, index) => (
          <div
            key={index}
            className="flex flex-row items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm transition duration-200 hover:shadow-md"
          >
            <BookSvg width="60px" height="60px" fill={RANDOM_COLORS[index]} />
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-gray-800">{dict.title}</h2>
              <p className="mt-1 text-xs text-gray-600">
                <span className="font-medium text-gray-700">From:</span> {dict.fromLang}
                <span className="mx-1">→</span>
                <span className="font-medium text-gray-700">To:</span> {dict.toLang}
              </p>
              <p className="mt-1 text-xs text-gray-600">
                <span className="font-medium text-gray-700">Entries:</span> {dict.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Content() {
  return (
    <>
      <ContainerDiv>
        <div className="flex">
          <Image src="/fav/icon-1042x1042.png" width={300} height={300} alt="logo" />
          <p className="mt-8 w-11/12 text-center text-1xl md:w-1/2">
            Welcome to our dedicated platform for preserving the Circassian language! Our mission is
            to keep this rich linguistic heritage alive by offering access to over 30 comprehensive
            dictionaries. These dictionaries facilitate translations between Circassian and major
            languages including Russian, English, Arabic, and Turkish.
            <br />
            <br />
            Our collection spans both Western and Eastern Circassian, enabling translations to and
            from Turkish, English, Russian, and Arabic. We aim to assist Circassians from all over
            the world in understanding advanced Circassian texts such as newspapers, Nart Saga
            stories, articles, and more.
            <br />
            <br />
            Explore our website to immerse yourself in the beauty and complexity of the Circassian
            language, and join us in our endeavor to ensure its survival for future generations.
          </p>
        </div>
        {/* ------- HERO ------- */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-light p-10 text-center text-black bg-yellow-100  shadow-xl">
          <div className="mx-auto grid max-w-prose gap-8">
            <h1 className="text-4xl font-extrabold sm:text-5xl">Dictionary</h1>

            <p className="text-lg leading-relaxed">
              30+ bilingual dictionaries bridging Circassian with English, Russian, Arabic &amp;
              Turkish.
            </p>

            {/* always visible on mobile; collapsible logic can be added inside SearchContainer */}
            <SearchContainer showOnMobile />
          </div>
        </section>
        <h1 className="mb-4 mt-16 text-center text-3xl font-bold">
          List of dictionaries used: {USED_DICTS.length}
        </h1>
        <div className="mb-4 text-center">
          <p className="text-sm">Supporting Languages: Kbd, En, Ady, Ar, Tu & Ru</p>
        </div>
        <ScrollableContainer children={undefined} />
      </ContainerDiv>
    </>
  );
}
