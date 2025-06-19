import React, { useMemo, useState } from "react";
import { SupportedLang, WordDefinitionsResults } from "~/interfaces";
import parse from "html-react-parser";
import { HiChevronDown } from "react-icons/hi";
import { cn } from "~/utils/classNames";
import { useQuery } from "@tanstack/react-query";
import { fetchExactWordDefinitions } from "~/requests";
import { addToWordHistoryCache, findInWordHistoryCache } from "~/cache/wordHistory";

// --- constants ---
const QUERY_CACHE_TIME = 60000;

export default function DefinitionsContainer({ wordSpelling }: { wordSpelling: string }) {
  const [selectedFromTab, setSelectedFromTab] = useState<SupportedLang | "All">("All");
  const [selectedToTab, setSelectedToTab] = useState<SupportedLang | "All">("All");

  const {
    data: allDefResults = [] as WordDefinitionsResults[],
    isLoading: isWordDefinitionsLoading,
    isError: isWordDefinitionsErrored,
  } = useQuery({
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    retry: 1,
    queryKey: ["wordDefinitions", wordSpelling],
    queryFn: async (): Promise<WordDefinitionsResults[]> => {
      if (!wordSpelling || wordSpelling.trim() === "") {
        return [];
      }
      const foundResults = findInWordHistoryCache(wordSpelling);
      if (foundResults) {
        return foundResults;
      }

      const wordObjectRes = await fetchExactWordDefinitions(wordSpelling);
      if (wordObjectRes.isErr()) {
        console.error(`Failed to find word definitions for ${wordSpelling}`);
        throw new Error(`Failed to find word definitions for ${wordSpelling}`);
      }
      addToWordHistoryCache(wordObjectRes.value);
      return wordObjectRes.value;
    },
  });

  const uniqueFromLangs = useMemo(() => {
    const allLangs = new Set<SupportedLang>();
    allDefResults.forEach((wd) => {
      wd.fromLangs.forEach((lang) => allLangs.add(lang));
    });
    return Array.from(allLangs);
  }, [allDefResults]);

  const uniqueToLangs = useMemo(() => {
    const allLangs = new Set<SupportedLang>();
    allDefResults.forEach((wd) => {
      wd.toLangs.forEach((lang) => allLangs.add(lang));
    });
    return Array.from(allLangs);
  }, [allDefResults]);

  const defResultsAfterFilter = useMemo(() => {
    return allDefResults.filter((wd) => {
      const fromLangs = wd.fromLangs;
      const toLangs = wd.toLangs;
      return (
        (selectedFromTab === "All" || fromLangs.includes(selectedFromTab)) &&
        (selectedToTab === "All" || toLangs.includes(selectedToTab))
      );
    });
  }, [allDefResults, selectedFromTab, selectedToTab]);

  if (isWordDefinitionsLoading) {
    return (
      <div className="flex size-full items-center justify-center">
        <div className="flex items-center justify-center p-4">
          <div className="size-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (isWordDefinitionsErrored) {
    return (
      <div className="mt-4 flex size-full items-center justify-center">
        <p className="text-red text-3xl">
          Failed to load word &apos;{wordSpelling}&apos; definitions. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      {/* Word spelling and total results */}
      <div className="flex w-full flex-col items-center px-4 text-center">
        <h1
          className={cn(
            "font-black text-cyan-800",
            "3xl:text-7xl text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
          )}
        >
          {wordSpelling}
        </h1>
      </div>
      <>
        {/* Filter buttons */}
        <ResultFilters
          selectedFromTab={selectedFromTab}
          selectedToTab={selectedToTab}
          setSelectedFromTab={setSelectedFromTab}
          setSelectedToTab={setSelectedToTab}
          uniqueFromLangs={uniqueFromLangs}
          uniqueToLangs={uniqueToLangs}
        />
        <div
          className={cn(
            "w-f mt-0 text-center font-black text-cyan-800 sm:mt-3",
            "3xl:text-3xl text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",
          )}
        >
          {allDefResults.length === defResultsAfterFilter.length ? (
            <span>({allDefResults.length} results)</span>
          ) : (
            <span>
              ({defResultsAfterFilter.length} out of {allDefResults.length} results)
            </span>
          )}
        </div>
      </>

      {/* Definitions */}
      <DefinitionsBox wordDefinitions={defResultsAfterFilter} />
    </div>
  );
}

function DefinitionsBox({ wordDefinitions }: { wordDefinitions: WordDefinitionsResults[] }) {
  const [definitionVisible, setDefinitionVisible] = useState<boolean[]>(() =>
    Array(wordDefinitions.length).fill(true),
  );

  const toggleDefinitionVisibility = (index: number) => {
    setDefinitionVisible((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="mt-8 space-y-6 px-4">
      {wordDefinitions.map((wd, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <button
            onClick={() => toggleDefinitionVisibility(idx)}
            className="flex w-full items-center justify-between rounded-t-2xl bg-yellow-800 px-5 py-4 text-left text-lg font-semibold text-gray-800"
          >
            <div className="flex flex-col">
              <span className="text-base font-bold text-black">{wd.title}</span>
              <DictionaryFromToLanguageBadge fromLangs={wd.fromLangs} toLangs={wd.toLangs} />
            </div>
            <HiChevronDown
              className={cn(
                "h-6 w-6 transform transition-transform duration-300",
                definitionVisible[idx] ? "rotate-180" : "rotate-0",
              )}
            />
          </button>
          {definitionVisible[idx] && (
            <div className="rounded-b-2xl bg-yellow-100 px-6 py-5 text-base leading-relaxed text-gray-800">
              {parse(wd.html)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
interface ResultFiltersProps {
  selectedFromTab: SupportedLang | "All";
  selectedToTab: SupportedLang | "All";
  setSelectedFromTab: (lang: SupportedLang | "All") => void;
  setSelectedToTab: (lang: SupportedLang | "All") => void;
  uniqueFromLangs: SupportedLang[];
  uniqueToLangs: SupportedLang[];
}

function DictionaryFromToLanguageBadge({
  fromLangs,
  toLangs,
}: {
  fromLangs: SupportedLang[];
  toLangs: SupportedLang[];
}) {
  return (
    <span className="text-sm text-blue-500">
      {fromLangs.join(", ")} → {toLangs.join(", ")}
    </span>
  );
}

function LanguageButton({
  lang,
  selectedTab,
  setSelectedTab,
}: {
  lang: string;
  selectedTab: SupportedLang | "All";
  setSelectedTab: (lang: SupportedLang | "All") => void;
}) {
  return (
    <button
      key={lang}
      className={cn(
        "shrink-0 rounded-full border px-3 py-1 text-sm font-medium transition",
        selectedTab === lang
          ? "border-blue-600 bg-blue-500 text-white"
          : "border-blue-300 bg-white text-blue-600 hover:bg-blue-100",
      )}
      onClick={() => setSelectedTab(lang as any)}
    >
      {lang}
    </button>
  );
}

function LangComponent({
  text,
  uniqueLangs,
  selectedTab,
  setSelectedTab,
}: {
  text: string;
  uniqueLangs: SupportedLang[];
  selectedTab: SupportedLang | "All";
  setSelectedTab: (lang: SupportedLang | "All") => void;
}) {
  return (
    <div className="w-full sm:w-auto">
      <label className="mb-1 block text-sm font-semibold text-gray-600">{text}</label>
      <div className="flex gap-2 overflow-x-auto py-1 whitespace-nowrap">
        {["All", ...uniqueLangs.sort()].map((lang) => (
          <LanguageButton lang={lang} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        ))}
      </div>
    </div>
  );
}
function ResultFilters({
  selectedFromTab,
  selectedToTab,
  setSelectedToTab,
  setSelectedFromTab,
  uniqueFromLangs,
  uniqueToLangs,
}: ResultFiltersProps) {
  return (
    <div className="mt-4 flex w-full flex-row items-center justify-between gap-4 px-4">
      <LangComponent
        text={"From Language"}
        uniqueLangs={uniqueFromLangs}
        selectedTab={selectedFromTab}
        setSelectedTab={setSelectedFromTab}
      />
      <LangComponent
        text={"To Language"}
        uniqueLangs={uniqueToLangs}
        selectedTab={selectedToTab}
        setSelectedTab={setSelectedToTab}
      />
    </div>
  );
}
