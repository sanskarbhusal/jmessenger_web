import React from "react";

import { MdOutlineMenu as MenuIcon } from "react-icons/md";
type Props = Required<typeof MenuButton.defaultProps> & {};
type State = {};
export default class MenuButton extends React.Component<Props, State> {
  static defaultProps = {};
  constructor(props: Props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.state = {};
  }
  handleMenuClick() { }
  render() {
    return (
      <div className="justify-self-center self-center bg-white sm:bg-transparent">
        <MenuIcon
          onClick={this.handleMenuClick}
          className="min-w-[24px] h-auto text-gray-500/90"
        />
      </div>
    );
  }
}
