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

// function temp() {
//   return (
//     <div className="

//    ">
//     </div>
//   )
// }


export default class ChatBubble extends React.Component<Props, State> {

  static defaultProps = { foo: "foo" };
  state = {};

  render() {
    const iso = new Date().toISOString()
    const utc = new Date(iso)
    const time = removeSeconds(utc.toLocaleTimeString())

    return (
      <div className="sm:w-[45%] group sm:self-end sm:bg-transparent sm:rounded-xl">
        <div className="w-full h-full flex flex-col bg-transparent sm:border border-custom-blue/30 rounded-xl sm:rounded-br-none selection:bg-custom-blue/90 selection:text-white">
          <div className="pl-3 pt-2 w-full h-full flex  whitespace-break-spaces font-normal text-base rounded-xl text-pretty drop-shadow-sm">
            Web frontend is so easy. Lots of complicated UI programming and character encoding/decoding is abstrated. Like for example this 😆 emoji works out of the box. You just copy the emoji from any platfrom and the emoji data is decoded and rendered properly in the browser. You need not be a programming wizard to be able to show emojis.
          </div>
          <div className="flex flex-row justify-end items-end gap-1 pr-1">
            <div className="flex flex-row items-center font-medium text-xs text-gray-500 select-none">{time}</div>
            <DoubleCheckIcon className="text-custom-blue/90 sm:group-hover:text-gray-400 font-bold text-md h-fit w-fit" />
          </div>
        </div>
      </div>
    )
  }
}
