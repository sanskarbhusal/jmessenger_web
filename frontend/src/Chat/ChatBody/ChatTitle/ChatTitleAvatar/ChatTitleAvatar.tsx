import React from "react";
export default class ChatTitleAvatar extends React.Component {
  static defaultProps = {};
  obj = {
    chatName: "Sanskar",
    lastPersonToMessage: "Someone",
    lastMessage: "Hi, whats up!",
    dateOfLastMessage: "Mar 19",
  };
  render() {
    return (
      <div className="w-fit h-full ml-[18px] font-sans flex flex-row items-center bg-white">
        <div className="min-h-[42px] min-w-[42px] bg-gradient-to-b from-orange-400/90 to-orange-500/90 flex justify-center items-center  rounded-full">
          <div className="font-sans font-extrabold text-2xl text-white">S</div>
        </div>
        <div className="w-full ml-[18px] flex flex-col justify-between">
          <div className="font-semibold">{this.obj.chatName}</div>
          <div className="text-gray-500">
            {"last seen " + this.obj.dateOfLastMessage}
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}
