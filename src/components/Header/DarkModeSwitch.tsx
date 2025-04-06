"use client";

import { classNames } from "@/utils";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const DarkModeSwitch = ({ classes }: { classes?: string }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeSwitch = () => {
    const classes = document.documentElement.classList;
    if (classes.contains("dark")) {
      classes.remove("dark");
      classes.add("light");
      localStorage.theme = "light";
    } else {
      classes.add("dark");
      classes.remove("light");
      localStorage.theme = "dark";
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const classes = document.documentElement.classList;
    classes.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
    setIsDarkMode(classes.contains("dark"));
  }, []);

  return (
    <button
      className={classNames(
        "flex md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 cursor-pointer",
        classes
      )}
      onClick={handleDarkModeSwitch}
    >
      {isDarkMode ? (
        <SunIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
