import React from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
type Props = Required<typeof NavBar.defaultProps> & { className?: string };
export default class NavBar extends React.Component<Props> {
  static defaultProps = {};
  render() {
    return (
      <div className={"fixed" + " " + this.props.className}>
        <div className="h-fit w-fit grid grid-cols-nav_bar grid-rows-nav_bar bg-transparent">
          <MenuButton />
          <SearchBar className="w-80 self-center" />
        </div>
      </div>
    );
  }
}
