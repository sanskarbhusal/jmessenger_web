import React from "react";
import Contact from "./Contact";
import ChatContext from "../ChatContext.tsx"
import type { ContactPropsType } from "./Contact/Contact.tsx"
import { getDate } from "../utils.tsx"

type Props = { className?: string };
type State = {
  msg: string,
  contactList: ContactPropsType[]
}

export default class ContactList extends React.Component<Props, State> {

  static contextType = ChatContext
  declare context: React.ContextType<typeof ChatContext>
  constructor(props: Props) {
    super(props)

    this.state = {
      msg: "ContactList state updated",
      contactList: [
        {
          userName: "",
          fullName: "",
          dateOfLastMessage: "",
          lastMessage: "",
          lastPersonToMessage: "You"
        }]
    }
  }

  fetchContactList = () => {
    return new Promise<ContactPropsType[]>((resolve) => {
      this.context.getSocket().emit("getContactList", { userName: "sanskar" }, (res: ContactPropsType[]) => resolve(res))
    })
  }

  async componentDidMount() {
    this.setState({ contactList: await this.fetchContactList() })
    console.log(this.state.contactList)
  }

  Contacts = () => {
    const contactList = this.state.contactList
    const ContactArray = contactList.map((item, index) => {

      const { fullName, userName, dateOfLastMessage, lastPersonToMessage, lastMessage } = item
      const contactProps: ContactPropsType = {} as ContactPropsType

      contactProps.fullName = fullName
      contactProps.userName = userName
      contactProps.lastMessage = lastMessage
      contactProps.dateOfLastMessage = getDate(new Date(dateOfLastMessage).toDateString())
      contactProps.lastPersonToMessage = lastPersonToMessage

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