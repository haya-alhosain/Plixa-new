import "./DarkLightMode.css";
import Image from "next/image";
export default function DarkLightMode({ mode, toggle }) {
  return (
    <>
      <Image className="theme-state-icon" src={mode === "dark" ? "./Light mode.svg" : "./Dark mode.svg"} alt=""
        width={45} height={45} priority onClick={toggle}
      />
    </>
  );
}
