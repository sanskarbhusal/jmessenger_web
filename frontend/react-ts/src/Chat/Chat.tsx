import NavBar from "./NavBar.tsx";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps;

class Chat extends React.Component<Props> {
  render() {
    return (
      <div className=" w-full h-full ">
        <NavBar />
      </div>
    );
  }
}
export default withRouter(Chat);
