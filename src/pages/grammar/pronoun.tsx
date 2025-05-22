import { CText, GrammarBookContainer, H1, H2 } from "~/styled-components";
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
        <H1>Pronouns</H1>
        <H2>Personal Pronouns</H2>
        <p>
          In Circassian, personal pronouns are only expressed in 1st and 2nd persons and only in
          singular and plural forms. Circassian does not have gender-distinguishing pronouns, and
          most importantly, unlike most languages in the world, Circassian does not have the
          "traditional" 3rd person pronouns such as "he", "she", "it" and "they". The way 3nd person
          pronouns are expressed in Circassian will be explained later in the demonstrative pronouns
          section.
        </p>
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
        <H2>Demonstrative Pronouns</H2>
        <p>
          Demonstrative pronouns are words such as "this" and "that." In English, there are four
          basic demonstrative pronouns: <strong>this</strong>, <strong>that</strong>,{" "}
          <strong>these</strong>, and <strong>those</strong>. Circassian has mainly three:{" "}
          <CText>а</CText>, <CText>мы</CText>, and <CText>мо</CText>:
        </p>
        <ul className="mb-4 list-disc pl-6 text-gray-700">
          <li>
            <CText>а</CText>: refers to a person or object that is invisible or out of view. It can
            also be used for abstract concepts or thoughts.
          </li>
          <li>
            <CText>мы</CText>: refers to a person or object that is visible and relatively close to
            the speaker. It functions similarly to the English “this.”
          </li>
          <li>
            <CText>мо</CText>: refers to a person or object that is visible but relatively far away.
            This is the rarest demonstrative pronoun in Circassian.
          </li>
        </ul>
        <p className="text-gray-700">
          Both <CText>а</CText> and <CText>мо</CText> translate to “that” in English, but in
          Circassian, they differ in terms of visibility. <CText>а</CText> is used for things that
          are not visible, while <CText>мо</CText> refers to things that are visible yet distant.
        </p>
        <p className="mt-4">
          Unlike personal pronouns, which refer to people or things without specifying their
          location or proximity, demonstrative pronouns indicate both the <em>number</em> (singular
          or plural) and the <em>relative distance</em> (near or far) of the thing being referred
          to. They draw specific attention to a person or object and often function as a pointer in
          conversation. In Circassian, demonstrative pronouns can imply closeness or distance not
          only physically but socially. Because of this, using a demonstrative pronoun
          incorrectly—especially when referring to a person—can be seen as disrespectful or suggest
          a lack of familiarity. For example, referring to someone with <CText>мо</CText> (\"that
          one over there\") may unintentionally express emotional or social distance.
        </p>
        <p className="mt-4 text-gray-700">
          Importantly, Circassian does not have true third-person pronouns like “he,” “she,” or
          “they.” This can be confusing for speakers of most other languages, which almost always
          include dedicated third-person pronouns. In Circassian, demonstrative pronouns are used
          instead to refer to people in the third person — but this sounds more like “that man,”
          “this woman,” or “that person.” Because of this, using demonstratives inappropriately can
          carry unintended social meaning. For instance, saying <CText>ар</CText> (“that one”)
          instead of a respectful noun or name can sound overly distant or even dismissive. Although
          some books or tutorials use <CText>ар</CText> as if it were a third-person pronoun, this
          is grammatically incorrect and culturally misleading.
        </p>
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
