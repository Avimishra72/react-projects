import React from "react";
import profilePic from "../../public/profile.jpg";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ChatDisplay({ name, status }) {
  return (
    <>
      <div className="flex flex-col justify-between  w-full">
        <div className="flex items-center border-b-1 border-[#ddd] p-[12px] gap-[16px]">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-[#000]">
            <img src={profilePic} alt="" />
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
      </div>
    </>
  );
}

export default ChatDisplay;
