import {
  Copy,
  ExternalLink,
  Users,
  MessageCircle,
  Eye,
  Repeat,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

interface TokenData {
  name: string;
  ticker: string;
  image: string;
  address: string;
  age: string;
  holders: number;
  replies: number;
  retweets: number;
  progress: string;
  views: number;
  volume: string;
  marketCap: string;
  floor: number;
  txCount: number;
  holdersChange: number;
  topHolders: number;
  timeFrame: string;
  volumePercent: number;
  buyPercent: number;
  sellPercent: number;
  solBalance: number;
}

interface TokenDetailPanelProps {
  token: TokenData;
}

export default function TokenDetailPanel({ token }: TokenDetailPanelProps) {
  const copyAddress = () => {
    navigator.clipboard.writeText(token.address);
  };

  return (
    <div
      className="
      bg-[#020617]
      border border-white/10
      rounded-2xl
      max-w-lg
      w-full
      overflow-hidden
      text-white
      shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_rgba(0,0,0,0.8)]
      
    "
    >
      {/* Hero */}
      <div className="relative p-6 bg-gradient-to-br from-primary/25 via-accent/10 to-transparent width-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%)]" />

        <div className="relative z-10 flex items-center gap-4">
          <img
            src={token.image}
            alt={token.name}
            className="w-20 h-20 rounded-xl object-cover border border-white/20 shadow-lg"
          />

          <div>
            <h2 className="text-xl font-semibold">{token.name}</h2>
            <div className="text-sm text-primary font-mono">{token.ticker}</div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-accent">{token.age}</span> •{" "}
              {token.progress}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        {/* Market Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            label="Market Cap"
            value={token.marketCap}
            accent="primary"
          />
          <StatCard label="Volume" value={token.volume} accent="accent" />
          <StatCard label="Floor Price" value={`${token.floor} SOL`} />
          <StatCard
            label="Transactions"
            value={token.txCount.toLocaleString()}
          />
        </div>

        {/* Social */}
        <div className="flex justify-between py-3 border-y border-white/5 gap-4">
          <SocialStat icon={Users} value={token.holders} label="holders" />
          <SocialStat
            icon={MessageCircle}
            value={token.replies}
            label="replies"
          />
          <SocialStat icon={Repeat} value={token.retweets} label="RTs" />
          <SocialStat icon={Eye} value={token.views} label="views" />
        </div>

        {/* Trading */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Activity className="w-4 h-4 text-primary" />
            Trading Activity ({token.timeFrame})
          </div>

          <ProgressRow
            value={token.buyPercent}
            variant="buy"
            icon={TrendingUp}
          />
          <ProgressRow
            value={token.sellPercent}
            variant="sell"
            icon={TrendingDown}
          />
        </div>

        {/* Meta */}
        <div className="flex justify-between text-xs">
          <span>
            Holders:{" "}
            <strong
              className={
                token.holdersChange >= 0 ? "text-green-400" : "text-red-400"
              }
            >
              {token.holdersChange >= 0 ? "+" : ""}
              {token.holdersChange}%
            </strong>
          </span>
          <span>
            Top Holders:{" "}
            <strong className="text-green-400">{token.topHolders}%</strong>
          </span>
          <span>
            Vol %:{" "}
            <strong className="text-cyan-400">{token.volumePercent}%</strong>
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg">
            <span className="text-xs font-mono text-muted-foreground">
              {token.address.slice(0, 6)}...{token.address.slice(-6)}
            </span>
            <Copy
              className="w-3.5 h-3.5 hover:text-primary cursor-pointer"
              onClick={copyAddress}
            />
            <ExternalLink className="w-3.5 h-3.5 hover:text-primary cursor-pointer" />
          </div>

          <button
            className="
            bg-primary/90
            hover:bg-primary
            text-primary-foreground
            px-4 py-2
            rounded-lg
            text-sm
            font-semibold
            transition-colors
          "
          >
            {token.solBalance} SOL
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "primary" | "accent";
}) {
  const accentMap = {
    primary: "text-primary",
    accent: "text-cyan-400",
  };

  return (
    <div className="bg-black/40 rounded-lg p-3 border border-white/10">
      <span className="text-xs text-muted-foreground block mb-1">{label}</span>
      <span
        className={`text-lg font-semibold ${accent ? accentMap[accent] : ""}`}
      >
        {value}
      </span>
    </div>
  );
}

function SocialStat({ icon: Icon, value, label }: any) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function ProgressRow({
  value,
  variant,
  icon: Icon,
}: {
  value: number;
  variant: "buy" | "sell";
  icon: any;
}) {
  const colors = {
    buy: {
      bar: "from-green-400 to-green-600",
      text: "text-green-400",
    },
    sell: {
      bar: "from-red-400 to-red-600",
      text: "text-red-400",
    },
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-black/40 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colors[variant].bar} transition-all`}
          style={{ width: `${value}%` }}
        />
      </div>
      <div
        className={`flex items-center gap-1 text-xs ${colors[variant].text}`}
      >
        <Icon className="w-3 h-3" />
        <span className="font-semibold">{value}%</span>
      </div>
    </div>
  );
}
