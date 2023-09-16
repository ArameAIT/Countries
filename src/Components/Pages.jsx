import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import MainLayout from './MainLayout';
import Saved from './Saved';

function Pages() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>,
            children:[
                {
                    path: "",
                    element : <App/>
                },
                {
                    path : "saved",
                    element: <Saved/>
                }
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Pages