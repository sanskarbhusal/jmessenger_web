import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps & {
  /**Add optoinal props here */
  path: string;
  className: string;
};
class Logo extends React.Component<Props> {
  onClickLogo = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <img
        className={this.props.className}
        onClick={this.onClickLogo}
        src={this.props.path}
      ></img>
    );
  }
}
export default withRouter(Logo);
