import React from "react";
export default class Login extends React.Component {
  render() {
    const login_failure_reason = "<reason>";
    return (
      <div className="font-sans w-[95%] sm:w-[450px] text-base">
        {/* verification status */}
        <p className=" text-center text-red-600">
          Login failure: {login_failure_reason}
        </p>
        <div className="bg-white flex flex-col gap-5 items-center rounded-lg p-8 border-[1px] border-gray-200/70 sm:border sm:border-solid sm:border-gray-200/75 sm:shadow-2xl shadow-custom-blue-dark/30">
          <label className=" text-2xl font-semibold ">
            Login to JMessenger
          </label>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-2 ">
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="font-sans text-base p-2 rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue "
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              className="font-sans text-base p-2 rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
            />
          </div>

          {/*This is Remember me and Forgot password div*/}
          <div className="flex justify-between w-full">
            {/**/}
            <div className="flex justify-between ">
              <input
                type="checkbox"
                id="remember-me"
                className="mr-[10px] size-4"
              />
              <label htmlFor="remember-me" className=" text-gray-500">
                Remember me
              </label>
            </div>

            <div>
              <a
                className=" no-underline hover:underline text-custom-blue"
                href=" link "
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div className="w-full">
            <button className="active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 rounded-lg w-full font-sans text-base font-semibold">
              Log in to your account
            </button>
          </div>
          <div className="">
            <a
              className=" no-underline hover:underline text-custom-blue"
              href="Register"
            >
              Don't have an account?
            </a>
          </div>
        </div>
      </div>
    );
  }
}
