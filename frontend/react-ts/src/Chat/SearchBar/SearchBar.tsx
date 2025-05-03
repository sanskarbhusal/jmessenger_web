import React from "react";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import { RxCross2 as CrossIcon } from "react-icons/rx";
type Props = Required<typeof SearchBar.defaultProps> & {
  /* extra props here*/
};
type State = {
  innerBorderColor: string;
  outerBorderColor: string;
  iconColor: string;
  value: string;
};
interface myInterface {
  searchBarRef: HTMLElement;
}
export default class SearchBar
  extends React.Component<Props, State>
  implements myInterface
{
  static defaultProps = {};
  constructor(props: Props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.searchBarRef = document.getElementById("search")!;
  }
  state = {
    value: "",
    innerBorderColor: "gray-300/90",
    outerBorderColor: "transparent",
    iconColor: "gray-500/70",
  };

  searchBarRef;
  componentDidMount() {
    document.addEventListener("mousedown", this.handleFocus);
    this.searchBarRef = document.getElementById("search")!;
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleFocus);
  }
  handleFocus(e: MouseEvent) {
    if (this.searchBarRef.contains(e.target as Node)) {
      console.log("Clicked inside");
      this.setState((prev) => {
        return {
          ...prev,
          innerBorderColor: "transparent",
          outerBorderColor: "highlight-color",
          iconColor: "highlight-color",
        };
      });
    } else {
      console.log("Clicked outside");
      this.setState((prev) => {
        return {
          ...prev,
          innerBorderColor: "gray-300/90",
          outerBorderColor: "transparent",
          iconColor: "gray-500/70",
        };
      });
    }
  }
  render() {
    return (
      <div
        className={
          "border-[2px] border-solid rounded-full" +
          " " +
          "border-" +
          this.state.outerBorderColor
        }
      >
        <div
          id="border"
          className={
            "max-h-[43px] min-h-[43px] flex flex-row items-center bg-white border border-solid rounded-full" +
            " " +
            "border-" +
            this.state.innerBorderColor
          }
        >
          <label htmlFor="search" className=" mt-[5px]">
            <SearchIcon
              className={
                "w-[22px] h-auto ml-[12px] mr-[12px] rounded-full" +
                " " +
                "text-" +
                this.state.iconColor +
                " "
              }
            />
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
            className={
              "min-w-[25px] h-auto ml-[12px] mr-[7px] p-[4px] rounded-full active:bg-blue-100" +
              " " +
              "text-" +
              this.state.iconColor +
              " "
            }
          />
        </div>
      </div>
    );
  }
}
