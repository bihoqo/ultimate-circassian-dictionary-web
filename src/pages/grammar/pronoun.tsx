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
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Pronouns</h1>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Personal Pronouns</h2>
          <p className="mb-4 text-gray-700">
            Circassian personal pronouns vary by case, person, and number. Below is a table showing
            the different forms.
          </p>
          <div className="overflow-x-auto">
            <table className="mb-4 w-full min-w-[600px] border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Plurality</th>
                  <th className="border border-gray-300 px-4 py-2">Case</th>
                  <th className="border border-gray-300 px-4 py-2">First-person</th>
                  <th className="border border-gray-300 px-4 py-2">Second-person</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={4}>
                    Singular
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Absolutive</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">сэ</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">о</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Ergative</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">сэ</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">о</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Instrumental</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">сэркӏэ</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">оркӏэ</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Adverbial</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">сэрэу</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">орэу</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={4}>
                    Plural
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Absolutive</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">тэ</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">шъо</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Ergative</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">тэ</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">шъо</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Instrumental</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">тэркӏэ</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">шъоркӏэ</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Adverbial</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">тэрэу</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">шъорэу</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: The table shows the different forms of personal pronouns in Circassian across
            different cases.
          </p>
        </section>

        {/* Placeholder for additional pronoun sections */}
        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Demonstrative Pronouns</h2>
          <p className="mb-4 text-gray-700">
            Demonstrative pronouns in Circassian are used to point to specific objects or persons.
            This section will be expanded with more content in the future.
          </p>
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Possessive Pronouns</h2>
          <p className="mb-4 text-gray-700">
            Possessive pronouns indicate ownership or possession. This section will be expanded with
            more content in the future.
          </p>
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Interrogative Pronouns</h2>
          <p className="mb-4 text-gray-700">
            Interrogative pronouns are used to ask questions. This section will be expanded with
            more content in the future.
          </p>
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Reflexive Pronouns</h2>
          <p className="mb-4 text-gray-700">
            Circassian has reflexive pronouns only for the third person. Below is a table showing
            the different forms.
          </p>
          <div className="overflow-x-auto">
            <table className="mb-4 w-full min-w-[600px] border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Plurality</th>
                  <th className="border border-gray-300 px-4 py-2">Case</th>
                  <th className="border border-gray-300 px-4 py-2">Reflexive third-person</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={4}>
                    Singular
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Absolutive</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежь</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Ergative</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежь</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Instrumental</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежькӏэ</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Adverbial</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежьрэу</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={4}>
                    Plural
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Absolutive</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежьхэр</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Ergative</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежьхэмэ</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Instrumental</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежьхэмкӏэ</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Adverbial</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">ежьхэрэу</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: Circassian has no reflexive pronouns for first or second person.
          </p>
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
