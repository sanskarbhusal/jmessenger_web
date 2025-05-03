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
  crossIcon: string;
};
interface myInterface {
  inputReference: React.RefObject<HTMLInputElement>;
}
export default class SearchBar
  extends React.Component<Props, State>
  implements myInterface
{
  static defaultProps = {};
  constructor(props: Props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.inputReference = React.createRef<HTMLInputElement>();
  }
  state = {
    value: "",
    innerBorderColor: "gray-300/90",
    outerBorderColor: "transparent",
    iconColor: "gray-500/70",
    crossIcon: "transparent",
  };

  inputReference;
  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }
  doUnFocus() {
    this.setState((prev) => {
      return {
        ...prev,
        innerBorderColor: "gray-300/90",
        outerBorderColor: "transparent",
        iconColor: "gray-500/70",
      };
    });
  }
  doFocus() {
    this.setState((prev) => {
      return {
        ...prev,
        innerBorderColor: "transparent",
        outerBorderColor: "highlight-color",
        iconColor: "highlight-color",
      };
    });
  }
  handleFocus() {
    if (document.activeElement === this.inputReference.current) {
      this.doFocus();
    } else {
      this.doUnFocus();
    }
  }
  handleOutsideClick(e: Event) {
    const container = this.inputReference.current;
    const target = e.target as Node;
    if (container && !container.contains(target)) {
      this.doUnFocus();
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
            ref={this.inputReference}
            type="text"
            autoComplete="off"
            value={this.state.value}
            onFocus={this.handleFocus}
            onChange={(e) => {
              this.setState((prev) => {
                return {
                  ...prev,
                  hidden: "",
                  value: e.target.value,
                  crossIcon: "highlight-color",
                };
              });
            }}
            placeholder="Search"
            className=" w-full self-center  text-base font-medium font-sans placeholder-gray-500/70 border-none outline-none m-0 p-0 "
          />
          <CrossIcon
            onClick={() =>
              this.setState((prev) => {
                return { ...prev, value: "", crossIcon: "transparent" };
              })
            }
            className={
              "min-w-[25px] h-auto ml-[12px] mr-[7px] p-[4px] rounded-full active:bg-blue-100" +
              " " +
              "text-" +
              this.state.iconColor +
              " " +
              "text-" +
              this.state.crossIcon +
              " "
            }
          />
        </div>
      </div>
    );
  }
}
