import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import ProfileImg from "../../assets/Img/emoji.png";


const UserDetails = () => {
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
        fetchData('https://backened.ripplehealthcare.in/dashboard/Hipro/summary_hipro/1', setSummaryData2);
    
        // Fetch data from the third API
        fetchData('https://api.example.com/third-api', setSummaryData3);
      }, []);

  return (
    <div className='bg-white'>
        <Navbar/>
        <hr />
        <div className='flex bg-[#ECF7FB] flex-col justify-center items-center'>

        <div className=' h-[2750px]'>
            <div className='mr-[20px] ml-[20px]' >
               <div>
                <h1 className='text-[32px] text-[#098590] font-semibold ml-[205px]'>User Details</h1>
                <div className='flex gap-14 '>

                
                <img src={ProfileImg} alt=""  className='ml-[205px] mt-[20px]'/>
                <div className="containertop-[0px] flex flex-col gap-[10px] mt-[60px] text-[19px] text-semibold">
                <div className="form-group flex gap-[20px]">
        <label htmlFor="name">User Id </label>
        <div className="dashed">-</div>
        <div>1</div>
      </div>
      <div className="form-group flex gap-[20px]">
        <label htmlFor="name">Name</label>
        <div className="dashed">-</div>
        <div>Prithvi Raj</div>
      </div>
      <div className="form-group1 flex gap-[20px]">
        <label htmlFor="name">Age</label>
        <div className="dashed1">-</div>
        <div className="number">67</div>
      </div>
      <div className="form-group2 flex gap-[20px]">
        <label htmlFor="name">Contact</label>
        <div className="dashed2">-</div>
        <div className="number1">98767xxxxx</div>
      </div>
      <div className="form-group3 flex gap-[20px]">
        <label htmlFor="name">Email</label>
        <div className="dashed3">-</div>
        <div className="number2">Example@123.com</div>
      </div>
      <div className="form-group4 flex gap-[20px]">
        <label htmlFor="name">Location</label>
        <div className="dashed4">-</div>
        <div className="number3">New Delhi</div>
      </div>
     
    </div>
    </div>
               </div>
{/* =========================================================== */}
          <hr className='bg-[#098590] h-[5px] mt-[20px] w-[80%] ml-[120px]' />
         <div className=' mr-[250px]'>
            <h1 className='ml-[200px] text-[29px] text-[#098590] font-semibold'>Basic Data</h1>
            {/* ==========Api fetching ================ */}
            <div className="flex bg-[#E1F0F2] gap-[50px]  ml-[200px] w-[920px] h-[200px] shadow-md">
      {/* First Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-2 shadow-md">
        <h2 className="text-xl font-semibold text-[#098590] px-2 py-2">Risk of Fall </h2>
        <p  className="text-[33px] font-[600] text-[#FF0000] flex items-center justify-center">{summaryData2.Daily_wear} %</p>
      </div>

      {/* Second Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-2 shadow-md">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Overall Exercise</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Overall_wear}</p>
      </div>
      {/* Third card  */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-2 shadow-md">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Daily Exercise</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Total_wearable_time}min</p>
      </div>
      {/* fourth card  */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] shadow-md mt-2">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Avg Steps</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Total_wearable_time}Bpm</p>
      </div>
      </div>

         </div>
         {/* ================================responsive code ===================== */}
        
{/* =================================Api fetching second ============== */}
<div className='mr-[40px] ml-[220px] mt-[40px]'>
    <h1 className='text-[#098590] font-bold text-[19px]'>Steady Steps Data</h1>

<div className="flex bg-[#E1F0F2] gap-[50px] w-[920px] h-[200px] mt-[20px] shadow-md">
      {/* First Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-6 shadow-md">
        <h2 className="text-xl font-semibold text-[#098590] px-2 py-2">Total Hours</h2>
        <p  className="text-[33px] font-[600] text-[#737373] flex items-center justify-center">{summaryData2.Daily_wear}</p>
      </div>

      {/* Second Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-6 shadow-md">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Exercise Rate</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Overall_wear}</p>
      </div>

      {/* Third Card */}
      <div className="bg-gray-100 p-4 rounded-md mt-2 w-[450px] h-[180px] shadow-md">
        {/* <h2 className="text-xl font-semibold">Activity Summary</h2> */}
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Wearable Time: <p className='text-[#098590] ' >{summaryData2.Total_wearable_time}</p> </p>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Standing Time: <p className='text-[#098590]'> {summaryData2.Total_standing_time}</p></p>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-52'>Average Steps:  <p className='text-[#098590]'> {summaryData2.Avg_steps}</p></p>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-24'>Average Distance Travelled: <p className='text-[#098590]'> {summaryData2.Avg_distance_travelled}</p></p>
        <p className='flex justify-center items-center hover:underline text-[#098590]'> <a href="/SteadyDetails">Click here for more data  </a></p>
      </div>
    </div>
    </div>

{/* ===============second api end================ */}
{/* =====================Third api start ============================ */}
<div className='mr-[40px] ml-[220px] mt-[50px]  '>
    <h1 className='text-[#098590] font-bold text-[19px]'>Hipro+Data</h1>

<div className="flex bg-[#E1F0F2] gap-[50px] w-[920px] h-[220px] mt-[20px]shadow-md">
      {/* First Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-6 shadow-md">
        <h2 className="text-xl font-semibold text-[#098590] px-2 py-2">Total Hours</h2>
        <p  className="text-[33px] font-[600] text-[#737373] flex items-center justify-center">{summaryData2.Daily_wear}</p>
      </div>

      {/* Second Card */}
      <div className="bg-gray-100 p-4 rounded-md h-[150px] ml-[20px] mt-6 shadow-md">
        <h2 className="text-xl font-semibold  text-[#098590] px-2 py-">Exercise Rate</h2>
        <p className="text-[33px] font-[600] text-[#737373] flex items-center mt-[20px]  justify-center">{summaryData2.Overall_wear}</p>
      </div>

      {/* Third Card */}
      <div className="bg-gray-100 p-4 rounded-md mt-2 w-[450px] h-[190px] shadow-md">
        {/* <h2 className="text-xl font-semibold">Activity Summary</h2> */}
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Wearable Time: <p className='text-[#098590] ' >{summaryData2.Total_wearable_time}</p> </p>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Standing Time: <p className='text-[#098590]'> {summaryData2.Total_standing_time}</p></p>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-52'>Average Steps:  <p className='text-[#098590]'> {summaryData2.Avg_steps}</p></p>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-24'>Average Distance Travelled: <p className='text-[#098590]'> {summaryData2.Avg_distance_travelled}</p></p>
        <p className='flex justify-center items-center hover:underline text-[#098590]'> <a href="/HiproDetails">Click here for more data  </a></p>
      </div>
    </div>
    </div>
{/* ===================Third api end ================================== */}

            </div>
   {/* ========================================================================================================= */}
  

        </div>
      
        </div>
   
   

   
 
   
   
   
   </div>

  )
}

export default UserDetails
