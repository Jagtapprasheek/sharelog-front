import React, { useEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface PortfolioProps {
    PAndL: string;
    BestStrat: string;
    NumTrads: string;
    TotBrokerage: string;
    equity: number;
    fno: number;
    commodity: number;
    currency: number;
    splineData: Array<{ date: string; balance: number }>;
}

interface InfoCardProps {
    title: string;
    content: string;
 }
  
  const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => (
    <div className="w-full md:w-5/12 m-2 p-3 bg-white shadow rounded-lg">
      <h6 className="pl-3">{title}</h6>
      <h6 className="pl-3 text-gray-600">{content}</h6>
    </div>
  );
  



  const Portfolio: React.FC = () => {
    const splineChartRef = useRef<HTMLDivElement>(null);
    const pieChartRef = useRef<HTMLDivElement>(null);
  
    const PAndL = "10,000 Rs";
    const BestStrat = "Mean Reversion";
    const NumTrads = "200";
    const TotBrokerage = "500 Rs";
    const equity = 40;
    const fno = 30;
    const commodity = 20;
    const currency = 10;

    const splineData = [
      { date: "2023-01-01", balance: 5000 },
      { date: "2023-02-01", balance: 6521 },
      { date: "2023-03-01", balance: 6320 },
      { date: "2023-04-01", balance: 7000 },
      { date: "2023-05-01", balance: 6900 }
    ];
  
    useEffect(() => {
      if (splineChartRef.current && pieChartRef.current) {
        // Create Spline Chart
        const splineRoot = am5.Root.new(splineChartRef.current);

        if (splineRoot._logo) {
          splineRoot._logo.dispose();
        }

        splineRoot.setThemes([am5themes_Animated.new(splineRoot)]);
        const splineChart = splineRoot.container.children.push(am5xy.XYChart.new(splineRoot, {
          layout: splineRoot.verticalLayout
        }));
  
        const xAxis = splineChart.xAxes.push(am5xy.DateAxis.new(splineRoot, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5xy.AxisRendererX.new(splineRoot, {})
        }));
  
        const yAxis = splineChart.yAxes.push(am5xy.ValueAxis.new(splineRoot, {
          renderer: am5xy.AxisRendererY.new(splineRoot, {})
        }));
  
        const series = splineChart.series.push(am5xy.SmoothedXYLineSeries.new(splineRoot, {
          name: "Balance",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "balance",
          valueXField: "date"
        }));
  
        series.data.setAll(splineData.map(item => ({
          date: new Date(item.date).getTime(),
          balance: item.balance
        })));
  


        // Create Pie Chart
        const pieRoot = am5.Root.new(pieChartRef.current);
        if (pieRoot._logo) {
          pieRoot._logo.dispose();
        }
        pieRoot.setThemes([am5themes_Animated.new(pieRoot)]);
        
        const pieChart = pieRoot.container.children.push(am5percent.PieChart.new(pieRoot, {
          layout: pieRoot.verticalLayout,
          innerRadius: am5.percent(50)
        }));
  
        const pieSeries = pieChart.series.push(am5percent.PieSeries.new(pieRoot, {
          valueField: "value",
          categoryField: "category"
        }));
  
        pieSeries.ticks.template.set("visible", false);

        pieSeries.slices.template.set("toggleKey", "none");

        pieSeries.data.setAll([
          { category: "Equity", value: equity },
          { category: "Futures & Options", value: fno },
          { category: "Commodity", value: commodity },
          { category: "Currency", value: currency }
        ]);
  
        return () => {
          splineRoot.dispose();
          pieRoot.dispose();
        };
      }
    }, [equity, fno, commodity, currency, splineData]);
  
    return (
      <div className="container mx-auto">
          <div className="flex flex-col-reverse sm:flex-row pb-5">
  
            <div className="md:w-11/12 md:mx-auto">
  
              <div className="flex flex-wrap mt-4">
                <div className="w-full md:w-2/3 p-2">
                  <div className="bg-transparent shadow rounded-lg p-4">
                    <h1 className="text-2xl">Account Graph</h1>
                    <div ref={splineChartRef} className="h-64"></div>
                  </div>
                </div>
  
                <div className="w-full md:w-1/3 p-2">
                  <div className="bg-transparent shadow rounded-lg p-4">
                    <h1 className="text-2xl">Sector Breakdown</h1>
                    <div ref={pieChartRef} className="h-24"></div>
                  </div>
                </div>
              </div>
  
              <div id="stats" className='flex justify-center items-start gap-x-8 mt-4'>
                  <div id="NetP" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-share-green me-2 flex-wrap'>
                    <h4>Net P&L</h4>
                    {PAndL}
                    <img src="src/assets/dashboard/netP&l.svg" alt="" />
                  </div>
                  <div id="strategy" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-[#652F8D] mx-2 flex-wrap' >
                    <h4 className="">Stratergy Used</h4>
                    {BestStrat}
                    <img src="src/assets/dashboard/stratergy.svg" alt="" />
                  </div>
                  <div id="trades" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-[#9D2062] mx-2 flex-wrap drop-shadow-md overflow-hidden'>
                    <h4>No Of Trades</h4>
                    {NumTrads}
                    <img src="src/assets/dashboard/trades.svg" alt="" />

                  </div>
                  <div id="brokarage" className='flex justify-around items-center flex-col rounded-[30px] w-1/6 h-32 bg-[#4B5BB1] ms-2 flex-wrap drop-shadow-md'>
                    <h4>Brokerage</h4>
                    {TotBrokerage}
                    <img src="src/assets/dashboard/brokarage.svg" alt="" />
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  };
  export default Portfolio;