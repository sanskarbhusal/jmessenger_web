import React from "react";
import Contact from "./Contact";
import ChatContext from "../ChatContext.tsx"
import type { ContactPropsType } from "./Contact/Contact.tsx"

type Props = Required<typeof ContactList.defaultProps> & { className?: string };
type State = { msg: string }

export default class ContactList extends React.Component<Props, State> {

  static defaultProps = {};
  static contextType = ChatContext
  declare context: React.ContextType<typeof ChatContext>

  constructor(props: Props) {
    super(props)
    this.state = { msg: "ContactList state updated" } as State
  }

  Contacts = () => {
    const chatList = this.context.chatData.chatList
    const ContactArray = chatList.map((item, index) => {
      const { chatName, chatId, history } = item
      const contactProps: ContactPropsType = {} as ContactPropsType
      const lastElement = history[history.length - 1] //extracting last element
      contactProps.chatName = chatName
      contactProps.chatId = chatId
      contactProps.lastMessage = lastElement.content
      contactProps.dateOfLastMessage = lastElement.timestamp
      switch (lastElement.sender) {
        case "You":
          contactProps.lastPersonToMessage = lastElement.sender
          break;
        case "chat":
          contactProps.lastPersonToMessage = chatName
          break;
      }
      return <Contact key={index} {...contactProps} />
    })
    return ContactArray
  };

  render() {
    return (
      <div
        className={
          "relative z-0 h-full w-full p-[12px] sm:pl-[16px] sm:pr-[2px] sm:pt-[5px] sm:pb-[12px] gap-[12px] bg-white sm:bg-transparent flex flex-col items-center overflow-y-scroll overflow-x-hidden scrollbar-thin" +
          " " +
          this.props.className
        }
      >
        {this.Contacts()}
      </div>
    );
  }
}