import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * This reusable component is verticle navar 
 * @returns 
 */
const VerticalNavbar = () => {

  // we use session storage because when user refresh the page
  // he should get the the correct tab insted of default tab selected

  const [selectedTab, setSelectedTab] = useState<string>(() => {
    // use session storage because it will be storing the values for perticular 
    // session or tab
    return sessionStorage.getItem('selectedTab') || 'dashboard';
  });

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    sessionStorage.setItem('selectedTab', tab);
  };

  useEffect(() => {
    // Retrieve the selected tab from local storage on component mount
    const savedTab = sessionStorage.getItem('selectedTab');
    if (savedTab) {
      setSelectedTab(savedTab);
    }
  }, []);


  return (
    <div className="side-nav">
      <div id="sharelog-logo" className="p-3">
        Sharelog
      </div>
      <ul className="mt-3 text-white flex flex-col justify-center items-start gap-y-3 w-full">

        <Link to="/dashboard"
          className={`p-3 ps-5 ${selectedTab === 'dashboard' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('dashboard')}>
          <li className="flex">
            <img className="me-2" src="src/assets/navbar/dashboard.svg" />Dashboard
          </li>
        </Link>


        <Link to="/Portfolio" className={`p-3 ps-5 ${selectedTab === 'portfolio' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('portfolio')}>
          <li className="flex">
            <img className="me-2" src="src/assets/navbar/portfolio.svg" />Portfolio
          </li>
        </Link>

        <Link to="/Report" className={`p-3 ps-5 ${selectedTab === 'report' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('report')}>
          <li className="flex">
            <img className="me-2" src="src/assets/navbar/report.svg" />Report
          </li>
        </Link>

        <Link to="/Strategy" className={`p-3 ps-5 ${selectedTab === 'strategy' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('strategy')}>
          <li className="flex" >
            <img className="me-2" src="src/assets/navbar/Strategy.svg" />Strategy
          </li>
        </Link>

        <Link to="/Watchlist" className={`p-3 ps-5 ${selectedTab === 'watchlist' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('watchlist')}
        >
          <li className="flex">
            <img className="me-2" src="src/assets/navbar/watchlist.svg" />Watch List
          </li>
        </Link>

        <Link to="/Categroies" className={`p-3 ps-5 ${selectedTab === 'categroies' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('categroies')}>
          <li className="flex">
            <img className="me-2" src="src/assets/navbar/Categories.svg" />Categroies
          </li>
        </Link>

        <Link to="/community"
          className={`p-3 ps-5 ${selectedTab === 'community' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('community')}>
          <li className="flex">
            <img className="me-2" src="src/assets/navbar/portfolio.svg" />Community
          </li>
        </Link>

        <Link to="/Profile" className={`p-3 ps-5 ${selectedTab === 'profile' ? 'bg-share-green' : 'bg-transparent'} rounded-lg w-full `}
          onClick={() => handleTabClick('profile')}>
          <li className="flex">
            <img className="me-2" src="src/assets/navbar/Profile.svg" /> Profile
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
