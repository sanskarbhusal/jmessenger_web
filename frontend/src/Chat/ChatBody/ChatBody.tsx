import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChatContext from "../ChatContext.tsx";
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
          "bg-green-300 w-dvw h-dvh flex flex-row" + " " + this.props.className
        }
      >
        <div className="bg-blue-400 min-w-[388px]"></div>
        <div className="w-full flex flex-row justify-center items-center">
          <button
            className="bg-pink-400 h-10 w-20"
            onClick={() => {
              this.context();
              console.log("ChatBody button is clicked");
            }}
          >
            ChatBody
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(ChatBody);
ChatBody.contextType = ChatContext;
