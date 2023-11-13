"use client";
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme"));
  function toggle()
  {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", (mode=="dark" || mode == "")? "light" : "dark");
  };
  useEffect(() =>
  {
      setMode(localStorage.getItem("theme"));
    }, []);
  return (
    <ThemeContext.Provider value={{ toggle, mode, setMode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
