import "./Logo.css";
import Image from "next/image";
export default function Logo({ urlDark, urlLigth, mode }) {
  return (
    <>
      <div>
        <Image
          className="img-logo"
          src={mode === "dark" ? urlDark : urlLigth}
          alt="plixa logo"
          width={135}
          height={31}
          priority
        />
      </div>
    </>
  );
}
