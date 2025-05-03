import React from "react";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import { RxCross2 as CrossIcon } from "react-icons/rx";
type Props = Required<typeof SearchBar.defaultProps> & {
  /* extra props here*/
};
interface Test {
  ref: React.RefObject<HTMLDivElement>;
}
type State = { isFocused: boolean; value: string };
export default class SearchBar extends React.Component implements Test {
  ref = React.createRef<HTMLDivElement>();
  static defaultProps = {};

  constructor(props: Props) {
    super(props);
  }

  state: State = {
    isFocused: false,
    value: "",
  };
  componentDidMount() {
    const border = document.getElementById("border");
    const className = "sth".split(" ");
    border!.classList.add(...className);
  }
  focus() {
    console.log("Mouse clicked");
  }
  render() {
    return (
      <div
        ref={this.ref}
        id="border"
        className=" h-[43px] flex flex-row items-center border border-solid border-gray-300/90 bg-white rounded-full "
      >
        <label htmlFor="search" className=" mt-[5px]">
          <SearchIcon className="w-[22px] h-auto ml-[12px] mr-[12px] text-gray-500/65 rounded-full " />
        </label>

        <input
          id="search"
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ ...this.state, value: e.target.value });
          }}
          placeholder="Search"
          className=" w-full self-center  text-base font-medium font-sans placeholder-gray-500/70 border-none outline-none m-0 p-0 "
        />
        <CrossIcon
          onClick={() => this.setState({ ...this.state, value: "" })}
          className="w-[39px] h-auto ml-[12px] mr-[7px] p-[4px] text-gray-500/65 rounded-full active:bg-blue-100"
        />
      </div>
    );
  }
}
