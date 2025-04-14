import React from "react";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmailVerification from "../EmailVerification";
export default class App extends React.Component {
  render() {
    return (
      <div className="min-h-full flex flex-col gap-4 justify-center items-center bg-custom-blue/10 m-0">
        {/*
        <h3>&#128679; Site under construction</h3>
        */}
        <div className="mt-2"></div>
        <Login />
        <Register />
        <EmailVerification />
        <div className="mb-2"></div>
      </div>
    );
  }
}
