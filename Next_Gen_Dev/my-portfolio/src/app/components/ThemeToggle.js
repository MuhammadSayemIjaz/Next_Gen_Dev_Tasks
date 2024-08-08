"use client";
import { useState, useEffect } from "react";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
     const [darkMode, setDarkMode] = useState(false);
     const [theme, setTheme] = useState("light");
     useEffect(() => {
          if (localStorage.getItem("theme") === "dark") {
               setDarkMode(true);
               setTheme("dark");
          }
     }, []);
     useEffect(() => {
          console.log(darkMode);

          if (darkMode) {
               document.documentElement.classList.add("dark");
               localStorage.setItem("theme", "dark");
               setTheme("dark");
          } else {
               document.documentElement.classList.remove("dark");
               localStorage.setItem("theme", "light");
               setTheme("light");
          }
     }, [darkMode]);
     return (
          <div className="">
               {theme === "dark" ? (
                    <div className=" border-2  cursor-pointer border-indigo-600 p-2 rounded-full" onClick={() => setDarkMode(false)}>
                         <CiSun className="text-xl text-yellow-700 dark:text-yellow-300" />
                    </div>
               ) : (
                    <div className="border-2  cursor-pointer border-indigo-600 p-2 rounded-full" onClick={() => setDarkMode(true)}>
                         <FaMoon className="text-xl text-blue-950 dark:text-gray-300" />
                    </div>
               )}
          </div>
     )
}
