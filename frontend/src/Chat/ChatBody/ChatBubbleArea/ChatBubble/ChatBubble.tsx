import React from "react";
import { LiaCheckDoubleSolid as DoubleCheckIcon } from "react-icons/lia";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";
import { getTime } from "../../../utils.tsx"
import ChatContext from "../../../ChatContext.tsx";

//import { LiaCheckSolid as singleCheck } from "react-icons/lia";

type State = {
  isMessageUploaded: boolean
  isMessageDelivered: boolean
  doubleTickColor: string
  doubleTickVisibility: string
  spinnerVisibility: string
  bubbleAlignment: string
  bubbleColor: string
};

type Props = {
  contentType: "text" | "file" | "photo" | "url"
  content: string;
  sender: "You" | "chat"
  isMessageUploaded: boolean
  isMessageDelivered: boolean
  timestamp: string;
};

export default class ChatBubble extends React.Component<Props, State> {

  declare context: React.ContextType<typeof ChatContext>
  static contextType = ChatContext

  state = {
    isMessageUploaded: this.props.isMessageUploaded,
    isMessageDelivered: this.props.isMessageDelivered,
    doubleTickColor: "text-gray-400",
    doubleTickVisibility: "hidden",
    spinnerVisibility: "block",
    bubbleAlignment: "self-start",
    bubbleColor: "sm:bg-custom-blue/5"
  };

  componentDidMount() {
    //Simulating the state of double tick and spinner based on webserver's response.
    if (this.state.isMessageUploaded) {
      this.setState({ spinnerVisibility: "hidden", doubleTickVisibility: "block" })
      if (this.state.isMessageDelivered) {
        this.setState({ doubleTickColor: "text-custom-blue/90" })
      } else {
        this.setState({ doubleTickColor: "text-gray-400" })
      }
    } else {
      this.setState({ spinnerVisibility: "block", doubleTickVisibility: "hidden" })
    }
    switch (this.props.sender) {
      case "You":
        this.setState({
          bubbleAlignment: "self-end",
          bubbleColor: "bg-custom-blue/5"
        })
        break;
      case "chat":
        this.setState({
          bubbleAlignment: "self-start",
          bubbleColor: "bg-white",
          doubleTickVisibility: "hidden",
          spinnerVisibility: "hidden",
        })
    }
  }

  render() {
    const iso = new Date().toISOString()
    const utc = new Date(iso)
    const time = getTime(utc.toLocaleTimeString())
    return (
      <div className={"sm:max-w-[45%] group sm:rounded-xl" + " " + this.state.bubbleAlignment + " " + this.state.bubbleColor}>
        <div className="w-full h-full flex flex-col bg-transparent sm:border border-custom-blue/30 rounded-xl selection:bg-custom-blue/90 selection:text-white">
          <div className="pl-2 pr-4 pt-2 w-full h-full flex whitespace-break-spaces font-normal text-base rounded-xl text-pretty drop-shadow-sm">
            {this.props.content}
          </div>
          <div className="flex flex-row justify-end items-end pr-1 pl-[5px]">
            <div className="flex flex-row items-center font-medium text-xs text-gray-500 select-none mr-1">{time}</div>
            <SpinnerIcon className={"sm:group-hover:text-gray-400 font-bold text-md text-gray-400 h-[14px] w-[14px] animate-spin " + " " + this.state.spinnerVisibility} />
            <DoubleCheckIcon className={"sm:group-hover:text-gray-400 font-bold text-md h-fit w-fit" + " " + this.state.doubleTickColor + " " + this.state.doubleTickVisibility} />
          </div>
        </div>
      </div>
    )
  }
}
