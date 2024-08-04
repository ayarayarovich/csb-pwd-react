import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Index() {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/signin', {
                replace: true
            })
        }
    }, [location.pathname, navigate])
    return <Outlet />
}
