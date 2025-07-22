import React from "react";
import chatContext from "../../../ChatContext.tsx"

type Props = {
  className?: string;
}

type State = {
  status: string
  statusColor: string
}

export default class ChatTitleAvatar extends React.Component<Props, State> {
  declare context: React.ContextType<typeof chatContext>
  static contextType = chatContext
  constructor(props: Props) {
    super(props)
    this.state = { status: "offline", statusColor: "text-gray-500" }
  }

  checkOnlineStatus = () => {
    const status = this.context.getCurrentChat().isOnline ? "online" : "offline"
    const statusColor = this.context.getCurrentChat().isOnline ? "text-green-600" : "text-gray-500"
    this.setState({ status, statusColor })
  }

  render() {
    return (
      <div className={"drop-shadow-sm w-fit h-full sm:ml-[18px] font-sans flex flex-row items-center bg-transparent select-none" + " " + this.props.className}>
        <div className="min-h-[42px] min-w-[42px] bg-gradient-to-l from-custom-blue/25 via-custom-blue/95 to-custom-blue-dark flex justify-center items-center  rounded-full">
          <div className="font-sans drop-shadow-md font-extrabold text-2xl text-white">S</div>
        </div>
        <div className="w-full ml-[18px] flex flex-col">
          <div className="font-medium text-lg">{this.context.getCurrentChat().chatName}</div>
          <div className={"relative top-[-2px] ml-[1px] flex flex-row font-medium text-xs" + " " + this.state.statusColor}>
            <div className="w-[40px]">
              {this.state.status}
            </div>
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}