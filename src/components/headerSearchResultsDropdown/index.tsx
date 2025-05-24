import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Result } from "neverthrow";
import { containsOnlyEnglishLetters } from "~/utils/lang";
import {
  fetchWordAutocompletes,
  fetchWordAutocompletesThatContains,
  fetchEnglishWordAutocompletesWithVerbs,
} from "~/requests";
import { cn } from "~/utils/classNames";
import {
  findAllAutocompletesInWordHistoryCache,
  findAutocompletesInWordHistoryCache,
  removeFromWordHistoryCache,
} from "~/cache/wordHistory";
import { Autocomplete } from "~/interfaces";
import { replaceStickLettersToPalochka } from "~/utils/wordFormatting";
import { FaTimesCircle } from "react-icons/fa";
import { useDebounce } from "use-debounce";

// --- Constants ---
const QUERY_CACHE_TIME = 60000; // 1 minute

interface HeaderSearchResultsDropdownProps {
  searchInputValue: string;
  onWordSelection: (word: string) => void;
  dropdownVisible: boolean;
  setDropdownVisible: (visible: boolean) => void;
}

const SIZE_STYLE = cn("sm:w-full w-11/12");

function CachedElement({
  word,
  debouncedSearchInputValue,
  onSelect,
  onDelete,
}: {
  word: string;
  debouncedSearchInputValue: string;
  onSelect: (word: string) => void;
  onDelete: (word: string) => void;
}) {
  const adjusted = replaceStickLettersToPalochka(debouncedSearchInputValue.trim()).toLowerCase();
  const index = word.toLowerCase().indexOf(adjusted);
  const before = word.slice(0, index);
  const bold = word.slice(index, index + adjusted.length);
  const after = word.slice(index + adjusted.length);

  return (
    <div
      key={word}
      className="relative w-full rounded-md bg-white p-2 shadow-sm transition-all hover:bg-gray-100"
    >
      <button
        className={"w-full text-left font-medium text-purple-600"}
        onClick={() => onSelect(word)}
      >
        <span>
          {before}
          <span className="font-bold">{bold}</span>
          {after}
        </span>
      </button>
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        onClick={() => onDelete(word)}
      >
        <FaTimesCircle className="opacity-80" size={20} color="#757575" />{" "}
      </button>
    </div>
  );
}
function LanguageBadge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600">
      [{text}]
    </span>
  );
}
function AutocompleteElement({
  word,
  onSelect,
}: {
  word: Autocomplete;
  onSelect: (word: string) => void;
}) {
  return (
    <button
      className={cn(
        "relative w-full rounded-md bg-white p-2 text-left shadow-sm transition-all hover:bg-gray-100",
      )}
      key={word.key}
      onClick={() => onSelect(word.key)}
    >
      <div className="flex items-center gap-3">
        <LanguageBadge text={word.fromLangs.join(", ")} />
        <span className="font-bold">{word.key}</span>
      </div>
    </button>
  );
}

