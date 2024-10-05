import React, { useState } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  imgSrc: string;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, imgSrc, bgColor }) => (
  <div className={`flex justify-around items-center flex-col rounded-2xl w-1/6 h-36 ${bgColor} mx-2 flex-wrap shadow-lg`}>
    <h4 className="text-white font-semibold">{title}</h4>
    <p className="text-white">{value}</p>
    <img src={imgSrc} alt={title} className="w-98 h-8" />
  </div>
)

const Dashboard = () => {
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
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className=" h-screen grid grid-flow-col">
      <section
        id="graph"
        className="col-span-12 flex bg-gray-700 text-white"  
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/4 bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-600 transition-colors duration-300 shadow-lg z-10"
          >
            prev
          </button>

          {/* Slide Carousel */}
          <div
            id="graphCarousel"
            className="flex transition-transform duration-500 h-full w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-full grid grid-rows-12 grid-flow-row gap-4 p-4"
              >
                {/* Graph Section */}
                <div
                  id="graphs"
                  className="row-start-1 row-span-8 flex justify-center items-center bg-gray-800 rounded-lg shadow-lg"
                >
                  <h2 className="text-lg font-semibold">{slide.graph}</h2>
                </div>

                {/* Recording Box Section */}
                <div id="recordingBox" className="row-start-9 row-span-1 flex justify-center items-center">
                  <div id="recordPlayer" className="flex justify-around items-center p-4 bg-gray-600 rounded-lg">
                    <button className="bg-green-500 px-4 py-2 rounded-full shadow-lg hover:bg-green-400 transition">
                      Record
                    </button>
                  </div>
                </div>

                {/* Stats Section */}
                <div id="stats" className="row-start-10 row-span-2 flex justify-between items-start">
                  <StatCard
                    title="Net P&L"
                    value={slide.graph}
                    imgSrc="src/assets/dashboard/netP&l.svg"
                    bgColor="bg-green-500"
                  />
                  <StatCard
                    title="Strategy Used"
                    value={slide.graph}
                    imgSrc="src/assets/dashboard/stratergy.svg"
                    bgColor="bg-purple-700"
                  />
                  <StatCard
                    title="No Of Trades"
                    value={slide.graph}
                    imgSrc="src/assets/dashboard/trades.svg"
                    bgColor="bg-pink-700"
                  />
                  <StatCard
                    title="Brokerage"
                    value={slide.graph}
                    imgSrc="src/assets/dashboard/brokarage.svg"
                    bgColor="bg-blue-600"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/4 bg-gray-800 text-white rounded-full px-3 py-2 hover:bg-gray-600 transition-colors duration-300 shadow-lg z-10"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
