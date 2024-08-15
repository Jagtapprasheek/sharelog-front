import React from "react";
import { Link } from "react-router-dom";

interface HoriZontalNavBar {
  userName : string,
}
/**
 * This reusable component is horizontal navar 
 * @returns 
 */
const HorizontalNavbar : React.FC<HoriZontalNavBar> = ({userName}) => {
  return (
    <div className="sidebar">
    <section id="header" className="w-full flex justify-between items-center bg-gray-800 text-white p-1">
        <h2>Hi! {userName}</h2>

        <form className="max-w-md mx-auto ">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path className="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div> */}
            <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
          </div>
        </form>

        {/* <input className="bg-[#2E2F35]" type="search" name="" id="" /> */}
        <div id="menu" className='flex'>
          <img className='me-2' src="src/assets/dashboard/bell.svg" alt="" />
          <div id="profileMenu">
            <img src="src/assets/dashboard/.svg" alt="" />
            <button>{userName}</button>
          </div>
        </div>
      </section>
  </div>
  );
};

export default HorizontalNavbar;
