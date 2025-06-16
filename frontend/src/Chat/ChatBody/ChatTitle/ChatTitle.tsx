import React from "react";
import ChatTitleAvatar from "./ChatTitleAvatar";
type State = {};
type Props = Required<typeof ChatTitle.defaultProps> & { className?: string };
export default class ChatTitle extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return (
      <div className="w-full h-full border border-gray-300/80 border-l-[1px] border-r-0 border-t-0 border-b-0">
        <ChatTitleAvatar />
      </div>
    );
  }
}
