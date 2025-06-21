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
      <div className="relative w-full h-full flex flex-row justify-center items-center bg-custom-blue/10">
        <div className="hidden sm:block blur-md rounded-3xl absolute z-0 w-[95%] h-[100%] bg-custom-blue/10"></div>
        <div className="hidden sm:block relative z-10 bg-white w-[90%] h-[96%] rounded-3xl">
          <div className={"relative z-20 w-full h-full bg-white rounded-3xl border border-custom-blue/15 " + " " + this.props.className}>
            <ChatBubble />
          </div>
        </div>
      </div>
    );
  }
}
