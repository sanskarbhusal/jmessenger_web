import NavBar from "./NavBar";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps;

class Chat extends React.Component<Props> {
  render() {
    return (
      <div className="h-dvh sm:bg-custom-blue/5">
        <NavBar />
      </div>
    );
  }
}
export default withRouter(Chat);
