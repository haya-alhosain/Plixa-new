"use client";
import "./Select.css";
import { BiChevronDown } from "react-icons/bi";
import Link from "next-intl/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Select() {
  const [toggleOptions, setToggleOptions] = useState(false);
  const router = useRouter();
  const changeLang = (event, lang) => {
    event.preventDefault();
    localStorage.setItem("lang", lang);
    if (localStorage.getItem("lang") == "en") {
      router.push("/en");
    } else {
      router.push("/ar");
    }
  };
  useEffect(() =>
  {
    if (localStorage.getItem("lang"))
    {
      document.getElementById(localStorage.getItem("lang")).click()
    } else
    {
      localStorage.setItem("lang", "en");
      document.getElementById(localStorage.getItem("lang")).click();
    } 
}, [])
  return (
    <>
      <div className="select-menu">
        <div className="select-btn" onClick={() => setToggleOptions(!toggleOptions)}>
          <BiChevronDown className="arrowDown" />
        </div>
        <ul
          className="options flex-bw flex-col" style={{ display: toggleOptions ? "block" : "none",}}>
          <li className="option ar" style={{ top: "28px" }}>
            <Link href="" id="ar" locale="ar" onClick={(event) => {changeLang(event, "ar") }}>
              Arabic
            </Link>
          </li>
          <li className="option en" style={{ top: "10px" }}>
            <Link href="" id="en" locale="en" onClick={(event) => {changeLang(event, "en"); }}>
              English
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
