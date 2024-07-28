import { useRef } from 'react'
import { AriaSwitchProps, useFocusRing, useSwitch, VisuallyHidden } from 'react-aria'
import { useToggleState } from 'react-stately'

import clsx from 'clsx'

export default function Switch(props: AriaSwitchProps) {
    const state = useToggleState(props)
    const ref = useRef(null)
    const { inputProps, isDisabled, isSelected } = useSwitch(props, state, ref)
    const { isFocusVisible, focusProps } = useFocusRing()

    return (
        <label className='flex items-center cursor-pointer group gap-3.5'>
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>

            {props.children && (
                <div className={clsx('flex items-center gap-3', isDisabled && '!text-[#E5E5EA]')}>
                    <div
                        className={clsx(
                            'size-2 rounded-full transition-colors',
                            isSelected ? 'bg-green' : 'bg-m2',
                            isDisabled && '!bg-[#F2F2F7]'
                        )}></div>
                    {props.children}
                </div>
            )}

            <div
                className={clsx(
                    'w-12 h-6 rounded-full relative transition-all',
                    isFocusVisible && 'ring-2 ring-offset-1',
                    isSelected
                        ? 'bg-[#1DC9A0] group-hover:bg-[#12B28C]'
                        : 'bg-[#D1D1D6] group-hover:bg-[#C7C7CC]',
                    isDisabled && '!bg-[#F2F2F7]'
                )}
                aria-hidden='true'>
                <div
                    className={clsx(
                        'absolute top-0.5 left-0.5 rounded-full size-5 bg-w1 transition-all',
                        isSelected && 'translate-x-6',
                        isDisabled && '!bg-[#E5E5EA]',
                        !isDisabled && 'group-hover:shadow-[0px_2px_8px_rgba(0,0,0,0.16)]'
                    )}></div>
            </div>
        </label>
    )
}
