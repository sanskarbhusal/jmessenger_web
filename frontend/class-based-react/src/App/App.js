import React from "react";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center bg-custom-blue-dark/8 m-0">
        <h3>&#128679; Site under construction</h3>
        <Login />
        <Router>
          <div>
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
          </div>
        </Router>
      </div>
    );
  }
}
