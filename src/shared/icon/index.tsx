import { cloneElement, SVGProps } from 'react'

import ArrowLeft from './arrow-left'

const icons = {
    ArrowLeft
} as const

interface Props extends SVGProps<SVGSVGElement> {
    icon: keyof typeof icons
}

export default function Icon({ icon, ...props }: Props) {
    const Element = icons[icon]
    return cloneElement(<Element />, props)
}
