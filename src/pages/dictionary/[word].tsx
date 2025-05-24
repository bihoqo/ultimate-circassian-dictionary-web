import React from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import { safeWordToRegularWord } from "~/utils/wordFormatting";
import { cn } from "~/utils/classNames";
import WordHistoryContainer from "~/containers/wordPage/wordHistoryContainer";
import DefinitionsContainer from "~/containers/wordPage/definitionsContainer";
import WordPageFooter from "~/containers/wordPage/wordPageFooter";
import ContainerDiv from "~/components/containerDiv";
import SearchContainer from "~/containers/header/searchContainer";
import useWindowSize from "~/hooks/useWindowDimensions";

export default function WordPage() {
  const { width } = useWindowSize();
  const params = useParams<{ word: string }>();
  const wordSpelling = safeWordToRegularWord(params?.word || "");

  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main className="min-h-screen bg-white">
        <ContainerDiv className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="py-8 sm:py-12">
            <h1 className="mb-6 text-center text-2xl font-semibold sm:text-4xl md:text-5xl">
              Circassian Dictionary
            </h1>
            <div className="mb-6 rounded-xl bg-gray-50 p-4 shadow-md">
              <SearchContainer showOnMobile={false} />
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 pb-12 sm:gap-8 md:grid-cols-[2fr_5fr] lg:gap-12">
            <div className="hidden md:block">
              <WordHistoryContainer />
            </div>
            <div>
              <DefinitionsContainer wordSpelling={wordSpelling} />
            </div>
          </section>
        </ContainerDiv>

        <footer className="w-full border-t border-gray-200 bg-white">
          <WordPageFooter />
        </footer>
      </main>
    </>
  );
}

// const getServerSideProps: GetServerSideProps = async () => {
//   return { props: {} };
// };
