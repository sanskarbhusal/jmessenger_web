import React from "react";
import Contact from "./Contact";
export default class Contacts extends React.Component {
  render() {
    const Contacts = () =>
      ["", "", "", "", "", "", "", "", "", "", "", ""].map((item, index) => (
        <Contact key={index + item} />
      ));
    return (
      <div className="h-full w-full overflow-auto scrollbar-hidden">
        <div className="min-h-[48px]"></div>
        <Contacts />
      </div>
    );
  }
}
