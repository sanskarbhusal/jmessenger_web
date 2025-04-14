import React from "react";
export default class Login extends React.Component {
  render() {
    return (
      <form className="bg-white font-sans flex flex-col items-center rounded-lg min-w-[75%] h-fit border-[1px] sm:min-w-96 p-8 border-gray-200/70 shadow-2xl shadow-custom-blue-dark/30 sm:border sm:border-solid sm:border-gray-200/70">
        <label className="text-2xl font-semibold ">
          Sign in to your account
        </label>

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
        <div className="flex flex-col mx-4 my-4 w-full">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            className="p-3 rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
          />
        </div>

        {/*This is Remember me and Forgot password div*/}
        <div className="flex justify-between w-full">
          {/**/}
          <div className="flex justify-between">
            <input
              type="checkbox"
              id="remember-me"
              className="mr-[10px] size-4 "
            />
            <label htmlFor="remember-me" className="text-gray-500">
              Remember me
            </label>
          </div>

          <div>
            <a
              className="no-underline hover:underline text-custom-blue"
              href=" link "
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="w-full my-3">
          <button className="active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 rounded-lg w-full font-sans text-base font-semibold ">
            Log in to your account
          </button>
        </div>
        <div className="mt-1">
          <a
            className="no-underline hover:underline text-custom-blue"
            href="Register"
          >
            Don't have an account?
          </a>
        </div>
      </form>
    );
  }
}
