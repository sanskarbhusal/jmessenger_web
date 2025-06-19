import React from "react";
import Login from "../Login";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";
import OTPNewAccount from "../OTPNewAccount";
import RegistrationStatus from "../RegistrationStatus";
import OTPNewPassword from "../OTPNewPassword";
import NewPasswordStatus from "../NewPasswordStatus";
import Chat from "../Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="fixed h-full w-full overflow-none">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/otp-new-password" component={OTPNewPassword} />
            <Route path="/new-password-status" component={NewPasswordStatus} />
            <Route path="/registration-status" component={RegistrationStatus} />
            <Route path="/otp-new-account" component={OTPNewAccount} />
            <Route path="/register" component={Register} />
            <Route path="/chat" component={Chat} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </div>
      </Router>
    );
  }
}
