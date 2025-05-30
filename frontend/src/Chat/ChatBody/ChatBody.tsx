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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visibility: "block",
    };
  }
  handleClick() {}
  declare context: React.ContextType<typeof ChatContext>;
  render() {
    return (
      <div
        className={
          "absolute left-96 bg-green-300 w-full h-full flex flex-row justify-center items-center" +
          " " +
          this.props.className +
          " " +
          this.state.visibility
        }
      >
        <button
          onClick={() => {
            this.context();
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
