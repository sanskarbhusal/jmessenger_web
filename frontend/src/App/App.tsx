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
    const width = this.appRef.current!.offsetWidth
    if (width <= 640) {
      this.setState({ isDesktop: false })
    } else {
      this.setState({ isDesktop: true })
    }
  }

  render() {
    return (
      <Router>
        <div ref={this.appRef} className="fixed h-full w-full overflow-none">
          <div className="h-full flex flex-col justify-center items-center sm:hidden font-black text-2xl gap-2">
            Please visit the site from desktop.
            <div>
              Sorry for the inconvenience
            </div>

          </div>
          {this.state.isDesktop && <Routes />}
        </div>
      </Router>
    );
  }
}
