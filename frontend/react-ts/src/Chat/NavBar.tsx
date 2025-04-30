import React from "react";
import { IconBaseProps } from "react-icons";
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import { MdOutlineMenu as MenuIcon } from "react-icons/md";

const MenuIconWrapper = (props: CustomProps) => <MenuIcon {...props} />;
const SearchIconWrapper = ({ customStyle, ...props }: CustomProps) => {
  return (
    <div className="w-fit h-fit self-center ml-[12px] mt-[6px]">
      <SearchIcon style={customStyle} {...props} />
    </div>
  );
};
const CrossIconWrapper = (props: CustomProps) => <CrossIcon {...props} />;

interface CustomProps extends IconBaseProps {
  className?: string;
  customStyle?: React.CSSProperties;
}

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="bg-white flex">
        <MenuIconWrapper className=" text-gray-500 self-center ml-4 min-h-[22px] min-w-[22px]" />
        <div className="  grid grid-cols-custom h-[39px] w-full border border-solid border-gray-300 rounded-full mt-[7px] mb-[7px] mr-[15px] ml-5  ">
          <SearchIconWrapper
            customStyle={{}}
            className="text-gray-500/60 w-[20px] h-[20px] "
          />
          <input
            className=" font-sans text-gray-500/60 text-base w-full border-none self-center m-0 p-0 outline-none"
            placeholder="Search"
          />
          <CrossIconWrapper className="self-center text-gray-400 ml-[10px] w-[24px] h-[24px]" />
        </div>
      </div>
    );
  }
}
