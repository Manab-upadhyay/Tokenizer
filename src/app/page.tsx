"use client";

import TokenColumn from "./components/tokenColun";
import {
  mockTokens,
  mockFinalStretchTokens,
  mockMigratedTokens,
} from "./data/mockData";
import { useTokenStream } from "./hooks/useTokenStream";
import Navbar from "./components/navbar";

export default function Home() {
  const { tokens, isLoading } = useTokenStream(mockTokens);
  const { tokens: finalStretchTokens, isLoading: finalLoading } =
    useTokenStream(mockFinalStretchTokens);
  const { tokens: migratedTokens, isLoading: migratedLoading } =
    useTokenStream(mockMigratedTokens);
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-3rem)]">
          <TokenColumn
            title="New Pairs"
            tokens={tokens}
            isLoading={isLoading}
          />
          <TokenColumn
            title="Final Stretch"
            tokens={finalStretchTokens}
            isLoading={finalLoading}
          />
          <TokenColumn
            title="Migrated"
            tokens={migratedTokens}
            isLoading={migratedLoading}
          />
        </div>
      </div>
    </div>
  );
}
