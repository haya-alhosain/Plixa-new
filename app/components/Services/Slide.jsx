import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesData } from "@/app/components/Data";
import Button from "@/app/components/elements/Button/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
export default function Slide({mode})
{
  const t = useTranslations();
  const locale = useLocale();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    let Data = servicesData.map((el, idx) => {
      return (
        <div key={idx} className={locale == "ar"? "slide-container slide-container-ar flex-bw direction-rtl": "slide-container flex-bw"}
          style={mode === "light"? { backgroundImage: "url('./../../../public/bg-slide.svg')" }: { backgroundImage: "none" }}>
          <div className={ mode == "dark"? "slide-content-text": `${locale == "en"? "slide-content-text blur-left-bottom" : "slide-content-text blur-left-bottom  blur-left-bottom-ar"  }`}>
            <div className="service-title selection">
              <h2>{t(el.title)}</h2>
              <span style={{ top: "-9px", left: "-9px" }}></span>
              <span style={{ top: "-9px", right: "-9px" }}></span>
              <span style={{ bottom: "-9px", left: "-9px" }}></span>
              <span style={{ bottom: "-9px", right: "-9px" }}></span>
              <Image className={locale == "en" ? "serv-pointer" : "serv-pointer-ar"} src={locale == "en" ? "/pointer.svg" : "pointer-ar.svg"} alt="" width={102} height={45} priority/>
            </div>
            <p>{t(el.description)}</p>
            <Button mode={mode} slideBtn="btn-slider" body={t("Coming soon")} />
          </div>
          <div className={   mode == "dark" ? "slide-img" : `${ locale == "en"? "slide-img blur-top blur-bottom": "slide-img blur-top blur-bottom blur-top-ar blur-bottom-ar"}`}
          >
            <Image className="" src={el.image} alt="" width={600} height={490} priority/>
          </div>
        </div>
      );
    });
  return (
    <>
      <Slider {...settings}>{Data}</Slider>
    </>
  );
}
