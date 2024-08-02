import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
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
      <main className="size-full">
        <ContainerDiv>
          <div className="flex w-full flex-grow flex-col gap-4">
            <h1
              className={cn("w-full text-center text-5xl font-semibold", { hidden: width < 400 })}
            >
              Circassian Dictionary
            </h1>
            <SearchContainer showOnMobile={false} />
          </div>
          <div
            className={cn(
              "mx-auto my-20 flex px-2 sm:px-4 flex-[1] flex-row w-full",
              "gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 3xl:gap-16",
            )}
          >
            <div className="mt-4 hidden md:flex lg:flex-[2] xl:flex-[2] 2xl:flex-[2] 3xl:flex-[2]">
              <WordHistoryContainer />
            </div>
            <div className="flex w-full flex-[7]">
              <DefinitionsContainer wordSpelling={wordSpelling} />
            </div>
          </div>
        </ContainerDiv>
        <div className="z-30 w-full">
          <WordPageFooter />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};