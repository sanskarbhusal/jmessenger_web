import { RxCross2 as CrossIcon } from "react-icons/rx";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import { MdOutlineMenu as MenuIcon } from "react-icons/md";
import { IconBaseProps } from "react-icons/lib";

import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps;

const NavBar = () => {
  interface CustomProps extends IconBaseProps {
    className?: string;
  }
  function CustomMenuIcon(props: CustomProps) {
    return <MenuIcon {...props} />;
  }
  function CustomSearchIcon(props: CustomProps) {
    return <SearchIcon {...props} />;
  }
  function CustomCrossIcon(props: CustomProps) {
    return <CrossIcon {...props} />;
  }
  return (
    <div className="bg-white flex">
      <CustomMenuIcon className="text-gray-600/90 self-center ml-4 min-h-[22px] min-w-[22px]" />
      <div className="  grid grid-cols-custom h-[39px] w-full border border-solid border-gray-300 rounded-full mt-[7px] mb-[7px] mr-[15px] ml-5 focus:border-2 focus:border-custom-blue ">
        <CustomSearchIcon className="self-center text-gray-400 ml-[12px] w-[21px] h-[21px] " />
        <input
          type="text"
          name="search"
          className=" font-sans text-base w-full border-none self-center m-0 p-0 outline-none"
          placeholder="Search"
        />
        <CustomCrossIcon className="self-center text-gray-400 ml-[10px] w-[24px] h-[24px]" />
      </div>
    </div>
  );
};
class Chat extends React.Component<Props> {
  render() {
    return (
      <div className=" w-full h-full ">
        <NavBar />
      </div>
    );
  }
}
export default withRouter(Chat);
