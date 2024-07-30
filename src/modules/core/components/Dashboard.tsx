import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const userName = "shyam";

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      graph: "graph 1",
      recordingBox: "recorder box 1",
      stats: "stats card 1",
    },
    {
      graph: "graph 2",
      recordingBox: "recorder box 2",
      stats: "stats card 2",
    },
    {
      graph: "graph 3",
      recordingBox: "recorder box 3",
      stats: "stats card 3",
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="grid grid-rows-12 grid-flow-col h-screen">
      <section id="header" className="row-start-1 col-span-12 w-full flex justify-between items-center bg-gray-800 text-white p-4">
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
      <section id="graph" className="row-start-2 row-end-13 col-span-12 flex bg-gray-700 text-white">
        <div className="relative w-full h-full overflow-hidden">
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-2 py-1 z-10">Prev</button>
          <div id="graphCarsoul" className='flex transition-transform duration-500 h-full w-full' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className='min-w-full h-auto grid grid-rows-12 grid-flow-row gap-1'>
                <div id="graphs" className='row-start-1 row-span-6 flex justify-center items-center'>

                  {slide.graph}
                </div>
                <div id="recordingBox" className='row-start-7 row-span-2 flex justify-center items-center'>
                  <div id="recordPlayer" className="flex justify-around items-center">
                    <button></button>
                  </div>
                </div>
                <div id="stats" className='row-start-9 row-span-3 flex justify-center items-start'>
                  <div id="NetP" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-share-green me-2 flex-wrap'>
                    <h4>Net P&L</h4>
                    {slide.graph}
                    <img src="src/assets/dashboard/netP&l.svg" alt="" />
                  </div>
                  <div id="strategy" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-[#652F8D] mx-2 flex-wrap' >
                    <h4 className="">Stratergy Used</h4>
                    {slide.graph}
                    <img src="src/assets/dashboard/stratergy.svg" alt="" />
                  </div>
                  <div id="trades" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-[#9D2062] mx-2 flex-wrap drop-shadow-md overflow-hidden'>
                    <h4>No Of Trades</h4>
                    {slide.graph}
                    <img src="src/assets/dashboard/trades.svg" alt="" />

                  </div>
                  <div id="brokarage" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-[#4B5BB1] ms-2 flex-wrap drop-shadow-md'>
                    <h4>Brokerage</h4>
                    {slide.graph}
                    <img src="src/assets/dashboard/brokarage.svg" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-2 py-1 z-10">Next</button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
