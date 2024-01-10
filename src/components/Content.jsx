
import { FaCaretDown,FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.svg"
import catagory from "../assets/catagory.svg"
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
export const Content = () => {
    const [notificationCount,setNotifications] = useState(1);
  return (
    <div className="w-[100%] font-HelveticaNeue bg-[#02AB6C0A] ">
        <div className="flex justify-between text-[16px] font-[400 h-16 px-5">
            <div className="flex items-center space-x-2">
                <img src={catagory}/>
                <span>Category-1</span>
            </div>
            <div className="flex items-center space-x-2">
                <img src={profile}/>
                <FaCaretDown className="text-[#474444]"/>
                <div className="border-[1px] border-[#EBEBEB] bg-white p-[10px] rounded-lg">
                    <span className="rounded-full items-center justify-center flex text-[9px] text-white bg-[#EA7E7E] h-[14px] w-[14px] px-1 py-[2px] absolute top-5 right-[1.7rem]">{notificationCount}</span>
                    <FaRegBell className="text-xl"/>
                </div>
            </div>
        </div>
        <div className="border-[1px] mt-6 border-[#02AB6C] rounded-lg h-8 items-center flex space-x-1 text-xs bg-white absolute right-10">
            <div className="h-[14px]  flex">
                <span className="absolute mx-4 text-[#0000007A]">Show Timeline:</span>
                <select className="outline-none text-[#02AB6C] appearance-none w-[240px] text-end pr-10">
                    <option>Jan'22 - Dec'23</option>
                    <option>Jan'21 - Dec'22</option>
                    <option>Jan'20 - Dec'21</option>
                    <option>Jan'19 - Dec'20</option>
                </select>
                <div className="flex absolute right-4">
                    <span className="text-[#02AB6C] mr-1">|</span>
                    <span><FaCaretDown/></span>
                </div>
            </div>
        </div>
        <div className="rounded-t-2xl mt-40 bg-white h-[20rem] border-[#EBEBEB] border-[1px]">
            <div>
                <div>Current Year Emissions<IoMdInformationCircleOutline/></div>
                <span>contribution to Scope3</span>
                <div className="border-[#E030213D] bg-[#E030210A] border-[1px] rounded-[0.5rem]">
                <div className="border-l-[#E03021] my-[-1px] ml-[-1px] border-l-[6px] rounded-[0.5rem] box-border">
                    <div>
                    39699CO₂e
                    </div>
                   <div className="flex text-[rgb(183,61,66)] items-center">7.6%YOY<IoIosArrowRoundUp className="text-2xl"/></div>
                </div>
                </div>
            </div>
            <div>
                <div>Revenue to emission ratio<IoMdInformationCircleOutline/></div>
                <div className="border-[#FFC4003D] bg-[#FFC4000A] border-[1px] rounded-[0.5rem]">
                <div className="border-l-[#FFC400] my-[-1px] ml-[-1px] border-l-[6px] rounded-[0.5rem] box-border">
                    <div>
                    39699CO₂e
                    </div>
                   <div className="flex text-[rgb(183,61,66)] items-center">7.6%YOY<IoIosArrowRoundUp className="text-2xl"/></div>
                </div>
                </div>
            </div>
            <div>
                <div>Category-1<IoMdInformationCircleOutline/></div>
                <span>contribution to Scope3</span>
                <div className="border-[#3BB85E3D] bg-[#3BB85E0A] border-[1px] rounded-[0.5rem]">
                <div className="border-l-[#3BB85E] my-[-1px] ml-[-1px] border-l-[6px] rounded-[0.5rem] box-border">
                    <div>
                    39699CO₂e
                    </div>
                   <div className="flex text-[rgb(183,61,66)] items-center">7.6%YOY<IoIosArrowRoundUp className="text-2xl"/></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
