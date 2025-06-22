import React from "react";
import { RouteComponentProps as Props, withRouter } from "react-router-dom";
import Logo from "../Logo";
class OTPNewPassword extends React.Component<Props> {
  onClickVerify = () => {
    this.props.history.replace("/registration-status");
  };
  render() {
    return (
      <div className="h-full w-full flex items-center sm:justify-center sm:bg-custom-blue/5">
        <Logo />

        <div className="w-[77%] h-[550px] sm:h-fit sm:w-fit font-sans sm:bg-white flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-lg pl-[6%] ml-[6%] sm:m-0 sm:p-8 pt-0  sm:border-custom-blue-dark/5 sm:border-1 sm:shadow-2xl sm:shadow-custom-blue/20 border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
          <div className="text-2xl font-semibold mt-[-8px]">
            Email verification
          </div>

          <div className=" flex flex-col items-left sm:items-center w-fit">
            <div className="w-fit flex flex-col">
              <label htmlFor="otp" className="font-sans text-base mb-2">
                Enter OTP{" "}
                <span
                  id="otp-status"
                  className="text-red-600 font-sans text-base hidden"
                >
                  {"<Wrong OTP!>"}
                </span>
              </label>
              <input
                type="number"
                id="otp"
                placeholder="6-digit number"
                className="w-[172px] font-sans text-base p-2 sm:rounded-lg border border-solid border-gray-300 focus:outline-custom-blue"
              />
            </div>
          </div>
          <div className="w-[190px] flex flex-row justify-left sm:justify-center mb-2">
            <button
              onClick={this.onClickVerify}
              className=" w-full font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 sm:rounded-lg font-semibold "
            >
              Verify
            </button>
          </div>
          <div
            id="otp-instruction"
            className=" w-[190px] text-left sm:text-center"
          >
            We've sent a 6-digit code to your email.
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(OTPNewPassword);
