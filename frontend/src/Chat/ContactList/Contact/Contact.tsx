import React from "react";
import ChatContext from "../../ChatContext.tsx";
type Props = Required<typeof Contact.defaultProps> & {};
export default class Contact extends React.Component {
  static defaultProps = {};
  static contextType = ChatContext;
  declare context: React.ContextType<typeof ChatContext>;
  obj = {
    chatName: "Sanskar",
    lastPersonToMessage: "Someone",
    lastMessage: "Hi, whats up!",
    dateOfLastMessage: "Mar 19",
  };
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {}
  render() {
    return (
      <div
        onClick={() => {
          this.context();
        }}
        className="w-full sm:w-full h-fit font-sans p-[9px] flex flex-row items-center bg-white active:bg-gray-300"
      >
        <div className=" min-h-[54px] min-w-[54px] bg-gradient-to-b from-orange-400/90 to-orange-500/90 flex justify-center items-center  rounded-full">
          <div className="font-sans font-extrabold text-3xl text-white">S</div>
        </div>
        <div className="w-full ml-[8px] flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <div className="font-medium text-lg">{this.obj.chatName}</div>
            <div className="text-gray-500 text-xs pr-[3px] font-normal">
              {this.obj.dateOfLastMessage}
            </div>
          </div>
          <div className="h-[24px] flex flex-row">
            <div className="mr-[4px] text-custom-blue">
              {this.obj.lastPersonToMessage + ":"}
            </div>
            <div className="overflow-hidden text-gray-500">
              {this.obj.lastMessage}
            </div>
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}
