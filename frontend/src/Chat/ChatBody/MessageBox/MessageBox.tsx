import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"w-full h-full flex flex-row justify-center items-start sm:items-center sm:bg-custom-blue/10" + " " + this.props.className}>
      <div className="relative h-full w-full flex flex-row justify-center items-center">
        <input
          autoComplete="off"
          spellCheck="false"
          placeholder="Message"
          className="peer relative z-10 sm:bottom-[6px] w-[90%] sm:w-[96%] min-h-[50px] sm:h-[52px] text-lg text-black font-medium font-sans rounded-3xl border-[1px] border-gray-300 bg-white sm:drop-shadow-none shadow-inner pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none">
        </input>
        <div className="peer-a hidden sm:peer-focus:block absolute z-0 bottom-[18px] h-[74%] w-[97%] blur-sm rounded-3xl bg-custom-blue/10 "></div>
      </div>
    </div>;
  }
}
