import React from "react";
type Props = Required<typeof ChatBody.defaultProps> & { className?: string };
export default class ChatBody extends React.Component<Props> {
  static defaultProps = {};
  render() {
    return (
      <div className={"text-center" + " " + this.props.className}>ChatBody</div>
    );
  }
}
