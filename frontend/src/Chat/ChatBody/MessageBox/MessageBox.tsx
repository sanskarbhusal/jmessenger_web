import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return (
      <div className="w-full h-full bg-white flex flex-col items-start">

        <textarea
          autoComplete="off"
          spellCheck="false"
          placeholder="Message"
          className="field-sizing-content peer relative z-10 w-full min-h-[50px] text-lg text-black font-medium font-sans rounded-3xl border-[1px] border-gray-300 bg-white sm:bg-gray-100 sm:drop-shadow-none shadow-inner pl-10 pr-10 placeholder-gray-500/80 outline-none ring-0 focus:ring-0 focus:outline-none">
        </textarea>
      </div>
    )
  }
}
