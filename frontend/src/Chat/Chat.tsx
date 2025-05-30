import React from "react";
import NavBar from "./NavBar";
import ContactList from "./ContactList";
import ChatBody from "./ChatBody";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChatContext from "./ChatContext.tsx";
type State = {
  z_index: string;
};
class Chat extends React.Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      z_index: "",
    };
    this.liftChatBody = this.liftChatBody.bind(this);
    this.liftContact = this.liftContact.bind(this);
  }
  liftChatBody() {}
  liftContact() {}

  handlersBundle = {
    liftContact: this.liftContact,
    liftChatBody: this.liftChatBody,
  };
  render() {
    return (
      <div className="h-full w-full flex flex-col">
        <ChatContext.Provider value={this.handlersBundle}>
          <NavBar className="relative z-20" />
          <ContactList className="relative z-20" />
          <ChatBody className="absolute z-10" />
        </ChatContext.Provider>
      </div>
    );
  }
}
export default withRouter(Chat);
export { ChatContext };
