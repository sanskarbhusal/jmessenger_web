import React from "react";
import { BiSolidSend as SendButton } from "react-icons/bi";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return (
      <div className={"relative mt-1 pt-[10px] pb-[10px] w-full h-full flex flex-row justify-center items-start sm:items-center sm:bg-transparent" + " " + this.props.className}>
        <textarea
          id="textarea"
          autoComplete="off"
          spellCheck="false"
          placeholder="Type a message"
          className="peer field-sizing-content overflow-hidden pt-[11px] w-[92%] sm:min-w-[92%] sm:max-w-[92%] sm:min-h-[54px] sm:max-h-[200px] overflow-y-scroll scrollbar-thin font-normal text-lg text-black  font-sans rounded-3xl rounded-r-none border-[1px] border-custom-blue/45 border-r-0 bg-white sm:bg-gray-100 pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none resize-none selection:bg-custom-blue/90 selection:text-white">
        </textarea>
        <div className="flex flex-row justify-center items-center h-[54px] w-[52px] border-[1px] border-l-0 border-custom-blue/45 bg-gray-100 rounded-r-3xl">
          <div className="group relative z-0 group p-[6px] flex flex-row justify-center items-center rounded-full sm:border-[1px] sm:border-transparent bg-custom-blue/20 hover:border-custom-blue/45 active:bg-custom-blue transition">
            <SendButton className="h-[29px] w-[29px] text-custom-blue group-active:text-white transition duration-75" />
          </div>
        </div>
      </div>
    );
  }
}
