import { DashboardHeading } from './core/DashboardHeading'
import energy from "../assets/energy.svg"
import drop from "../assets/drop.svg"
export const Analyze = () => {
  return (
    <div>
        <DashboardHeading heading={"ANALYZE"}/>
        <div className='flex px-5 py-4 space-x-2 items-center'>
            <img src={energy}/>
            <span className='text-[15px]'>Energy</span>
        </div>
        <div className='flex px-5 py-4 space-x-2 items-center'>
            <img src={drop}/>
            <span className='text-[15px]'>Waste</span>
            <span className='text-[#02AB6C]'>(βeta)</span>
        </div>
    </div>
  )
}
