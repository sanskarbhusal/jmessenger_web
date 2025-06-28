import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"w-full h-full flex flex-row justify-center items-start sm:items-center sm:bg-transparent" + " " + this.props.className}>
      <div className="relative h-full w-full flex flex-row justify-center items-center">
        <textarea
          id="textarea"
          autoComplete="off"
          spellCheck="false"
          placeholder="Type a message"
          className="peer field-sizing-content overflow-hidden relative z-10 pt-[9px] sm:bottom-[6px] w-[90%] sm:w-[96%] min-h-[70%px] font-normal text-lg text-black  font-sans rounded-3xl border-[1px] border-gray-300 bg-white sm:bg-gray-100 sm:drop-shadow-none shadow-inner pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none resize-none">
        </textarea>
        <div className="hidden transition sm:block sm:peer-focus:bg-custom-blue-dark/30 absolute z-0 bottom-[19px] h-[71%] w-[97%] blur-sm rounded-3xl bg-custom-blue/20  "></div>
      </div>
    </div>;
  }
}
