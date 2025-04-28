import React from "react";
import { withRouter } from "react-router-dom";
class Logo extends React.Component {
  path = this.props.path;
  className = this.props.className;
  onClickLogo = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <img
        className={this.className}
        onClick={this.onClickLogo}
        src={this.path}
      ></img>
    );
  }
}
export default withRouter(Logo);
