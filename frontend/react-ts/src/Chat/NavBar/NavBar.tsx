import React from "react";
import SearchBar from "../SearchBar";
//import { MdOutlineMenu as MenuIcon } from "react-icons/md";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="flex flex-row justify-center">
        <SearchBar className="w-[80%] mt-10" />
      </div>
    );
  }
}
