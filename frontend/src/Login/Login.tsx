import React from "react";
import {
  RouteComponentProps as Props,
  withRouter,
  NavLink,
} from "react-router-dom";
class Login extends React.Component<Props> {
  onLogin = () => {
    this.props.history.push("/chat");
  };
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
              <label htmlFor="email" className="mb-2 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className=" font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] border-solid sm:bg-transparent border-gray-300 focus:outline-custom-blue "
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
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

            <div className="w-full">
              <button
                onClick={this.onLogin}
                className="active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 mb-2 sm:rounded-3xl w-full font-sans text-base font-semibold"
              >
                Log in
              </button>
            </div>
            <div>
              <NavLink
                className=" no-underline hover:underline text-base text-custom-blue"
                to="/register"
              >
                Don't have an account?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
