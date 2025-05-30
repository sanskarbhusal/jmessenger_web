import React from "react";
import NavBar from "./NavBar";
import ContactList from "./ContactList";
import ChatBody from "./ChatBody";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChatContext from "./ChatContext.tsx";

type State = {
  z1: string;
  z2: string;
  swap: () => void;
};

class Chat extends React.Component<RouteComponentProps, State> {
  state = {
    z1: "z-10",
    z2: "z-0",
    swap: () => {
      this.setState((prev) => {
        let z1 = prev.z1;
        let z2 = prev.z2;
        const tmp = z1;
        z1 = z2;
        z2 = tmp;
        return { z1: z1, z2: z2 };
      });
    },
  };

  render() {
    return (
      <div className="h-full w-full flex flex-col">
        <ChatContext.Provider value={this.state.swap}>
          <NavBar className={this.state.z1} />
          <ContactList className={this.state.z1} />
          <ChatBody className={this.state.z2} />
        </ChatContext.Provider>
      </div>
    );
  }
}

export default withRouter(Chat);
export { ChatContext };
