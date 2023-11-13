import "./Button.css";
export default function Button({body,heroBtn,logInBtn,slideBtn,sendBtn,mode,}) {
  return (
    <>
      <button className={`btn-primary ${heroBtn} ${logInBtn} ${slideBtn} ${sendBtn}`} style={mode === "dark" ? { backgroundColor: "#fff", color: "#2b2b2b" } : { backgroundColor: "#551765",color:"#fff" }}>
        {body}
      </button>
    </>
  );
}
