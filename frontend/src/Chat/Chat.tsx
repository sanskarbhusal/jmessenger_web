import React from "react";
import NavBar from "./NavBar";
import ContactList from "./ContactList";
import ChatBody from "./ChatBody";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChatContext from "./ChatContext.tsx";
type State = {
  visibility: string;
};
class Chat extends React.Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      visibility: "block",
    };
    this.hideContact = this.hideContact.bind(this);
    this.showContact = this.showContact.bind(this);
  }
  hideContact() {
    this.setState({ visibility: "hidden" });
  }
  showContact() {
    this.setState({ visibility: "block" });
  }
  render() {
    return (
      <div className="h-full w-full flex flex-col sm:flex-row">
        <ChatContext.Provider
          value={{ show: this.showContact, hide: this.hideContact }}
        >
          <div
            className={
              "h-full w-full flex flex-col sm:w-fit" +
              " " +
              this.state.visibility
            }
          >
            <NavBar className="relative z-10" />
            <ContactList className="relative z-10" />
          </div>
          <ChatBody className="absolute z-0" />
        </ChatContext.Provider>
      </div>
    );
  }
}
export default withRouter(Chat);
export { ChatContext };
