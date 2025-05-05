import React from "react";
import SearchBar from "../SearchBar";
import MenuButton from "../MenuButton";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="mt-10 grid grid-cols-nav_bar grid-rows-nav_bar">
        <MenuButton />
        <SearchBar className="w-80 self-center" />
      </div>
    );
  }
}
