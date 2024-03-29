import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import './style.css';

import { ParallaxProvider } from "react-scroll-parallax";

import { Layout } from './components/Layout';
import { Home } from './Home';
import { RecipePage } from './components/RecipePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                children: [
                    { index: true, element: <Home /> },
                    {
                        path: '/recipe/:id',
                        element: <RecipePage />,
                    },
                ]
            }
        ]
    }
])

export default function App() {
    return (
        <ParallaxProvider>
            <RouterProvider router={router} />
        </ParallaxProvider>
    );
}
