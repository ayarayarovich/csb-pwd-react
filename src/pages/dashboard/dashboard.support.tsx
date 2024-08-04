import ButtonLink from '@/shared/ui/button-link'

export default function DashboardSupport() {
    return (
        <div
            className='min-h-screen flex flex-col gap-16 lg:flex-row items-center pb-12 justify-center bg-cover bg-center'
            style={{
                backgroundImage: 'url(/support-bg.png)'
            }}>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-start max-w-xs'>
                <img className='h-20 lg:h-24 mb-5 lg:mb-10' src='/support-avatar.png' alt='' />
                <h1 className='font-montserrat font-bold text-2xl lg:text-3xl mb-5 lg:mb-4'>
                    Поддержка
                </h1>
                <p className='text-balance text-m2'>
                    Свяжитесь с нами через Телеграм. Мы ответим на любой Ваш вопрос в течении 24
                    часов.
                </p>
            </div>
            <div className='flex items-center flex-col max-w-xs gap-8'>
                <img className='drop-shadow-xl' src='/support-qr.png' alt='' />
                <ButtonLink to='/signin' size='small'>
                    Перейти в Телеграм
                </ButtonLink>
            </div>
        </div>
    )
}
