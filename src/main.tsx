import ReactDOM from 'react-dom/client';
import React from 'react';

/**
 * React redux imports 
 */
import { Provider } from 'react-redux';
import store from './store';

import './index.css';

/**
 * Import components 
 */
import App from './App.tsx';
import Dashboard from './modules/core/components/Dashboard.tsx';
import Signin from './modules/auth/components/Signin.tsx';
import Signup from './modules/auth/components/Signup.tsx';
import Strategy from './modules/core/components/Strategy.tsx';
import Portfolio from './modules/core/components/Portfolio.tsx';
import Profile from './modules/core/components/Profile.tsx';
import Watchlist from './modules/core/components/Watchlist.tsx';
import Categories from './modules/core/components/Categroies.tsx';
import Report from './modules/core/components/Report.tsx';
// import { ErrorPage } from "./routes/error-page.jsx";

// react router imports
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from './AppLayout.tsx';
import About from './modules/core/components/About.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Use the layout component here
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path:"aboutus",
        element:<About />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "auth/signup",
        element: <Signup />,
      },
      {
        path: "auth/signin",
        element: <Signin />,
      },
      {
        path: "Strategy",
        element: <Strategy />,
      },
      {
        path: "Portfolio",
        element: <Portfolio />,
      },
      {
        path: "Report",
        element: <Report />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Watchlist",
        element: <Watchlist />,
      },
      {
        path: "Categories",
        element: <Categories />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
