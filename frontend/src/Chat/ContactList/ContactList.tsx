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
    "",
    ""
  ).map((item, index) => {
    console.log(item);
    return (
      <Contact key={index} />
    )
  });
  return new_arr;
};
type Props = Required<typeof ContactList.defaultProps> & { className?: string };
export default class ContactList extends React.Component<Props> {
  static defaultProps = {};
  render() {
    return (
      <div
        className={
          "h-full w-full gap-[12px] bg-white border-gray-300/85 sm:border-r-[1px] flex flex-col items-center overflow-y-scroll overflow-x-hidden scrollbar-thin drop-shadow-sm" +
          " " +
          this.props.className
        }
      >
        <Contacts />
      </div>
    );
  }
}
