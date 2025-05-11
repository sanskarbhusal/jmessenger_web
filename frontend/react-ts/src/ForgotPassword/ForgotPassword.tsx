import React from "react";
import Logo from "../Logo";
import { RouteComponentProps as Props, withRouter } from "react-router-dom";
class ForgotPassword extends React.Component<Props> {
  render() {
    return (
      <div className="h-full w-full grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] sm:bg-custom-blue/5">
        <Logo />
        <div className="sm:justify-self-center col-span-3 w-[76%] h-[550px] sm:h-fit sm:w-80 bg-white font-sans flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-lg pl-[6%] ml-[6%] mt-16 sm:mt-0 sm:m-0 sm:p-8 pt-0 sm:border-custom-blue-dark/5 sm:border sm:shadow-2xl sm:shadow-custom-blue/20 border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
          <div className="text-2xl font-semibold mt-[-8px]">
            Request new password
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="pass" className="mb-2 ">
              New password
            </label>
            <input
              type="password"
              id="pass"
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              className="font-sans text-base p-2 sm:rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirm-pass" className="mb-2">
              Re-type new password
            </label>
            <input
              type="password"
              id="confirm-pass"
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              className="font-sans text-base p-2 sm:rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
            />
          </div>

          <div className="w-full mt-2 ">
            <button
              onClick={() => {
                this.props.history.push("/otp-new-password");
              }}
              className="font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 mb-2 sm:rounded-lg w-full font-semibold "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ForgotPassword);
