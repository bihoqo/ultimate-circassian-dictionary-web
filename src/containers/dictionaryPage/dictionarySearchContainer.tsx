// External
import React, { useState, useEffect, useRef } from "react";
import { FaFilter, FaSearch, FaTimesCircle } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Result } from "neverthrow";

// Utility
import { Autocomplete } from "~/interfaces";
import { cn } from "~/utils/classNames";
import SearchFilterDialog from "~/components/searchFilterModal";
import KeyboardWrapper from "~/components/keyboardWrapper";
import { regularWordToSafeWord } from "~/utils/wordFormatting";
import useWindowSize from "~/hooks/useWindowDimensions";
import { replaceStickLettersToPalochka } from "~/utils/wordFormatting";
import { containsOnlyEnglishLetters } from "~/utils/lang";

import {
  fetchWordAutocompletes,
  fetchWordAutocompletesThatContains,
  fetchEnglishWordAutocompletesWithVerbs,
} from "~/requests";

import {
  findAllAutocompletesInWordHistoryCache,
  findAutocompletesInWordHistoryCache,
  removeFromWordHistoryCache,
} from "~/cache/wordHistory";
import { useDebounce } from "use-debounce";

function CachedAutocompletedSearchElement({
  word,
  searchInputValAdjusted,
  onWordSelection,
  wordDeleteClickHandler,
}: {
  word: string;
  searchInputValAdjusted: string;
  onWordSelection: (word: string) => void;
  wordDeleteClickHandler: (word: string) => void;
}): React.JSX.Element {
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
        onClick={() => wordDeleteClickHandler(word)}
      >
        Delete
      </button>
      <button
        className="visible text-neutral-800 hover:text-neutral-600/50 hover:underline sm:hidden"
        onClick={() => wordDeleteClickHandler(word)}
      >
        <FaTimesCircle className="opacity-80" size={20} color="#757575" />{" "}
      </button>
    </div>
  );
}

function AutocompletedSearchElement({
  word,
  searchInputValAdjusted,
  onWordSelection,
}: {
  word: Autocomplete;
  searchInputValAdjusted: string;
  onWordSelection: (word: string) => void;
}): React.JSX.Element {
  const index = word.key.toLowerCase().indexOf(searchInputValAdjusted.toLowerCase());
  const before = word.key.slice(0, index);
  const bold = word.key.slice(index, index + searchInputValAdjusted.length);
  const after = word.key.slice(index + searchInputValAdjusted.length);

  return (
    <button
      className={cn("w-full rounded-md p-2 text-left font-medium hover:bg-gray-100")}
      key={word.key}
      onClick={() => onWordSelection(word.key)}
    >
      <div className="flex flex-row items-center justify-start gap-1 sm:gap-2">
        <span className="mt-1 text-[8px] sm:text-xs md:text-base">
          [{word.fromLangs.join(", ")}]
        </span>
        <span className="3xl:text-3xl 4xl:text-4xl text-lg xl:text-xl 2xl:text-2xl">
          {before}
          <span className="font-bold">{bold}</span>
          {after}
        </span>
      </div>
    </button>
  );
}

function useAutocompleteQuery(
  searchInput: string,
  dropdownVisible: boolean,
): UseQueryResult<Autocomplete[], Error> {
  return useQuery({
    staleTime: 60000,
    gcTime: 60000,
    queryKey: ["autocompleteWords", searchInput, dropdownVisible],
    queryFn: async (): Promise<Autocomplete[]> => {
      if (!searchInput || !dropdownVisible) {
        return [];
      }

      let res: Result<Autocomplete[], string>;
      if (4 <= searchInput.length) {
        res = await fetchWordAutocompletesThatContains(searchInput);
      } else if (containsOnlyEnglishLetters(searchInput)) {
        res = await fetchEnglishWordAutocompletesWithVerbs(searchInput);
      } else {
        res = await fetchWordAutocompletes(searchInput);
      }

      if (res.isErr()) {
        return [];
      }

      return res.value;
    },
  });
}

function useCachedAutocompletesQuery(
  searchInput: string,
  dropdownVisible: boolean,
): UseQueryResult<string[], Error> {
  return useQuery({
    staleTime: 60000,
    gcTime: 60000,
    queryKey: ["cachedAutocompletesList", searchInput],
    queryFn: async (): Promise<string[]> => {
      if (!dropdownVisible) {
        return [];
      }
      if (searchInput.trim() === "") {
        return findAllAutocompletesInWordHistoryCache();
      }
      return findAutocompletesInWordHistoryCache(searchInput).map((w) => {
        return replaceStickLettersToPalochka(w);
      });
    },
  });
}

