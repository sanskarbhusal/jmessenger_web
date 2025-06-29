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

const Routes = () => {
  return (
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
  )
}
export default class App extends React.Component {

  appRef = React.createRef<HTMLDivElement>()
  state = { isDesktop: false }

  componentDidMount() {
    const width = this.appRef.current?.offsetWidth
    this.setState({ isDesktop: width! > 640 ? true : false })
  }
  render() {
    return (
      <Router>
        <div ref={this.appRef} className="fixed h-full w-full overflow-none">
          <div className="h-full flex flex-col text-center justify-center items-center sm:hidden font-extrabold text-xl gap-5 bg-custom-blue/10 text-custom-blue-dark">
            Please visit the site from your laptop/desktop.
            <span className="m">
              Sorry for the inconvenience.	&#128517;  {/* &#128517; renders embarrassed emoji character */}
            </span>
          </div>
          {this.state.isDesktop && <Routes />}
        </div>
      </Router>
    );
  }
}
