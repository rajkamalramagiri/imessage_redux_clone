import React, { useState } from "react";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        <h2> I am a message</h2>
        <h2> I am a message</h2>
        <h2> I am a message</h2>
        <h2> I am a message</h2>
        <h2> I am a message</h2>
        <h2> I am a message</h2>
      </div>

      <div className="chat__input">
        <form>
          <input
            type="text"
            placeholder="iMessae"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic"> </MicNoneIcon>
        </IconButton>
      </div>
    </div>
  );
}
export default Chat;
