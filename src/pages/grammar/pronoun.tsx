import { GrammarBookContainer } from "~/styled-components";
import React from "react";
import Head from "next/head";

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
        <h1 className="mb-4 text-3xl font-bold">Pronouns</h1>

        <section>
          <h2 className="mt-6 text-2xl font-semibold">Personal Pronouns</h2>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}></th>
                <th rowSpan={2}>Case</th>
                <th colSpan={2}>First-person</th>
                <th colSpan={2}>Second-person</th>
                <th colSpan={2}>Reflexive third-person</th>
              </tr>
              <tr>
                <th>Cyrillic</th>
                <th></th>
                <th>Cyrillic</th>
                <th></th>
                <th>Cyrillic</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={4}>Singular</td>
                <td>Absolutive</td>
                <td>сэ</td>
                <td></td>
                <td>о</td>
                <td></td>
                <td>егь</td>
                <td></td>
              </tr>
              <tr>
                <td>Ergative</td>
                <td>сэ</td>
                <td></td>
                <td>о</td>
                <td></td>
                <td>егь</td>
                <td></td>
              </tr>
              <tr>
                <td>Instrumental</td>
                <td>сэркӏэ</td>
                <td></td>
                <td>оркӏэ</td>
                <td></td>
                <td>егькӏэ</td>
                <td></td>
              </tr>
              <tr>
                <td>Adverbial</td>
                <td>сэрэу</td>
                <td></td>
                <td>орэу</td>
                <td></td>
                <td>егьрэу</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={4}>Plural</td>
                <td>Absolutive</td>
                <td>тэ</td>
                <td></td>
                <td>шъо</td>
                <td></td>
                <td>егьхэр</td>
                <td></td>
              </tr>
              <tr>
                <td>Ergative</td>
                <td>тэ</td>
                <td></td>
                <td>шъо</td>
                <td></td>
                <td>егьхэмэ</td>
                <td></td>
              </tr>
              <tr>
                <td>Instrumental</td>
                <td>тэркӏэ</td>
                <td></td>
                <td>шъоркӏэ</td>
                <td></td>
                <td>егьхэмкӏэ</td>
                <td></td>
              </tr>
              <tr>
                <td>Adverbial</td>
                <td>тэрэу</td>
                <td></td>
                <td>шъорэу</td>
                <td></td>
                <td>егьхэрэу</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Repeat similar <section> and <table> elements for:
            - Demonstrative Pronouns
            - Possessive Pronouns
            - Interrogative Pronouns
            - Indefinite Pronouns
            - Indicatory Pronouns
            Make sure to include all Cyrillic content from the source */}
      </GrammarBookContainer>
    </>
  );
}
