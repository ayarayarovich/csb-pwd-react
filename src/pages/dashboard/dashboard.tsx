import Badge from '@/shared/ui/badge'
import Button from '@/shared/ui/button'

export default function Dashboard() {
    return (
        <div>
            <h1 className='font-montserrat text-xl lg:text-3xl font-bold mb-8'>Главная</h1>
            <div className='flex gap-5 *:flex-1 *:shrink-0 overflow-x-auto'>
                <div className='rounded-xl border border-m4 *:border-r last:*:border-none *:border-m4 flex *:flex-1 *:shrink-0'>
                    <div className='p-5'>
                        <h3 className='font-montserrat font-semibold text-m2 opacity-70 mb-4'>
                            Депозит
                        </h3>
                        <div className='font-montserrat font-bold text-2xl mb-4'>
                            <span>40,689</span>
                            <span className='text-[0.6em]'>.00</span>
                            <button className='ml-2 text-[0.6em] text-blue' type='button'>
                                USDT
                            </button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Button size='small'>Пополнить</Button>
                            <Button variant='ghost' size='small'>
                                Вывести
                            </Button>
                        </div>
                    </div>
                    <div className='p-5'>
                        <h3 className='font-montserrat font-semibold text-m2 opacity-70 mb-4'>
                            Заработок
                        </h3>
                        <div className='font-montserrat font-bold text-2xl mb-4'>
                            <span>0</span>
                            <span className='text-[0.6em]'>.00</span>
                            <button className='ml-2 text-[0.6em] text-blue' type='button'>
                                USDT
                            </button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Button size='small'>Перевести на депозит</Button>
                        </div>
                    </div>
                </div>

                <div className='rounded-xl border border-m4 *:border-r last:*:border-none *:border-m4 flex *:flex-1 *:shrink-0'>
                    <div className='p-5'>
                        <h3 className='font-montserrat font-semibold text-m2 opacity-70 mb-4'>
                            Cash in
                        </h3>
                        <div className='font-montserrat font-bold text-2xl mb-4'>
                            <span>+1,030,000</span>
                            <span className='text-[0.6em]'>.00</span>
                            <button className='ml-2 text-[0.6em] text-blue' type='button'>
                                RUB
                            </button>
                        </div>
                        <div className='flex gap-2'>
                            <Badge>2</Badge>
                            Транзакции
                        </div>
                    </div>
                    <div className='p-5'>
                        <h3 className='font-montserrat font-semibold text-m2 opacity-70 mb-4'>
                            Cash out
                        </h3>
                        <div className='font-montserrat font-bold text-2xl mb-4'>
                            <span>-0</span>
                            <span className='text-[0.6em]'>.00</span>
                            <button className='ml-2 text-[0.6em] text-blue' type='button'>
                                USDT
                            </button>
                        </div>
                        <div className='flex gap-2'>
                            <Badge>0</Badge>
                            Транзакции
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
