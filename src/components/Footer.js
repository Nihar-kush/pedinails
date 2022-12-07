import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#4C4C4C] sm:h-20 w-full text-white flex flex-col sm:flex-row justify-between items-center px-4 ">
      <div>Copyright © Pedi & Nails Ltd, All Rights Reserved </div>
      <div className="flex gap-4">
        <a href="/" className="border-r-2 px-4">
          Terms & Conditions
        </a>
        <a href="/" className="border-r-2 px-4">
          Privacy
        </a>
        <a href="/" className="border-r-2 px-4">
          Account Activity
        </a>
        <a href="/">Report An Issue</a>
      </div>
    </div>
  );
}
