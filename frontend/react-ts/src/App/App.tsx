import React from "react";
import Logo from "../Logo";
import logoPath from "../assets/logo-transparent.svg";
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
        <div className="relative h-dvh w-dvw flex flex-row sm:justify-center items-start sm:gap-32 sm:bg-custom-blue/5">
          <div className="flex justify-start w-full hidden ">
            <Logo
              path={logoPath}
              className="flex  flex-col justify-center items-center w-24 sm:w-32 h-auto ml-[-11px] mt-[-6px] "
            />
          </div>
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
