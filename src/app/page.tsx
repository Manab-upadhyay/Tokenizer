"use client";

import TokenColumn from "./components/tokenColun";

import { useTokensApi } from "./hooks/useTokenStream";
import Navbar from "./components/navbar";

export default function Home() {
  const { newPairs, finalStretch, migrated, isLoading } = useTokensApi();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3  h-[calc(100vh-3rem)]">
          <TokenColumn
            title="New Pairs"
            tokens={newPairs}
            isLoading={isLoading}
          />
          <TokenColumn
            title="Final Stretch"
            tokens={finalStretch}
            isLoading={isLoading}
          />
          <TokenColumn
            title="Migrated"
            tokens={migrated}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
