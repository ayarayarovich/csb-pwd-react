import { useRef } from 'react'
import { useTextField, type AriaTextFieldProps } from 'react-aria'

import clsx from 'clsx'

interface Props extends AriaTextFieldProps {
    errorMessage?: string
    label?: string
}

export default function TextField(props: Props) {
    const { label, description, errorMessage, isDisabled } = props
    const ref = useRef(null)
    const { labelProps, inputProps, descriptionProps, errorMessageProps, isInvalid } = useTextField(
        props,
        ref
    )

    return (
        <div className='relative w-full flex flex-col font-inter text-base leading-none'>
            <input
                {...inputProps}
                className={clsx(
                    'peer placeholder:opacity-0 placeholder:invisible border-2 rounded-[0.625rem] bg-w2 outline-none pb-3 pt-9 px-4 transition-all',
                    isInvalid ? 'border-red' : 'border-m3',
                    isDisabled
                        ? 'text-m2'
                        : 'text-m1 hocus:shadow-[0px_3px_12px_0px_rgba(74,58,255,0.18)]'
                )}
                title={label ? label + (errorMessage ? `: ${errorMessage}` : '') : undefined}
                placeholder={label?.toString()}
                ref={ref}
            />
            {label && (
                <label
                    {...labelProps}
                    className='flex text-m2 pointer-events-none gap-4 pr-4 overflow-hidden absolute peer-placeholder-shown:max-w-[calc(100%-1rem)] peer-focus:max-w-[calc(125%-1rem)] max-w-[calc(125%-1rem)] peer-placeholder-shown:last:*:hidden peer-focus:last:*:inline origin-top-left left-4 top-4 transition-all scale-75 peer-placeholder-shown:top-7 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:scale-75'>
                    <span className='!inline text-nowrap'>{label}</span>
                    {isInvalid && (
                        <span {...errorMessageProps} className='text-red text-nowrap'>
                            {errorMessage}
                        </span>
                    )}
                </label>
            )}
            {description && (
                <div {...descriptionProps} style={{ fontSize: 12 }}>
                    {description}
                </div>
            )}
        </div>
    )
}
