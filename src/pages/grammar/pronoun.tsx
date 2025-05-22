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

        <SwitchTable
          headers={[
            [
              { text: { en: "Plurality" }, rowSpan: 2 },
              { text: { en: "Case" }, rowSpan: 2 },
              { text: { en: "Demonstrative а" } },
              { text: { en: "Demonstrative мо" } },
              { text: { en: "Demonstrative мы" } },
            ],
          ]}
          rows={[
            [
              { text: { en: "Singular" }, rowSpan: 4 },
              { text: { en: "Absolutive" } },
              { text: { west: "ар", east: "ар" } },
              { text: { west: "мор", east: "мор" } },
              { text: { west: "мыр", east: "мыр" } },
            ],
            [
              { text: { en: "Ergative" } },
              { text: { west: "ащ", east: "абы" } },
              { text: { west: "мощ", east: "мобы" } },
              { text: { west: "мыщ", east: "мыбы" } },
            ],
            [
              { text: { en: "Instrumental" } },
              { text: { west: "ащкӏэ", east: "абыкӏэ" } },
              { text: { west: "мощкӏэ", east: "мобыкӏэ" } },
              { text: { west: "мыщкӏэ", east: "мыбыкӏэ" } },
            ],
            [
              { text: { en: "Adverbial" } },
              { text: { west: "арэу", east: "арэу" } },
              { text: { west: "морэу", east: "морэу" } },
              { text: { west: "мырэу", east: "мырэу" } },
            ],
            [
              { text: { en: "Plural" }, rowSpan: 4 },
              { text: { en: "Absolutive" } },
              { text: { west: "ахэр", east: "ахэр" } },
              { text: { west: "мохэр", east: "мохэр" } },
              { text: { west: "мыхэр", east: "мыхэр" } },
            ],
            [
              { text: { en: "Ergative" } },
              { text: { west: "ахэмэ", east: "абыхэм" } },
              { text: { west: "мохэмэ", east: "мобыхэм" } },
              { text: { west: "мыхэмэ", east: "мыбыхэм" } },
            ],
            [
              { text: { en: "Instrumental" } },
              { text: { west: "ахэмкӏэ", east: "абыхэмкӏэ" } },
              { text: { west: "мохэмкӏэ", east: "мобыхэмкӏэ" } },
              { text: { west: "мыхэмкӏэ", east: "мыбыхэмкӏэ" } },
            ],
            [
              { text: { en: "Adverbial" } },
              { text: { west: "ахэрэу", east: "ахэрэу" } },
              { text: { west: "мохэрэу", east: "мохэрэу" } },
              { text: { west: "мыхэрэу", east: "мыхэрэу" } },
            ],
          ]}
        />
      </GrammarBookContainer>
    </>
  );
}
