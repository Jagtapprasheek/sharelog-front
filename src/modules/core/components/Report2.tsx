function Report2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 p-8">
      <h1 className="text-center text-3xl font-bold mb-4 -mt-8">
        Mistakes Report
      </h1>
      <div className="flex space-x-8 w-full">
        <div className="bg-gray-400 rounded-[35px] w-[50vw] h-96 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">
            Bar chart mistakes
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

      <div className="w-full mt-8">
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border border-black p-2">Mistakes</th>
                <th className="border border-black p-2">Return</th>
                <th className="border border-black p-2">Return Win</th>
                <th className="border border-black p-2">Return Loss</th>
                <th className="border border-black p-2">Loss%</th>
                <th className="border border-black p-2">Trades</th>
                <th className="border border-black p-2">Brokerage Fees%</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Report2;
