import { createBrowserRouter } from 'react-router-dom'

import Index from '@/pages/index'

import Dashboard from './pages/dashboard/dashboard'
import DashboardCards from './pages/dashboard/dashboard.cards'
import DashboardHistory from './pages/dashboard/dashboard.history'
import DashboardSupport from './pages/dashboard/dashboard.support'
import DashboardLayout from './pages/dashboard/layout'
import SignInLayout from './pages/signin/layout'
import SignIn from './pages/signin/signin'
import SignInMerchant from './pages/signin/signin.merchant'
import SignInPasswordReset from './pages/signin/signin.password-reset'
import SignInTeam from './pages/signin/signin.team'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: 'signin',
                element: <SignInLayout />,
                children: [
                    {
                        path: '',
                        element: <SignIn />
                    },
                    {
                        path: 'merchant',
                        element: <SignInMerchant />
                    },
                    {
                        path: 'team',
                        element: <SignInTeam />
                    },
                    {
                        path: 'password-reset',
                        element: <SignInPasswordReset />
                    }
                ]
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        path: '',
                        element: <Dashboard />
                    },
                    {
                        path: 'history',
                        element: <DashboardHistory />
                    },
                    {
                        path: 'cards',
                        element: <DashboardCards />
                    },
                    {
                        path: 'support',
                        element: <DashboardSupport />
                    }
                ]
            }
        ]
    }
])
