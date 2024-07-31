import { createBrowserRouter } from 'react-router-dom'

import Index from '@/pages/index'

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
            }
        ]
    }
])
