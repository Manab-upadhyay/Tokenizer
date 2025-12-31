"use client";
import TokenCard from "./tokenCard";
import { SearchBar } from "./searchBar";
import { getTokenScore } from "../utils/getTokenScore";
import { useState, useMemo, useEffect } from "react";
import TokenDetailPanel from "./modal";
import ModalOverlay from "./modalOverlay";
import TokenColumnSkeleton from "./tokenColumnSkeleton";

interface TokenColumnProps {
  title: string;
  tokens: any[];
  isLoading: boolean;
}

export default function TokenColumn({
  title,
  tokens,
  isLoading,
}: TokenColumnProps) {
  const [query, setQuery] = useState("");
  const [selectedToken, setselectedToken] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      setQuery("");
    }
  }, [isLoading]);

  function handleSearch(value: string) {
    setQuery(value.trim().toLowerCase());
  }

  const filteredAndSortedTokens = useMemo(() => {
    const filtered = query
      ? tokens.filter(
          (token) =>
            token.name.toLowerCase().includes(query) ||
            token.ticker.toLowerCase().includes(query)
        )
      : tokens;

    return [...filtered].sort((a, b) => {
      const diff = getTokenScore(b, title) - getTokenScore(a, title);
      return diff !== 0 ? diff : a.address.localeCompare(b.address);
    });
  }, [tokens, query, title]);

  return (
    <>
      <div className="flex flex-col rounded-xl border border-white/5 bg-[#020617] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <h2 className="text-sm font-semibold">{title}</h2>
          <SearchBar handleChange={handleSearch} />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col  dark-scrollbar">
          {isLoading ? (
            <TokenColumnSkeleton />
          ) : (
            filteredAndSortedTokens.map((token: any) => (
              <TokenCard
                key={token.address}
                token={token}
                openModal={() => setselectedToken(token)}
              />
            ))
          )}
        </div>
      </div>
      {selectedToken && (
        <ModalOverlay onClose={() => setselectedToken(null)}>
          <TokenDetailPanel token={selectedToken} />
        </ModalOverlay>
      )}
    </>
  );
}
