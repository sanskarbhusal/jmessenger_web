import React from "react";
import Contact from "./Contact";

const Contacts = () => {
  const new_arr = new Array(
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ).map((item, index) => {
    console.log(item);
    return <Contact key={index} />;
  });
  return new_arr;
};
export default class ContactList extends React.Component {
  render() {
    return (
      <div className="h-full w-full overflow-auto scrollbar-hidden">
        <Contacts />
      </div>
    );
  }
}
