import Button from "@/app/components/elements/Button/Button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Form({mode})
{
  const t = useTranslations();
  const locale = useLocale();
  
  return (
    <>
      <div className="form-container flex-col" style={mode === "light"? { backgroundImage: "url('./../../../public/bg-contact.svg')" }: { backgroundImage: "none" }}>
        <div className={locale == "ar" ? "contact-info direction-rtl" : "contact-info"}>
          <div className={locale == "ar" ? "email direction-rtl" : "email"}>
            <p>{t("Email")}: info@pioneers.network</p>
          </div>
          <div className={locale == "ar" ? "number direction-rtl" : "number"}>
            <p>
              {t("Number")}:{" "}
              {locale == "en" ? "+966 55 216 7445" : "7445 216 55 966+"}
            </p>
          </div>
        </div>

        <form className={mode == "dark" ? "flex-col" : "flex-col blur-right-bottom"} style={locale == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
          <div className="inputs">
            <div>
              <input type="text" autoComplete="off" name="username" placeholder={t("Name")} style={ mode == "light"? { borderImage: "none", borderColor: "#D8C2E4" }: {}}/>
            </div>
            <div>
              <input type="email" name="email" autoComplete="off" placeholder={t("Email")} style={   mode == "light" ? { borderImage: "none", borderColor: "#D8C2E4" } : {}}/>
            </div>
          </div>
          <div>
            <textarea placeholder={t("Message")} autoComplete="off" name="message" style={   mode == "light" ? { borderImage: "none", borderColor: "#D8C2E4" } : {}}/>
          </div>
          <Button mode={mode} sendBtn="send-btn" body={t("Send")} />
        </form>
      </div>
    </>
  );
}
