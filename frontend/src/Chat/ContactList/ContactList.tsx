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
type Props = Required<typeof ContactList.defaultProps> & { className?: string };
export default class ContactList extends React.Component<Props> {
  static defaultProps = {};
  render() {
    return (
      <div
        id="contact-list"
        className={
          "h-full overflow-scroll scrollbar-custom" + " " + this.props.className
        }
      >
        <Contacts />
      </div>
    );
  }
}
