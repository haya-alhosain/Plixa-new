"use client"
import "./Footer.css";
import Link from "next/link";
import {links} from '@/app/components/Data'
import Image from "next/image";
import { socialMediaIcons } from "@/app/components/Data";
import Select from "@/app/components/elements/SelectDropDown/Select";
import { useTranslations } from "next-intl";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";
import Logo from "../elements/Logo/Logo";

let Icons = socialMediaIcons.map((el, idx) => {
  return (
    <div key={idx} className="flex-center">
      <a href="" target="_blank" rel="noopener noreferrer"><Image className="img-icon" src={el.icon} alt="" width={20} height={20} priority/>
      </a>
    </div>
  );
});
export default function Footer() {
  const t = useTranslations();
  const { mode } = useContext(ThemeContext);
  return (
    <>
      <footer className="section-mt">
        <div className="container">
          <div className="row-one flex-bw">
            <a href="" target="_blank" rel="noopener noreferrer">
              <Logo mode={mode} urlDark={"./light-logo.svg"} urlLigth={"./dark-logo.svg"}/>
            </a>
            <ul className="nav-items">
              {links.map((link) => (
                <li>
                  <Link key={link.id} href={link.url} className="link">
                    {t(link.title)}
                  </Link>
                </li>
              ))}
              <div className="select-lang flex-center">
                <span>{t("English")}</span>
                <Select />
              </div>
            </ul>
            <div className="icons-social-media">{Icons}</div>
          </div>
          <div className="row-two flex-bw">
            <p>COPYRIGHT © 2023 Plixa, ALL RIGHTS RESERVED.</p>
            <div className="privacy-links">
              <a href="#">Privacy Policy</a> .<a href="#">Terms & Conditions</a>{" "}
              . <a href="#">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
