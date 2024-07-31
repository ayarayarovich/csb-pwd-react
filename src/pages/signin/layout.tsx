import { useLocation, useOutlet } from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion'

import ButtonLink from '@/shared/ui/button-link'

export default function SignInLayout() {
    const outlet = useOutlet()
    const location = useLocation()

    return (
        <div
            className='min-h-svh flex flex-col bg-center bg-cover '
            style={{
                backgroundImage: 'url(/signin-bg.png)'
            }}>
            <div className='container mx-auto flex justify-center md:justify-start py-8 px-4 md:px-8'>
                <img className='w-28 md:w-36' src='/logo.svg' alt='PWD Logo' />
            </div>

            <div className='grow container mx-auto flex flex-col md:flex-row gap-16 items-center px-4 md:px-8 justify-between'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        className='w-full'
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        key={location.pathname}>
                        {outlet}
                    </motion.div>
                </AnimatePresence>
                <div className='rounded-2xl bg-w2 max-w-lg w-full flex items-center flex-col overflow-hidden'>
                    <img src='/logo-only.svg' alt='logo' className='w-1/2 my-4' />

                    <div className='min-h-16 relative w-full self-stretch'>
                        <img
                            className='absolute top-0 left-0 w-full h-16 z-0'
                            src='/no-account-decoration.svg'
                            alt=''
                        />
                        <div className='absolute top-16 w-full bg-blue bottom-0'></div>
                        <div className='relative text-center py-8'>
                            <h2 className='text-xl text-w1 font-bold font-montserrat'>
                                Еще нет аккаунта?
                            </h2>
                            <p className='text-w1 font-inter text-lg mt-2 mb-6'>
                                Свяжитесь с менеджером
                            </p>
                            <ButtonLink to='/signin' size='small' variant='white'>
                                Перейти в Телеграм
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center p-4'>© All rights reserved. PayWayDay</div>
        </div>
    )
}
