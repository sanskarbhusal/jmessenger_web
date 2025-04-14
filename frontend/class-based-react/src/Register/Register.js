import React from "react";
export default class Register extends React.Component {
  render() {
    return (
      <div className="font-sans text-base bg-transparent sm:bg-white flex flex-col gap-5 items-center rounded-lg p-8 w-[75%] border-[1px] sm:w-96 border-gray-200/70 shadow-0 sm:shadow-2xl shadow-custom-blue-dark/30 sm:border sm:border-solid sm:border-gray-200/70">
        <label className="text-2xl font-semibold ">Sign up to JMessenger</label>

        <div className="flex flex-col w-full ">
          <label htmlFor="email" className="mb-2">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="font-sans text-base p-2 rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue"
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
            className="font-sans text-base p-2 rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue"
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
            className="font-sans text-base p-2 rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
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
            className="font-sans text-base p-2 rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
          />
        </div>

        <div className="w-full mt-2 ">
          <button className="font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 rounded-lg w-full font-semibold ">
            Sign up
          </button>
        </div>
      </div>
    );
  }
}
