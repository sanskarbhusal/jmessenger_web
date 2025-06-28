import React from "react";
type Props = Required<typeof ChatTitleAvatar.defaultProps> & {
  className?: string;
}
type State = {

}
export default class ChatTitleAvatar extends React.Component<Props, State> {
  static defaultProps = {};
  obj = {
    chatName: "Sanskar",
    lastPersonToMessage: "Someone",
    lastMessage: "Hi, whats up!",
    dateOfLastMessage: "today at 9:28 AM",
  };
  render() {
    return (
      <div className={"w-fit h-full sm:ml-[18px] font-sans flex flex-row items-center bg-transparent select-none" + " " + this.props.className}>
        <div className="min-h-[42px] min-w-[42px] bg-gradient-to-b from-orange-400/90 to-orange-500/90 flex justify-center items-center  rounded-full">
          <div className="font-sans font-extrabold text-2xl text-white">S</div>
        </div>
        <div className="w-full ml-[18px] flex flex-col">
          <div className="font-medium text-lg">{this.obj.chatName}</div>
          <div className="relative top-[-2px] text-gray-500 font-medium text-xs">
            {"last seen " + this.obj.dateOfLastMessage}
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}
