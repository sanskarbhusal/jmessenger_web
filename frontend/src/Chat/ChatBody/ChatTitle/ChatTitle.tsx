import React from "react";
import ChatTitleAvatar from "./ChatTitleAvatar";
import { FiArrowLeft as ArrowLeft } from "react-icons/fi";
import ChatContext from "../../ChatContext.tsx";
type State = {};
type Props = Required<typeof ChatTitle.defaultProps> & { className?: string };
export default class ChatTitle extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };

  declare context: React.ContextType<typeof ChatContext>;
  render() {
    return (
      <div className="w-full h-full pt-[6px] grid grid-cols-[60px_1fr] sm:flex sm:shadow-none shadow-md sm:transparent">
        <div className="w-full h-full sm:hidden flex flex-row justify-center items-center">
          <ArrowLeft
            onClick={() => this.context.swap()}
            className="w-[40px] h-[40px] p-[8px] text-gray-600/80 hover:bg-gray-100 rounded-full"
          />
        </div>
        <ChatTitleAvatar />
      </div>
    );
  }
}
ChatTitle.contextType = ChatContext;
