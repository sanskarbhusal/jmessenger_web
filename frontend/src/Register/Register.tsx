import React from "react";
import { RouteComponentProps as Props, withRouter } from "react-router-dom";
class Register extends React.Component<Props> {
  onSignUp = () => {
    if (true) {
      this.props.history.push("/otp-new-account");
    }
  };
  render() {
    return (
      <div className="h-full w-full flex items-center sm:justify-center sm:bg-custom-blue/10">
        <div className="w-fit h-fit sm:bg-white rounded-3xl">

          <div className="w-[77vw] h-[550px] sm:h-fit sm:w-96 font-sans sm:bg-custom-blue/5 flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-3xl pl-[6%] ml-[6%] sm:m-0 sm:p-8 pt-0  sm:border-custom-blue-dark/5 sm:border-1 sm:shadow-2xl sm:shadow-custom-blue/20 border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
            <div className="text-2xl font-semibold mt-[-8px]">
              Sign up to JMessenger
            </div>

            <div className="flex flex-col w-full ">
              <label htmlFor="email" className="mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] border-solid sm:bg-transparent border-gray-300 focus:outline-custom-blue"
              />
            </div>
            <div className="flex flex-col w-full ">
              <label htmlFor="uname" className="mb-2">
                Username
              </label>
              <input
                type="email"
                id="uname"
                placeholder="Example: @ram, @ram_bahadur"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] border-solid sm:bg-transparent  border-gray-300 focus:outline-custom-blue"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="pass" className="mb-2 ">
                Password
              </label>
              <input
                type="password"
                id="pass"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] sm:bg-transparent border-gray-300 border-solid focus:outline-custom-blue"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="confirm-pass" className="mb-2">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm-pass"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] sm:bg-transparent border-gray-300 border-solid focus:outline-custom-blue"
              />
            </div>

            <div className="w-full mt-2 ">
              <button
                onClick={this.onSignUp}
                className="font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 mb-2 sm:rounded-3xl w-full font-semibold "
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);
