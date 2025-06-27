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

    return <div className="w-[100%] min-h-[8%] max-h-fit group self-end flex flex-col justify-center items-center sm:ml-5 sm:mr-5 bg-custom-blue/10 sm:border border-custom-blue/30 rounded-xl selection:bg-custom-blue selection:text-thite">
      <div>CContent Content Content Content Content Content content</div>
      <div className="pl-10 flex flex-row items-center gap-1 text-gray-400 text-xs">
        <div>{time}</div>
        <div className="flex flex-row justify-center items-center">
          <DoubleCheckIcon className=" text-custom-blue/90 group-hover:text-gray-400 text-sm" />
        </div>
      </div>
    </div>;
  }
}
