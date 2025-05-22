import { CText, GrammarBookContainer, H1, H2, H3 } from "~/styled-components";
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
        <H2>Demonstrative Pronouns and 3rd Person Pronouns</H2>

        <H3>What is a Demonstrative?</H3>
        <p className="text-gray-700">
          Demonstratives are words used to point to specific people, objects, or concepts in space
          or time. In English, the four basic demonstratives are: <strong>this</strong>,{" "}
          <strong>that</strong>, <strong>these</strong>, and <strong>those</strong>. These words
          indicate both <em>number</em> (singular or plural) and <em>relative distance</em> (near or
          far). For example, “this” refers to something close, while “that” refers to something
          farther away. Demonstratives help draw attention to a specific person or thing being
          discussed.
        </p>

        <H3>Demonstrative Pronouns in Circassian</H3>
        <p className="text-gray-700">
          Circassian has three main demonstrative pronouns: <CText>а</CText>, <CText>мы</CText>, and{" "}
          <CText>мо</CText>. These are commonly used to refer to people or objects based on
          visibility and distance.
        </p>
        <ul className="mb-4 list-disc pl-6 text-gray-700">
          <li>
            <CText>а</CText>: used to refer to someone or something that is not visible. It can also
            refer to abstract concepts or ideas. This is the most neutral and common demonstrative.
          </li>
          <li>
            <CText>мы</CText>: refers to a person or object that is visible and relatively close to
            the speaker. It functions similarly to the English “this.”
          </li>
          <li>
            <CText>мо</CText>: refers to a person or object that is visible but farther away. This
            form is the rarest and can imply both physical and social distance.
          </li>
        </ul>
        <p className="text-gray-700">
          Both <CText>а</CText> and <CText>мо</CText> are often translated as “that” in English.
          However, <CText>а</CText> is used for things that are invisible or abstract, while{" "}
          <CText>мо</CText> is used for visible but distant things. This distinction doesn’t exist
          in English.
        </p>

        <H3>Difference from Personal Pronouns</H3>
        <p className="text-gray-700">
          Unlike personal pronouns, which refer to people or things without describing their
          position, demonstrative pronouns specify location and visibility. For example, English
          speakers say “he” or “she” whether the person is near or far. But in Circassian,
          demonstratives like <CText>мы</CText> (“this one”), <CText>мо</CText> (“that one over
          there”) or <CText>а</CText> (“that one”) are used instead. The demonstrative pronoun{" "}
          <CText>а</CText> is the most common one.
        </p>

        <H3>Circassian Has No True 3rd Person Pronouns</H3>
        <p className="text-gray-700">
          A major grammatical difference between Circassian and most other languages is that
          Circassian has <strong>no true third-person pronouns</strong> like “he,” “she,” or “they.”
          This can be surprising or confusing to learners from languages where third-person pronouns
          are essential.
        </p>
        <p className="text-gray-700">
          Instead, Circassian uses demonstrative pronouns to fill that role. For example, rather
          than saying “he went,” a Circassian speaker might say <CText>ар</CText> (“that one went”).
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

        <H3>Use with Caution: Demonstratives and Social Meaning</H3>
        <p className="text-gray-700">
          In many languages, referring to people using the word “that” — as in “that man” or “that
          one” — can imply emotional distance, unfamiliarity, or even come across as dismissive.
          This is no different in Circassian. Demonstrative pronouns like <CText>ар</CText> (“that
          one”) carry similar social weight.
        </p>
        <p className="text-gray-700">
          In Circassian, using a demonstrative to refer to someone you are close to or know well may
          sound rude or overly distant. It’s generally acceptable to use demonstratives when
          referring to unfamiliar people — for example, someone passing by, a stranger, a person
          introduced in conversation or an unfamiliar person in a story. But using them for friends,
          family, or present individuals you’re emotionally close to should be done with caution.
        </p>
        <br />
        <p className="text-gray-700">
          In storytelling and tales, demonstrative pronouns like <CText>ар</CText> are commonly used
          to refer to characters. This is completely appropriate because those characters are not
          present, are not visible to the listener (might even be fictional), and are not personally
          known — making <CText>ар</CText> a natural and fitting choice.
        </p>
      </GrammarBookContainer>
    </>
  );
}
