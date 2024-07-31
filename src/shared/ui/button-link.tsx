import { PropsWithChildren, RefAttributes } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import clsx from 'clsx'

interface Props extends PropsWithChildren, LinkProps, RefAttributes<HTMLAnchorElement> {
    variant?: 'colored' | 'white'
    size?: 'small' | 'normal'
}

export default function ButtonLink(props: Props) {
    const { children, variant = 'colored', size = 'normal', ...otherProps } = props

    return (
        <Link
            {...otherProps}
            className={clsx(
                'rounded-full inline-block text-center font-montserrat font-medium leading-none transition-all disabled:shadow-none shadow-[0px_3px_12px_0px_rgba(74,58,255,0.18)]',
                variant === 'colored' &&
                    'bg-blue text-w1 hover:bg-[#4747FD] disabled:bg-m3 disabled:text-m2',
                variant === 'white' &&
                    'bg-w1 text-blue border-blue border hover:border-[#4747FD] hover:text-[#4747FD]',
                size === 'small' && 'px-4 py-2 text-base',
                size === 'normal' && 'px-8 py-4 text-lg'
            )}>
            {children}
        </Link>
    )
}
