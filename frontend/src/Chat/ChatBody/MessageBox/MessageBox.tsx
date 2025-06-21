import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"w-full h-full flex flex-row justify-center items-start sm:items-center sm:focus:drop-shadow-md sm:bg-custom-blue/5" + " " + this.props.className}>
      <div className="w-[90%] sm:w-[80%] h-[50px] sm:h-[52px] rounded-full bg-white">
        <input type="text" autoComplete="off" spellCheck="false" placeholder="Message" className="h-full w-full text-lg text-black font-medium font-sans rounded-full border-[1px] border-gray-400 focus:border-gray-500 focus:bg-white shadow-inner drop-shadow-sm pl-10 pr-10 placeholder-gray-500/80 outline-none"></input>
      </div>
    </div>;
  }
}
