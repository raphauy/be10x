import Ticks from './ticks'
import Calendar from './calendar'
import Titles from './titles'

export default function Hero() {
  return (
    <div className='flex justify-center w-full bg-grey-be10x pt-14'>
        <div className='flex flex-col items-center max-w-5xl'>
          <Titles />

          <Ticks />
          
          <Calendar />
        </div>
    </div>
  )
}
