import React from "react";
import logoPath from "../assets/logo-transparent.svg";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps & {
  className?: string;
};
class Logo extends React.Component<Props> {
  onClickLogo = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <img
        className={
          "flex flex-col justify-center items-center w-20 sm:w-24 h-auto ml-[-11px] mt-[-6px] " +
          " " +
          this.props.className
        }
        onClick={this.onClickLogo}
        src={logoPath}
      ></img>
    );
  }
}
export default withRouter(Logo);
