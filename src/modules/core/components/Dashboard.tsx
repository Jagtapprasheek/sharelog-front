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
    <div className="grid grid-rows-12 grid-flow-col">
      <section id="graph" className="row-start-1 row-end-13 col-span-12 flex bg-gray-700 text-white">
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
