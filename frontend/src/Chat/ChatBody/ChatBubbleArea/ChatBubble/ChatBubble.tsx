import React from "react";
type State = {};
type Props = Required<typeof ChatBubble.defaultProps> & {
  className?: string;
};
export default class ChatBubble extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div className="bg-yellow-300 w-20 h-20">ChatBubble</div>;
  }
}
