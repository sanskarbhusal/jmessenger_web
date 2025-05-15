import React from "react";
import Contact from "./Contact";
export default class Contacts extends React.Component {
  render() {
    return (
      <div className="h-full w-full overflow-auto scrollbar-hidden">
        <div className="min-h-[48px]"></div>
        <Contact />
        <div className="filter blur-3xl h-10 bg-purple-500"></div>
      </div>
    );
  }
}
