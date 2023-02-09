import { Navigate, useRoutes } from 'react-router-dom';
import React, { Component } from 'react'
import DashboardLayout from './layout';

import Login from './pages/login/Login';
import Transactions from './pages/transaction/Transactions';

  function ERoutes() {
    const element = useRoutes([
      {
        path: "/",
        element: <DashboardLayout/>,
        children: [
          { path: 'transaction', element: <Transactions/>},
        ]
      }
    //   {
    //     path: "/",
    //     element: <Login/>,
    //   },
    ]);
    
    return element;
  }
  
  export default ERoutes;
  