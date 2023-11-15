"use client";
import "./Navbar.css";
import NavbarMobileitems from "@/app/components/Navbar/NavbarMobileitems";
import Logo from "@/app/components/elements/Logo/Logo";
import Button from "@/app/components/elements/Button/Button";
import { links } from "@/app/components/Data";
import Link from "next/link";
// Import Hooks
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ mode })
{
  // Hooks
  const t = useTranslations();
  const locale = useLocale();
  const sections = useRef([]);
  const [active, setactive] = useState(0)

  const items = document.querySelectorAll(".nav-items li a");
  useEffect(() => {
    const items = document.querySelectorAll(".nav-items li a");
    items[0]?.classList.add(
      `${mode == "dark" ? "active-link-dark" : "active-link-light"}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  sections.current = document.querySelectorAll("[data-section]");
  const removeClass = (item) => {
    item.forEach((e) => {
      e.classList.remove("active-link-light");
      e.classList.remove("active-link-dark");
    });
  };
  const AddActive = (index) =>
  {
    setactive(index);
          items[index]?.classList.add(
            `${mode == "dark" ? "active-link-dark" : "active-link-light"}`
          ); }
  window.onscroll = function () {
    if (
      window.scrollY >= sections.current[0]?.offsetTop &&
      window.scrollY < sections.current[1]?.offsetTop - 200
    ) {
      removeClass(items);
      AddActive(0);
    } else if (
      window.scrollY >= sections.current[1]?.offsetTop + 400 &&
      window.scrollY < sections.current[2]?.offsetTop
    ) {
      removeClass(items);
      AddActive(1);
    } else if (
      window.scrollY >= sections.current[2]?.offsetTop + 400 &&
      window.scrollY < sections.current[3]?.offsetTop
    ) {
      removeClass(items);
      AddActive(2);
    }
  };



  function handleActiveLink(index) {
    let allLinks = document.querySelectorAll(".nav-items li a");
    allLinks.forEach((element) => {
      element.classList.remove("active-link-light");
      element.classList.remove("active-link-dark");
    });
    AddActive(index);
  }
  useEffect(() =>
  {
    removeClass(items);
    AddActive(active);
  }, [mode]);
  return (
    <>
      <nav style={mode === "dark"? { backgroundColor: "#2b2b2be6" } : { backgroundColor: "#ffffffec" }}>
        <div className="container flex-bw">
          <Logo mode={mode} urlDark={"./light-logo.svg"} urlLigth={"./dark-logo.svg"}/>
          <div className="flex-al-c">
            <ul className={locale == "ar"? "nav-items  flex-al-c direction-rtl": "nav-items  flex-al-c"}>
              {links.map((link, index) => (
                <li key={link.id} onClick={() => handleActiveLink(`${index}`)}>
                  <Link href={link.url} className="link" id={`link${index}`}>
                    {t(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
            <Button mode={mode} logInBtn="login-btn" body={t("Log in")} />
          </div>
          <NavbarMobileitems />
        </div>
      </nav>
    </>
  );
}
