import * as React from "react";

const MessageBody = (props) => {
  const { menssageText, messageTime, isSent } = props;
  const classNameSentRecived = isSent ? "sent" : "recived";
  return (
    <div className={`message-body ${classNameSentRecived}`}>
      <div className={`message-box ${classNameSentRecived}`}>
        <div className="message">{menssageText || "mensaje por defcto"}</div>
        <div className="message-time">{messageTime || "hora defecto"}</div>
      </div>
    </div>
  );
};
export default MessageBody;
