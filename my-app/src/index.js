
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Profile from "./pages/Profile.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';


const router = createBrowserRouter([
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/products/:id",
        element: <ProductDetail/>,
      },
  ]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
