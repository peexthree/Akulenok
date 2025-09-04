import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
           aria-pressed={theme === "dark"}
          className="p-2 text-gray-800 dark:text-gray-200 transition-colors duration-200 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20"
        >
          <span className="sr-only">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
          {theme === "dark" ? (
            <SunIcon className="w-8 h-8 text-yellow-500" />
          ) : (
           <MoonIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    );
}

export default React.memo(ThemeChanger);