function finderFunc<T extends { key: string } | string>(
  item: string,
  str_a: T,
  str_b: T,
  accessor: (a: T) => string,
) {
  const adjusted = replaceStickLettersToPalochka(item).toLowerCase();
  const aStartsWith = accessor(str_a).toLowerCase().startsWith(adjusted);
  const bStartsWith = accessor(str_b).toLowerCase().startsWith(adjusted);
  if (aStartsWith && !bStartsWith) {
    return -1;
  }
  if (!aStartsWith && bStartsWith) {
    return 1;
  }
  return accessor(str_a).localeCompare(accessor(str_b));
}
export default function HeaderSearchResultsDropdown({
  searchInputValue,
  onWordSelection,
  dropdownVisible,
  setDropdownVisible,
}: HeaderSearchResultsDropdownProps) {
  const [debouncedSearchInputValue] = useDebounce(searchInputValue, 500);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data: autocompletesList = [], isLoading: isAutocompletesListLoading } = useQuery({
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    queryKey: ["autocompleteWords", debouncedSearchInputValue, dropdownVisible],
    queryFn: async (): Promise<Autocomplete[]> => {
      if (!debouncedSearchInputValue || !dropdownVisible) {
        return [];
      }

      let res: Result<Autocomplete[], string>;
      if (debouncedSearchInputValue.length >= 4) {
        res = await fetchWordAutocompletesThatContains(debouncedSearchInputValue);
      } else if (containsOnlyEnglishLetters(debouncedSearchInputValue)) {
        res = await fetchEnglishWordAutocompletesWithVerbs(debouncedSearchInputValue);
      } else {
        res = await fetchWordAutocompletes(debouncedSearchInputValue);
      }

      if (res.isErr()) {
        return [];
      }

      return res.value;
    },
  });

  const { data: cachedAutocompletesList = [], refetch: refetchCachedAutocompletesList } = useQuery({
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    queryKey: ["cachedAutocompletesList", debouncedSearchInputValue, dropdownVisible],
    queryFn: async (): Promise<string[]> => {
      if (!dropdownVisible) {
        return [];
      }
      if (debouncedSearchInputValue.trim() === "") {
        return findAllAutocompletesInWordHistoryCache();
      }
      return findAutocompletesInWordHistoryCache(debouncedSearchInputValue).map((w) => {
        return replaceStickLettersToPalochka(w);
      });
    },
  });

  function cachedWordDeleteClickHandler(word: string) {
    removeFromWordHistoryCache(word);
    refetchCachedAutocompletesList();
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Keep dropdown open when clicking inside search input
        if (event.target instanceof HTMLElement && event.target.tagName === "INPUT") {
          return;
        }
        // Close dropdown if clicked outside
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setDropdownVisible]);
  // If the search input is empty and there are no cached autocompletes, return null
  if (debouncedSearchInputValue.trim() === "" && cachedAutocompletesList.length === 0) {
    return null;
  }
  // If loading, show a spinner
  if (isAutocompletesListLoading) {
    return (
      <div
        ref={dropdownRef}
        className={cn(
          "absolute top-[80px] left-1/2 flex max-h-80 -translate-x-1/2 transform flex-col items-center justify-center gap-2 overflow-y-auto rounded-b-[16px] bg-white shadow-lg",
          SIZE_STYLE,
        )}
      >
        <div className="flex items-center justify-center p-4">
          <div className="size-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
        </div>
      </div>
    );
  }
  // If there are no results in both lists, show a message
  if (autocompletesList.length === 0 && cachedAutocompletesList.length === 0) {
    return (
      <div
        ref={dropdownRef}
        className={cn(
          "absolute top-[80px] left-1/2 flex max-h-80 -translate-x-1/2 transform flex-col items-center justify-center overflow-y-auto rounded-b-[16px] bg-white py-4 shadow-lg",
          SIZE_STYLE,
        )}
      >
        <p className="text-center text-xl font-semibold text-black md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
          No results found
        </p>
        <p className="text-center text-xs font-semibold text-black/70 md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
          (Make sure you selected the right filters before searching)
        </p>
      </div>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className={cn(
        "animate-fadeIn absolute top-[60px] left-1/2 z-50 -translate-x-1/2 transform rounded-xl bg-white shadow-xl transition-all duration-200 ease-out",
        "max-h-[500px] w-full max-w-xl overflow-y-auto",
        "p-2 sm:p-3 md:p-4",
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 text-lg font-semibold text-gray-800">
        <span>Definitions</span>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => setDropdownVisible(false)}
        >
          Cancel
        </button>
      </div>
      {cachedAutocompletesList
        .sort((a, b) => finderFunc(debouncedSearchInputValue.trim(), a, b, (a) => a))
        .map((word) => (
          <CachedElement
            word={word}
            debouncedSearchInputValue={debouncedSearchInputValue}
            onDelete={cachedWordDeleteClickHandler}
            onSelect={onWordSelection}
          />
        ))}
      {autocompletesList
        .filter((a) => !cachedAutocompletesList.includes(a.key))
        .sort((a, b) => finderFunc(debouncedSearchInputValue.trim(), a, b, (a) => a.key))
        .map((word) => (
          <AutocompleteElement word={word} onSelect={onWordSelection} />
        ))}
    </div>
  );
}
