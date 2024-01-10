import { DashboardHeading } from './core/DashboardHeading'
import energy from "../assets/energy.svg"
import drop from "../assets/drop.svg"
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import { EnergyTabs } from './core/EnergyTabs';
import { useState } from 'react'
export const DataIn = () => {
    const [energyOpen,setEnergy] = useState(false);
  return (
    <div >
        <DashboardHeading heading={"DATA-IN"}/>
        <div onClick={()=>setEnergy(!energyOpen)} className='flex px-5 py-4 space-x-2 items-center'>
            <img src={energy}/>
            <span>Energy</span>
            <span className='text-2xl'>{energyOpen?<FaCaretUp/>:<FaCaretDown/>}</span>
        </div>
        {energyOpen?<EnergyTabs/>:""}
        <div className='flex px-5 py-4 space-x-2 items-center'>
            <img src={drop}/>
            <span>Water and Effluents</span>
            <FaCaretDown className='text-2xl'/>
        </div>
    </div>
  )
}
