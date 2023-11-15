'use client'
import "./About.css";
import MainTitle from "@/app/components/elements/mainTitle/MainTitle";
import CardAbout from "./CardAbout";
// Import Hooks
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";

export default function About()
{
  const { mode } = useContext(ThemeContext);
  return (
    <>
      <section
        data-section
        id="about"
        className={`${
          mode === "dark"
            ? "about-section section-mt blur-one"
            : "about-section section-mt"
        }`}
      >
        <div className="container">
          <MainTitle title="Why Us" />
          <CardAbout mode={mode} />
        </div>
      </section>
    </>
  );
}