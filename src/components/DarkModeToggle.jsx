import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div>
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="btn bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300"
      >
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
