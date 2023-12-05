import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Public/Components/Home/Home';
import Findclub from './Public/Components/Find club/Finclub';
import Prices from './Public/Components/Prices/Prices';
import Whycentral from './Public/Components/Whycentralstrength/Whycentral';
import Support from './Public/Components/Support/Support';
import Grouplessons from './Public/Components/Group lessons/GroupLessons';
import Train from './Public/Components/Train everywhere/Train';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />,
    errorElement: <div><h1>404 a keresett oldal nem talalhato</h1></div>
  },
  {
    path: '/findclub',  // http://localhost:3000/rolunk -> Rolunk component
    element: <Findclub />
  },
  {
    path: '/prices',  // http://localhost:3000/rolunk -> Rolunk component
    element: <Prices />
  },
  {
    path: '/whycentral',  // http://localhost:3000/rolunk -> Rolunk component
    element: <Whycentral/>
  },
  {
    path:'/support',
    element: <Support />
  },
  {
    path:'/grouplessons',
    element: <Grouplessons />
  },
  {
    path:'/train',
    element: <Train />
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


