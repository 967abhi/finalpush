import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Folder from "../../assets/Img/folder1.png"
import { MdFileDownload } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const Cloud_drive = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Sidebar/>
      <div className='bg-[#F5FBFB]  absolute left-[256px] top-[142px] w-[1255px] h-[805px]'>
        <div>
        <h1 className="text-3xl font-bold ml-4 mt-5 text-[#098590]">Shared Drive</h1>
            <div className="cloud_drive">

    <div className="details mt-6 ml-10 w-[1050px] bg-white h-[250px] shadow-md rounded-[12px]">
        <ul className="flex gap-40 text-[#737373] ml-[90px] font-semibold">
            <li>Folder Name</li>
            <li className="pl-40">Upload</li>
        
            <li className="pr-20">File Size</li>
        </ul>
        <div className="flex items-center mt-4">
            <img src={Folder} alt="" className="h-10 w-10 ml-4" />
            <div className="flex flex-row gap-[175px] ml-[10px]">
                <h4 className="text-[#737373]">RIPPLE HEALTHCARE DOCUMENT</h4>
                <h5 className="text-[#737373]">12-10-2023</h5>
                <h5 className="text-[#737373]">35.7MB</h5>
                <MdFileDownload  className='absolute left-[967px] text-[#000] cursor-pointer'/>
                <FaTrashAlt className='text-[#000] cursor-pointer' />
               
            </div>
        </div>
        <hr className="my-4 border-t border-[#737373]" />
        {/* Add more items using similar structure */}
        <div className="flex items-center mt-4 ">
            <img src={Folder} alt="" className="h-10 w-10 ml-4" />
            <div className="flex flex-row gap-[175px] ml-[10px]">
                <h4 className="text-[#737373]">CAD files</h4>
                <h5 className="text-[#737373] ml-[170px]">12-10-2023</h5>
                <h5 className="text-[#737373]">553 MB</h5>
                <MdFileDownload  className='absolute left-[967px] text-[#000] cursor-pointer'/>
                <FaTrashAlt className='text-[#000] cursor-pointer' />
            </div>
        </div>
        <hr className="my-4 border-t border-[#737373]" />
        {/* ============================== */}
        <div className="flex items-center mt-4">
            <img src={Folder} alt="" className="h-10 w-10 ml-4" />
            <div className="flex flex-row gap-[175px] ml-[10px]">
                <h4 className="text-[#737373]">Hipro+data and files</h4>
                <h5 className="text-[#737373] ml-[90px]">12-10-2023</h5>
                <h5 className="text-[#737373]">983 MB</h5>
                <MdFileDownload  className='absolute left-[967px] text-[#000] cursor-pointer'/>
                <FaTrashAlt className='text-[#000] cursor-pointer'/>
            </div>
        </div>
        {/* <hr className="my-4 border-t border-[#737373]" /> */}
    </div>
</div>

        </div>

      </div>
    </div>
  )
}

export default Cloud_drive
