import React from 'react';
import VerticalNavbar from './components/VerticalNavbar';
import { Outlet } from 'react-router-dom';
import HorizontalNavbar from './components/HorizontalNavbar';

/**
 * This is AppLayout file which is used to structure and include the navbar 
 * so we don't need to add the navbar in every file.
 */
const AppLayout: React.FC = () => {
    const userName = "shyam";
    
    /**
     * isAuthenticated is used to conditionally show the vertical and horizontal navbars.
     */
    const isAuthenticated = true;

    return (
        <div className="h-screen grid" style={{ gridTemplateColumns: isAuthenticated ? '1fr 4fr' : '1fr' }}>
            {/* Vertical Navbar */}
            {isAuthenticated && (
                <aside className="bg-gray-900 h-screen sticky top-0">
                    <VerticalNavbar />
                </aside>
            )}
            
            {/* Main content */}
            <main className="bg-slate-800 w-full h-screen flex flex-col">
                {isAuthenticated && (
                    <div className="sticky top-0 z-50 p-3">
                        <HorizontalNavbar userName={userName} />
                    </div>
                )}

                {/* Main content area */}
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
