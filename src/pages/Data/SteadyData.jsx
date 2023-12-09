import React,{useState,useEffect}  from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { MdFileDownload } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SteadyData = () => {
    const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchAndDisplayProfiles = async () => {
      const apiUrl = 'https://backened.ripplehealthcare.in/dashboard/Steady-steps/get_profiles';

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
    <div className='bg-white'>
        <Navbar/>
        <Sidebar/>
        <div className='absolute left-[257px] top-[142px] h-[800px] w-[1256px] bg-[#F5FBFB]'>
            <h1 className='mt-[20px] ml-[25px] text-[#098590] text-[29px] font-bold'>Steady Steps</h1>
      {/* ==============Api fetching============== */}
      <div className="fetchthedata bg-white mt-[20px] ml-[20px] mr-[20px] h-[200px] shadow-md">
    

      <table id="profileTable  font-bold  " className=' '>
        <thead className="thead  ">
          <tr className="tablerow  ">
            <th  className="py-2 px-4 text-[#737373] relative left-[40px] ">ID</th>
          
            <th  className="py-2 px-4 text-[#737373] absolute left-[200px] ">Location</th>
            <th  className="py-2 px-4 text-[#737373] absolute left-[400px]">Gender</th>
            <th  className="py-2 px-4 text-[#737373] absolute left-[600px]">Age</th>
            <th  className="py-2 px-4 text-[#737373] absolute left-[750px]">Risk Of Fall</th>
            <th className="py-2 px-4 text-[#737373] absolute left-[900px]">Leaderboard</th>
            <th className="py-2 px-4 text-[#737373] absolute text-[19px] left-[1099px]" >Profile</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index} className='   text-[#737373] text-[19px] '>
              <td className='relative left-[60px]   '>{profile.user_id}</td>
              <td className='absolute left-[210px]   '>{profile.Location}</td>
              <td className='absolute left-[425px]   '>{profile.Gender}</td>
              <td className='absolute left-[620px]'>{profile.Age}</td>
              <td className='absolute left-[800px]'>{profile.Risk_of_Fall}</td>
              <td className='absolute left-[950px]'>{profile.Leader_board}</td>
            
              {/* Add more cells as needed */}
              <div className='flex py-5 h-[19px] w-[49px] absolute left-[1120px] justify-center items-center'>
               
              <MdFileDownload  className='h-[40px] w-[40px]'/>
              <FaUser   className='h-[20px] w-[40px]' />

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

export default SteadyData
