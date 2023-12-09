import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import  SteadyImg from "../../assets/Img/without_strap29.png"
import HiproImg from "../../assets/Img/without_strap30.png"
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  const [summaryData1, setSummaryData1] = useState({});
  const [summaryData2, setSummaryData2] = useState({});
  const [summaryData3, setSummaryData3] = useState({});

  useEffect(() => {
      const fetchData = async (apiUrl, setData) => {
        try {
          const response = await fetch(apiUrl);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error, e.g., display an error message on the page
        }
      };
  
      // Fetch data from the first API
      fetchData('https://backened.ripplehealthcare.in/dashboard/Steady-steps/Basic_data/1', setSummaryData1);
  
      // Fetch data from the second API
      // fetchData('https://backened.ripplehealthcare.in/dashboard/Hipro/summary_hipro/1', setSummaryData2);
      fetchData('https://backened.ripplehealthcare.in/dashboard/Steady-steps/Basic_data/1', setSummaryData2);
  
      // Fetch data from the third API
      fetchData('https://api.example.com/third-api', setSummaryData3);
    }, []);
  // ========================
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://backened.ripplehealthcare.in/dashboard/Steady-steps/get_profiles');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className='bg-white'>
      <Navbar/>
      <Sidebar/>
      <div className='bg-[#F5FBFB] absolute left-[255px] w-full md:w-[83%] top-[142px] '>
        <div className='bg-[#F5FBFB]  h-[764px] '>

        <h1 className='ml-[100px] mt-[20px] font-bold text-[40px] text-[#098590] '>Global Data</h1>
        </div>
      
       <div className="flex bg-[#E1F0F2] gap-[100px]  ml-[100px] w-[1115px] absolute top-[90px] h-[200px] shadow-md">
      {/* First Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-6 shadow-md">
        <h2 className="text-xl font-semibold text-[#098590] px-2 py-2">Risk of Fall </h2>
        <p  className="text-[33px] font-[600] text-[#FF0000] flex items-center justify-center">{summaryData2.Daily_wear}34%</p>
      </div>

      {/* Second Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-6 shadow-md">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Total Download</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Overall_Exercise}</p>
      </div>
      {/* Third card  */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-6 shadow-md">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Monthly Visitor</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Daily_Exercise}</p>
      </div>
      {/* fourth card  */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] shadow-md mt-6">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Daily Visitor</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Avg_steps}k</p>
      </div>
      </div>
       {/* ================ */}
       <div className='flex flex-row'>

      
       <div className='flex flex-col absolute bottom-[65px] gap-10 left-[105px] '>
        <a href="/HiproData">

      <img className='w-[508px] h-[184px] shadow-md ' src={HiproImg} alt="" />
        </a>
        <a href="/SteadyData">

      <img className='w-[508px] h-[184px] shadow-md' src={SteadyImg} alt="" />
        </a>
       </div>
       <div className='bg-[#E1F0F2] absolute left-[680px] bottom-[65px] rounded-[25px] w-[550px] h-[400px] shadow-md'>
        <h1 className='ml-[25px] mt-[25px] text-[32px] text-[#098590] '>
            User Details
        </h1>
        <input type="text" className='ml-[55px] mt-[55px] w-[325px] bg-[#E1F0F2] border-none ' placeholder='Type User ID Here.....' />
        <FaSearch className='absolute ml-[355px] mt-[-20px]' />

       </div>
        <hr className='w-[350px] absolute left-[730px] bottom-[300px] border-t-1 border-solid border-[#098590] ' />
        <button className='bg-[#098590] absolute left-[860px] p-[12px] bottom-[200px] w-[191px] text-[29px] text-[white] rounded-[38px]'> <a href="/UserDetails">SEARCH</a>  </button>
       </div>
      </div>
    </div>
  )
}

export default Dashboard;
