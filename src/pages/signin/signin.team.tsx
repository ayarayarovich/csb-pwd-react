import { useCallback } from 'react'
import { Link, ScrollRestoration, useNavigate } from 'react-router-dom'

import Icon from '@/shared/icon'
import Button from '@/shared/ui/button'
import TextField from '@/shared/ui/text-field'

export default function SignInTeam() {
    const navigate = useNavigate()
    const signIn = useCallback(() => {
        navigate('/dashboard')
    }, [navigate])

    return (
        <div className='max-w-md w-full flex flex-col gap-8'>
            <ScrollRestoration />

            <div className='text-2xl md:text-3xl text-m1'>
                <Link className='flex items-center gap-2' to='/signin' replace>
                    <Icon icon='ArrowLeft' className='h-[1em]' />
                    <h1 className='font-montserrat leading-normal text-balance font-bold'>
                        Вход для команды
                    </h1>
                </Link>
            </div>
            <div className='flex flex-col gap-3'>
                <TextField label='Username' />
                <TextField label='Пароль' type='password' />
            </div>
            <div className='flex flex-col items-stretch gap-3'>
                <Button onPress={signIn}>Войти</Button>
                <Link
                    className='text-blue self-center font-montserrat text-lg text-center'
                    to='/signin/password-reset'>
                    Забыли пароль?
                </Link>
            </div>
        </div>
    )
}
