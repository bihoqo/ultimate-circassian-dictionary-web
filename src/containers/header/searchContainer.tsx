import React from "react";
import { FaFilter, FaSearch, FaTimesCircle } from "react-icons/fa";

import { cn } from "~/utils/classNames";
import SearchFilterDialog from "~/components/searchFilterModal";
import HeaderSearchResultsDropdown from "~/components/headerSearchResultsDropdown";
import { useRouter, useParams } from "next/navigation";
import { regularWordToSafeWord } from "~/utils/wordFormatting";
import useWindowSize from "~/hooks/useWindowDimensions";
import KeyboardWrapper from "~/components/keyboardWrapper";

function useSearchLogic() {
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const [filterDialogVisible, setFilterDialogVisible] = React.useState(false);
  const router = useRouter();
  const params = useParams<{ word: string }>();

  const clickWordHandler = (word: string) => {
    const safeWord = regularWordToSafeWord(word);
    if (params?.word === safeWord) {
      return;
    }
    setInputValue("");
    setDropdownVisible(false);
    router.push(`/dictionary/${safeWord}`);
  };

  const keyboardSearchBtnHandler = () => {
    if (inputValue) {
      searchInputRef.current?.focus();
    }
  };

  return {
    inputValue,
    setInputValue,
    searchInputRef,
    dropdownVisible,
    setDropdownVisible,
    clickWordHandler,
    keyboardSearchBtnHandler,
    filterDialogVisible,
    openFilterDialog: () => setFilterDialogVisible(true),
    closeFilterDialog: () => setFilterDialogVisible(false),
  };
}

export default function SearchContainer({ showOnMobile }: { showOnMobile: boolean }) {
  const { width } = useWindowSize();
  const isMobile = width < 640;

  const {
    inputValue,
    setInputValue,
    searchInputRef,
    dropdownVisible,
    setDropdownVisible,
    clickWordHandler,
    keyboardSearchBtnHandler,
    filterDialogVisible,
    openFilterDialog,
    closeFilterDialog,
  } = useSearchLogic();

  if (!showOnMobile && isMobile) {
    return null;
  }

  return (
    <div className="z-10 mx-auto flex w-11/12 flex-col gap-4">
      <div className="flex w-full items-center justify-center gap-3">
        <SearchBar
          searchInputRef={searchInputRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setDropdownVisible={setDropdownVisible}
          dropdownVisible={dropdownVisible}
          clickWordHandler={clickWordHandler}
        />
        <SearchFilter
          filterDialogVisible={filterDialogVisible}
          openFilterDialog={openFilterDialog}
          closeFilterDialog={closeFilterDialog}
        />
      </div>

      {!isMobile && (
        <KeyboardWrapper
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSearchClick={keyboardSearchBtnHandler}
        />
      )}
    </div>
  );
}

function SearchBar({
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
  return (
    <div className="relative flex w-full flex-col">
      <div
        className={cn(
          "flex w-full items-center rounded-3xl border px-3 py-2 text-black shadow-sm",
          "bg-white transition-all focus-within:border-blue-400 hover:border-gray-400",
          inputValue ? "border-green-400" : "border-gray-300",
        )}
      >
        <FaSearch className="mr-2 text-xl text-teal-700 opacity-80" />
        <input
          ref={searchInputRef}
          className="flex-grow bg-transparent text-base font-medium placeholder-gray-400 focus:outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setDropdownVisible(true)}
          placeholder="Search, e.g. boy or к1алэ"
        />
        {inputValue && (
          <button
            className="ml-2 text-gray-500 transition hover:text-gray-700"
            onClick={() => setInputValue("")}
          >
            <FaTimesCircle size={20} />
          </button>
        )}
      </div>
      {dropdownVisible && (
        <HeaderSearchResultsDropdown
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
        className="hidden items-center gap-2 px-4 py-2 font-semibold text-blue-600 transition hover:text-blue-400 md:flex"
        onClick={openFilterDialog}
      >
        <FaFilter className="text-xl" />
        <span className="text-base">Search Filter</span>
      </button>
      {filterDialogVisible && (
        <div className="absolute right-0 z-50 mt-2 w-[400px]">
          <SearchFilterDialog hide={closeFilterDialog} />
        </div>
      )}
    </div>
  );
}
