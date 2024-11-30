"use client";

import { useTheme } from "@/providers/theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm font-medium hover:text-primary transition-colors"
    >
      Theme
    </button>
  );
}
