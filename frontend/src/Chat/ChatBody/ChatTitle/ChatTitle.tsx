import React from "react";
import ChatTitleAvatar from "./ChatTitleAvatar";
import { FiArrowLeft as ArrowLeft } from "react-icons/fi";
type State = {};
type Props = Required<typeof ChatTitle.defaultProps> & { className?: string };
export default class ChatTitle extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return (
      <div className="w-full h-full grid grid-cols-[60px_1fr] sm:flex border border-gray-300/85 border-l-[1px] border-r-0 border-t-0 border-b-0">
        <div className="w-full h-full sm:hidden flex flex-row justify-center items-center">
          <ArrowLeft className="w-[40px] h-[40px] p-[8px] text-gray-600/80 hover:bg-gray-100 rounded-full" />
        </div>
        <ChatTitleAvatar />
      </div>
    );
  }
}
