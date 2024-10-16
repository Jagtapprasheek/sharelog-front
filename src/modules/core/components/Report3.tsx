function Report3() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 p-8">
        <h1 className="text-center text-3xl font-bold mb-4 -mt-8">
          Setup Report
        </h1>
        <div className="flex space-x-8 w-full">
          <div className="bg-gray-400 rounded-[35px] w-[50vw] h-96 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              Setup performance chart
            </span>
          </div>

          <div
            style={{ backgroundColor: "rgba(59, 218, 137, 0.67)" }}
            className="space-y-5 p-8 w-60 h-96 flex flex-col text-black rounded-[40px]"
          >
            <h2 className="text-2xl font-semibold mb-4 text-left">Insights</h2>
            <p className="mb-2 text-left text-sm">
              Number of trades taken on this Setup
            </p>
            <p className="mb-2 text-left text-sm">Total Win</p>
            <p className="mb-2 text-left text-sm">Total Loss</p>
            <p className="text-left text-sm">Best time</p>
          </div>
        </div>

        {/* Two distinct tables with a gap */}
        <div className="flex justify-center mt-8 w-full space-x-8">
          <table className="table-auto border-collapse border border-gray-700 text-white w-full">
            <thead>
              <tr>
                <th className="border border-gray-700 px-4 py-2"></th>
                <th className="border border-gray-700 px-4 py-2">Trades</th>
                <th className="border border-gray-700 px-4 py-2">Return Win</th>
                <th className="border border-gray-700 px-6 py-2">Win %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-4 py-2" rowSpan="2">
                  <div>Monday</div>
                  <div className="text-sm text-gray-400">21-09-2023</div>
                </td>
                <td className="border border-gray-700 px-4 py-2">2</td>
                <td className="border border-gray-700 px-4 py-2">200</td>
                <td className="border border-gray-700 px-6 py-2">5.1%</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">4</td>
                <td className="border border-gray-700 px-4 py-2">9,376</td>
                <td className="border border-gray-700 px-6 py-2">71%</td>
              </tr>
            </tbody>
          </table>

          {/* Second Table */}
          <table className="table-auto border-collapse border border-gray-700 text-white w-full">
            <thead>
              <tr>
                <th className="border border-gray-700 px-12 py-2">Return Loss</th> 
                <th className="border border-gray-700 px-4 py-2">Loss %</th>
                <th className="border border-gray-700 px-4 py-2">Return</th>
                <th className="border border-gray-700 px-4 py-2">Brokerage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-12 py-2">0.00</td>
                <td className="border border-gray-700 px-4 py-2">0%</td>
                <td className="border border-gray-700 px-4 py-2">3,200</td>
                <td className="border border-gray-700 px-4 py-2">0.05%</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-12 py-2">0.00</td>
                <td className="border border-gray-700 px-4 py-2">0%</td>
                <td className="border border-gray-700 px-4 py-2">6,468</td>
                <td className="border border-gray-700 px-4 py-2">0.05%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Report3;
