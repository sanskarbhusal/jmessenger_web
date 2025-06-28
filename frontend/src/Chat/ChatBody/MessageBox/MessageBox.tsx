import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"relative pt-[18px] pb-[18px] w-full h-full flex flex-row justify-center items-start sm:items-center sm:transparent" + " " + this.props.className}>
      <textarea
        id="textarea"
        autoComplete="off"
        spellCheck="false"
        placeholder="Message"
        className="peer relative z-10 w-[90%] sm:w-[96%] min-h-[50px] sm:min-h-full text-lg text-black font-medium font-sans rounded-3xl border-[1px] border-gray-300 bg-white sm:bg-gray-100 sm:drop-shadow-none shadow-inner pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none resize-nonee">
      </textarea>
      <div className="hidden transition sm:block sm:peer-focus:bg-custom-blue/30 absolute z-0 h-[71%] w-[97%] sm:h-full blur-sm rounded-3xl bg-custom-blue/20  "></div>
    </div>;
  }
}
