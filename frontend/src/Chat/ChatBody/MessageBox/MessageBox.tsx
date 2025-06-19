import React from "react";
type State = {};
type Props = Required<typeof MessageBox.defaultProps> & { className?: string };
export default class MessageBox extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className={"bg-green-300 w-full h-full" + " " + this.props.className}>
      <button className="bg-blue-500 w-" onClick={function () {
        console.log("Message Box's buton clicked " + Math.random())
      }}>
        test
      </button>
    </div>;
  }
}
