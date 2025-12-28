import { Search } from "lucide-react";
export const SearchBar = ({
  handleChange,
}: {
  handleChange: (value: string) => void;
}) => {
  return (
    <div className="relative w-35 border border-white/10 rounded-md">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
      <input
        placeholder="Search"
        className="
          w-full
          bg-black
          border border-white/10
          rounded-md
          pl-7 pr-2 py-1
          text-xs
          text-white
          placeholder:text-muted-foreground
          focus:outline-none
          focus:border-primary/40
          transition-colors
        "
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
