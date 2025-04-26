import React from "react";

function ChatListBox({ name, time, profilePic }) {
  return (
    <div className="w-full flex py-3 items-center gap-2 cursor-pointer">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-[#000]">
        <img src={profilePic} alt="" />
      </div>
      <div className="flex-[1]">
        <div className="flex mb-1 items-center justify-between">
          <h3 className="font-semibold text-lg text-[#000]">{name}</h3>

          <h3 className="font-semibold text-xs text-[#000]">{time}</h3>
        </div>
        <div className="flex">
          <p className="font-regular text-sm text-[#000]">
            Lorem ipsum dolor sit amet....
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatListBox;
