import React from "react";
export default class EmailVerification extends React.Component {
  render() {
    const email = "mail@sanskarbhusal.com.np";
    return (
      <div className="font-sans w-[75%] sm:w-96 rounded-xl">
        {/* OTP instruction */}
        <p className="text-center">
          To verify your email we've sent a 6 digit OTP at:{" "}
          <div className="font-semibold text-custom-blue">{email}</div>
        </p>
        <p className="text-center text-red-600">OTP didn't match!</p>
        {/* OTP form container */}
        <div className="flex flex-col gap-5 items-center rounded-lg p-8 bg-transparent sm:bg-white border-[1px] border-gray-200/70 sm:border sm:border-solid sm:border-gray-200/70 sm:shadow-2xl shadow-custom-blue-dark/30">
          <label className="text-2xl font-semibold "> Verify your email</label>

          <div className="flex flex-col w-full ">
            <label htmlFor="otp" className="font-sans text-base mb-2">
              Enter OTP
            </label>
            <input
              type="number"
              id="otp"
              placeholder="6-digit number"
              className="font-sans text-base p-2 rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue"
            />
          </div>
          <div className="w-full mt-2">
            <button className="font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 rounded-lg w-full font-semibold ">
              Verify
            </button>
          </div>
        </div>
      </div>
    );
  }
}
