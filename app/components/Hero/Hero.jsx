//  Import Elements
import Image from "next/image";
import DarkLightMode from "@/app/components/elements/DarkLightMode/DarkLightMode";
import Logo from "@/app/components/elements/Logo/Logo";
import Button from "@/app/components/elements/Button/Button";
// Import Hooks
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
export default function Hero({ mode, toggle }) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <>
      <section className="hero">
        <div className={locale == "ar" ? "container direction-rtl" : "container"}>
          <div className="header-content">
            <div className="selection">
              <Logo mode={mode} urlDark={"/light-logo.svg"} urlLigth={"/dark-logo.svg"}/>
              <span style={{ top: "-9px", left: "-9px" }}></span>
              <span style={{ top: "-9px", right: "-9px" }}></span>
              <span style={{ bottom: "-9px", left: "-9px" }}></span>
              <span style={{ bottom: "-9px", right: "-9px" }}></span>
            </div>
            <p>{t("The leading platform to Create your website for free with the help of AI in the Middle East")}
            </p>
            <div className="hero-btn-container" style={locale == "ar" ? { right: "0" } : { left: "0" }}>
              <Button mode={mode} heroBtn="hero-btn" body={t("Try it for free")}/>
              <Image className={locale == "en" ? "pointer" : "pointer-ar"} src={locale == "en" ? "/pointer.svg" : "/pointer-ar.svg"} alt="" width={102} height={45} priority/>
            </div>
          </div>
          <div className="hero-img">
            <Image src="/hero-img.svg" alt="" width={319} height={315} priority/>
          </div>
          <DarkLightMode mode={mode} toggle={toggle} />
        </div>
      </section>
    </>
  );
}
