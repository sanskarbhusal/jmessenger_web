import React from "react";
import NavBar from "./NavBar";
import ContactList from "./ContactList";
import ChatBody from "./ChatBody";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChatContext from "./ChatContext.tsx";
import chatData from "./chatData.tsx"

type State = {
  z1: string;
  z2: string;
  visibility?: string;
  swap: () => void;
  currentChatId: string;
  currentChatName: string;
};

class Chat extends React.Component<RouteComponentProps, State> {

  myRef: React.RefObject<HTMLDivElement>;
  chatData: typeof chatData
  getWidth() {
    const screen_width = this.myRef.current!.offsetWidth;
    return screen_width;
  }

  constructor(props: RouteComponentProps) {
    super(props);
    this.myRef = React.createRef();
    this.getWidth = this.getWidth.bind(this);
    this.swap = this.swap.bind(this)
    this.setCurrentChat = this.setCurrentChat.bind(this)
    this.getCurrentChat = this.getCurrentChat.bind(this)
    this.updateUI = this.updateUI.bind(this)
    this.chatData = chatData
    this.state = {
      z1: "z-20",
      z2: "z-0",
      swap: this.swap,
      currentChatId: "none",
      currentChatName: "none"
    };
  }

  swap() {
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
  }

  setCurrentChat(chatId: string, chatName: string) {
    this.setState({ currentChatId: chatId, currentChatName: chatName })
  }

  getCurrentChat() {
    return { chatId: this.state.currentChatId, chatName: this.state.currentChatName }
  }

  updateUI() {
    this.forceUpdate()
  }

  render() {
    return (
      <div className="w-full h-full bg-white sm:bg-custom-blue/10 flex flex-row justify-center items-center drop-shadow-2xl">
        <div
          ref={this.myRef}
          className="relative rounded-none 2xl:rounded-lg h-full w-full bg-white bg-gradient-to-bl from-white to-custom-blue-dark/20 2xl:top-[-2px] 2xl:h-[97vh] 2xl:w-[83vw] 2xl:border-[1px] 2xl:border-custom-blue/30 flex flex-col sm:flex-row sm:shadow-inner sm:shadow-custom-blue/10 2xl:shadow-none"
        >
          <ChatContext.Provider value={{ swap: this.state.swap, chatData: this.chatData, setCurrentChat: this.setCurrentChat, getCurrentChat: this.getCurrentChat, forceUpdateChat: this.updateUI }} >
            <div className="flex flex-col w-full h-full sm:w-[388px] overflow-y-hidden">
              <NavBar className={"relative" + " " + this.state.z1 + " "} />
              <ContactList className={"relative " + " " + this.state.z1} />
            </div>
            {this.state.currentChatId != "none" && <ChatBody className={"absolute" + " " + this.state.z2 + " " + "" + {}} />}
          </ChatContext.Provider>
        </div>
      </div >
    );
  }
}

export default withRouter(Chat);
export { ChatContext };
