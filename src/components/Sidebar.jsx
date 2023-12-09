import React from 'react'
import Dashboard from "../assets/Img/dashboard .png"
import User from "../assets/Img/user .png"
import Cloud from "../assets/Img/cloud.png"
import Folder from "../assets/Img/folder.png"
import Setting from "../assets/Img/setting .png"
import Customer from "../assets/Img/customer.png"
import Logout from "../assets/Img/logout .png"
const Sidebar = () => {
  return (
   
        <div>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0">

            </div>
            <div className="bg-white"></div>
            <div className="bg-white">
                <div className="flex-col flex">
                    <div className="w-full border-b-2 border-gray-200">
                    </div>
                    <div className="flex bg-gray-100  overflow-x-hidden">
                        <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <a href="/Menu" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-[#E1F0F2] group cursor-pointer gap-10">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                             <img src={Dashboard} alt="" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='text-[#737373] text-[19px]'>Dashboard</span>
                                            </a>
                                            {/* ========== */}
                                            <a href="/Profile" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-[#E1F0F2] group cursor-pointer gap-10">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                             <img src={User} alt="" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='text-[#737373] text-[19px]'>Profile</span>
                                            </a>
                                            {/* ========= */}
                                            <a href="/CloudDrive" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-[#E1F0F2] group cursor-pointer gap-10">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                             <img src={Cloud} alt="" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='text-[#737373] text-[19px]'>Cloud Drive </span>
                                            </a>
                                        {/* ========================= */}
                                        <a href="/SharedDrive" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-[#E1F0F2] group cursor-pointer gap-10">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                             <img src={Folder} alt="" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='text-[#737373] text-[19px]' >Shared Drive </span>
                                                
                                            </a>
                                            {/* =============================== */}
                                        </div>
                                        
                                        
                                    </div>
                                    <div className= " xl:mt-[200PX] pb-4 2xl:mt-[415px]">
                                        {/* ================== */}
                                        <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-[#E1F0F2] group cursor-pointer gap-10">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                             <img src={Setting} alt="" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='text-[#737373] text-[19px]'>Setting </span>
                                            </a>
                                            {/* ======================== */}
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-[#E1F0F2] group cursor-pointer gap-10">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                             <img src={Customer} alt="" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='text-[#737373] text-[19px]'>Support </span>
                                            </a>
                                            <a href="/" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-[#E1F0F2] group cursor-pointer gap-10">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                             <img src={Logout} alt="" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='text-[#737373] text-[19px]'> Logout</span>
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
  )
}

export default Sidebar
