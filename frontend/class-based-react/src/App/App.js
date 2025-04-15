import React from "react";
import Login from "../Login";
import Register from "../Register";
import EmailVerification from "../EmailVerification";
export default class App extends React.Component {
  render() {
    return (
      <div className="h-full w-full flex flex-row  sm:justify-left items-center gap-5 bg-custom-blue/10 bg-white">
        {/* <h1>&#128679;Under construction</h1> <div className="mt-2"></div>*/}

        <Login />
        <EmailVerification />

        <div className="mb-2"></div>
      </div>
    );
  }
}
