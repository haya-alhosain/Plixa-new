import "./MainTitle.css";
import { useTranslations } from "next-intl";

export default function MainTitle({ title }) {
  const t = useTranslations();

  return (
    <>
      <div className="main-heading">
        <h2>{t(title)}</h2>
      </div>
    </>
  );
}
