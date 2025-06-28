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
        <div className="hidden sm:block blur-sm rounded-3xl absolute z-0 w-[97%] h-[98%] bg-custom-blue-dark/30"></div>
        <div className="hidden sm:block relative z-10 bg-white w-[96%] h-[96%] rounded-3xl">
          <div
            className={"relative z-20 w-full h-full flex flex-col bg-white sm:bg-custom-blue/5 rounded-3xl border border-custom-blue/15" + " " + this.props.className}>
            <ChatBubble />
          </div>
        </div>
      </div>
    );
  }
}
