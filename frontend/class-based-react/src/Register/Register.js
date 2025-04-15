import React from "react";
export default class Register extends React.Component {
  render() {
    return (
      <div className="w-[76%] h-[65%] sm:h-96 sm:w-96 bg-white font-sans flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-lg pl-6 ml-9 sm:p-8 sm:border-gray-200/70 sm:border sm:border-solid sm:shadow-2xl shadow-custom-blue-dark/30 border border-solid border-l-2 border-b-0 border-t-0 border-r-0 border-custom-blue-dark ">
        <div className=" text-2xl font-semibold ">Sign up to JMessenger</div>

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
