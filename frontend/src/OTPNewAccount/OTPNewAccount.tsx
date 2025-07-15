import React from "react";
import { RouteComponentProps as Props, withRouter } from "react-router-dom";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";
import { sendOtp } from "../api"

class OTPNewPassword extends React.Component<Props> {
  verifyButtonRef = React.createRef<HTMLButtonElement>()
  state = {
    message: "Check your email.",
    clicked: false,
    loadingSpinner: "hidden",
    verifyButton: "block",
    otp: "12345"
  }

  componentDidMount() {
    document.addEventListener("mousedown", (e) => {
      const container = this.verifyButtonRef.current;
      const target = e.target as Node;
      if (this.state.clicked && container && !container.contains(target)) {
        container.classList.add("max-w-[40px]", "rounded-full")
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", () => console.log("Component unmounted"))
  }

  onClickVerify = async () => {
    console.log("Clicked")
    const status = await sendOtp({ otp: this.state.otp })
    console.log(status)
    // this.props.history.replace("/registration-status");
  };

  render() {
    return (
      <div className="h-full w-full flex items-center sm:justify-center sm:bg-custom-blue/10">
        <div className="w-fit max-h-fit sm:bg-white rounded-3xl">

          <div className="w-[77%] h-[550px] sm:h-fit sm:w-fit font-sans sm:bg-custom-blue/5 flex flex-col gap-5 justify-center items-left sm:justify-center sm:items-center sm:rounded-3xl pl-[6%] ml-[6%] sm:m-0 sm:p-8 pt-0 sm:border-custom-blue-dark/5 sm:border-1 sm:shadow-2xl sm:shadow-custom-blue/20 border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
            <div className="text-2xl font-semibold mt-[-8px]">
              Email verification
            </div>
            <div
              id="otp-instruction"
              className="w-[190px] h-fit font-mono"
            >
              {this.state.message}
            </div>
            <div className=" flex flex-col items-left sm:items-center w-fit">
              <input
                type="number"
                maxLength={6}
                id="otp"
                onChange={(e) => { this.setState({ otp: e.target.value }) }}
                placeholder="Enter OTP"
                className="w-[202px] no-spinner font-sans text-base p-2 sm:text-center sm:rounded-3xl border border-solid sm:bg-transparent border-gray-300 focus:outline-custom-blue"
              />
            </div>
            <button
              ref={this.verifyButtonRef}
              onClick={() => {
                if (!this.state.clicked) {
                  this.setState({ message: "Verifying, please wait.", clicked: true, verifyButton: "hidden", loadingSpinner: "block" })
                  this.onClickVerify()
                }
              }}
              className="group focus:w-[40px] focus:rounded-full w-[201px] flex flex-row justify-center font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 sm:rounded-3xl font-semibold transition-all duration-75"
            >
              <div className={"group-focus:hidden self-center" + " " + this.state.verifyButton}>Verify</div>
              <SpinnerIcon className={"group-focus:block w-[40px] h-auto animate-spin" + " " + this.state.loadingSpinner} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(OTPNewPassword);
