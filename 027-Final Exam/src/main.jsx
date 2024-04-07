import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.js'
import { RouterProvider } from 'react-router-dom'
import './assets/css/style.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer theme="dark"/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
