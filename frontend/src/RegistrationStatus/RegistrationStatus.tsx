import React from "react";
import {
  withRouter,
  RouteComponentProps as Props,
  NavLink,
} from "react-router-dom";
class RegistrationStatus extends React.Component<Props> {
  render() {
    return (
      <div className="absolute self-center flex justify-center items-center text-center items-center">
        <h1>Account Registered</h1>
        <br></br>
        <NavLink to="/">Go back to login</NavLink>
      </div>
    );
  }
}
export default withRouter(RegistrationStatus);
