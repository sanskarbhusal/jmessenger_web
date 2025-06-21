import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"w-full h-full flex flex-row justify-center items-start sm:items-center sm:bg-custom-blue/10" + " " + this.props.className}>
      <div className="h-full w-full flex flex-row justify-center items-center">
        <input
          autoComplete="off"
          spellCheck="false"
          placeholder="Message"
          className="relative sm:bottom-[6px] w-[90%] sm:w-[96%] min-h-[50px] sm:h-[52px] text-lg text-black font-medium font-sans rounded-3xl border-[1px] border-gray-300 focus:border-gray-400 bg-white drop-shadow-sm shadow-inner pl-10 pr-10 placeholder-gray-500/80 outline-none">
        </input>
      </div>
    </div>;
  }
}
