import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"w-full h-full flex flex-row justify-center items-start sm:items-center sm:focus:drop-shadow-md bg-custom-blue/10" + " " + this.props.className}>
      <div className="w-[90%] sm:w-[90%] h-[50px] sm:h-[52px]">
        <input type="text" autoComplete="off" spellCheck="false" placeholder="Message" className="h-full w-full text-lg text-black font-medium font-sans rounded-3xl border-[1px] border-gray-300 focus:border-gray-500 bg-white drop-shadow-md pl-10 pr-10 placeholder-gray-500/80 outline-none"></input>
      </div>
    </div>;
  }
}
