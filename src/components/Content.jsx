
import { FaCaretDown,FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.svg"
import catagory from "../assets/catagory.svg"
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { PiChart } from "./core/PiChart";
import { BarGraph } from "./core/BarGraph";
import { TbArrowsDiagonal2 } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";
import { E_R_by_month } from "../utilityFunctions/dataFilters";
import { totalEmm } from "../utilityFunctions/dataFilters";
export const Content = () => {
    const [notificationCount,setNotifications] = useState(1);
    const [graphData,setData] = useState(E_R_by_month);
    const [totalEm,setTotalEmm] = useState(totalEmm) ;
    console.log(graphData);
    console.log(totalEm);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let sumCo2_23 = 0 ;
    let sumRev_23 = 0;
    let sumCo2_22 = 0 ;
    let sumRev_22 = 0;
    months.map((month)=>{
        sumCo2_23 = graphData[2023][month].e+sumCo2_23;
        sumRev_23 = graphData[2023][month].r+sumRev_23;
        sumCo2_22 = graphData[2022][month].e+sumCo2_22;
        sumRev_22 = graphData[2022][month].r+sumRev_22;
    }) 
  return (
    <div className="w-full font-HelveticaNeue bg-[#02AB6C0A] ">
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
                <select id="select" className="outline-none text-[#02AB6C] appearance-none w-[240px] text-end pr-10">
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
        <div className="rounded-t-2xl mt-40 bg-white relative border-[#EBEBEB] border-[1px]">
            <div className="grid grid-cols-4 gap-4 ml-[1.7rem] absolute top-[-4.5rem]">
                <div className="border-[1px] h-[8.5rem] flex justify-between flex-col bg-white border-[#EBEBEB] rounded-xl p-5">
                    <div className="flex flex-col">
                        <div className="text-[14px] text-[#000000CC] font-[400] flex items-center space-x-2"><span>Current Year Emissions</span><IoMdInformationCircleOutline/></div>
                        <span className="text-[8px] leading-3 italic font-poppins text-[#000000AB]">contribution to Scope3</span>
                    </div>
                    <div className="border-[#E030213D] bg-[#E030210A] border-[1px] rounded-[0.5rem] w-[14rem]">
                    <div className="px-4 border-l-[#E03021] h-11 flex items-center justify-between my-[-1px] ml-[-1px] border-l-[6px] rounded-[0.5rem] box-border">
                        <div className="text-[15px]">
                        {sumCo2_23}CO₂e
                        </div>
                    <div className="flex text-[11px] text-[rgb(183,61,66)] items-center">7.6%YOY<IoIosArrowRoundUp className="text-xl"/></div>
                    </div>
                    </div>
                </div>
                <div className="border-[1px] h-[8.5rem] flex justify-between flex-col bg-white border-[#EBEBEB] rounded-xl p-5">
                    <div className="text-[14px] text-[#000000CC] font-[400] flex items-center space-x-2"><span>Revenue to emission ratio</span><IoMdInformationCircleOutline/></div>
                    <div className="border-[#FFC4003D] bg-[#FFC4000A] border-[1px] rounded-[0.5rem]">
                    <div className="px-4 border-l-[#FFC400] h-11 flex items-center justify-between my-[-1px] ml-[-1px] border-l-[6px] rounded-[0.5rem] box-border">
                        <div className="text-[15px]">
                        {(sumRev_23/sumCo2_23).toFixed(2)}
                        </div>
                        <div className="flex text-[11px] text-[rgb(183,61,66)] items-center">3.7%YOY<IoIosArrowRoundUp className="text-xl"/></div>
                    </div>
                    </div>
                </div>
                <div className="border-[1px] h-[8.5rem] flex justify-between flex-col bg-white border-[#EBEBEB] rounded-xl p-5">
                    <div className="flex flex-col">
                        <div className="text-[14px] text-[#000000CC] font-[400] flex items-center space-x-2"><span>Category-1</span><IoMdInformationCircleOutline/></div>
                        <span className="text-[8px] leading-3 mt-0 italic font-poppins text-[#000000AB]">contribution to Scope3</span>
                    </div>
                    <div className="border-[#3BB85E3D] bg-[#3BB85E0A] border-[1px] rounded-[0.5rem] w-[14rem]">
                    <div className="px-4 border-l-[#3BB85E] h-11 flex items-center justify-between my-[-1px] ml-[-1px] border-l-[6px] rounded-[0.5rem] box-border">
                        <div className="text-[15px]">
                        32% of Scope3
                        </div>
                    </div>
                    </div>
                </div>
                <div className="h-[8.5rem] text-center font-[400] w-[9.7rem] text-white p-5 bg-[#02ab6d] rounded-xl">
                    <div className="text-sm h-[50%]">Total number of reached suppliers</div>
                    <div className="text-[46px] h-[50%] items-center justify-center flex">143</div>
                </div>
            </div>
            <div className="ml-6">
                <div className="mt-24  border-[#EBEBEB] border-[1px] rounded-xl p-5 w-[62.8rem] h-[32.6rem]'">
                    <BarGraph graphData={graphData}/>
                </div>
                <div className=" mt-4 flex space-x-6 mb-4">
                    <div className="flex items-center flex-col justify-between border-[#EBEBEB] border-[1px] rounded-xl w-[28.7rem] pb-4 " >
                        <div className="flex justify-between w-full px-4 py-4"><p className="text-[14px]">Emission by Supplier</p><p className="flex border-[1px] border[#EBEBEB] rounded-xl py-1 px-[0.5rem] space-x-1"><TbArrowsDiagonal2/><HiDotsHorizontal/></p></div>
                        <PiChart totalEm={totalEm}/>
                    </div>
                    <div className="w-[40rem] border-[1px] border-[#EBEBEB] rounded-t-xl ">
                        <div className="flex justify-between mx-4 my-4 ">
                            <span className="flex space-x-1 items-center text-[1rem]">
                                <span>Supplier-wise</span>
                                <IoMdInformationCircleOutline/>
                            </span>
                            <button className="border-[1px] h-7 rounded-lg flex items-center space-x-2 px-3 border-[#02AB6C]"><FaFileDownload className="text-[#02AB6C]"/><span className="text-[#02AB6C29]">|</span><span className="text-[11px] text-[#000000D6]">Download</span></button>
                        </div>
                        <div className="grid grid-cols-4">
                            <div className="text-[10px] text-[#0000007A] text-center bg-[#FAFAFA] py-4 border-y-[1px] border-r-[1px] border-[#EBEBEB]">MONTH</div>
                            <div className="text-[10px] text-[#0000007A] text-center bg-[#FAFAFA] py-4 border-y-[1px] border-r-[1px] border-[#EBEBEB]">EMISSIONS(IN CO2E)</div>
                            <div className="text-[10px] text-[#0000007A] text-center bg-[#FAFAFA] py-4 border-y-[1px] border-r-[1px] border-[#EBEBEB]">REVENUE/EMISSION RATIO</div>
                            <div className="text-[10px] text-[#0000007A] text-center bg-[#FAFAFA] py-4 border-y-[1px] border-[#EBEBEB]">YOY R/E Change</div>
                        </div>
                        <div className="text-black overflow-y-scroll h-[20.4rem]">
                            {months.map((month,i)=>{
                                return(
                                    <div className="grid grid-cols-4 " key={i}>
                                        <div className="flex items-center justify-center py-4 border-b-[1px] border-[#EBEBEB] border-r-[1px]">
                                            {month}
                                        </div>
                                        <div className="flex items-center justify-center py-4 border-b-[1px] border-[#EBEBEB] border-r-[1px]">
                                            {graphData[2023][month].e}
                                        </div>
                                        <div className="flex items-center justify-center py-4 border-b-[1px] border-[#EBEBEB] border-r-[1px]">
                                            {graphData[2023][month].ratio}
                                        </div>
                                        <div className="flex items-center justify-center py-4 border-b-[1px] border-[#EBEBEB] ">
                                            {graphData[2023][month].yoy}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}