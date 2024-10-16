const Report1 = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300">
        <h1 className="text-3xl font-bold mb-4 -mt-8">Sector Report</h1>
        <div className="flex space-x-8">
          <div className="bg-gray-400 rounded-[35px] p-8 w-[50vw] h-96 "> 
            <span className="text-2xl font-bold text-gray-800">
              Sector report chart
            </span>
          </div>
  
          <div
            style={{ backgroundColor: "rgba(59, 218, 137, 0.67)" }}
            className="space-y-5 p-9 w-60 h-96 flex flex-col text-black rounded-[40px]" 
          >
            <h2 className="text-2xl font-semibold mb-4 text-left">Insights</h2>
            <p className="mb-2 text-left text-sm">Number of trades taken on this setup</p>
            <p className="mb-2 text-left text-sm">Total Win</p>
            <p className="mb-2 text-left text-sm">Total Loss</p>
            <p className="text-left text-sm">Best time</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Report1;
  