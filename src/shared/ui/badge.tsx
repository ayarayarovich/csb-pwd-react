import { PropsWithChildren } from 'react'

type Props = PropsWithChildren

export default function Badge(props: Props) {
    const { children } = props
    return (
        <span className='text-orange bg-[#FFF7F1] rounded-md px-3 py-0.5 font-inter font-medium'>
            {children}
        </span>
    )
}
