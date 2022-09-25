import * as React from "react";
import ChatLeftHeader from "./ChatLeftHeader";
import ContactContainer from "./ContactContainer";

const ChatLeft = (props) => {
  const { conversaciones = [] } = props;
  return (
    <div className="chat-left-part">
      <ChatLeftHeader />

      <div className="left-chat-search-container">
        <div className="left-chat-input-group">
          <span className="material-symbols-outlined"> search </span>
          <input
            className="chat-search-input"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="conversation-container">
        {conversaciones.map((conv) => (
          <ContactContainer
            names={conv.usuario.nombre}
            lastMessage={conv.usuario.lastMessage}
            lastMessageTime={conv.usuario.lastMessageTime}
            numberNonReadMessages={conv.usuario.nonReadMesages}
            online={conv.usuario.online}
          />
        ))}
        {/* 
        <ContactContainer
          names={"Steven Saavedra"}
          lastMessage={"Ya entrastes a la sesion de zoom?"}
          lastMessageTime={"3 min"}
          numberNonReadMessages={2}
        />
        <ContactContainer
          names={"Dra. Patty"}
          lastMessage={"Ya salieon los resultados"}
          lastMessageTime={"30 min"}
          numberNonReadMessages={0}
        /> */}
      </div>
    </div>
  );
};
export default ChatLeft;
