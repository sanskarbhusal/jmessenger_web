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
          "h-full w-full p-[15px] pt-[6px] gap-[10px] border-gray-300/85 border-r-[1px] flex flex-col 2xl:bg-transparent overflow-y-scroll overflow-x-hidden scrollbar-thin drop-shadow-sm" +
          " " +
          this.props.className
        }
      >
        <Contacts />
      </div>
    );
  }
}
