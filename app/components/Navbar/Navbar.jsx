import "./Navbar.css";
import NavbarMobileitems from "@/app/components/Navbar/NavbarMobileitems";
import Logo from "@/app/components/elements/Logo/Logo";
import Button from "@/app/components/elements/Button/Button";
import { links } from "@/app/components/Data";

import Link from "next/link";
import { useTranslations } from "next-intl";
export default function Navbar({ mode }) {
  const t = useTranslations();
  return (
    <>
      <nav style={ mode === "dark"? { backgroundColor: "#2b2b2be6" }: { backgroundColor: "#ffffffec" }}>
        <div className="container flex-bw">
          <Logo mode={mode} urlDark={"./light-logo.svg"} urlLigth={"./dark-logo.svg"}/>
          <ul className="nav-items flex-al-c">
            {links.map((link) => (
              <li>
                <Link key={link.id} href={link.url} className="link">
                  {t(link.title)}
                </Link>
              </li>
            ))}
            <Button mode={mode} logInBtn="login-btn" body={t("Log in")} />
          </ul>
          <NavbarMobileitems />
        </div>
      </nav>
    </>
  );
}
