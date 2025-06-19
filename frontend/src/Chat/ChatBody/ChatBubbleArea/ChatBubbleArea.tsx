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
      <div className={"bg-custom-blue/5 w-full h-full sm:border-[1px] sm:border-custom-blue/10 sm:border-r-0" + " " + this.props.className}>
        <ChatBubble />
      </div>
    );
  }
}
