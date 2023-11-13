"use client";
// Import Elements
import Logo from "@/app/components/elements/Logo/Logo";
import Button from "@/app/components/elements/Button/Button";
import LanguageChange from "@/app/components/LanguageChange/LanguageChange";

// Import Hooks
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";

// Import Icons
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export default function NavbarMobileitems() {
  const { mode, toggle } = useContext(ThemeContext);
  const t = useTranslations();
  const [ToggleNavMenu, setToggleNavMenu] = useState(false);
  const [TogglePageLanguage, setTogglePageLanguage] = useState(false);
  function handleToggleMenu() {
    setToggleNavMenu(!ToggleNavMenu);
  }
  return (
    <>
      {ToggleNavMenu ? (
        <div
          className="nav-mobile-items"
          style={
            mode === "dark"
              ? { backgroundColor: "#2b2b2b" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <div style={{ padding: "0 5.124vw 4vh" }} className="flex-bw">
            <Logo
              mode={mode}
              urlDark={"./light-logo.svg"}
              urlLigth={"./dark-logo.svg"}
            />
            <AiOutlineClose onClick={handleToggleMenu} className="closeIcon" />
          </div>
          <ul className="mobile-links">
            <li>
              <a href="/" className="link home-link">
                {t("Home")}
              </a>
            </li>
            <li>
              <a href="/about" className="link">
                {t("Why Us")}
              </a>
            </li>
            <li>
              <a href="/services" className="link">
                {t("Services")}
              </a>
            </li>
            <li>
              <a href="/contact" className="link">
                {t("Contact")}
              </a>
            </li>

            <div className="nav-select-menu">
              <div className="nav-select-btn flex-bw">
                <div className="nav-sBtn-text">
                  <p>{t("App language")}</p>
                  <span>{t("English")}</span>
                </div>
                <BiChevronDown
                  className="arrowGoLangPage"
                  onClick={() => setTogglePageLanguage(true)}
                />
              </div>
            </div>
            <div className="toggle-mode flex-bw">
              <p>{t("Dark mode")}</p>
              <div
                className="switcher-container"
                onClick={toggle}
                style={
                  mode === "dark"
                    ? { backgroundColor: "#551765" }
                    : { backgroundColor: "#000" }
                }
              >
                <span
                  className="switcher"
                  style={
                    mode === "dark"
                      ? { backgroundColor: "#fff", right: "-2px" }
                      : { backgroundColor: "#aaa", left: "-2px" }
                  }
                ></span>
              </div>
            </div>
            <Button mode={mode} logInBtn="login-btn" body={t("Log in")} />
          </ul>
        </div>
      ) : (
        <></>
      )}

      {TogglePageLanguage ? (
        <LanguageChange
          setTogglePageLanguage={setTogglePageLanguage}
          mode={mode}
        />
      ) : (
        <></>
      )}

      <FaBars className="toggleIcon" onClick={handleToggleMenu} />
    </>
  );
}
