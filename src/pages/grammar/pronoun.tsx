import { GrammarBookContainer } from "~/styled-components";
import React from "react";
import Head from "next/head";
import { SwitchTable } from "~/styled-components/table";

export default function PronounPage() {
  return (
    <>
      <Head>
        <title>Learn Circassian - Pronouns</title>
        <meta
          name="description"
          content="Learn about Circassian pronouns, including personal and demonstrative pronouns, their forms and usage."
        />
      </Head>
      <GrammarBookContainer>
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Pronouns</h1>

        <SwitchTable
          headers={[
            [
              { text: { en: "Plurality" }, rowSpan: 2 },
              { text: { en: "Case" }, rowSpan: 2 },
              { text: { en: "First-person" } },
              { text: { en: "Second-person" } },
            ],
          ]}
          rows={[
            [
              { text: { en: "Singular" }, rowSpan: 4 },
              { text: { en: "Absolutive" } },
              { text: { west: "сэ", east: "сэ" } },
              { text: { west: "о", east: "уэ" } },
            ],
            [
              { text: { en: "Ergative" } },
              { text: { west: "сэ", east: "сэ" } },
              { text: { west: "о", east: "уэ" } },
            ],
            [
              { text: { en: "Instrumental" } },
              { text: { west: "сэркӏэ", east: "сэркӏэ" } },
              { text: { west: "оркӏэ", east: "уэркӏэ" } },
            ],
            [
              { text: { en: "Adverbial" } },
              { text: { west: "сэрэу", east: "сэрэу" } },
              { text: { west: "орэу", east: "уэрэу" } },
            ],
            [
              { text: { en: "Plural" }, rowSpan: 4 },
              { text: { en: "Absolutive" } },
              { text: { west: "тэ", east: "дэ" } },
              { text: { west: "шъо", east: "фэ" } },
            ],
            [
              { text: { en: "Ergative" } },
              { text: { west: "тэ", east: "дэ" } },
              { text: { west: "шъо", east: "фэ" } },
            ],
            [
              { text: { en: "Instrumental" } },
              { text: { west: "тэркӏэ", east: "дэркӏэ" } },
              { text: { west: "шъоркӏэ", east: "фэркӏэ" } },
            ],
            [
              { text: { en: "Adverbial" } },
              { text: { west: "тэрэу", east: "дэрэу" } },
              { text: { west: "шъорэу", east: "фэрэу" } },
            ],
          ]}
        />
      </GrammarBookContainer>
    </>
  );
}
