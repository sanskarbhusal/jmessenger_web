import React from "react";
import SearchBar from "../SearchBar";
import { MdOutlineMenu as MenuIcon } from "react-icons/md";

function MenuButton() {
  return <div className="">MenuButton</div>;
}
export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
