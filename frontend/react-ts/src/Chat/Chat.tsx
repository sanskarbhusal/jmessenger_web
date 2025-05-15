import React from "react";
import NavBar from "./NavBar";
import ContactList from "./ContactList";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps;

class Chat extends React.Component<Props> {
  render() {
    return (
      <div className="h-dvh w-dvw flex flex-col">
        <NavBar />
        <ContactList />
      </div>
    );
  }
}
export default withRouter(Chat);
