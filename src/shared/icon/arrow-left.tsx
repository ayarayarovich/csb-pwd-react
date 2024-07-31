import { SVGProps } from 'react'

export default function ArrowLeft(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.0391 7.29289C14.4297 7.68342 14.4297 8.31658 14.0391 8.70711L7.74624 15H26.6654C27.2176 15 27.6654 15.4477 27.6654 16C27.6654 16.5523 27.2176 17 26.6654 17H7.74624L14.0391 23.2929C14.4297 23.6834 14.4297 24.3166 14.0391 24.7071C13.6486 25.0976 13.0154 25.0976 12.6249 24.7071L4.62492 16.7071C4.2344 16.3166 4.2344 15.6834 4.62492 15.2929L12.6249 7.29289C13.0154 6.90237 13.6486 6.90237 14.0391 7.29289Z'
                fill='currentColor'
            />
        </svg>
    )
}
