import { useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'

import clsx from 'clsx'

interface Props extends AriaButtonProps {
    variant?: 'colored' | 'white' | 'monochrome' | 'ghost'
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
                'rounded-full text-center text-nowrap font-montserrat font-medium leading-none transition-all disabled:shadow-none',
                variant === 'colored' &&
                    'bg-blue text-w1 hover:bg-[#4747FD] disabled:bg-m3 disabled:text-m2 shadow-[0px_3px_12px_0px_rgba(74,58,255,0.18)]',
                variant === 'white' &&
                    'bg-w1 text-blue border-blue border hover:border-[#4747FD] hover:text-[#4747FD] shadow-[0px_3px_12px_0px_rgba(74,58,255,0.18)]',
                variant === 'monochrome' && 'text-m1 border-m1 border',
                variant === 'ghost' && 'text-blue',
                size === 'small' && 'px-4 py-2 text-base',
                size === 'normal' && 'px-8 py-4 text-lg'
            )}
            ref={ref}>
            {children}
        </button>
    )
}
