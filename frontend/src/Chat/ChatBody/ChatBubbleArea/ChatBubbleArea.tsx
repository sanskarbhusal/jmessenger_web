import React from "react";
import ChatBubble from "./ChatBubble";
type State = {};
type Props = Required<typeof ChatBubbleArea.defaultProps> & {
  className?: string;
};
export default class ChatBubbleArea extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return (
      <div className="relative w-full h-full flex flex-row justify-center items-center bg-white sm:bg-transparent">
        <div className="hidden sm:block blur-sm rounded-3xl absolute z-0 top-[11px] w-[97%] h-full bg-custom-blue-dark/30"></div>
        <div className="hidden sm:block relative z-10 top-[11px] bg-white w-[96%] h-[98%] rounded-3xl">
          <div
            className={"relative z-20 w-full h-full flex flex-col bg-white sm:bg-custom-blue/5 rounded-3xl border border-custom-blue/15" + " " + this.props.className}>
            <ChatBubble />
          </div>
        </div>
      </div>
    );
  }
}
