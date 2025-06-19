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
          "w-dvw h-dvh flex flex-row bg-white" + " " + this.props.className
        }
      >
        <div className="min-w-[388px] hidden sm:block"></div>
        <div className="w-full grid grid-rows-[minmax(56px,56px)_1fr_minmax(50px,70px)]">
          <ChatTitle />
          <ChatBubbleArea className="hidden" />
          <MessageBox className="hidden" />
        </div>
      </div>
    );
  }
}
export default withRouter(ChatBody);
ChatBody.contextType = ChatContext;
