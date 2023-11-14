"use client";
import "./LanguageChange.css";
import Link from "next-intl/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";
export default function LanguageChange({ setTogglePageLanguage, mode }) {
  const t = useTranslations();
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
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      document.getElementById(localStorage.getItem("lang")).click();
    } else {
      localStorage.setItem("lang", "en");
      document.getElementById(localStorage.getItem("lang")).click();
    }
  }, []);
  return (
    <>
      <div
        className="language-page blur-two"
        style={mode === "dark"? { backgroundColor: "#2b2b2b" }: { backgroundColor: "#ffffff" }}>
        <div className="language-page-top flex-al-c">
          <IoIosArrowBack className="arrow-back" onClick={() => setTogglePageLanguage(false)}/>
          {t("App language")}
        </div>
        <ul className="options flex-col">
          <li className="option">
            <Link href="" locale="ar" id="ar" onClick={(event) => {changeLang(event, "ar");}}>
              Arabic
            </Link>
          </li>
          <li className="option">
            <Link id="en" href="" locale="en" onClick={(event) => {changeLang(event, "en");}}>
              English
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
