"use client";
import "./Services.css";
import MainTitle from "../elements/mainTitle/MainTitle";
import Slide from "@/app/components/Services/Slide";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";

export default function Services() {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <section
        data-section
        id="services"
        className={
          mode == "dark"
            ? "services-section section-mt blur-two"
            : "services-section section-mt"
        }
      >
        <div className="container">
          <MainTitle title="What We Do" />
          <Slide mode={mode} />
        </div>
      </section>
    </>
  );
}
