import React from "react";
import { LiaCheckDoubleSolid as DoubleCheckIcon } from "react-icons/lia";
//import { LiaCheckSolid as singleCheck } from "react-icons/lia";


function removeSeconds(time: string): string {
  const arr = time.split(":")
  const meridiem = arr.pop()?.split(" ")[1] //AM or, PM
  const hhmm = arr.join(":")
  return hhmm + " " + meridiem
}

type State = {};
type Props = Required<typeof ChatBubble.defaultProps> & {
  type?: "text" | "file" | "photo" | "url"
  content?: string;
  sender?: "you" | "chat"
  timestamp?: string;
};

function temp(props: Props) {
  return (
    <div className="
   
   ">
    </div>
  )
}


export default class ChatBubble extends React.Component<Props, State> {

  static defaultProps = { foo: "foo" };
  state = {};

  render() {
    const iso = new Date().toISOString()
    const utc = new Date(iso)
    const time = removeSeconds(utc.toLocaleTimeString())

    return <div className="max-w-[20%] max-h-[30%] scrollbar-thin overflow-auto group self-end flex flex-col justify-center items-center sm:mt-2 sm:mr-24 bg-custom-blue/10 sm:border border-custom-blue/30 rounded-xl selection:bg-custom-blue selection:text-thite">
      <div className="p-2 font-medium text-base">Text text</div>
      <div className="">
        <div>{time}</div>
        <div className="">
          <DoubleCheckIcon className=" text-custom-blue/90 group-hover:text-gray-400 text-sm" />
        </div>
      </div>
    </div>;
  }
}
