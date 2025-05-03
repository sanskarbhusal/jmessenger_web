import NavBar from "./NavBar";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps;

class Chat extends React.Component<Props> {
  render() {
    return (
      <div className=" w-full h-full bg-red-200">
        <NavBar />
      </div>
    );
  }
}
export default withRouter(Chat);
