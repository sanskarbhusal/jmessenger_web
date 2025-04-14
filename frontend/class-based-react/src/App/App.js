import React from "react";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmailVerification from "../EmailVerification";
export default class App extends React.Component {
  render() {
    return (
      <div className="h-full flex flex-col gap-4 justify-none items-center bg-custom-blue/10 bg-white">
        <h1>&#128679;Under construction</h1>

        <div className="mt-2"></div>
        <Login />
        <EmailVerification />
        <Register />
        <div className="mb-2"></div>
      </div>
    );
  }
}
