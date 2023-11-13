import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesData } from "@/app/components/Data";
import Button from "@/app/components/elements/Button/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Slide({mode})
{
    const t = useTranslations();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    let Data = servicesData.map((el, idx) => {
      return (
        <div
          key={idx}
          className="slide-container flex-bw"
          style={mode === "light"? { backgroundImage: "url('./../../../public/bg-slide.svg')" }: { backgroundImage: "none" }}
        >
          <div
            className={
              mode == "dark"
                ? "slide-content-text"
                : "slide-content-text blur-left-bottom"
            }
          >
            <div className="service-title selection">
              <h2>{t(el.title)}</h2>
              <span style={{ top: "-9px", left: "-9px" }}></span>
              <span style={{ top: "-9px", right: "-9px" }}></span>
              <span style={{ bottom: "-9px", left: "-9px" }}></span>
              <span style={{ bottom: "-9px", right: "-9px" }}></span>
              <Image className="serv-pointer" src="/pointer.svg" alt="" width={102} height={45} priority/>
            </div>
            <p>{t(el.description)}</p>
            <Button mode={mode} slideBtn="btn-slider" body={t("Coming soon")} />
          </div>
          <div className={mode == "dark" ? "slide-img" : "slide-img blur-top blur-bottom"}>
            <Image className="" src={el.image} alt="" width={600} height={500} priority/>
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
