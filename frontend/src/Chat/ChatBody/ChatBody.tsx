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
          "bg-green-300 w-full h-full flex flex-row justify-center items-center" +
          " " +
          this.props.className +
          " " +
          this.state.visibility
        }
      >
        <button
          onClick={() => {
            this.context();
            console.log("ChatBody button is clicked");
          }}
        >
          ChatBody
        </button>
      </div>
    );
  }
}
export default withRouter(ChatBody);
ChatBody.contextType = ChatContext;
