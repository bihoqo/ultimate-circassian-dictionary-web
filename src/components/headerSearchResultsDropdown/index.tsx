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

interface HeaderSearchResultsDropdownProps {
  searchInputValue: string;
  onWordSelection: (word: string) => void;
  dropdownVisible: boolean;
  setDropdownVisible: (visible: boolean) => void;
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
    staleTime: 60000,
    gcTime: 60000,
    queryKey: ["autocompleteWords", debouncedSearchInputValue, dropdownVisible],
    queryFn: async (): Promise<Autocomplete[]> => {
      if (!debouncedSearchInputValue || !dropdownVisible) {
        return [];
      }

      let res: Result<Autocomplete[], string>;
      if (4 <= debouncedSearchInputValue.length) {
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
    staleTime: 60000,
    gcTime: 60000,
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

  if (debouncedSearchInputValue.trim() === "" && cachedAutocompletesList.length === 0) {
    return null;
  }

  if (isAutocompletesListLoading) {
    return (
      <div
        ref={dropdownRef}
        className={cn(
          "absolute top-[80px] left-1/2 flex max-h-80 -translate-x-1/2 transform flex-col items-center justify-center gap-2 overflow-y-auto rounded-b-[16px] bg-white shadow-lg",
          "w-11/12 sm:w-full",
        )}
      >
        <div className="flex items-center justify-center p-4">
          <div className="size-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (autocompletesList.length === 0 && cachedAutocompletesList.length === 0) {
    return (
      <div
        ref={dropdownRef}
        className={cn(
          "absolute top-[80px] left-1/2 flex max-h-80 -translate-x-1/2 transform flex-col items-center justify-center overflow-y-auto rounded-b-[16px] bg-white py-4 shadow-lg",
          "w-11/12 sm:w-full",
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
        "scrollbar-gray absolute top-[80px] left-2/4 flex w-screen -translate-x-1/2 transform flex-col items-center justify-start gap-2 rounded-b-[16px] bg-white shadow-lg sm:left-1/2",
        "6xl:max-h-[900px] 5xl:max-h-[875px] 3xl:max-h-[825px] 4xl:max-h-[850px] max-h-[600px] md:max-h-[600px] lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px]",
        "w-full overflow-x-hidden overflow-y-auto break-words text-ellipsis whitespace-normal",
        "p-0 sm:p-1 md:p-2 lg:p-4",
        "w-full",
      )}
    >
      <div className="flex w-full items-center justify-between border-b-2 border-solid border-[#0049d7] px-2 py-4 text-left text-lg font-bold">
        <span>Definitions</span>
        <button className="font-bold text-blue-600" onClick={() => setDropdownVisible(false)}>
          Cancel
        </button>
      </div>
      {cachedAutocompletesList
        .sort((a, b) => {
          const searchInputValAdjusted = replaceStickLettersToPalochka(
            debouncedSearchInputValue.trim(),
          );
          // Prioritize words that start with debouncedSearchInputValue
          const aStartsWith = a.toLowerCase().startsWith(searchInputValAdjusted.toLowerCase());
          const bStartsWith = b.toLowerCase().startsWith(searchInputValAdjusted.toLowerCase());

          if (aStartsWith && !bStartsWith) {
            return -1;
          }
          if (!aStartsWith && bStartsWith) {
            return 1;
          }

          // If both or neither start with debouncedSearchInputValue, sort alphabetically
          return a.localeCompare(b);
        })
        .map((word) => {
          const searchInputValAdjusted = replaceStickLettersToPalochka(
            debouncedSearchInputValue.trim(),
          );
          const index = word.toLowerCase().indexOf(searchInputValAdjusted.toLowerCase());
          const before = word.slice(0, index);
          const bold = word.slice(index, index + searchInputValAdjusted.length);
          const after = word.slice(index + searchInputValAdjusted.length);

          return (
            <div key={word} className="flex w-full flex-row justify-between p-2 hover:bg-[#e7e7e7]">
              <button
                className={cn(
                  "w-full rounded-md text-left font-medium text-[#bb90f6]",
                  "3xl:text-3xl 4xl:text-4xl text-lg xl:text-xl 2xl:text-2xl",
                )}
                onClick={() => onWordSelection(word)}
              >
                <span>
                  {before}
                  <span className="font-bold">{bold}</span>
                  {after}
                </span>
              </button>
              <button
                className="hidden text-neutral-800 hover:text-neutral-600/50 hover:underline sm:flex"
                onClick={() => cachedWordDeleteClickHandler(word)}
              >
                Delete
              </button>
              <button
                className="visible text-neutral-800 hover:text-neutral-600/50 hover:underline sm:hidden"
                onClick={() => cachedWordDeleteClickHandler(word)}
              >
                <FaTimesCircle className="opacity-80" size={20} color="#757575" />{" "}
              </button>
            </div>
          );
        })}
      {autocompletesList
        .filter((a) => {
          return !cachedAutocompletesList.includes(a.key);
        })
        .sort((a, b) => {
          const searchInputValAdjusted = replaceStickLettersToPalochka(debouncedSearchInputValue);
          // Prioritize words that start with debouncedSearchInputValue
          const aStartsWith = a.key.toLowerCase().startsWith(searchInputValAdjusted.toLowerCase());
          const bStartsWith = b.key.toLowerCase().startsWith(searchInputValAdjusted.toLowerCase());

          if (aStartsWith && !bStartsWith) {
            return -1;
          }
          if (!aStartsWith && bStartsWith) {
            return 1;
          }

          // If both or neither start with debouncedSearchInputValue, sort alphabetically
          return a.key.localeCompare(b.key);
        })
        .map((word) => {
          return (
            <button
              className={cn(
                "w-full rounded-md p-2 text-left font-medium hover:bg-[#e7e7e7] hover:bg-gray-100",
              )}
              key={word.key}
              onClick={() => onWordSelection(word.key)}
            >
              <div className="flex flex-row items-center justify-start gap-1 sm:gap-2">
                <span className="mt-1 text-[8px] sm:text-xs md:text-base">
                  [{word.fromLangs.join(", ")}]
                </span>
                <span className="3xl:text-3xl 4xl:text-4xl text-lg xl:text-xl 2xl:text-2xl">
                  {word.key}
                </span>
              </div>
            </button>
          );
        })}
    </div>
  );
}
