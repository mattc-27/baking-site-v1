import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import ReactGA from 'react-ga4';

import { ParallaxProvider } from "react-scroll-parallax";

import './style.css';

import { Layout } from './components/Layout';
import { Home } from './Home';
import { RecipePage } from './components/RecipePage';

ReactGA.initialize([
    {
        trackingId: 'G-PFSPZEC7DM'
    }
]);

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
