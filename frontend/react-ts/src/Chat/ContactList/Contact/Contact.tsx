import React from "react";
export default class Contact extends React.Component {
  obj = {
    chatName: "Sharing is caring",
    lastPersonToMessage: "Kaustuv",
    lastMessage:
      "message message message message message message message message message message message message message message message ",
    dateOfLastMessage: "Mar 19",
  };
  render() {
    return (
      <div className="w-full sm:w-[388px] h-fit font-sans p-[9px] flex flex-row items-center">
        <div className=" min-h-[54px] min-w-[54px] bg-gradient-to-b from-orange-400/90 to-orange-500/90  flex justify-center items-center  rounded-full">
          <div className="font-sans font-extrabold text-3xl text-white">S</div>
        </div>
        <div className="w-full ml-[8px] flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <div className="font-bold">{this.obj.chatName}</div>
            <div className="text-gray-600 text-sm font-normal">
              {this.obj.dateOfLastMessage}
            </div>
          </div>
          <div className="h-[24px] flex flex-row">
            <div className="mr-[4px] text-custom-blue font-medium">
              {this.obj.lastPersonToMessage + ":"}
            </div>
            <div className="overflow-hidden text-gray-500 font-medium">
              {this.obj.lastMessage}
            </div>
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}
