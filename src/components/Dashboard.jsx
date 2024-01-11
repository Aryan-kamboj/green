import LOGO from "../assets/LOGO.svg"
import { Analyze } from './Analyze'
import { DataIn } from './DataIn'
import longsight from "../assets/longsight.svg"
export const Dashboard = () => {
  return (
    <div className='bg-[#181818] text-white flex flex-col w-[15.5rem] min-h-[100%] justify-between' >
        <div>
            <img src={LOGO} className='border-y-[1px] border-black max-w-[8rem] py-3 mr-8 ml-5'/>
            <DataIn/>
            <Analyze/>
            <button className='bg-[#02AB6C] text-white rounded-xl mt-[61px] h-[50px] w-[80%] block mx-auto'>Open Help Center</button>
        </div>
        <div className='bg-[#02AB6C] flex justify-center items-center space-x-2 h-12'>
            <span className='text-[12px] font-[400]'>POWERED BY</span>
            <img src={longsight}/>
        </div>
    </div>
  )
}
