import "./MainTitle.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function MainTitle({ title }) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <>
      <div className={locale == "ar" ? "main-heading direction-rtl" : "main-heading"}>
        <h2>{t(title)}</h2>
      </div>
    </>
  );
}
