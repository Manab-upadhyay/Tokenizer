import {
  Copy,
  Link,
  Search,
  Users,
  MessageCircle,
  Eye,
  Repeat,
} from "lucide-react";
import Indicator from "../utils/indicators";

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

interface TokenCardProps {
  token: TokenData;
  openModal: () => void;
}

const TokenCard = ({ token, openModal }: TokenCardProps) => {
  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <div
      className="
        bg-black rounded-lg p-3 w-full max-w-xl border border-white/5
        hover:border-white/20 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]
        transition-all duration-200 text-white
        sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
        flex flex-col gap-4
        
      "
      onClick={openModal}
    >
      {/* Top Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 w-full">
        {/* Left: Avatar + Name + Icons */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            src={token.image}
            alt={token.name}
            className="w-12 h-12 rounded-lg object-cover shrink-0"
          />
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <span className="font-semibold text-card-foreground truncate max-w-30 sm:max-w-40 md:max-w-50 lg:max-w-60">
                {token.name}
              </span>
              <span className="text-muted-foreground text-sm truncate max-w-15">
                {token.ticker}
              </span>
              <Copy className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground" />
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="text-accent">{token.age}</span>
              <div className="flex items-center gap-1">
                <Link className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
                <Search className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{token.holders}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span>{token.replies}</span>
              </div>
              <div className="flex items-center gap-1">
                <Repeat className="w-3 h-3" />
                <span>{token.retweets}</span>
              </div>
              <span>{token.progress}</span>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{token.views}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col items-end gap-1 text-xs shrink-0 min-w-30">
          <div className="flex flex-wrap items-center gap-3">
            <span>
              <span className="text-muted-foreground">V </span>
              <span className="text-primary">{token.volume}</span>
            </span>
            <span>
              <span className="text-muted-foreground">MC </span>
              <span className="text-primary">{token.marketCap}</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>
              <span className="text-muted-foreground">F ≡ </span>
              <span className="text-foreground">{token.floor}</span>
            </span>
            <span>
              <span className="text-muted-foreground">TX </span>
              <span className="text-foreground">{token.txCount}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap items-center justify-between mt-3 pt-2 border-t border-border gap-2">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <Indicator
            value={`${token.holdersChange}%`}
            type={token.holdersChange >= 0 ? "positive" : "negative"}
          />

          <Indicator value={`${token.topHolders}%`} type="positive" />

          <Indicator value={token.timeFrame} type="warning" />

          <Indicator value={`${token.volumePercent}%`} type="accent" />

          <Indicator value={`${token.buyPercent}%`} type="positive" />

          <Indicator value={`${token.sellPercent}%`} type="negative" />
        </div>

        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xs text-muted-foreground truncate max-w-20">
            {truncateAddress(token.address)}
          </span>
          <button className="bg-secondary text-foreground text-xs px-3 py-1.5 rounded-full hover:bg-secondary/80 transition-colors flex items-center gap-1 bg-blue-500">
            <span className="text-primary">{token.solBalance}</span>
            <span>SOL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
