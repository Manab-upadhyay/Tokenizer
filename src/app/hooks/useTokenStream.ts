// hooks/useTokensApi.ts
import { useEffect, useState } from "react";

export function useTokensApi() {
  const [newPairs, setNewPairs] = useState<any[]>([]);
  const [finalStretch, setFinalStretch] = useState<any[]>([]);
  const [migrated, setMigrated] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://tokenizer-lake.vercel.app/api/tokendata"
      );
      const data = await res.json();

      // 🔒 SAFETY (important)
      setNewPairs(Array.isArray(data.newPairs) ? data.newPairs : []);
      setFinalStretch(
        Array.isArray(data.finalStretch) ? data.finalStretch : []
      );
      setMigrated(Array.isArray(data.migrated) ? data.migrated : []);

      setIsLoading(false);
    };

    fetchData();
    const id = setInterval(fetchData, 1200);

    return () => clearInterval(id);
  }, []);

  return { newPairs, finalStretch, migrated, isLoading };
}
