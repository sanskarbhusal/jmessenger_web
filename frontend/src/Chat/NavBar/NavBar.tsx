import React from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
type Props = Required<typeof NavBar.defaultProps> & { className?: string };
export default class NavBar extends React.Component<Props> {
  static defaultProps = { foo: "foo" };
  render() {
    return (
      <div
        id="nav-bar"
        className={
          "h-fit w-full pt-[6px] pb-[6px] grid grid-cols-nav_bar grid-rows-nav_bar bg-white sm:bg-custom-blue/10 border-none" +
          " " +
          this.props.className
        }
      >
        <MenuButton />
        <SearchBar />
      </div>
    );
  }
}
