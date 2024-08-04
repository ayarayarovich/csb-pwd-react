import { useCallback, useEffect, useState } from 'react'
import { Outlet, To, useLocation, useNavigate } from 'react-router-dom'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import Icon, { IconKey } from '@/shared/icon'
import Button from '@/shared/ui/button'
import NavigationLink from '@/shared/ui/navigation-link'
import Switch from '@/shared/ui/switch'

export default function DashboardLayout() {
    const menu: {
        icon: IconKey
        label: string
        to: To
    }[] = [
        {
            icon: 'Blocks',
            label: 'Главная',
            to: '/dashboard'
        },
        {
            icon: 'Clock',
            label: 'История',
            to: '/dashboard/history'
        },
        {
            icon: 'Card',
            label: 'Карты',
            to: '/dashboard/cards'
        },
        {
            icon: 'Headphones',
            label: 'Поддержка',
            to: '/dashboard/support'
        }
    ]

    const [isOnline, setIsOnline] = useState(false)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    useEffect(() => {
        document.documentElement.style.overflowY = isMobileNavOpen ? 'hidden' : 'auto'
    }, [isMobileNavOpen])

    const location = useLocation()
    useEffect(() => {
        setIsMobileNavOpen(false)
    }, [location.pathname])

    const navigate = useNavigate()
    const signOut = useCallback(() => {
        navigate('/signin')
    }, [navigate])

    return (
        <div className='lg:pl-50'>
            <div className='fixed font-inter left-0 top-0 w-50 bg-w2 h-svh overflow-y-auto border-r border-m4 hidden lg:flex flex-col items-stretch'>
                <div className='border-b border-m4 flex justify-center items-center py-10'>
                    <img className='w-[72%]' src='/logo.svg' alt='' />
                </div>
                <div className='flex justify-center items-center py-5 border-b border-m4'>
                    <Switch isSelected={isOnline} onChange={setIsOnline}>
                        {isOnline ? 'Online' : 'Offline'}
                    </Switch>
                </div>
                <div className='py-5 flex flex-col items-stretch gap-2'>
                    {menu.map((v) => (
                        <NavigationLink to={v.to} key={v.label} end>
                            <Icon icon={v.icon} className='size-6' />
                            <span>{v.label}</span>
                        </NavigationLink>
                    ))}
                </div>
                <div className='grow'></div>
                <div className='flex justify-center p-4'>
                    <Button onPress={signOut} variant='monochrome' size='small'>
                        Выйти
                    </Button>
                </div>
            </div>
            <div
                className={clsx(
                    'fixed z-40 flex flex-col items-stretch top-0 inset-x-0 lg:pl-50 font-inter',
                    isMobileNavOpen && 'h-dvh'
                )}>
                <div className='bg-m1 text-w1 lg:text-m1 lg:bg-w2 px-4 lg:px-12 py-4 border-b border-m4 flex items-center justify-between lg:justify-start gap-1 lg:gap-4'>
                    <div>
                        <p className='text-xs lg:text-base'>
                            1 USDT = 94.62 RUB <span className='text-red'>-0,08</span>
                        </p>
                        <p className='hidden lg:block text-xs'>Обновление 04.05.2024 00:00</p>
                    </div>

                    <div className='hidden lg:block border-r border-m4 h-4'></div>

                    <div className='flex lg:block gap-1'>
                        <p className='text-xs lg:text-base'>0.00 USDT</p>
                        <p className='text-xs'>Ожидаемый депозит</p>
                    </div>

                    <div className='hidden lg:block grow'></div>

                    <button className='text-blue lg:flex items-center text-sm gap-2 hidden'>
                        <Icon icon='Dollar' className='h-[2em]' />
                        <span>Изменить валюту</span>
                    </button>
                </div>

                <div className='lg:hidden z-10 px-4 py-2 flex items-center justify-between bg-w2 border-b border-m4'>
                    <img src='/logo.svg' className='h-11' alt='' />
                    <Switch isSelected={isOnline} onChange={setIsOnline}>
                        {isOnline ? 'Online' : 'Offline'}
                    </Switch>
                    <button
                        type='button'
                        onClick={() => {
                            setIsMobileNavOpen((v) => !v)
                        }}>
                        PP
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileNavOpen && (
                        <motion.div
                            className='lg:hidden bg-w1 grow overflow-y-auto origin-top'
                            initial={{
                                scaleY: 0,
                                y: -20
                            }}
                            animate={{
                                scaleY: 1,
                                y: 0
                            }}
                            exit={{
                                scaleY: 0,
                                y: -20
                            }}>
                            <div className='py-5 flex flex-col items-stretch gap-0'>
                                {menu.map((v) => (
                                    <NavigationLink to={v.to} key={v.label} end>
                                        <Icon icon={v.icon} className='size-6' />
                                        <span>{v.label}</span>
                                    </NavigationLink>
                                ))}
                            </div>
                            <button className='text-blue flex items-center gap-2 px-4 py-4 border-y border-m4 w-full'>
                                <Icon icon='Dollar' className='h-[2em]' />
                                <span>Изменить валюту</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className='*:px-4 *:lg:px-12 *:pt-36 *:lg:pt-32'>
                <Outlet />
            </div>
        </div>
    )
}
