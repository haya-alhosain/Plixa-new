"use client";
import "./Header.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/Hero/Hero";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";

export default function Header() {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <>
      <header className={`${mode === "dark" ? "blur-one blur-two" : ""}`}>
        <Navbar mode={mode} />
        <Hero mode={mode} toggle={toggle} />
      </header>
    </>
  );
}
