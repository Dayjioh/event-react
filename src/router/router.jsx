import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Homepage from '../components/Homepage/Homepage'
import ServicePage from '../components/ServicePage/ServicePage'
import ArrowUp from '../components/ArrowUp/ArrowUp'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/services',
                element: <ServicePage />
            },
            {
                path: '/',
                element : <ArrowUp />
            }
        ]
    }
])

export default router