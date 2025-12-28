import { Activity } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-success to-primary shadow-lg shadow-success/20">
            <Activity
              className="h-5 w-5 text-background text-emerald-400"
              strokeWidth={2.5}
            />
            <div className="absolute inset-0 rounded-xl bg-success/20 blur-md" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="bg-linear-to-r  from-success via-primary to-success bg-clip-text text-transparent text-white ">
              Pulse
            </span>
          </span>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-emerald-400">Live</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
