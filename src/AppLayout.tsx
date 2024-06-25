import React, { ReactNode } from 'react';
import VerticalNavbar from './components/VerticalNavbar';
import HorizontalNavbar from './components/HorizontalNavbar';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <HorizontalNavbar />
            <div className="main-content">
                <VerticalNavbar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
