import React from "react";
type State = {};
type Props = Required<typeof ChatBubble.defaultProps> & {
  className?: string;
};
export default class ChatBubble extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div>ChatBubble</div>;
  }
}
