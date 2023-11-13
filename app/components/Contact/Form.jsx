import { contactData } from "@/app/components/Data";
import Button from "@/app/components/elements/Button/Button";
import { useTranslations } from "next-intl";

export default function Form({mode})
{
    const t = useTranslations();
  return (
    <>
      <div
        className="form-container flex-col"
        style={
          mode === "light"
            ? { backgroundImage: "url('./../../../public/bg-contact.svg')" }
            : { backgroundImage: "none" }
        }
      >
        {contactData.map((el, idx) => {
          return (
            <>
              <div key={idx} className="contact-info">
                <div className="email">
                  <p>
                    {t("Email")}: {el.email}
                  </p>
                </div>
                <div className="number">
                  <p>
                    {t("Number")}: {el.phoneNumber}
                  </p>
                </div>
              </div>
            </>
          );
        })}

        <form
          className={mode == "dark"? "flex-col": "flex-col blur-right-bottom"}
        >
          <div className="inputs">
            <div>
              <input
                type="text"
                placeholder={t("Name")}
                style={
                  mode == "light"
                    ? { borderImage: "none", borderColor: "#D8C2E4" }
                    : {}
                }
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t("Email")}
                style={
                  mode == "light"
                    ? { borderImage: "none", borderColor: "#D8C2E4" }
                    : {}
                }
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder={t("Message")}
              style={
                mode == "light"
                  ? { borderImage: "none", borderColor: "#D8C2E4" }
                  : {}
              }
            />
          </div>
          <Button mode={mode} sendBtn="send-btn" body={t("Send")} />
        </form>
      </div>
    </>
  );
}
