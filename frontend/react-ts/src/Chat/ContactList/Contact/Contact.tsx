import React from "react";
export default class Contact extends React.Component {
  obj = {
    chatName: "Sharing is caring",
    lastPersonToMessage: "Kaustuv",
    lastMessage: "Yo lekhe vane -infinity ho",
    dateOfLastMessage: "Mar 19",
  };
  render() {
    return (
      <div className="relative font-sans p-[9px] flex flex-row items-center">
        <div className=" bg-orange-400 flex justify-center items-center min-h-[54px] min-w-[54px] rounded-full">
          <div className="font-sans font-extrabold text-3xl text-white ">S</div>
        </div>
        <div className="w-full ml-[8px] flex flex-col justify-between gap-1">
          <div className="flex flex-row justify-between">
            <div className="font-bold">{this.obj.chatName}</div>
            <div className="text-gray-600">{this.obj.dateOfLastMessage}</div>
          </div>
          <div className="flex flex-row">
            <div className="mr-[4px] text-custom-blue">
              {this.obj.lastPersonToMessage + ":"}
            </div>
            <div className="text-gray-500">{this.obj.lastMessage + "..."}</div>
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}
