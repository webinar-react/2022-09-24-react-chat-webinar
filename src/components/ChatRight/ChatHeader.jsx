import * as React from "react";

const ChatHeader = (props) => {
  return (
    <div className="chat-header">
      <div className="contact-header-info-left">
        <div className="avatar-container">
          <img
            className="avatar-rounded"
            src="https://template.doccure.io/html/template/assets/img/doctors/doctor-thumb-01.jpg"
          />
          <span className="avatar-status connected"></span>
        </div>

        <div className="contact-info-header">
          <span className="contact-name-header"> Dr. Darren Elder </span>
          <span className="contact-status-header"> Online </span>
        </div>
      </div>

      <div className="chat-header-actions">
        <span className="material-icons material-icon-extra-style">
          videocam
        </span>
        <span className="material-icons material-icon-extra-style">call</span>

        <span className="material-icons material-icon-extra-style">
          more_vert
        </span>
      </div>
    </div>
  );
};
export default ChatHeader;
