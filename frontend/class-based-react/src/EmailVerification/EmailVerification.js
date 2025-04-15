import React from "react";
import { withRouter } from "react-router-dom";
class EmailVerification extends React.Component {
  render() {
    const email = "mail@sanskarbhusal.com.np";
    return (
      <div className="font-sans h-[450px] w-[76%] sm:h-fit sm:w-fit flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-xl pl-7 ml-7 pt-0 sm:p-8 sm:shadow-custom-blue/30 sm:shadow-none sm:border bg-white  border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
        <div className="text-2xl font-semibold">Email verification</div>

        <div className="flex flex-col items-center w-full">
          <div className="w-fit flex flex-col">
            <label htmlFor="otp" className="font-sans text-base mb-2">
              Enter OTP{" "}
              <span className="text-red-600 font-sans text-base">
                (incorrect!)
              </span>
            </label>
            <input
              type="number"
              id="otp"
              placeholder="6-digit number"
              className="w-[190px] font-sans text-base p-2 sm:rounded-lg border border-solid border-gray-300 focus:outline-custom-blue"
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-center mb-2">
          <button className=" w-[190px] font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 sm:rounded-lg font-semibold ">
            Verify
          </button>
        </div>
        <div>Check you spam folder if you don't any email</div>
      </div>
    );
  }
}
export default withRouter(EmailVerification);
