import React from "react";
import { login } from "../api"
import {
  RouteComponentProps as Props,
  withRouter,
  NavLink,
} from "react-router-dom";

class Login extends React.Component<Props> {
  state = {
    userName: "",
    password: "",
    shouldRemember: false,
    isLoginButtonPressed: false,
    gotError: false,
    errorType: "userName/password",
    errorMessage: ""
  }

  onLogin = async () => {
    const response = await login({ userName: this.state.userName, password: this.state.password })
    switch (response.status) {
      case 200:
        this.props.history.push("/chat")
        break;
      //userName not found
      case 401:
        this.setState({ gotError: true, errorType: "userName", errorMessage: response.text, isLoginButtonPressed: false })
        break;
      //password didn't match
      case 403:
        this.setState({ gotError: true, errorType: "password", errorMessage: response.text, isLoginButtonPressed: false })
        break;
      //Database is depressed
      case 500:
        this.setState({ gotError: true, errorMessage: response.text, isLoginButtonPressed: false })
        break;
      default:
        console.log("Unknown response from the server.")
        this.setState({ gotError: true, errorMessage: "Server issue.", isLoginButtonPressed: false })
        break;
    }
  };

  errorMessage = () => {
    return (
      <p className="text-red-500 font-mono text-xs ml-[4px] mt-[4px]">{this.state.errorMessage}</p>
    )
  }

  render() {
    return (
      <div className="relative h-full w-full flex sm:justify-center items-center sm:bg-custom-blue/10">
        <div className="sm:w-fit sm:h-fit sm:bg-white sm:rounded-3xl">

          <div className="w-[77vw] h-[550px] sm:h-fit sm:w-96 font-sans sm:bg-custom-blue/5 flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-3xl pl-[6%] ml-[6%] sm:m-0 sm:p-8 pt-0 sm:border-custom-blue-dark/5 sm:border-1 sm:shadow-2xl sm:shadow-custom-blue/20 border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
            <div className=" text-2xl font-semibold mt-[-8px]">
              Login to JMessenger
            </div>

            <div
              id="login-status"
              className="text-red-600 w-fit border border-solid border-gray-300 hidden"
            >
              {"<Wrong password!>/<Email not found!>"}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="user-name" className="mb-2 flex">
                Username
                {this.state.gotError && this.state.errorType == "userName" && this.errorMessage()}
              </label>
              <input
                type="text"
                spellCheck="false"
                id="user-name"
                placeholder="Username"
                onChange={(e) => {
                  this.setState({ userName: e.target.value, gotError: false, isLoginButtonPressed: false })
                }}
                className=" font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] border-solid sm:bg-transparent border-gray-300 focus:outline-custom-blue "
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="mb-2 flex">
                Password
                {this.state.gotError && this.state.errorType == "password" && this.errorMessage()}
              </label>
              <input
                type="password"
                id="password"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                onChange={(e) => {
                  this.setState({ password: e.target.value, gotError: false, isLoginButtonPressed: false })
                }}
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] sm:bg-transparent border-gray-300 border-solid focus:outline-custom-blue"
              />
            </div>

            {/*This is Remember me and Forgot password div*/}
            <div className="flex justify-between w-full">
              {/**/}
              <div className="flex justify-between ">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="mr-[10px] size-4"
                />
                <label htmlFor="remember-me" className=" text-gray-500">
                  Remember me
                </label>
              </div>

              <div>
                <NavLink
                  className=" no-underline hover:underline text-custom-blue"
                  to="/forgot-password"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>
            <button
              onClick={() => {
                if (!this.state.isLoginButtonPressed) {
                  this.setState({ isLoginButtonPressed: true })
                  this.onLogin()
                }
              }}
              className="w-full h-10 active:bg-custom-blue-dark bg-custom-blue border-0 text-white mt-3 sm:rounded-3xl font-sans text-base font-semibold"
            >
              Log in
            </button>
            <NavLink
              className=" no-underline hover:underline mt-[10px] text-base text-custom-blue"
              to="/register"
            >
              Don't have an account?
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
