import { useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'

import clsx from 'clsx'

interface Props extends AriaButtonProps {
    variant?: 'colored' | 'white'
    size?: 'small' | 'normal'
}

export default function Button(props: Props) {
    const ref = useRef<HTMLButtonElement | null>(null)
    const { children, variant = 'colored', size = 'normal' } = props
    const { buttonProps } = useButton(props, ref)

    return (
        <button
            {...buttonProps}
            className={clsx(
                'rounded-full text-center px-8 text-ce py-4 text-lg font-montserrat font-medium leading-none transition-all disabled:shadow-none shadow-[0px_3px_12px_0px_rgba(74,58,255,0.18)]',
                variant === 'colored' &&
                    'bg-blue text-w1 hover:bg-[#4747FD] disabled:bg-m3 disabled:text-m2',
                variant === 'white' &&
                    'bg-w1 text-blue border-blue border hover:border-[#4747FD] hover:text-[#4747FD]',
                size === 'small' && 'px-4 py-2 text-base',
                size === 'normal' && 'px-8 py-4 text-lg'
            )}
            ref={ref}>
            {children}
        </button>
    )
}
