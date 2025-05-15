import React from "react";
import Contact from "./Contact";

const Contacts = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
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
