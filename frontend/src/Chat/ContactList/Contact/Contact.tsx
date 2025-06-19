import React from "react";
import ChatContext from "../../ChatContext.tsx";

const obj = {
  chatName: "Sanskar",
  lastPersonToMessage: "Someone",
  lastMessage: "Hi, what's up",
  dateOfLastMessage: "Mar 19",
};

type Props = Required<typeof Contact.defaultProps> & {};
type State = {
}
export default class Contact extends React.Component<Props, State> {
  static defaultProps = {};
  static contextType = ChatContext;
  declare context: React.ContextType<typeof ChatContext>;

  constructor(props: Props) {
    super(props)
    this.preventClick = this.preventClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
    }
  }

  preventClick(state: State) {
    this.setState(state)
  }

  componentDidMount() {
    //theses data should come from api
    obj.chatName = "Sanskar";
    obj.lastPersonToMessage = "Someone";
    obj.lastMessage = "Clicked";
    obj.dateOfLastMessage = "Mar 19";
  }

  handleClick() { this.context() }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="w-full h-fit rounded-full font-sans p-[5px] border-[1px] border-gray-300/85 flex flex-row items-center bg-gray-100 active:bg-gray-300"
      >
        <div className=" min-h-[54px] min-w-[54px] bg-gradient-to-b from-orange-400/90 to-orange-500/90 flex justify-center items-center rounded-full">
          <div className="font-sans font-extrabold text-3xl text-white">S</div>
        </div>
        <div className="w-full ml-[8px] flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <div className="font-medium text-lg">{obj.chatName}</div>
            <div className="text-gray-500 text-xs pr-[30px] font-normal">
              {obj.dateOfLastMessage}
            </div>
          </div>
          <div className="h-[24px] flex flex-row">
            <div className="mr-[4px] text-custom-blue">
              {obj.lastPersonToMessage + ":"}
            </div>
            <div className="overflow-hidden text-gray-500">
              {obj.lastMessage}
            </div>
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}