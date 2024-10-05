import React from 'react';
import VerticalNavbar from './components/VerticalNavbar';
import { Outlet } from 'react-router-dom';
import HorizontalNavbar from './components/HorizontalNavbar';

/**
 * This is applayout file which is used to structured and includes the navbar 
 * and we need not to add the navbar bar in every file 
 * @returns 
 */
const AppLayout: React.FC = () => {
    const userName = "shyam";
    /**
     * @{isAuthenticated} is to hide the verticle and horizontal navbars 
     */
    const isAuthenticated = true;

    return (
        <div className="h-full min-h-screen grid" style={{ gridTemplateColumns: isAuthenticated ? '1fr 4fr' : '1fr' }}>
            {isAuthenticated && (
                <aside className="bg-gray-900 h-full">
                    <VerticalNavbar />
                </aside>
            )}
            <main className="bg-slate-800 w-full h-full flex flex-col">
                {isAuthenticated && (
                    <HorizontalNavbar userName={userName} />
                )}
                
                {/**style componnet is used here so we can add padding after the dahboard or logged in */}
                <div className="flex-1" style={{ padding: isAuthenticated ? '1' : '0' }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
