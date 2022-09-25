import * as React from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";

const ChatRight = (props) => {
  const { mensajes } = props;
  console.log("ChatRight", mensajes);
  return (
    <div className="chat-right-part">
      {/*  <!-- HEADER --> */}
      <ChatHeader />
      {/*  <!-- BODY --> */}

      <ChatBody mensajes={mensajes} />
      {/*   <!-- FOOTER --> */}
      <ChatFooter />
    </div>
  );
};
export default ChatRight;
