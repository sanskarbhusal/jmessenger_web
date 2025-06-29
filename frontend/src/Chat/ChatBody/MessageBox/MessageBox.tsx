import React from "react";
import { BiSolidSend as SendButton } from "react-icons/bi";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return (
      <div className={"group relative w-ful h-[100%] flex flex-col justify-center items-center sm:bg-transparent" + " " + this.props.className}>
        <div className="relative z-10 w-[96%] m-[6px] bottom-[10px] flex flex-row justify-center items-start bg-transparent">
          <textarea
            id="textarea"
            autoComplete="off"
            spellCheck="false"
            placeholder="Type a message"
            className="peer field-sizing-content sm:flex overflow-hidden pt-[10px] w-full sm:min-h-[100%] sm:max-h-[200px] overflow-y-scroll scrollbar-thin font-normal text-lg text-black  font-sans rounded-3xl rounded-r-none border-[1px] border-custom-blue-dark/35 border-r-0 bg-white sm:bg-gray-100 pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none resize-none selection:bg-custom-blue/90 selection:text-white">
          </textarea>
          <div className="relative sm:flex z-10 peer-focus: flex flex-ro justify-center items-end p-[5px] min-h-[100%] w-[52px] border-[1px] border-l-0 border-custom-blue/30 bg-gray-100 rounded-r-3xl">
            <div className="group p-[6px] flex flex-row justify-center items-center rounded-full sm:border-[1px] sm:border-transparent bg-custom-blue/20 hover:border-custom-blue/45 active:bg-custom-blue transition">
              <SendButton className="h-[27px] w-[27px] text-custom-blue group-active:text-white transition duration-75" />
            </div>
          </div>
        </div>
        <div className="hidden transition sm:block absolute z-0 bottom-[10px] min-h-[100%] w-[96.8%] blur-sm rounded-3xl bg-gradient-to-bl from-custom-blue/15 to-custom-blue/30 "></div>
      </div>
    );
  }
}
