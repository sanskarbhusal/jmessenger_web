import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = Required<typeof ChatBody.defaultProps> &
  RouteComponentProps & { className?: string };
class ChatBody extends React.Component<Props> {
  static defaultProps = {};
  render() {
    return (
      <div
        className={
          "bg-green-300 w-full hidden sm:flex sm:flex-row sm:justify-center sm:items-center" +
          " " +
          this.props.className
        }
      >
        <div>ChatBody</div>
      </div>
    );
  }
}
export default withRouter(ChatBody);
