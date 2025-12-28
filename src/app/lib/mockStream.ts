export function startMockTokenStream(
  tokens: any[],
  onUpdate: (updatedTokens: any[]) => void
) {
  const interval = setInterval(() => {
    const updated = tokens.map((token) => {
      // random deltas
      const volumeDelta = Math.random() * 5000;
      const txDelta = Math.floor(Math.random() * 10);
      const buyDelta = Math.random() * 5 - 2.5;
      const sellDelta = Math.random() * 5 - 2.5;

      return {
        ...token,
        volume: bumpMoney(token.volume, volumeDelta),
        txCount: token.txCount + txDelta,
        buyPercent: clamp(token.buyPercent + buyDelta),
        sellPercent: clamp(token.sellPercent + sellDelta),
        holdersChange: token.holdersChange + Math.floor(Math.random() * 3 - 1),
      };
    });

    onUpdate(updated);
  }, 1200);

  return () => clearInterval(interval);
}
const clamp = (v: number) => Math.max(0, Math.min(100, Math.round(v)));
const bumpMoney = (value: string, delta: number) => {
  const base = parseFloat(value.replace("$", "").replace("K", ""));
  const next = base + delta / 1000;
  return `$${next.toFixed(1)}K`;
};
