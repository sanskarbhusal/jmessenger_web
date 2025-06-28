import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"relative w-full h-full flex flex-col justify-center items-start sm:items-center sm:bg-white" + " " + this.props.className}>
      <input
        autoComplete="off"
        spellCheck="false"
        placeholder="Type a message"
        className="peer relative z-10 flex flex-col placeholder:text-center w-[90%] sm:w-[96%] h-[50px] sm:h-[52px] max-h-auto text-wrap overflow-hidden font-normal text-base text-black  font-sans rounded-3xl border-[1px] border-gray-300 bg-white sm:bg-gray-100 sm:drop-shadow-none shadow-inner pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none">
      </input>
      <div className="hidden absolute z-0 transition sm:block sm:peer-focus:bg-custom-blue-dark/30 bottom-[19px] h-[71%] w-[97%] blur-sm rounded-3xl bg-custom-blue-dark/20  "></div>
    </div>;
  }
}
