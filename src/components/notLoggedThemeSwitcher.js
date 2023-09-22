import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SecondaryButton } from "./button";

const NotLoggedThemeSwitcher = () => {
  // Initialize darkMode state with the value from local storage or default to false
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Add an effect to toggle the dark mode class on document.documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Store the dark mode state in local storage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <SecondaryButton className={"ml-4"} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <MdLightMode className="h-4 w-4 text-slate-400" />
      ) : (
        <MdDarkMode className="h-4 w-4 text-slate-400" />
      )}
    </SecondaryButton>
  );
};

export default NotLoggedThemeSwitcher;
