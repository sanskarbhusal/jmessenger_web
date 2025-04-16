import React from "react";
import Logo from "../Logo";
import Login from "../Login";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";
import EmailVerification from "../EmailVerification";
import Chat from "../Chat";

import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="h-full w-full flex flex-col justify-top sm:gap-32 items:top sm:items-center sm:bg-custom-blue/5">
          <div className=" w-full">
            <Logo
              path="logo-transparent.svg"
              className="flex flex-col justify-center items-center w-20 h-auto sm:w-32 ml-[-11] mt-[-6] "
            />
          </div>
          <Route exact path="/" component={Login} />
          <Route path="/otp" component={EmailVerification} />
          <Route path="/register" component={Register} />
          <Route path="/chat" component={Chat} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </div>
      </Router>
    );
  }
}
