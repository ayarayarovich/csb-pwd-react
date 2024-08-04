import { cloneElement, SVGProps } from 'react'

import ArrowLeft from './arrow-left'
import Blocks from './blocks'
import Card from './card'
import Clock from './clock'
import Dollar from './dollar'
import Headphones from './headphones'

const icons = {
    ArrowLeft,
    Blocks,
    Card,
    Clock,
    Dollar,
    Headphones
} as const

export type IconKey = keyof typeof icons

interface Props extends SVGProps<SVGSVGElement> {
    icon: IconKey
}

export default function Icon({ icon, ...props }: Props) {
    const Element = icons[icon]
    return cloneElement(<Element />, props)
}
