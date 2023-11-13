import { aboutData } from "@/app/components/Data";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function CardAbout({mode})
{
  const t = useTranslations();
  return (
    <>   
      {aboutData.map((el, idx) => {
          return (
            <div
              key={idx} className={mode == "light" ? `about-card ${el.circle_en}` : "about-card"}
              style={mode === "light"? { backgroundImage: "url('./../../../public/bg-about.svg')"}: { backgroundImage: "none"}}
            >
              <Image className="icon" src={mode == "dark" ? el.img_dark : el.img_light} alt="" width={100} height={89} priorit/>
              <h3>{t(el.title)}</h3>
              <p>{t(el.description)}</p>
            </div>
          );
      })}
    </>
  )
}
