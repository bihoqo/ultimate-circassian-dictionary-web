import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  findAllAutocompletesInWordHistoryCache,
  removeFromWordHistoryCache,
} from "~/cache/wordHistory";
import { cn } from "~/utils/classNames";
import { regularWordToSafeWord } from "~/utils/wordFormatting";
import { useParams, useRouter } from "next/navigation";
import { FaTimesCircle } from "react-icons/fa";

export default function WordHistoryContainer() {
  const router = useRouter();
  const params = useParams<{ word: string }>();
  const { data: myWordHistory = [] as string[], refetch: refetchMyWordHistory } = useQuery({
    staleTime: 60000,
    gcTime: 60000,
    retry: 1,
    queryKey: ["myWordHistory"],
    queryFn: async (): Promise<string[]> => {
      return findAllAutocompletesInWordHistoryCache();
    },
  });

  function clickWordHandler(word: string) {
    const safeWord = regularWordToSafeWord(word);
    if (params?.word === safeWord) {
      return;
    }
    router.push(`/dictionary/${safeWord}`);
  }

  function onDeleteClick(event: React.MouseEvent<HTMLButtonElement>, word: string) {
    event.stopPropagation();
    removeFromWordHistoryCache(word);
    refetchMyWordHistory();
  }

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl shadow-md">
      <div className="bg-blue-100 px-4 py-3 text-xl font-semibold text-gray-800">
        Search History
      </div>

      <div className="bg-white px-4 py-3 text-gray-700">
        {myWordHistory.length === 0 ? (
          <div className="py-6 text-center text-gray-500">
            <p className="text-sm italic">No search history yet. Start exploring!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-y-2">
            {myWordHistory.map((word, index) => (
              <div
                key={index}
                className="group flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-gray-100"
              >
                <span
                  className="cursor-pointer truncate text-base hover:underline"
                  onClick={() => clickWordHandler(word)}
                >
                  {word}
                </span>
                <button
                  onClick={(event) => onDeleteClick(event, word)}
                  className="flex items-center text-gray-400 opacity-100 transition-opacity hover:text-red-500 md:opacity-0 md:group-hover:opacity-100"
                >
                  <FaTimesCircle size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
