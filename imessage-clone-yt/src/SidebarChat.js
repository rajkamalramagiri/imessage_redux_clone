import React from "react";

import { Avatar, IconButton } from "@material-ui/core";

import "./SidebarChat.css";
function SidebarChat() {
  return (
    <div className="sidebar__chat">
      <Avatar />
      <div className="sidebarchat__info">
        <h3> Channel Name</h3>
        <p>Last message sent...</p>
        <small> timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
