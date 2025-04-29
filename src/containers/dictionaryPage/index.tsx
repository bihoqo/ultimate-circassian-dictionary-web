import React from "react";
import { USED_DICTS } from "~/constants/dicts";
import Image from "next/image";
import SearchContainer from "~/containers/header/searchContainer";
import ContainerDiv from "../../components/containerDiv";

export default function DictionaryShowContainer() {
  return (
    <div className="w-full">
      <Content />
    </div>
  );
}

function SortingAreaThing({
  title,
  options,
  selected,
  setSelected,
}: {
  title: string;
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
      >
        {options.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

function ScrollableContainer() {
  const [selectedFromLang, setSelectedFromLang] = React.useState("All");
  const [selectedToLang, setSelectedToLang] = React.useState("All");
  const [sortMethod, setSortMethod] = React.useState("Alphabetical");

  const fromLangOptions = React.useMemo(() => {
    const langs = Array.from(new Set(USED_DICTS.map((d) => d.fromLang)));
    return ["All", ...langs.sort()];
  }, []);

  const toLangOptions = React.useMemo(() => {
    const langs = Array.from(new Set(USED_DICTS.map((d) => d.toLang)));
    return ["All", ...langs.sort()];
  }, []);

  const filteredDicts = React.useMemo(() => {
    let dicts = [...USED_DICTS];

    if (selectedFromLang !== "All") {
      dicts = dicts.filter((d) => d.fromLang === selectedFromLang);
    }
    if (selectedToLang !== "All") {
      dicts = dicts.filter((d) => d.toLang === selectedToLang);
    }

    if (sortMethod === "Alphabetical") {
      dicts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortMethod === "Entry Count") {
      dicts.sort((a, b) => b.count - a.count);
    }

    return dicts;
  }, [selectedFromLang, selectedToLang, sortMethod]);

  return (
    <div className="mx-auto max-h-screen w-11/12 overflow-y-auto rounded-2xl bg-white p-6 shadow">
      {/* Filters */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex gap-4">
          <SortingAreaThing
            title={"Source Language"}
            options={fromLangOptions}
            selected={selectedFromLang}
            setSelected={setSelectedFromLang}
          />
          <SortingAreaThing
            title={"Target Language"}
            options={toLangOptions}
            selected={selectedFromLang}
            setSelected={setSelectedToLang}
          />
          <SortingAreaThing
            title={"Sort by"}
            options={["Alphabetical", "Entry Count"]}
            selected={sortMethod}
            setSelected={setSortMethod}
          />
        </div>
        <p className="text-sm text-gray-500">
          Showing {filteredDicts.length} result{filteredDicts.length !== 1 && "s"}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDicts.map((dict, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-yellow-300 hover:shadow-md"
          >
            <div>
              <h2 className="text-base font-bold text-gray-800 transition group-hover:text-yellow-600">
                {dict.title}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                <span className="font-semibold">{dict.fromLang}</span>
                <span className="mx-1">→</span>
                <span className="font-semibold">{dict.toLang}</span>
                {"  "}
                Entries: <span className="font-semibold">{dict.count}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DictionaryListingContainer() {
  return (
    <section className="my-16">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-gray-800">
        Dictionaries
      </h2>
      <p className="mb-8 text-center text-sm text-gray-500">
        Supported: Kabardian (Easter Circassian), Adyghe (Western Circassian), English, Arabic,
        Turkish and Russian
      </p>
      <ScrollableContainer />
    </section>
  );
}

function EntryText() {
  return (
    <section className="mx-auto mb-10 max-w-3xl text-center md:text-left">
      <p className="text-lg leading-relaxed text-gray-700">
        Welcome to our dedicated platform for preserving the Circassian language! Our mission is to
        keep this rich linguistic heritage alive by offering access to over 30 comprehensive
        dictionaries for translations between Circassian and major languages including Russian,
        English, Arabic, and Turkish.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        Our collection spans both Western and Eastern Circassian, enabling translations to and from
        Turkish, English, Russian, and Arabic. We aim to assist Circassians worldwide in
        understanding advanced texts like newspapers, Nart Saga stories, and more.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        Explore our website and join us in our mission to preserve the beauty of Circassian for
        generations to come.
      </p>
    </section>
  );
}
export function Content() {
  return (
    <ContainerDiv>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src="/fav/icon-1042x1042.png"
          width={200}
          height={200}
          alt="logo"
          className="rounded-xl"
        />
      </div>

      <EntryText />
      {/* HERO SECTION */}
      <section className="my-10 rounded-3xl bg-gradient-to-br from-yellow-200 to-yellow-100 p-10 text-center shadow-xl">
        <h1 className="text-4xl font-extrabold">Dictionary</h1>
        <p className="mt-4 text-lg">
          30+ bilingual dictionaries bridging Circassian with English, Russian, Arabic & Turkish.
        </p>
        <SearchContainer showOnMobile />
      </section>
      <DictionaryListingContainer />
    </ContainerDiv>
  );
}
