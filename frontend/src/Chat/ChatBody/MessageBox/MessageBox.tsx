import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"w-full h-full flex flex-col justify-start items-center drop-shadow-lg" + " " + this.props.className}>
      <div className="h-[50px] w-[90%] bg-white rounded-3xl border-[1px] border-gray-300/85">
        <input placeholder="Message" className="h-full w-full pl-10 pr-10 text-lg font-normal font-sans bg-transparent placeholder-gray-500/80 outline-none"></input>
      </div>
    </div>;
  }
}
