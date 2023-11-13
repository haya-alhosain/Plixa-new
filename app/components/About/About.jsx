'use client'
import "./About.css";
import MainTitle from "@/app/components/elements/mainTitle/MainTitle";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";
import CardAbout from "./CardAbout";
export default function About()
{
   const { mode } = useContext(ThemeContext);
  return (
    <>
      <section
        id="about"
        className={`${
          mode === "dark"
            ? "about-section section-mt blur-one"
            : "about-section section-mt"
        }`}
      >
        <div
          className="container">
          <MainTitle title="Why Us" />
          <div className="about-content flex-center">
            <CardAbout mode={mode} />
          </div>
        </div>
      </section>
    </>
  );
}
