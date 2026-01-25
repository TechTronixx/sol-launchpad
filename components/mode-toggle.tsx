"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder to prevent hydration mismatch
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full border-primary/20 bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 w-10 h-10 relative overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Icon
          icon="solar:sun-2-bold-duotone"
          className="h-5 w-5 absolute transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-amber-500"
        />
        <Icon
          icon="solar:moon-stars-bold-duotone"
          className="h-5 w-5 absolute transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-blue-400"
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
