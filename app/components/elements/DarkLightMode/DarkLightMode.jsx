
import "./DarkLightMode.css";
import Image from "next/image";
export default function DarkLightMode({ mode, toggle , locale })
{
  function handleDarkLightToggle() {
    toggle();
  }
  return (
    <>
      <div
        className="theme-state-icon flex-center"
        onClick={handleDarkLightToggle}
        style={locale == "en" ? { right: "4.5vw" } : { left: " 4.5vw" }}
      >
        <Image
          src={mode === "dark" ? "/sun.svg" : "/moon.svg"}
          alt=""
          width={24}
          height={24}
          priority
        />
      </div>
    </>
  );
}
