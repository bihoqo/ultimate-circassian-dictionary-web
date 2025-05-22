import React from "react";
import { CText, GrammarBookContainer, TranslateText as TText } from "~/styled-components";

function Col({ children, color }: { children: React.ReactNode; color: "red" | "blue" | "green" }) {
  let style = "";
  switch (color) {
    case "red":
      style = "text-red-500";
      break;
    case "blue":
      style = "text-blue-500";
      break;
    case "green":
      style = "text-green-500";
      break;
  }
  return <span className={style}>{children}</span>;
}
function ColR({ children }: { children: React.ReactNode }) {
  return <Col color="red">{children}</Col>;
}
function ColB({ children }: { children: React.ReactNode }) {
  return <Col color="blue">{children}</Col>;
}
function ColG({ children }: { children: React.ReactNode }) {
  return <Col color="green">{children}</Col>;
}

function AlertBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-4 border-l-4 border-red-300 bg-red-100 p-4">
      <h2 className="text-beamerred font-bold">{title}</h2>
      <p>{children}</p>
    </div>
  );
}

const ExampleBlock = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="my-4 border-l-4 border-green-300 bg-green-100 p-4">
      <h2 className="text-beamergreen font-bold">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="my-4 border-l-4 border-blue-300 bg-blue-100 p-4">
      <h2 className="text-beamerblue font-bold">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

