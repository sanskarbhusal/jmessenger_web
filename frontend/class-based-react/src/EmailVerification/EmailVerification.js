import React from "react";
export default class EmailVerification extends React.Component {
  render() {
    const email = "mail@sanskarbhusal.com.np";
    return (
      <div className="font-sans h-96 sm:h-72 w-[76%] sm:w-80  flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-xl pl-6 ml-9 sm:p-8 pt-0 sm:border-[1px] sm:border-solid sm:border-gray-200/90 sm:shadow-2xl border border-solid border-l-2 border-b-0 border-t-0 border-r-0 border-custom-blue-dark shadow-0">
        <div className="text-2xl font-semibold mt-5">
          Lets verify your email
        </div>
        <div className="relative top-[-12]">Check your inbox at:</div>
        <div className="text-custom-blue font-semibold relative top-[-30]">
          {email}
        </div>

        <div className="flex flex-col w-full">
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
            className="font-sans text-base p-2 sm:rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue"
          />
        </div>
        <div className="w-full mt-2">
          <button className=" font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 sm:rounded-lg w-full font-semibold ">
            Verify
          </button>
        </div>
      </div>
    );
  }
}
