import React from "react";
import { RouteComponentProps as Props, withRouter } from "react-router-dom";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";
import validator from "email-validator"
import { register } from "../api"

type RegistrationData = {
  email: string
  userName: string
  password: string
}

type State = RegistrationData & {
  isUsernameAvailable: boolean
  confirmedPassword: string
  passwordDidMatch: boolean
  isValidEmail: boolean
  submitted: boolean
}

class Register extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: "200333sanskar@cosmoscollege.edu.np",
      userName: "sanskar",
      password: "test",
      isUsernameAvailable: true,
      confirmedPassword: "test",
      passwordDidMatch: true,
      isValidEmail: true,
      submitted: false
    }
  }

  isValidEmail = (email: string): boolean => {
    return validator.validate(email)
  }

  handleSignUp = async () => {
    const password = this.state.password
    const confirmedPassword = this.state.confirmedPassword
    const email = this.state.email
    let isValidEmail = false
    let passwordDidMatch = false

    if (this.isValidEmail(email)) {
      isValidEmail = true
    }

    if (password == confirmedPassword) {
      passwordDidMatch = true
    }

    this.setState({ passwordDidMatch: passwordDidMatch, isValidEmail: isValidEmail })

    if (passwordDidMatch && isValidEmail) {

      const response = await register({ email: this.state.email, userName: this.state.userName, password: this.state.password })

      switch (response.status) {
        case 200:
          this.setState({ isUsernameAvailable: false })
          console.log(response.text)
          break;
        case 202:
          this.props.history.push("/otp-new-account");
          console.log(response.text)
          break;
        case 500:
          console.log(response.text)
          break;
        default:
          console.log("Unknown response from the server")
      }
    }
  };

  usernameNotAvailableError = () => <p className="text-red-500 font-mono text-xs mt-[3px]">This username is already taken.</p>
  passswordMatchError = () => <p className="text-red-500 font-mono text-xs mt-[3px]">Password didn't match!</p>
  invalidEmailError = () => <p className="text-red-500 font-mono text-xs mt-[3px]">Invalid email</p>

  render() {
    return (
      <div className="h-full w-full flex items-center sm:justify-center sm:bg-custom-blue/10">
        <div className="w-fit h-fit sm:bg-white rounded-3xl">

          <div className="w-[77vw] h-[550px] sm:h-fit sm:w-96 font-sans sm:bg-custom-blue/5 flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-3xl pl-[6%] ml-[6%] sm:m-0 sm:p-8  sm:border-custom-blue-dark/5 sm:border-1 sm:shadow-2xl sm:shadow-custom-blue/20 border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
            <div className="text-2xl font-semibold mt-[-8px]">
              Sign up to JMessenger
            </div>

            <div className="flex flex-col w-full ">
              <div className="flex gap-1">
                <label htmlFor="email" className="mb-2">
                  Your email
                </label>
                {!this.state.isValidEmail && this.invalidEmailError()}
              </div>
              <input
                onChange={(e) => this.setState({ email: e.target.value, isValidEmail: true })}
                value={this.state.email}
                type="email"
                id="email"
                required
                placeholder="Email"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] border-solid sm:bg-transparent border-gray-300 focus:outline-custom-blue"
              />
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex gap-1">
                <label htmlFor="uname" className="mb-2">
                  Username
                </label>
                {!this.state.isUsernameAvailable && this.usernameNotAvailableError()}
              </div>
              <input
                onChange={(e) => this.setState({ userName: e.target.value, isUsernameAvailable: true })}
                value={this.state.userName}
                type="email"
                id="uname"
                placeholder="Example: ram, ram_bahadur"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] border-solid sm:bg-transparent  border-gray-300 focus:outline-custom-blue"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="pass" className="mb-2 ">
                Password
              </label>
              <input
                onChange={(e) => {
                  this.setState({ password: e.target.value })
                }}
                value={this.state.password}
                type="password"
                id="pass"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] sm:bg-transparent border-gray-300 border-solid focus:outline-custom-blue"
              />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex gap-2">
                <label htmlFor="confirm-pass" className="mb-2">
                  Confirm password
                </label>
                {!this.state.passwordDidMatch && this.passswordMatchError()}
              </div>
              <input
                onChange={(e) => { this.setState({ confirmedPassword: e.target.value, passwordDidMatch: true }) }}
                value={this.state.confirmedPassword}
                type="password"
                id="confirm-pass"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                className="font-sans text-base p-2 sm:pl-[18px] sm:rounded-3xl border-[1px] sm:bg-transparent border-gray-300 border-solid focus:outline-custom-blue"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                if (!this.state.submitted) {
                  this.setState({ submitted: true })
                  this.handleSignUp()
                }
              }}
              className="focus:w-[40px] group flex justify-center items-center font-sans text-base mt-3 active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 sm:rounded-3xl w-full font-semibold transition-all duration-200"
            >
              <div className="group-focus:hidden">Submit</div>
              <SpinnerIcon className="hidden group-focus:block w-[40px] h-auto animate-spin" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);
export type { RegistrationData }