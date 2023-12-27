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
import Registration from './Public/Components/Registration/Registration';
import Login from './Public/Components/Login/Login';
import Myapphome from './Private/Components/MyappHome/Myapphome';
import Overview from './Private/Components/Overview/Overview';
import Allin from './Private/Components/All in/Allin';
import Layout from './Public/Layout/Layout';
import Myapplayout from './Private/MyappLayout/Myapplayout';
import Membership from './Private/Components/Membership/Membership';
import Payments from './Private/Components/Payments/Payments';
import Myinformation from './Private/Components/Myinformation/Myinformation';
import Visits from './Private/Components/Visits/Visits';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    errorElement: <div><h1>404 a keresett oldal nem talalhato</h1></div>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/findclub',
        element: <Findclub />
      },
      {
        path: '/prices',
        element: <Prices />
      },
      {
        path: '/whycentral',
        element: <Whycentral />
      },
      {
        path: '/support',
        element: <Support />
      },
      {
        path: '/grouplessons',
        element: <Grouplessons />
      },
      {
        path: '/train',
        element: <Train />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/login',
        element: <Login />
      }
    ],
  },
  {
    path: "/myapp",
    element: <Myapplayout />,
    children: [
      {
        path: '/myapp',
        element:<Overview />
      },
      {
        path: '/myapp/allin',
        element: <Allin />
      },
      {
        path: '/myapp/membership',
        element: <Membership />
      },
      {
        path: '/myapp/payments',
        element: <Payments />
      },
      {
        path: '/myapp/myinformation',
        element: <Myinformation />
      },
      {
        path: '/myapp/visits',
        element: <Visits />
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



