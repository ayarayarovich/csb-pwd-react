import { ScrollRestoration, useLocation } from 'react-router-dom'

import ButtonLink from '@/shared/ui/button-link'

export default function SignIn() {
    const location = useLocation()
    return (
        <div className='max-w-md'>
            <ScrollRestoration />
            <h1 className='text-2xl text-center md:text-start md:text-4xl mb-8 font-montserrat text-m1 leading-normal text-balance font-bold'>
                Выберите нужный вариант входа
            </h1>
            <div className='flex flex-col items-stretch gap-5 md:gap-8'>
                <ButtonLink
                    to='/signin/merchant'
                    state={{
                        from: location.pathname
                    }}>
                    Вход для Мерчанта
                </ButtonLink>
                <div className='px-8 flex gap-4 items-center'>
                    <div className='flex-1 border-b border-m3'></div>
                    <div>или</div>
                    <div className='flex-1 border-b border-m3'></div>
                </div>
                <ButtonLink to='/signin/team' variant='white'>
                    Вход для Команды
                </ButtonLink>
            </div>
        </div>
    )
}