interface AutocompleteDropdownProps {
  searchInputValue: string;
  onWordSelection: (word: string) => void;
  dropdownVisible: boolean;
  setDropdownVisible: (visible: boolean) => void;
}

const SIZE_STYLE = cn("sm:w-full w-11/12");

function AutocompleteDropdown({
  searchInputValue,
  onWordSelection,
  dropdownVisible,
  setDropdownVisible,
}: AutocompleteDropdownProps) {
  const [debouncedSearchInputValue] = useDebounce(searchInputValue, 500);
  const searchInputValAdjusted = replaceStickLettersToPalochka(debouncedSearchInputValue);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data: list = [], isLoading: isListLoading } = useAutocompleteQuery(
    searchInputValAdjusted,
    dropdownVisible,
  );

  const { data: cachedList = [], refetch: refetchCachedList } = useCachedAutocompletesQuery(
    searchInputValAdjusted,
    dropdownVisible,
  );

  function cachedWordDeleteClickHandler(word: string) {
    removeFromWordHistoryCache(word);
    refetchCachedList();
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

  if (searchInputValAdjusted.trim() === "" && cachedList.length === 0) {
    return null;
  }

  if (isListLoading) {
    return (
      <div
        ref={dropdownRef}
        className={cn(
          "absolute top-[80px] left-1/2 flex max-h-80 -translate-x-1/2 transform flex-col items-center justify-center gap-2 overflow-y-auto rounded-b-[16px] bg-white shadow-lg",
          SIZE_STYLE,
        )}
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (list.length === 0 && cachedList.length === 0) {
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
        "scrollbar-gray absolute top-[80px] left-2/4 flex w-screen -translate-x-1/2 transform flex-col items-center justify-start gap-2 rounded-b-[16px] bg-white shadow-lg sm:left-1/2",
        "6xl:max-h-[1440px] 5xl:max-h-[1200px] 3xl:max-h-[900px] 4xl:max-h-[1024px] max-h-[600px] md:max-h-[600px] lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px]",
        "w-full overflow-x-hidden overflow-y-auto break-words text-ellipsis whitespace-normal",
        "p-0 sm:p-1 md:p-2 lg:p-4",
        SIZE_STYLE,
      )}
    >
      <div className="w-full border-b-2 border-solid border-[#0049d7] px-2 py-4 text-left text-lg font-bold">
        Definitions
      </div>
      {cachedList
        .sort((a, b) => sortingFunc(a, b, (item) => item, searchInputValAdjusted))
        .map((word) => {
          return (
            <CachedAutocompletedSearchElement
              key={word}
              word={word}
              searchInputValAdjusted={searchInputValAdjusted}
              onWordSelection={onWordSelection}
              wordDeleteClickHandler={cachedWordDeleteClickHandler}
            />
          );
        })}
      {list
        .filter((a) => {
          return !cachedList.includes(a.key);
        })
        .sort((a: Autocomplete, b: Autocomplete) =>
          sortingFunc(a, b, (item: Autocomplete) => item.key, searchInputValAdjusted),
        )
        .map((word) => {
          return (
            <AutocompletedSearchElement
              key={word.key}
              word={word}
              searchInputValAdjusted={searchInputValAdjusted}
              onWordSelection={onWordSelection}
            />
          );
        })}
    </div>
  );

  function sortingFunc<T>(a: T, b: T, getString: (item: T) => string, searchInput: string): number {
    // Prioritize words that start with searchInput
    const aStartsWith: boolean = getString(a).toLowerCase().startsWith(searchInput.toLowerCase());
    const bStartsWith: boolean = getString(b).toLowerCase().startsWith(searchInput.toLowerCase());

    if (aStartsWith && !bStartsWith) {
      return -1;
    }
    if (!aStartsWith && bStartsWith) {
      return 1;
    }

    // If both or neither start with searchInput, sort alphabetically
    return getString(a).localeCompare(getString(b));
  }
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="size-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
    </div>
  );
}

