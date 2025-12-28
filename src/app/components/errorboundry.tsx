"use client";
import React from "react";

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("UI Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-[#020617] text-sm text-muted-foreground">
          Something went wrong while rendering this column.
        </div>
      );
    }

    return this.props.children;
  }
}
