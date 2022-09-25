import * as React from "react";

const ContactContainer = (props) => {
  const { names, lastMessage, lastMessageTime, numberNonReadMessages, online } =
    props;
  return (
    <div className="contact-container">
      <div className="avatar-container">
        <img
          className="avatar-rounded"
          src="https://template.doccure.io/html/template/assets/img/doctors/doctor-thumb-01.jpg"
        />
        <span className={`avatar-status ${online?"connected":"offline"}`}></span>
      </div>
      <div className="info-name">
        <div className="contact-name">{names || "nombres"}</div>
        <div className="contact-last-message">
          {lastMessage || "un mensaje"}
        </div>
      </div>
      <div className="info-time">
        <div className="last-message-time">
          {lastMessageTime || "1.235 min"}
        </div>
        {typeof numberNonReadMessages === "number" &&
          numberNonReadMessages > 0 && (
            <div className="badge-number-messages">
              {numberNonReadMessages || "num_msj"}
            </div>
          )}
      </div>
    </div>
  );
};
export default ContactContainer;
