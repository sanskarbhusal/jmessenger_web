import React from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
type Props = Required<typeof NavBar.defaultProps> & { className?: string };
export default class NavBar extends React.Component<Props> {
  static defaultProps = {};
  render() {
    return (
      <div
        className={
          "h-fit w-full sm:w-[388px] pt-[6px] pb-[6px] grid grid-cols-nav_bar grid-rows-nav_bar bg-transparent" +
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