function SectionErgativity() {
  // prettier-ignore
  return (
    <section>
      <AlertBlock title="Alert"> 
        This section is under construction.
      </AlertBlock>
      <ExampleBlock title="Example">
        This is an example of how to use the ExampleBlock component.
      </ExampleBlock>
      <Block title="Block">
        This is an example of how to use the Block component.
      </Block>
      <h2 className="mb-2 text-2xl font-semibold">Ergativity</h2>
      <p className="mb-4">
        Understanding the verb structure in Kabardian requires recognizing that it is an ergative language, which is different from the more familiar accusative languages such as English, Russian, Turkish and Arabic. In Europe and nearby regions, only a few languages like Basque and other Caucasian languages, including Circassian and Georgian, follow the ergative system.
      </p>
      <p className="mb-4">
        For being able to understand the core difference between ergative and accusative languages, one has to understand transitivity and what it entails. Transitivity is a grammatical concept that describes the relationship between a verb and its arguments, and usually divides verbs into two categories: intransitive and transitive. For further illustration, English will be used as a reference language, as it is a well-known accusative language. Intransitive verbs are those that cannot take a direct object, e.g. <CText d="e">to sleep</CText>, <CText d="e">to die</CText>, <CText d="e">to look</CText>. They can get an object, but only through a preposition, which is then called an indirect object, e.g. <CText d="e">to look <ColG>at Y</ColG></CText>. Transitive verbs, on the other hand, require a direct object, e.g. <CText d="e">to see <ColB>Y</ColB></CText>, <CText d="e">to eat <ColB>Y</ColB></CText>, <CText d="e">to love <ColB>Y</ColB></CText>. English may be not that good of an example because many transitive verbs can be simply used as intransitive verbs, like <CText d="e">to eat</CText> and <CText d="e">to love</CText> by simply omitting the object. But the idea is that prototypically transitive verbs require a direct object, while intransitive verbs cannot have a direct object.
      </p>
      <p className="mb-4">
        In linguistic terms, the key difference between ergative and accusative languages lies in how the subject and the direct object are marked depending on the verb&apos;s transitivity. In accusative languages, the primary cases are <ColR>nominative</ColR> and <ColB>accusative</ColB>, where the subject of a sentence is marked by the <ColR>nominative</ColR> case, regardless of the transitivity of the verb, while the direct object is marked by the <ColB>accusative</ColB> case. In ergative languages, the primary cases are the <ColR>absolutive</ColR> and <ColB>ergative</ColB> cases, intransitive verbs mark the subject with the <ColR>absolutive</ColR> case, while transitive verbs mark the subject with the <ColB>ergative</ColB> case and the direct object with the absolutive case. It&apos;s worth noting that in some Circassian linguistic traditions, the absolutive case is referred to as the nominative case. 
        This can be confusing, so for clarity, the term &apos;absolutive&apos; will be used here to avoid misunderstandings, though other sources might use &apos;nominative&apos; to mean the same thing.
      </p>
      <p className="mb-4">
        Let&apos;s take the following Engish verbs <CText d="e">to look</CText>, an intransitive verb, and <CText d="e">to see Y</CText>, a transitive verb. In English the subject of both verbs is marked marked by the nominative case. However the verb <CText d="e">  to see <ColB>Y</ColB></CText> requires a direct object (<ColB>Y</ColB>), while the verb <CText d="e">to look</CText> is not able to take a direct object. This amounts to that one can say <CText d="e"><ColR>You</ColR> see <ColB>me</ColB></CText>, but one canot say <CText d="e">*<ColR>You</ColR> look <ColB>me</ColB></CText>. 
        The asterisk (*) indicates that the sentence is ungrammatical. To make the sentence grammatical one has to use the preposition, like <CText d="e"><ColG>at</ColG></CText>, as in <CText d="e"><ColR>You</ColR> look <ColG>at me</ColG></CText>. 
        But then the object <CText d="e"><ColG>me</ColG></CText> is not a direct object, but an indirect one, as it is the object of the preposition and not the verb itself.
      </p>
      <p className="mb-4">
        In Circassian the same principles apply. The difference is that intransitive verbs mark the subject with the absolutive, while transitive verbs mark the subject with the ergative case and direct object is marked with the absolutive case. The following examples will show the difference between the two cases.
      </p>
      <p className="mb-4">
        Let&apos;s take the following Circassian verbs <CText d="e">плъэн</CText> <TText>to look</TText> and <CText d="e">лъагъун</CText> <TText>to see <ColR>Y</ColR></TText>. 
        Except that the cases are different, they are exactly the same to their Englishcounterparts in regards to the direct object. 
        One can say <CText d="e"><ColB>уэ</ColB> <ColR>сэ</ColR> <ColR>сы</ColR><ColB>п</ColB>лъагъунщ</CText> <TText><ColB>You</ColB>&apos;ll see <ColR>me</ColR></TText>, as with the English equivalent one can only say <CText d="e"><ColR>уэ</ColR> <ColR>у</ColR>плэнщ</CText> <TText><ColR>You</ColR>&apos;ll look</TText>. 
        To add an object to <CText d="e">плъэн</CText>, one has to to use a preverb (Circassiasn equivalent of preposition), like <CText d="e"><ColG>те-</ColG></CText>, which results into the verb <CText d="e"><ColG>те</ColG>плъэн</CText>. 
        This allows to say <CText d="e"><ColR>уэ</ColR> <ColG>сэ</ColG> <ColR>у</ColR>къы<ColG>сте</ColG>плъэнщ</CText> <TText><ColR>You</ColR>&apos;ll look <ColG>down on me</ColG></TText>.
      </p>
      <p className="mb-4">
        One way to think about that is to think of ergative verbs as passivized verbs, only that in ergative languages the perceived meaning is not really passivized. In fact, many ergative languages arose from passive constructions.
        For example, if we take the phrase <CText d="e"><ColB>уэ</ColB> <ColR>сэ</ColR> <ColR>сы</ColR><ColB>п</ColB>лъагъунщ</CText> <TText><ColB>You</ColB>&apos;ll see <ColR>me</ColR></TText> and simply transform it the translation in our head to <TText><ColR>I</ColR>&apos;ll be seen <ColB>by you</ColB></TText>. 
        In that analogy <TText><ColR>I</ColR></TText> is the absolutive case, while <TText><ColB>by you</ColB></TText> in the ergative case.
      </p>
    </section>
  );
}

export default function VerbPage() {
  return (
    <GrammarBookContainer>
      <h1 className="mb-4 text-3xl font-bold">Verbs</h1>
      <SectionErgativity />.
    </GrammarBookContainer>
  );
}
