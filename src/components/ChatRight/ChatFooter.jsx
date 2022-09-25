import * as React from "react";

const ChatFooter = props =>{
    return(
        <div className="chat-footer">
        <span className="material-icons material-icon-extra-style">
          attach_file
        </span>
        <input type="text" placeholder="Escriba su mensaje..." />
        <button className="send-button">
          <span className="material-icons"> send </span>
        </button>
      </div>
    )
}
export default ChatFooter;