export default function DictionarySearchContainer({ showOnMobile }: { showOnMobile: boolean }) {
  const { width } = useWindowSize();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [filterDialogVisible, setFilterDialogVisible] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams<{ word: string }>();

  function clickWordHandler(word: string) {
    const safeWord = regularWordToSafeWord(word);
    setInputValue("");
    setDropdownVisible(false);

    if (params && "word" in params && params.word === safeWord) {
      console.log("Word already in URL");
      return;
    }

    router.push(`/dictionary/${safeWord}`);
  }

  function keyboardSearchBtnHandler() {
    if (inputValue.length === 0) {
      return;
    }
    searchInputRef.current?.focus();
  }

  if (!showOnMobile && width < 640) {
    return null;
  }
  if (showOnMobile && width < 640) {
    return (
      <div className="z-2 mx-auto flex w-11/12 flex-col">
        <div className={cn("flex flex-row items-center justify-center")}>
          {/* Search Input */}
          <SearchInput
            searchInputRef={searchInputRef}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setDropdownVisible={setDropdownVisible}
            clickWordHandler={clickWordHandler}
            dropdownVisible={dropdownVisible}
          />

          {/* Search Filter */}
          <SearchFilter
            filterDialogVisible={filterDialogVisible}
            openFilterDialog={() => setFilterDialogVisible(true)}
            closeFilterDialog={() => setFilterDialogVisible(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="z-2 mx-auto flex w-11/12 flex-col">
      <div className={cn("flex flex-row items-center justify-center")}>
        <SearchInput
          searchInputRef={searchInputRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setDropdownVisible={setDropdownVisible}
          clickWordHandler={clickWordHandler}
          dropdownVisible={dropdownVisible}
        />
        {/* Search Filter */}
        <SearchFilter
          filterDialogVisible={filterDialogVisible}
          openFilterDialog={() => setFilterDialogVisible(true)}
          closeFilterDialog={() => setFilterDialogVisible(false)}
        />
      </div>
      {/* Search Keyboard */}
      <div className="mx-auto mt-4 flex w-11/12 flex-row items-center justify-center xl:w-1/2">
        <KeyboardWrapper
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSearchClick={keyboardSearchBtnHandler}
        />
      </div>
    </div>
  );
}

function SearchInput({
  searchInputRef,
  inputValue,
  setInputValue,
  setDropdownVisible,
  dropdownVisible,
  clickWordHandler,
}: {
  inputValue: string;
  setInputValue: (v: string) => void;
  setDropdownVisible: (value: boolean) => void;
  dropdownVisible: boolean;
  clickWordHandler: (word: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { width } = useWindowSize();
  return (
    <div className="relative flex w-full flex-col">
      <div
        className={cn(
          "flex w-full items-center justify-center bg-white",
          "border border-solid",
          "xs:px-2 rounded-md px-1 py-3 font-medium text-black shadow-sm sm:px-4",
          "3xl:text-5xl text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
          inputValue.length > 0
            ? "border-2 border-[#b0e0b5]"
            : "border-[#cdcdcd] hover:border-[#b0e0b5]/60",
        )}
      >
        <FaSearch className="opacity-80" size={width < 400 ? 16 : 24} color="#155e75" />
        <input
          ref={searchInputRef}
          className="flex-grow bg-transparent px-1 font-medium text-black outline-none sm:px-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setDropdownVisible(true)}
          placeholder="Search, e.g. boy or к1алэ"
        />
        <button
          className={cn("flex items-center hover:opacity-80", { hidden: !inputValue })}
          onClick={() => setInputValue("")}
        >
          <FaTimesCircle className="opacity-80" size={24} color="#757575" />
        </button>
      </div>
      {dropdownVisible && (
        <AutocompleteDropdown
          searchInputValue={inputValue}
          onWordSelection={clickWordHandler}
          dropdownVisible={dropdownVisible}
          setDropdownVisible={setDropdownVisible}
        />
      )}
    </div>
  );
}

function SearchFilter({
  filterDialogVisible,
  openFilterDialog,
  closeFilterDialog,
}: {
  filterDialogVisible: boolean;
  openFilterDialog: () => void;
  closeFilterDialog: () => void;
}) {
  return (
    <div className="relative">
      <button
        className={cn(
          "w-full items-center gap-1 px-4 py-2 font-bold text-[#3182ce] hover:text-[#3182ce]/50",
          "hidden md:flex",
        )}
        onClick={openFilterDialog}
      >
        <FaFilter className="3xl:text-5xl text-3xl xl:text-4xl 2xl:text-4xl" />
        <span className="3xl:text-2xl w-full text-base text-nowrap xl:text-lg 2xl:text-xl">
          Search Filter
        </span>
      </button>
      {filterDialogVisible && (
        <div className="absolute right-0 z-50 mt-2 w-[407px]">
          <SearchFilterDialog hide={closeFilterDialog} />
        </div>
      )}
    </div>
  );
}
