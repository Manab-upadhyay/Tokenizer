import { useEffect, useState } from "react";
import { startMockTokenStream } from "../lib/mockStream";

export function useTokenStream(initialTokens: any[]) {
  const [tokens, setTokens] = useState<any[]>(initialTokens);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate stream warm-up
    const timeout = setTimeout(() => {
      setTokens(initialTokens);
      setIsLoading(false);

      startMockTokenStream(tokens, setTokens);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return { tokens, isLoading };
}
