import React from "react";
import logo from "../public/punChat.svg";

function ChatRoom() {
  return (
    <>
      <section className="h-screen w-screen bg-[#151515] overflow-hidden">
        <div className="flex p-4 items-center gap-1">
          <div className="w-[30px] h-[30px]">
            <img src={logo} alt="" />
          </div>

          <h1 className="font-medium text-xl text-[#B4A5A5]">PunChat</h1>
        </div>
        <div className="flex w-full h-full">
          <div className="w-[30%] overflow-y-auto p-4 bg-[#3C415C] border-r-1">
            <h2 className="font-bold text-xl text-[#fff] mb-4">Chats</h2>

            <div className="w-full flex py-3 items-center gap-2">
              <div className="w-[60px] h-[60px] rounded-full bg-[#000]">
                <img src={logo} alt="" />
              </div>
              <div className="flex-[1]">
                <div className="flex mb-1 items-center justify-between">
                  <h3 className="font-semibold text-lg text-[#fff]">
                    Umang Bhai
                  </h3>

                  <h3 className="font-semibold text-xs text-[#fff]">23:35</h3>
                </div>
                <div className="flex">
                  <p className="font-regular text-sm text-[#fff]">
                    Lorem ipsum dolor sit amet....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%]  p-4 bg-[#3C415C]"></div>
        </div>
      </section>
    </>
  );
}

export default ChatRoom;
