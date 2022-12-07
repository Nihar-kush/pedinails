import React from "react";

export default function Card() {
  return (
    <div className="rounded-lg bg-[#F0F0F0] shadow-lg w-[14rem] h-[17rem] overflow-hidden flex flex-col">
      <div className="bg-[#FCAC11] flex items-center font-semibold justify-center h-[20%]">
        Sent Emails
      </div>
      <div className="text-[#289D01] h-[60%] text-5xl font-semibold flex items-center justify-center">
        4120
      </div>
      <div className="pl-6 pb-4 h-[20%]">
        <p className="text-sm">Send time</p>
        <p className="font-semibold">2014-12-01</p>
      </div>
    </div>
  );
}
