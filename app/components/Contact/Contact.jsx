'use client'
import "./Contact.css";
import MainTitle from "@/app/components/elements/mainTitle/MainTitle";
import Form from "./Form";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Contact()
{
    const { mode } = useContext(ThemeContext);
  
  return (
    <>
      <section id="contact" className="contact-section section-mt">
        <div
          className={
            mode == "dark" ? "container blur-one" : "container"
          }
        >
          <MainTitle title="Get In Touch" />
          <Form mode={mode} />
        </div>
      </section>
    </>
  );
}
