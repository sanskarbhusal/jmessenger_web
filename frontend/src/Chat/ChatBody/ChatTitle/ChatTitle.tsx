import React from "react";
type State = {};
type Props = Required<typeof ChatTitle.defaultProps> & { className?: string };
export default class ChatTitle extends React.Component<Props, State> {
  static defaultProps = { foo: "foo" };
  state = {};
  render() {
    return <div>Chat Title</div>;
  }
}
