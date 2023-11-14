import { aboutData } from "@/app/components/Data";
import Image from "next/image";
// Import Hooks
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";


export default function CardAbout({mode})
{
  const locale = useLocale();
  const t = useTranslations();

  return (
    <>
      <div
        className={ locale == "ar"? "about-content flex-center direction-rtl" : "about-content flex-center"}>
        {aboutData.map((el, idx) => {
          return (
            <div key={idx} className={mode == "light" ? `about-card ${locale == "ar" ? el.circle_ar : el.circle_en}`: "about-card"}
              style={mode === "light"? { backgroundImage: "url('./../../../public/bg-about.svg')" }: { backgroundImage: "none"}}>
              <Image className="icon" src={mode == "dark" ? el.img_dark : el.img_light} alt="" width={100} height={89} priorit/>
              <h3>{t(el.title)}</h3>
              <p>{t(el.description)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
