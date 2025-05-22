import React from "react";
type Props = Required<typeof ChatBody.defaultProps> & { className?: string };
export default class ChatBody extends React.Component<Props> {
  static defaultProps = {};
  render() {
    return (
      <div
        className={
          "bg-green-300 w-full hidden sm:flex sm:flex-row sm:justify-center sm:items-center" +
          " " +
          this.props.className
        }
      >
        <div>ChatBody</div>
      </div>
    );
  }
}
