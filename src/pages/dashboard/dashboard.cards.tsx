import Badge from '@/shared/ui/badge'
import Button from '@/shared/ui/button'

export default function DashboardCards() {
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                <h1 className='font-montserrat text-xl lg:text-3xl font-bold'>Настройка карт</h1>
                <div className='flex items-center gap-4 justify-between grow'>
                    <Badge>21 карта</Badge>
                    <Button size='small'>+ Добавить карту</Button>
                </div>
            </div>
        </div>
    )
}
