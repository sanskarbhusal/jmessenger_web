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
        className={
          "relative z-0 h-full w-full p-[12px] sm:pl-[16px] sm:pr-[2px] sm:pt-[5px] sm:pb-[12px] gap-[12px] bg-white sm:bg-transparent flex flex-col items-center overflow-y-scroll overflow-x-hidden scrollbar-thin" +
          " " +
          this.props.className
        }
      >
        <Contacts />
      </div>
    );
  }
}
