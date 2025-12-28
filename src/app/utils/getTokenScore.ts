const parseMoney = (value: string) => {
  if (!value) return 0;

  const num = parseFloat(value.replace("$", ""));
  if (value.includes("M")) return num * 1_000_000;
  if (value.includes("K")) return num * 1_000;
  return num;
};
export function getTokenScore(token: any, column: string) {
  const volume = parseMoney(token.volume);
  const tx = token.txCount;
  const buy = token.buyPercent;
  const holders = Math.max(token.holdersChange, 0);

  const noise = Math.random() * 1000; // 👈 subtle jitter

  switch (column) {
    case "New Pairs":
      return volume * 0.6 + tx * 2 + buy * 5 + holders * 10 + noise;

    case "Final Stretch":
      return volume * 0.8 + tx * 1.2 + buy * 6 + noise;

    case "Migrated":
      return volume * 0.25 + tx * 0.4 + buy * 1.5 + noise;

    default:
      return volume + noise;
  }
}
