
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Profile from "./pages/Profile.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
      },
  ]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
