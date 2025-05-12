import React from "react";
import Contact from "./Contact";
export default class Contacts extends React.Component {
  render() {
    const Contacts = () =>
      ["", "", "", "", "", "", "", "", "", "", "", ""].map(() => <Contact />);
    return (
      <div
        id="contact-list"
        className="bg-green-200 h-full w-full scroll-hidden"
      >
        <Contacts />
      </div>
    );
  }
}
