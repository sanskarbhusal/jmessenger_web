import React from "react";
export default class EmailVerification extends React.Component {
  render() {
    const email = "mail@sanskarbhusal.com.np";
    return (
      <div className="font-sans w-[75%] sm:w-96">
        {/* verification status */}
        <p className="text-center">
          To verify your email we've sent a 6 digit OTP at:{" "}
          <span className="font-semibold text-custom-blue">{email}</span>
        </p>

        {/* OTP form container */}
        <div className="bg-white  flex flex-col items-center rounded-lg p-8 border-[1px] border-gray-200/70 sm:border sm:border-solid sm:border-gray-200/70 shadow-2xl shadow-custom-blue-dark/30">
          <label className="text-2xl font-semibold "> Verify your email</label>

          <div className="flex flex-col mx-4 my-4 w-full ">
            <label htmlFor="otp" className="mb-2">
              Enter OTP
            </label>
            <input
              type="number"
              id="otp"
              placeholder="6-digit number"
              className="p-3 rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue"
            />
          </div>
          <div className="w-full my-3">
            <button className="active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 rounded-lg w-full font-sans text-base font-semibold ">
              Verify
            </button>
          </div>
        </div>
      </div>
    );
  }
}
