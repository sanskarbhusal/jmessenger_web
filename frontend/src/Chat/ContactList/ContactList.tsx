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
          "h-full w-full p-[12px] sm:pl-6 sm:pr-6 sm:pt-[6px] sm:pb-[12px] gap-[12px] bg-white sm:bg-custom-blue/5 border-gray-300/85 sm:border-r-[1px] flex flex-col items-center overflow-y-scroll overflow-x-hidden scrollbar-thin drop-shadow-sm" +
          " " +
          this.props.className
        }
      >
        <Contacts />
      </div>
    );
  }
}
