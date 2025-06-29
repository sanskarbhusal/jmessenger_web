import React from "react";
import ChatContext from "../../ChatContext.tsx";

type Props = Required<typeof Contact.defaultProps> & {
  chatName: string
  chatId: string
  dateOfLastMessage?: string
  lastPersonToMessage?: string
  lastMessage?: string
};

type State = {
}

export default class Contact extends React.Component<Props, State> {

  static defaultProps = {};
  static contextType = ChatContext;
  declare context: React.ContextType<typeof ChatContext>;

  constructor(props: Props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
    }
  }

  handleClick() {
    this.context.swap()
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="group sm:transition delay-0 linear w-[370px] h-fit rounded-full hover:drop-shadow-lg bg-white sm:bg-transparent hover:bg-custom-blue/10 hover:shadow-md active:bg-custom-blue/30 font-sans border border-gray-300/85 sm:border-transparent flex flex-row items-center select-none"
      >
        <div className="sm:transition delay-0 linear min-h-[60px] min-w-[60px] flex flex-row justify-center items-center bg-white sm:bg-transparent rounded-full shadow-md sm:group-hover:shadow-none" >

          <div className="group min-h-[48px] min-w-[48px] sm:group-hover:min-w-[58px] sm:group-hover:min-h-[58px] bg-gradient-to-b from-orange-400/90 to-orange-500/90 flex justify-center items-center rounded-full">
            <div className="font-sans font-extrabold text-3xl text- group-hover:text-4xl text-white">S</div>
          </div>
        </div>
        <div className="w-full ml-[8px] flex flex-col sm:drop-shadow-sm">
          <div className="flex flex-row justify-between">
            <div className="font-medium text-lg select-none mt-[5px]">{this.props.chatName}</div>
            <div className="text-gray-500 pr-[15px] font-medium text-xs">
              {this.props.dateOfLastMessage}
            </div>
          </div>
          <div className="h-[24px] flex flex-row">
            <div className="mr-[4px] text-custom-blue font-medium text-sm">
              {this.props.lastPersonToMessage + ":"}
            </div>
            <div className="overflow-hidden w-[245px] text-nowrap text-ellipsis text-gray-500 font-normal text-sm">
              {this.props.lastMessage}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export type { Props as ContactPropsType }