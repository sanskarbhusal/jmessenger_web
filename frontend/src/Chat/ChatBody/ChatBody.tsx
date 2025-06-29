import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChatContext from "../ChatContext.tsx";
import ChatTitle from "./ChatTitle";
import ChatBubbleArea from "./ChatBubbleArea";
import MessageBox from "./MessageBox";
type Props = Required<typeof ChatBody.defaultProps> &
  RouteComponentProps & { className?: string };
type State = {
  visibility: string;
};
class ChatBody extends React.Component<Props, State> {
  static defaultProps = {};
  static contextType = ChatContext;
  constructor(props: Props) {
    super(props);
    this.state = {
      visibility: "block",
    };
  }
  declare context: React.ContextType<typeof ChatContext>;
  render() {
    return (
      <div
        className={
          "w-full h-full flex flex-row bg-white sm:bg-transparent " + " " + this.props.className
        }
      >
        <div className="min-w-[388px] hidden sm:block bg-transparent"></div>
        <div className="relative w-full grid grid-rows-[54px_minmax(0,auto)_minmax(52px,auto)] ">
          <ChatTitle />
          <ChatBubbleArea className="block" />
          <MessageBox className="block" />
        </div>
      </div>
    );
  }
}
export default withRouter(ChatBody);
