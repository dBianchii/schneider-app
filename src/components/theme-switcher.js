import React, { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);

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
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <div
          className="flex cursor-default select-none items-center rounded-md p-2 text-sm font-medium outline-none transition-colors hover:bg-gray-200"
          aria-label="Customise options"
        >
          {open ? (
            <BsArrowLeftCircleFill className="mr-2 h-4 w-4 text-slate-400 transition-all" />
          ) : darkMode ? (
            <MdDarkMode className="mr-2 h-4 w-4 text-slate-400" />
          ) : (
            <MdLightMode className="mr-2 h-4 w-4 text-slate-400" />
          )}
          Mudar o tema
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 w-24 rounded-lg shadow-md"
          align={"start"}
          sideOffset={4}
          side="left"
        >
          <DropdownMenu.CheckboxItem
            checked={darkMode}
            onCheckedChange={() => setDarkMode(true)}
            className="flex flex-row rounded-md bg-white p-1 hover:bg-gray-400 hover:text-white"
          >
            <MdDarkMode className="mr-2 h-4 w-4 self-center text-slate-400" />
            <span className="cursor-default">Escuro</span>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={!darkMode}
            onCheckedChange={() => setDarkMode(false)}
            className="flex flex-row rounded-md bg-white p-1 hover:bg-gray-400 hover:text-white"
          >
            <MdLightMode className="mr-2 h-4 w-4 self-center text-slate-400" />
            <span className="cursor-default">Claro</span>
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemeSwitcher;
