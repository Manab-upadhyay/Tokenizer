interface IndicatorProps {
  value: number | string;
  type: "positive" | "negative" | "neutral" | "accent" | "warning";
}

const Indicator = ({ value, type }: IndicatorProps) => {
  const colorMap = {
    positive: "text-green-400",
    negative: "text-red-400",
    neutral: "text-gray-400",
    accent: "text-cyan-400",
    warning: "text-yellow-400",
  };

  return (
    <div className={`flex items-center gap-1 ${colorMap[type]}`}>
      <span className="text-[10px] leading-none">●</span>
      <span>{value}</span>
    </div>
  );
};
export default Indicator;
