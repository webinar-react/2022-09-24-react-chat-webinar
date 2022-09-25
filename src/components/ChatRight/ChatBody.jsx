import * as React from "react";
import MessageBody from "./MessageBody";

const ChatBody = (props) => {
  const { mensajes } = props;
  return (
    <div className="chat-body">
      <ul className="unstyled-list-messages">
        { mensajes && mensajes.map(({ enviado, mensajes }) => (
          <li className={`message-container ${enviado ? "sent" : "recived"}`}>
             {mensajes.map(({ texto, time }) => (
              <MessageBody
                menssageText={texto}
                messageTime={time}
                isSent={enviado}
              />
            ))} 
          </li>
        ))}

        {/*    <li className="message-container sent">
          <MessageBody
            menssageText={"Hello. What can I do for you?"}
            messageTime={"8:01 PM"}
            isSent={true}
          />

          <MessageBody
            menssageText={"Me encanta programar en React.js !!"}
            messageTime={"8:02 PM"}
            isSent={true}
          />
          <MessageBody
            menssageText={"Hello. What can I do for you?"}
            messageTime={"8:01 PM"}
            isSent={true}
          />
        </li>
        <li className="message-container recived">
          <MessageBody
            menssageText={
              "I'm just looking around. Will you tell me something about yourself?"
            }
            messageTime={"8:35 AM"}
          />
          <MessageBody
            menssageText={
              "I'm just looking around. Will you tell me something about yourself?"
            }
            messageTime={"8:35 AM"}
          />
          <MessageBody
            menssageText={"Are you there? That time!"}
            messageTime={"8:40 AM"}
          />
        </li>
        <li className="message-container sent">
          <div className="message-body">
            <div className="message-box sent">
              <div className="message">Hello. What can I do for you?</div>
              <div className="message-time">8:01 PM</div>
            </div>
          </div>
          <div className="message-body">
            <div className="message-box sent">
              <div className="message">Hello. What can I do for you?</div>
              <div className="message-time">8:01 PM</div>
            </div>
          </div>
        </li>
        <li className="message-container recived">
          <div className="message-body">
            <div className="message-box recived">
              <div className="message">
                I'm just looking around. Will you tell me something about
                yourself?
              </div>
              <div className="message-time">8:35 AM</div>
            </div>
          </div>
          <div className="message-body">
            <div className="message-box recived">
              <div className="message">Are you there? That time!</div>
              <div className="message-time">8:40 AM</div>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
export default ChatBody;
