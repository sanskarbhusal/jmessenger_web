import React from "react";
import ChatBubble from "./ChatBubble";
import { query } from "../../chatData.tsx"
import ChatContext from "../../ChatContext.tsx"

type State = { history: string[] };
type Props = {
  className?: string;
};

export default class ChatBubbleArea extends React.Component<Props, State> {

  state = { history: [] };
  static contextType = ChatContext
  declare context: React.ContextType<typeof ChatContext>
  ref = React.createRef<HTMLDivElement>()

  History() {
    const Bubbles = query.getChatHistory(this.context.getCurrentChat().chatId).map((item, index) => {
      return (
        <ChatBubble {...item} key={index} />
      )
    })
    return Bubbles
  }

  componentDidUpdate() {
    if (this.ref.current != undefined) {
      this.ref.current.scrollTop = this.ref.current.scrollHeight
    }
  }

  render() {
    return (
      <div className="relative w-full h-[98%] flex flex-row justify-center items-start bg-white sm:bg-transparent">
        <div className="hidden sm:block blur-sm rounded-3xl absolute z-0 top-[1.5%] w-[97%] h-[96.8%] bg-gradient-to-bl from-custom-blue/5 to-custom-blue-dark/30"></div>
        <div className="hidden sm:block relative z-10 top-[2.6%] w-[95.9%] h-[94.5%] rounded-3xl">
          <div
            ref={this.ref}
            className={"relative z-20 overflow-y-scroll scrollbar-thin w-full h-full flex flex-col gap-5 p-7 bg-white bg-gradient-to-bl from-custom-blue/5 to-custom-blue-dark/10 rounded-3xl border border-custom-blue/15" + " " + this.props.className}>
            {this.History()}
          </div>
        </div>
      </div>
    );
  }
}
