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
  myRef: React.RefObject<HTMLDivElement>;
  constructor(props: RouteComponentProps) {
    super(props);
    this.myRef = React.createRef();
    this.getWidth = this.getWidth.bind(this);
    this.state = {
      z1: "z-10",
      z2: "z-0",
      swap: () => {
        this.setState((prev) => {
          let z1 = prev.z1;
          let z2 = prev.z2;
          if (this.getWidth() < 640) {
            const tmp = z1;
            z1 = z2;
            z2 = tmp;
          }
          return { z1: z1, z2: z2 };
        });
      },
    };
  }
  getWidth() {
    const screen_width = this.myRef.current!.offsetWidth;
    this.myRef.current!.onresize;
    return screen_width;
  }

  render() {
    return (
      <div
        ref={this.myRef}
        className="relative h-full w-full flex flex-col sm:flex-row"
      >
        <ChatContext.Provider value={this.state.swap}>
          <div className="flex flex-col w-full sm:w-[388px] overflow-y-hidden">
            <NavBar className={"relative" + " " + this.state.z1} />
            <ContactList className={"relative " + " " + this.state.z1} />
          </div>
          <ChatBody className={"absolute" + " " + this.state.z2} />
        </ChatContext.Provider>
      </div>
    );
  }
}

export default withRouter(Chat);
export { ChatContext };
