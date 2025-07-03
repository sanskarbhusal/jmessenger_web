import React from "react";
import { LiaCheckDoubleSolid as DoubleCheckIcon } from "react-icons/lia";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";

//import { LiaCheckSolid as singleCheck } from "react-icons/lia";


function removeSeconds(time: string): string {
  const arr = time.split(":")
  const meridiem = arr.pop()?.split(" ")[1] //AM or, PM
  const hhmm = arr.join(":")
  return hhmm + " " + meridiem
}

type State = {
  isMessageUploaded: boolean
  isMessageDelivered: boolean
  doubleTickIconColor: string
};

type Props = Required<typeof ChatBubble.defaultProps> & {
  type?: "text" | "file" | "photo" | "url"
  content?: string;
  sender?: "you" | "chat"
  timestamp?: string;
};

function temp() {
  return (
    <div className="
   ">
    </div>
  )
}

export default class ChatBubble extends React.Component<Props, State> {

  static defaultProps = { foo: "foo" };

  state = {
    isMessageUploaded: false,
    isMessageDelivered: false,
    doubleTickIconColor: "",
  };

  componentDidMount() {
    //Manipulate sate of tick and spinner based on webserver's response.
    if (this.state.isMessageDelivered) {
      this.setState({ doubleTickIconColor: "text-custom-blue/90" })
    } else {
      this.setState({ doubleTickIconColor: "text-gray-400" })
    }
  }

  render() {
    const iso = new Date().toISOString()
    const utc = new Date(iso)
    const time = removeSeconds(utc.toLocaleTimeString())

    return (
      <div className="sm:max-w-[45%] group self-start bg-custom-blue/5 sm:rounded-xl">
        <div className="w-full h-full flex flex-col bg-transparent sm:border border-custom-blue/30 rounded-xl selection:bg-custom-blue/90 selection:text-white">
          <div className="pl-2 pr-4 pt-2 w-full h-full flex  whitespace-break-spaces font-normal text-base rounded-xl text-pretty drop-shadow-sm">
            {this.props.content}
          </div>
          <div className="flex flex-row justify-end items-end gap-1 pr-1">
            <div className="flex flex-row items-center font-medium text-xs text-gray-500 select-none">{time}</div>
            <SpinnerIcon className={"sm:group-hover:text-gray-400 font-bold text-md h-fit w-fit animate-spin " + " " + this.state.doubleTickIconColor} />
            <DoubleCheckIcon className={" sm:group-hover:text-gray-400 font-bold text-md h-fit w-fit" + " " + this.state.doubleTickIconColor} />
          </div>
        </div>
      </div>
    )
  }
}
