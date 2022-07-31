import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <img src="images/brand-box.png" alt="brand" className="w-28" />
      <ul className="flex">
        <li className="flex items-center group h-10 px-5 py-10">
          <a href="#HOME" className="lg:text-xs xl:text-xs 2xl:text-sm text-white flex items-baseline group-hover:text-yellow-300">
            HOME
            <span className="bg-white ml-3 h-2 pr-[4px] pl-[2px] rounded-full group-hover:bg-yellow-300"></span>
          </a>
        </li>
        <li className="flex items-center group h-10 px-5 py-10">
          <a href="#services" className="lg:text-xs xl:text-xs 2xl:text-sm text-white flex items-baseline group-hover:text-yellow-300">
            SERVICES
            <span className="bg-white ml-3 h-2 pr-[4px] pl-[2px] rounded-full group-hover:bg-yellow-300"></span>
          </a>
        </li>
        <li className="flex items-center group h-10 px-5 py-10">
          <a href="#WORKFLOW" className="lg:text-xs xl:text-xs 2xl:text-sm text-white flex items-baseline group-hover:text-yellow-300">
            WORK FLOW
            <span className="bg-white ml-3 h-2 pr-[4px] pl-[2px] rounded-full group-hover:bg-yellow-300"></span>
          </a>
        </li>
        <li className="flex items-center group h-10 px-5 py-10">
          <a href="#PORTFOLIO" className="lg:text-xs xl:text-xs 2xl:text-sm text-white flex items-baseline group-hover:text-yellow-300">
            PORTFOLIO
            <span className="bg-white ml-3 h-2 pr-[4px] pl-[2px] rounded-full group-hover:bg-yellow-300"></span>
          </a>
        </li>
        <li className="flex items-center group h-10 px-5 py-10">
          <a href="#ABOUTUS" className="lg:text-xs xl:text-xs 2xl:text-sm text-white flex items-baseline group-hover:text-yellow-300">
            ABOUT US
            <span className="bg-white ml-3 h-2 pr-[4px] pl-[2px] rounded-full group-hover:bg-yellow-300"></span>
          </a>
        </li>
        <li className="flex items-center group h-10 px-5 py-10">
          <a href="#OURVALUE" className="lg:text-xs xl:text-xs 2xl:text-sm text-white flex items-baseline group-hover:text-yellow-300">
            OUR VALUE
            <span className="bg-white ml-3 h-2 pr-[4px] pl-[2px] rounded-full group-hover:bg-yellow-300"></span>
          </a>
        </li>
        <li className="flex items-center group h-10 px-5 py-10 bg-yellow-300 lg:text-xs xl:text-xs 2xl:text-sm">
          (021) 8583944
        </li>
      </ul>
    </div>
  );
}
