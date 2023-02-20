import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Products';
import Countries from './Countries';
import Countrydetails from './Countrydetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/countries',
                element:<Countries></Countries>
            },
            {
                path:'/countrydetails/:cname',
                element:<Countrydetails></Countrydetails>
            }
        ]
    }
    
])
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
