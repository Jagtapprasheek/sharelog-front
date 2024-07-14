import React from 'react';
import VerticalNavbar from './components/VerticalNavbar';
import { Outlet } from 'react-router-dom';

// You can define props if needed later
// interface AppLayoutProps {
//     children?: React.ReactNode;
// }

const AppLayout: React.FC = () => {
    const isAuthenticated = true;

    return (
        <div className="grid grid-cols-12 h-full">
            {isAuthenticated && (
                <aside className="col-span-2 bg-gray-900 h-full">
                    <VerticalNavbar />
                </aside>
            )}
            <main className="col-span-10 bg-slate-800 w-full h-full">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
