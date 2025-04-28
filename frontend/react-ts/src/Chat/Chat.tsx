import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps;
class Chat extends React.Component<Props> {
  render() {
    return (
      <div className="absolute self-center w-full text-center">
        <h1 className="text-center">Chat UI is under construction</h1>
      </div>
    );
  }
}
export default withRouter(Chat);
