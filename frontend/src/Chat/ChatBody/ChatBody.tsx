import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChatContext from "../ChatContext.tsx";
import ChatTitle from "./ChatTitle";
import ChatBubbleArea from "./ChatBubbleArea";
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
        <div className="bg-blue-400 min-w-[388px] hidden sm:block"></div>
        <div className="w-full grid grid-rows-[minmax(50px,70px)_1fr_minmax(50px,70px)]">
          <div>
            <ChatTitle />
          </div>
          <div className="bg-blue-300">
            <ChatBubbleArea />
          </div>
          <div>Message Box</div>
        </div>
      </div>
    );
  }
}
export default withRouter(ChatBody);
ChatBody.contextType = ChatContext;
