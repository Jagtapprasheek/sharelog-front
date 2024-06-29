import ReactDOM from 'react-dom/client'
import React from 'react'
/**
* React redux imports 
*/
import { Provider } from 'react-redux'
import store from './store'

import './index.css'

/**
 * Import components 
 */
import App from './App.tsx'
import Dashboard from './modules/core/components/Dashboard.tsx';
import Signin from './modules/auth/components/Signin.tsx';
import Signup from './modules/auth/components/Signup.tsx'
import ErrorPage from "./routes/error-page.jsx";

// react router imports
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/auth/signup",
    element : <Signup />,
    errorElement : <ErrorPage />, 
  },
  {
    path:"/auth/signin",
    element : <Signin />,
    errorElement : <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
