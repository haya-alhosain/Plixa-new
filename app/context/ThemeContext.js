"use client";
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme"));

  function toggle() {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem(
      "theme",
      mode == "dark" || mode == "" ? "light" : "dark"
    );

  }
  useEffect(() => {
    setMode(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ toggle, mode, setMode }}>
      <div className={`${mode}`} style={{zIndex:"10" , position:"relative"}}>{children}</div>
    </ThemeContext.Provider>
  );
};
