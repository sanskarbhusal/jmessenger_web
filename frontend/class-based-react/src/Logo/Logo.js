import React from "react";
export default class Logo extends React.Component {
  path = this.props.path;
  render() {
    return <img src={path} className="bg-red-600 w-20 h-20"></img>;
  }
}
