import "./Navbar.css";
import NavbarMobileitems from "@/app/components/Navbar/NavbarMobileitems";
import Logo from "@/app/components/elements/Logo/Logo";
import Button from "@/app/components/elements/Button/Button";
import { links } from "@/app/components/Data";
import Link from "next/link";
// Import Hooks
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";


export default function Navbar({ mode }) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <>
      <nav
        style={
          mode === "dark"
            ? { backgroundColor: "#2b2b2be6" }
            : { backgroundColor: "#ffffffec" }
        }
      >
        <div className="container flex-bw">
          <Logo
            mode={mode}
            urlDark={"./light-logo.svg"}
            urlLigth={"./dark-logo.svg"}
          />
          <div className="flex-al-c">
            <ul
              className={
                locale == "ar"
                  ? "nav-items  flex-al-c direction-rtl"
                  : "nav-items  flex-al-c"
              }
            >
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="link">
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
