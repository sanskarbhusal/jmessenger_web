import React from "react";
export default class Contact extends React.Component {
  render() {
    return (
      <div className="bg-white items-center p-[9px]">
        <div id="avatar">
          <div className="bg-orange-300 flex flex-row justify-center items-center h-[54px] w-[54px] rounded-full">
            <div className="font-sans font-extrabold text-3xl text-white">
              S
            </div>
          </div>
        </div>
        <div id="highlights"></div>
      </div>
    );
  }
}
