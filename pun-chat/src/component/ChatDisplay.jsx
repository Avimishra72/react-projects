import React, { useState } from "react";
import profilePic from "../../public/profile.jpg";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";

function ChatDisplay({ name, status }) {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim() !== "") {
      setMessages((prev) => [...prev, userInput]);
      setUserInput("");
    }
  };

  return (
    <div className="flex flex-col justify-between w-full">
      {/* Header */}
      <div className="flex items-center border-b border-[#ddd] p-[12px] gap-[16px]">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-[#000]">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="flex-[1]">
          <h2 className="font-medium text-base text-[#000]">{name}</h2>
          <h3 className="font-light text-sm text-[#000]">{status}</h3>
        </div>
        <div className="flex items-center justify-between gap-[14px]">
          <CallIcon />
          <VideoCallIcon />
          <MoreVertIcon />
        </div>
      </div>
      {/* Chat Display */}
      <div className="w-full flex flex-col justify-end flex-[1] p-[12px] gap-[8px] border-b border-[#ddd] overflow-y-auto">
        <p className="bg-[#680982] text-white p-[8px] w-fit mr-auto rounded-md max-w-[45%]">
          HI
        </p>
        {messages.map((msg, index) => (
          <p
            key={index}
            className="bg-[#680982] text-white p-[8px] w-fit ml-auto rounded-md max-w-[45%]"
          >
            {msg}
          </p>
        ))}
        <p className="bg-[#680982] text-white p-[8px] w-fit mr-auto rounded-md max-w-[45%]">
          HI
        </p>
      </div>

      {/* Footer */}
      <div className="flex gap-[16px] w-full p-[12px]">
        <EmojiEmotionsIcon />
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="resize-none max-h-[100px] w-full p-[6px] overflow-y-auto border border-[#ddd] text-sm"
          placeholder="Type a message"
        />
        {userInput.trim() ? <SendIcon onClick={handleSend} /> : <MicIcon />}
      </div>
    </div>
  );
}

export default ChatDisplay;
