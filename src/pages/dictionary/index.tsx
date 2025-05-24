import Head from "next/head";
import React from "react";
import DictionaryShowContainer from "../../containers/dictionaryPage";

export default function DictionaryPage() {
  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main>
        <DictionaryShowContainer />
      </main>
    </>
  );
}
