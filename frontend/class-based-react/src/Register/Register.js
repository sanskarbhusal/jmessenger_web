import React from "react";
export default class Register extends React.Component {
  render() {
    return (
      <div className="bg-white font-sans flex flex-col items-center rounded-lg p-8 w-[75%] border-[1px] sm:w-96 border-gray-200/70 shadow-2xl shadow-custom-blue-dark/30 sm:border sm:border-solid sm:border-gray-200/70">
        <label className="text-2xl font-semibold ">Sign up to JMessenger</label>

        <div className="flex flex-col mx-4 my-4 w-full ">
          <label htmlFor="email" className="mb-2">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="p-3 rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue"
          />
        </div>
        <div className="flex flex-col mx-4 my-4 w-full ">
          <label htmlFor="uname" className="mb-2">
            Username
          </label>
          <input
            type="email"
            id="uname"
            placeholder="Example: @ram, @ram_bahadur"
            className="p-3 rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue"
          />
        </div>
        <div className="flex flex-col mx-4 my-4 w-full">
          <label htmlFor="pass" className="mb-2">
            Password
          </label>
          <input
            type="password"
            id="pass"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            className="p-3 rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
          />
        </div>

        <div className="flex flex-col mx-4 my-4 w-full">
          <label htmlFor="confirm-pass" className="mb-2">
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-pass"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            className="p-3 rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
          />
        </div>

        <div className="w-full">
          <button className="active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 rounded-lg w-full font-sans text-base font-semibold ">
            Sign up
          </button>
        </div>
      </div>
    );
  }
}
