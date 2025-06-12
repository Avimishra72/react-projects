import React from "react";
import logo from "../public/punChat.svg";
import BasicTabs from "./component/BasicTabs";
import ChatDisplay from "./component/ChatDisplay";

function ChatRoom() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="h-screen w-screen  overflow-hidden">
        <div className="flex w-full h-full">
          <div className="w-[25%] overflow-y-auto border-r-1 border-[#ddd]">
            <div className="flex p-4 items-center gap-1 bg-[#0D1526]">
              <div className="w-[30px] h-[30px]">
                <img src={logo} alt="" />
              </div>

              <h1 className="font-medium text-xl text-[#fff]">PunChat</h1>
            </div>
            <BasicTabs />
          </div>
          <div className="w-[75%]">
            <div className="flex w-full h-full">
              <ChatDisplay name={"Umang Bhai"} status={"Online"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChatRoom;
