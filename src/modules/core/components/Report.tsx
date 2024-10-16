import React from "react";

// import Report1 from "./Report1"
import Report2 from "./Report2";
import Report3 from "./Report3";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const Report: React.FC = () => {
  const analytics = {
    labels: [
      "totalWebsites",
      "totalFeedback",
      "totalWebsites",
      "totalFeedback",
      "totalWebsites",
      "totalFeedback",
    ],
    datasets: [
      {
        label: "Dashboard",
        data: [10, 29, 110, 39, 20, 59],
        backgroundColor: "#239f69",
        borderColor: "#239f69",
        pointBackgroundColor: "#239f69",
        pointBorderColor: "#239f69",
        tension: 0.3,
        fill: true,
        type: "bar",
      },
    ],
  };

  interface DataItem {
    tittle: string;
    color: string;
  }

  const data: DataItem[] = [
    {
      tittle: "Best Strategies",
      color: "#3bda88",
    },
    {
      tittle: "Best TimeSlot",
      color: "#c0383a",
    },
    {
      tittle: "Best day for Trading",
      color: "#f3732c",
    },
    {
      tittle: "Best day for Trading",
      color: "#5ac7ff",
    },
    {
      tittle: "Best LotSize",
      color: "#8ab76b",
    },
    {
      tittle: "Problems to overcome",
      color: "#f9c650",
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300">
          ShareLog Analysis
        </h1>
      </div>

      {/* <Report1/> */}
      {/* <Report2/> */}
      {/* <Report3/> */}

      <div className="grid grid-cols-3 gap-8 absolute left-[389px] mt-10">
        {data.map((i, idx) => {
          return (
            <React.Fragment key={idx}>
              <div
                style={{ backgroundColor: i.color }}
                className={` p-5 w-[198px] h-[127px] rounded-[35px]`}
              >
                <div>
                  <h1 className="text-lg font-semibold text-center text-black">
                    {i.tittle}
                  </h1>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="bg-[#262930] w-[50vw] absolute top-[500px] left-[389px] rounded-[24px]">
        <Bar data={analytics} />
      </div>
    </>
  );
};

export default Report;
