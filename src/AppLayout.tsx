import React from 'react';
import VerticalNavbar from './components/VerticalNavbar';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
    const isAuthenticated = false;

    return (
        <div className="h-full min-h-screen grid" style={{ gridTemplateColumns: isAuthenticated ? '1fr 4fr' : '1fr' }}>
            {isAuthenticated && (
                <aside className="bg-gray-900 h-full">
                    <VerticalNavbar />
                </aside>
            )}
            <main className="bg-slate-800 w-full h-full">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
