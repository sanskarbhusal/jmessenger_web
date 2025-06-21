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
      <div className="relative w-full h-full flex flex-row justify-center items-center">
        <div className="blur-md rounded-3xl absolute z-0 w-[97%] h-[730px] bg-custom-blue/40"></div>
        <div className="relative z-10 bg-white w-[97%] h-[728px] rounded-3xl">
          <div className={"relative z-20 w-full h-full bg-white rounded-3xl " + " " + this.props.className}>
            <ChatBubble />
          </div>
        </div>
      </div>
    );
  }
}
