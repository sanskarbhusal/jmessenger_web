import React from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { RxCross2 as CrossIcon } from "react-icons/rx";
type Props = Required<typeof SearchBar.defaultProps> & {
  /* extra props here*/
};

type State = {
  isFocused: string;
  inputText: string;
  innerBorderColor: string;
  outerBorderColor: string;
  searchIconColor: string;
  crossIconColor: string;
  crossIconDisplay: string;
};

interface myInterface {
  inputReference: React.RefObject<HTMLDivElement>;
}

export default class SearchBar
  extends React.Component<Props, State>
  implements myInterface {
  static defaultProps = {};
  constructor(props: Props) {
    super(props);
    this.handleMousedown = this.handleMousedown.bind(this);
    this.doHighlight = this.doHighlight.bind(this);
    this.doGrayout = this.doGrayout.bind(this);
    this.inputReference = React.createRef<HTMLDivElement>();
  }

  state = {
    isFocused: "false",
    inputText: "",
    innerBorderColor: "transparent",
    outerBorderColor: "gray-400/85",
    searchIconColor: "gray-500/65",
    crossIconColor: "highlight-color",
    crossIconDisplay: "hidden",
  };

  inputReference;

  componentDidMount() {
    document.addEventListener("mousedown", this.handleMousedown);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMousedown);
  }

  doHighlight() {
    this.setState((prev) => {
      const crossIconDisplay = prev.inputText === "" ? "hidden" : "block";
      return {
        isFocused: "true",
        innerBorderColor: "custom-blue",
        outerBorderColor: "custom-blue",
        searchIconColor: "custom-blue",
        crossIconColor: "custom-blue",
        crossIconDisplay: crossIconDisplay,
      };
    });
  }

  doGrayout() {
    this.setState((prev) => {
      const crossIconDisplay = prev.inputText === "" ? "hidden" : "gray-300";
      return {
        isFocused: "false",
        innerBorderColor: "transparent",
        outerBorderColor: "gray-400/85",
        searchIconColor: "gray-500/65",
        crossIconColor: "gray-600/85",
        crossIconDisplay: crossIconDisplay,
      };
    });
  }

  handleMousedown(e: any) {
    const container = this.inputReference.current;
    const target = e.target as Node;
    if (container && !container.contains(target)) {
      this.doGrayout();
    } else {
      this.doHighlight();
    }
  }

  render() {
    return (
      <div
        ref={this.inputReference}
        className={
          "transition mr-[18px] min-h-[41px] rounded-full border-[1px] bg-gray-300/85 sm:bg-transparent shadow-inner shadow-custom-blue/10" +
          " " +
          "border-" +
          this.state.outerBorderColor
        }
      >
        <div
          className={
            "min-h-[40px] grid grid-cols-search_bar grid-row-1 border-[1px] bg-white sm:bg-transparent rounded-full " +
            " " +
            "border-" +
            this.state.innerBorderColor
          }
        >
          <label
            htmlFor="search"
            className="flex flex-row items-center justify-self-center self-center "
          >
            <SearchIcon
              className={
                "w-[25px] h-[25px] rounded-full" +
                " " +
                "text-" +
                this.state.searchIconColor +
                " "
              }
            />
          </label>

          <input
            id="search"
            type="text"
            autoComplete="off"
            spellCheck="false"
            value={this.state.inputText}
            onFocus={this.handleMousedown}
            onChange={(e) => {
              const crossIconDisplay =
                e.target.value === "" ? "hidden" : "block";
              this.setState({
                inputText: e.target.value,
                crossIconDisplay: crossIconDisplay,
              });
            }}
            placeholder="Search"
            className="relative top-[-1px] w-full self-center text-lg font-normal font-sans bg-white sm:bg-transparent placeholder-gray-500/80 border-none outline-none m-0 p-0 select-none"
          />
          <label
            htmlFor="search"
            className="relative mb-[1px] flex flex-row items-center"
          >
            <CrossIcon
              onClick={() => {
                this.setState({ inputText: "", crossIconDisplay: "hidden" });
              }}
              className={
                " min-w-[34px] h-auto p-[4px] absolute left-[8px] self-center rounded-full active:bg-highlight-color/10" +
                " " +
                this.state.crossIconDisplay +
                " " +
                "text-" +
                this.state.crossIconColor +
                " "
              }
            />
          </label>
        </div>
      </div>
    );
  }
}