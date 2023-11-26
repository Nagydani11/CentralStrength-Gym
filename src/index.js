import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rolunk from './Public/Components/Home';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    errorElement: <div><h1>404 a keresett oldal nem talalhato</h1></div>
  },
  {
    path: '/rolunk',  // http://localhost:3000/rolunk -> Rolunk component
    element: <Rolunk />
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


