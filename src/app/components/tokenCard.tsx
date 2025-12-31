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
import { useFlashChange } from "../hooks/useflash";

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
  const truncateAddress = (addr: string) =>
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  const volumeFlash = useFlashChange(token.volume);
  const txFlash = useFlashChange(token.txCount);

  return (
    <div
      onClick={openModal}
      className="
        bg-black rounded-lg p-3 w-full max-w-xl
        border border-white/5 text-white
        flex flex-col gap-4

        transition-all duration-200 ease-out
        hover:border-white/20
        hover:bg-white/[0.015]
        hover:-translate-y-[1px]
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.06)]
      "
    >
      {/* Top Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 w-full">
        {/* Left */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* IMAGE */}
          <div className="relative group shrink-0">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-black">
              <img
                src={token.image}
                alt={token.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tooltip */}
            <div
              className="
                pointer-events-none
                absolute -top-7 left-1/2 -translate-x-1/2
                whitespace-nowrap
                rounded-md bg-black px-2 py-1
                text-[10px] text-white
                border border-white/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-150
                z-40
              "
            >
              Preview image
            </div>

            {/* ✅ Hover Preview BELOW */}
            <div className="pointer-events-none absolute top-full left-1/2 z-50 hidden group-hover:block -translate-x-1/2 mt-2">
              <div
                className="
                  w-32 h-32 rounded-xl overflow-hidden
                  border border-white/20 bg-black
                  shadow-[0_12px_30px_rgba(0,0,0,0.8)]
                  transform transition-all duration-200
                  scale-95 group-hover:scale-100
                "
              >
                <img
                  src={token.image}
                  alt={token.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name & meta */}
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-semibold truncate">{token.name}</span>
              <span className="text-muted-foreground text-sm truncate">
                {token.ticker}
              </span>
              <Copy className="w-3 h-3 text-muted-foreground hover:text-white cursor-pointer" />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="text-accent">{token.age}</span>
              <Link className="w-3 h-3" />
              <Search className="w-3 h-3" />
              <Users className="w-3 h-3" />
              <span>{token.holders}</span>
              <MessageCircle className="w-3 h-3" />
              <span>{token.replies}</span>
              <Repeat className="w-3 h-3" />
              <span>{token.retweets}</span>
              <Eye className="w-3 h-3" />
              <span>{token.views}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-1 text-xs shrink-0">
          <div className="flex items-center gap-3">
            <span
              className={`transition-colors duration-300 ${
                volumeFlash === "up"
                  ? "text-green-400"
                  : volumeFlash === "down"
                  ? "text-red-400"
                  : "text-primary"
              }`}
            >
              V {token.volume}
            </span>
            <span className="text-primary">MC {token.marketCap}</span>
          </div>

          <div className="flex items-center gap-3">
            <span>F ≡ {token.floor}</span>
            <span
              className={`transition-colors duration-300 ${
                txFlash === "up"
                  ? "text-green-400"
                  : txFlash === "down"
                  ? "text-red-400"
                  : "text-white"
              }`}
            >
              TX {token.txCount}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
        <div className="flex flex-wrap gap-3 text-xs">
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

        {/* ✅ Address with tooltip */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <span className="text-xs text-muted-foreground truncate max-w-[80px] cursor-default">
              {truncateAddress(token.address)}
            </span>

            <div
              className="
                pointer-events-none
                absolute bottom-full left-1/2 -translate-x-1/2 mb-1
                whitespace-nowrap
                rounded-md bg-black px-2 py-1
                text-[10px] text-white
                border border-white/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-150
                z-40
              "
            >
              {token.address}
            </div>
          </div>

          <button className="bg-blue-500/90 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full">
            {token.solBalance} SOL
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
