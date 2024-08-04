import { PropsWithChildren } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import clsx from 'clsx'

interface Props extends Omit<NavLinkProps, 'children'>, PropsWithChildren {}

export default function NavigationLink(props: Props) {
    const { children, ...otherProps } = props

    return (
        <NavLink
            {...otherProps}
            className={({ isActive }) =>
                clsx(
                    'block relative p-5 focus-visible:ring-2 outline-none transition-shadow',
                    isActive && 'bg-gradient-to-r from-blue/10 to-blue/0'
                )
            }>
            {({ isActive }) => (
                <>
                    {isActive && (
                        <div className='absolute inset-y-0 left-0 bg-blue w-2 -translate-x-1/2 rounded-r-full'></div>
                    )}
                    <div
                        className={clsx(
                            'flex items-center leading-none gap-4',
                            isActive ? 'text-blue' : 'text-m2'
                        )}>
                        {children}
                    </div>
                </>
            )}
        </NavLink>
    )
}
