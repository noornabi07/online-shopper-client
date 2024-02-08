import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/routers.jsx';
import ContextProvider from './components/provider/ContextProvider/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>


  </React.StrictMode>,
)
