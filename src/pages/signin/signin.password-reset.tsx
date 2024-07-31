import { Link, ScrollRestoration } from 'react-router-dom'

import Icon from '@/shared/icon'
import Button from '@/shared/ui/button'
import TextField from '@/shared/ui/text-field'

export default function SignInPasswordReset() {
    return (
        <div className='max-w-md w-full flex flex-col gap-8'>
            <ScrollRestoration />

            <div className='text-2xl md:text-3xl text-m1'>
                <Link className='flex items-center gap-2' to='/signin' replace>
                    <Icon icon='ArrowLeft' className='h-[1em]' />
                    <h1 className='font-montserrat leading-normal text-balance font-bold'>
                        Сброс пароля
                    </h1>
                </Link>
            </div>
            <div className='flex flex-col gap-3'>
                <TextField label='Введите Email' />
            </div>
            <div className='flex flex-col items-stretch gap-3'>
                <Button>Сбросить пароль</Button>
            </div>
        </div>
    )
}
