import React,{useState,useEffect}  from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { MdFileDownload } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const HiproData = () => {
    const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchAndDisplayProfiles = async () => {
      const apiUrl = 'https://backened.ripplehealthcare.in/dashboard/Hipro/profiles';

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, e.g., display an error message on the page
      }
    };

    fetchAndDisplayProfiles();
  }, []);
  return (
    <div className='bg-[#FFF]'>
        <Navbar/>
        <Sidebar/>
        <div className='absolute left-[257px] top-[142px] h-[800px] w-[1258px]  ml-[0px] mr-[0px] bg-[#F5FBFB] '>
            <h1 className='mt-[20px] ml-[25px] text-[#098590] text-[29px] font-bold'>Hipro Data</h1>
      {/* ==============Api fetching============== */}
      <div className="fetchthedata w-[1200px] ml-[20px] shadow-md">

      <table id="profileTable" className="min-w-full border border-gray-300 ">
        <thead className="bg-white">
          <tr>
          
            <th className="py-2 px-4 text-[#737373]">Location</th>
            <th className="py-2 px-8 text-[#737373]">Gender</th>
            <th className="py-2 px-4 text-[#737373]">Age</th>
            <th className="py-2 px-4 text-[#737373]">Risk Of Fall</th>
        
            <th className="py-2 px-4 text-[#737373]">Profile</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index} className="border-t border-gray-300  text-[#737373]  ">
            
              <td className="py-2 px-2 relative left-[90px] ">{profile.Location}</td>
             

             
              <td className="py-2 px-8 absolute left-[350px] ">{profile.Gender}</td>
              <td className="py-2 px-4 absolute  left-[590px]">{profile.Age}</td>
              <td className="py-2 px-8 absolute  left-[810px]">{profile.Risk_of_Fall}</td>
            
              <div className='flex py-5 h-[19px] w-[49px] absolute left-[1070px] justify-center items-center'>
              <MdFileDownload  className='h-[40px] w-[40px] cursor-pointer'/>
              <FaUser   className='h-[20px] w-[40px] cursor-pointer' />

              </div>
             
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
     
    </div>
  )
}

export default HiproData
