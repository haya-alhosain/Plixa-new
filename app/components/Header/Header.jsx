"use client";
import "./Header.css";
// Import Components
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/Hero/Hero";
// Import Hooks
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";


export default function Header() {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <>
      <header className={`${mode === "dark" ? "blur-one blur-two" : ""}`}>
        <Navbar mode={mode}/>
        <Hero mode={mode} toggle={toggle} />
      </header>
    </>
  );
}
