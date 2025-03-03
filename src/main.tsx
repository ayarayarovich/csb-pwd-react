import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './router.tsx'

import './index.css'

import { RouterProvider } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
