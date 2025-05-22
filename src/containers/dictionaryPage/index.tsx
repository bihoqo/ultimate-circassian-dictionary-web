import React from "react";
import { USED_DICTS } from "~/constants/dicts";
import Image from "next/image";
import SearchContainer from "~/containers/header/searchContainer";
import ContainerDiv from "../../components/containerDiv";

export default function DictionaryShowContainer() {
  return (
    <div>
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

function DictionaryListingContainer() {
  const [selectedFromLang, setSelectedFromLang] = React.useState("All");
  const [selectedToLang, setSelectedToLang] = React.useState("All");
  const [sortMethod, setSortMethod] = React.useState("Alphabetical");
  const [showDictionaries, setShowDictionaries] = React.useState(false);

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
    <section className="my-16">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-gray-800">
        Dictionaries
      </h2>

      <p className="mb-2 text-center text-sm text-gray-500">
        Supported: Kabardian (Eastern Circassian), Adyghe (Western Circassian), English, Arabic,
        Turkish and Russian
      </p>

      <div className="mb-6 flex justify-center">
        <button
          onClick={() => setShowDictionaries((prev) => !prev)}
          className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-800"
          aria-expanded={showDictionaries}
        >
          {showDictionaries ? "Hide dictionaries" : "Show dictionaries"}
          <svg
            className={`h-4 w-4 transform transition-transform ${
              showDictionaries ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Collapsible dictionary section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showDictionaries ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Filters */}
        <div className="mx-auto mb-6 flex w-10/12 flex-col justify-between gap-4 md:flex-row md:items-center">
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
              selected={selectedToLang}
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

        {/* Dictionary Cards */}
        <div className="mx-auto max-h-screen w-11/12 overflow-y-auto rounded-2xl bg-white p-6 shadow">
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
      </div>
    </section>
  );
}

function EntryText() {
  return (
    <section className="mx-auto mb-10 max-w-3xl text-center md:text-left">
      <p className="text-base text-gray-700">
        Welcome to our dedicated platform for preserving the Circassian language! Our mission is to
        keep this rich linguistic heritage alive by offering access to over 30 comprehensive
        dictionaries for translations between Circassian and major languages including Russian,
        English, Arabic, and Turkish.
      </p>
      <p className="mt-6 text-base text-gray-700">
        Our collection spans both Western and Eastern Circassian, enabling translations to and from
        Turkish, English, Russian, and Arabic. We aim to assist Circassians worldwide in
        understanding advanced texts like newspapers, Nart Saga stories, and more.
      </p>
      <p className="mt-6 text-base text-gray-700">
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
      <section className="my-10 rounded-3xl bg-gradient-to-br from-green-800 to-green-100 p-5 text-center shadow-xl">
        <h1 className="text-2xl font-bold">Dictionary</h1>
        <p className="mt-2 mb-4 text-base">
          30+ bilingual dictionaries bridging Circassian with English, Russian, Arabic & Turkish.
        </p>
        <SearchContainer showOnMobile />
      </section>
      <DictionaryListingContainer />
    </ContainerDiv>
  );
}
