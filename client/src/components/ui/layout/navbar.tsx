import React from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b border-border">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-primary">Your App</h1>
      </div>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
      </div>
    </nav>
  );
}