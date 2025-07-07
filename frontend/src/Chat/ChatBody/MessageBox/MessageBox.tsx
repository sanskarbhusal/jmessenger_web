import React from "react";
import { BiSolidSend as SendButton } from "react-icons/bi";
import ChatContext from "../../ChatContext"
import { query } from "../../chatData.tsx"

type MessageBoxType = {
  contentType: "text"
  content: string
  timestamp: string
}

type State = {
  value: string
  enterToSend: boolean
};
type Props = { className?: string };

/* class Dummy extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <textarea id="dummy" className=""></textarea>
      </div>
    )
  }
}
 */

export default class MessageBox extends React.Component<Props, State> {

  messageBoxRef = React.createRef<HTMLTextAreaElement>()

  declare context: React.ContextType<typeof ChatContext>
  static contextType = ChatContext
  textAreaRef;
  constructor(props: Props) {
    super(props)
    this.state = { value: "", enterToSend: true }
    this.textAreaRef = React.createRef<HTMLTextAreaElement>()
  }

  componentDidMount() {

  }

  sendMessage() {
    if (this.state.value == "") {
      return
    }
    const message: MessageBoxType = {
      contentType: "text",
      content: this.state.value,
      timestamp: new Date().toISOString()
    }
    this.setState({ value: "" })
    const isUpdated = query.updateChatHistory(this.context.getCurrentChat().chatId, message)
    if (isUpdated) {
      this.context.forceUpdateChat()
    } else {
      alert("Oopsie daisy happened while updating data store! (MessageBox.tsx)")
    }
  }

  render() {
    return (
      <div className={"relative max-w-full min-w-full h-[100%] flex flex-col justify-center items-center sm:bg-transparent" + " " + this.props.className}>
        <div className="relative z-10 w-[96%] m-[6px] bottom-[10px] flex flex-row justify-center items-start bg-transparent">
          <textarea
            ref={this.textAreaRef}
            onKeyDown={(e) => {
              if (this.state.enterToSend && e.key == "Enter") {
                e.preventDefault()
                this.sendMessage()
              }
            }
            }
            onChange={(e) => {
              this.setState({ value: e.target.value })
            }}
            value={this.state.value}
            id="textarea"
            autoComplete="off"
            placeholder="Type a message"
            className={"peer sm:flex overflow-hidden pt-[11px] items-center w-full sm:min-h-[100%] sm:max-h-[200px] scrollbar-thin font-normal text-lg text-black  font-sans rounded-3xl rounded-r-none border-[1px] border-custom-blue-dark/35 border-r-0 bg-white sm:bg-gray-100 pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none resize-none selection:bg-custom-blue/90 selection:text-white"}>
          </textarea>
          <div className="relative sm:flex z-10 flex flex-row justify-center items-end p-[5px] min-h-[100%] w-[52px] border-[1px] border-l-0 border-custom-blue/30 bg-gray-100 rounded-r-3xl">
            <div
              onClick={() => {
                this.sendMessage()
              }}
              className="group p-[6px] flex flex-row justify-center items-center rounded-full sm:border-[1px] sm:border-transparent bg-custom-blue/20 hover:border-custom-blue/45 active:bg-custom-blue transition">
              <SendButton className="h-[27px] w-[27px] text-custom-blue group-active:text-white transition duration-75" />
            </div>
          </div>
        </div>
        <div className="hidden transition sm:block absolute z-0 bottom-[10px] min-h-[100%] w-[96.8%] blur-sm rounded-3xl bg-gradient-to-bl from-custom-blue-dark/15 to-custom-blue-dark/30 "></div>
      </div >
    );
  }
}
export type { MessageBoxType }