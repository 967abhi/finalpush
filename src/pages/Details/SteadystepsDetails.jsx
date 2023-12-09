import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import ProfileImg from "../../assets/Img/emoji.png"
import { FaSearch } from "react-icons/fa";

const SteadystepsDetails = () => {
    const [summaryData1, setSummaryData1] = useState({});
    const [summaryData2, setSummaryData2] = useState({});
    const [summaryData3, setSummaryData3] = useState({});
    const [summaryData4, setSummaryData4] = useState({});

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
        fetchData('https://backened.ripplehealthcare.in/dashboard/Hipro/daily_data1?end_date=2023-11-21', setSummaryData1);
    
        // Fetch data from the second API
        fetchData('https://backened.ripplehealthcare.i  n/dashboard/Hipro/summary_hipro/1', setSummaryData2);
        // fetchData('https://backened.ripplehealthcare.in/dashboard/Hipro/Yearly_data/1', setSummaryData2);
    
        // Fetch data from the third API
        fetchData('https://backened.ripplehealthcare.in/dashboard/Hipro/Monthly_data/1', setSummaryData3);
        //Fetch data from the fourth Api 
        fetchData('https://backened.ripplehealthcare.in/dashboard/Hipro/Yearly_data/1', setSummaryData4);
      }, []);

  return (
    <div className='bg-white'>
        <Navbar/>
        <hr />
        <div className='bg-[#ECF7FB] h-[1950px]'>
            <div className='mr-[20px] ml-[20px]' >
               <div>
                <h1 className='text-[32px] text-[#098590] font-semibold ml-[205px]'>User Details</h1>
                <div className='flex gap-14'>

                
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
            <h1 className='ml-[200px] mt-[40px] text-[29px] text-[#098590] font-bold'>Steady Steps Data</h1>
         <div className='flex '>
            {/* ==========Api fetching ================ */}
            <div className="bg-gray-100 p-4 rounded-md mt-2 ml-[200px] w-[450px] py-5 px-5 shadow-md h-[280px]">
        <h2 className="text-xl text-[#098590] font-bold ">Daily Data (Today) 10-11-23</h2>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Wearable Time: <p className='text-[#098590] ' >{summaryData2.Total_wearable_time}%</p> </p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Standing Time: <p className='text-[#098590]'> {summaryData2.Total_standing_time}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-52'>Average Steps:  <p className='text-[#098590]'> {summaryData2.Avg_steps}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-24'>Average Distance Travelled: <p className='text-[#098590]'> {summaryData2.Avg_distance_travelled}%</p></p>
        {/* <p className='flex justify-center items-center hover:underline text-[#098590]'> <a href="">Click here for more data  </a></p> */}
      </div>
      {/* ===============second card===================== */}
      <div className="bg-gray-100 p-4 rounded-md mt-2 ml-[200px] w-[450px] py-5 px-5 shadow-md h-[280px]">
        <h2 className="text-xl text-[#098590] font-bold ">Weekly Data  (10-11 to 17-11-2023)</h2>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Wearable Time: <p className='text-[#098590] ' >{summaryData2.Total_wearable_time}%</p> </p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Standing Time: <p className='text-[#098590]'> {summaryData2.Total_standing_time}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-52'>Average Steps:  <p className='text-[#098590]'> {summaryData2.Avg_steps}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-24'>Average Distance Travelled: <p className='text-[#098590]'> {summaryData2.Avg_distance_travelled}%</p></p>
        {/* <p className='flex justify-center items-center hover:underline text-[#098590]'> <a href="">Click here for more data  </a></p> */}
      </div>

         </div>
{/* =================================Api fetching second ============== */}
<div className='mr-[40px] ml-[0px] mt-[30px]'>
<div className='flex '>
            {/* ==========Api fetching ================ */}
            <div className="bg-gray-100 p-4 rounded-md mt-2 ml-[200px] w-[450px] py-5 px-5 shadow-md h-[280px]">
        <h2 className="text-xl text-[#098590] font-bold ">Monthly Data (10-11 to 10-12-2023)</h2>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Wearable Time: <p className='text-[#098590] ' >{summaryData2.Total_wearable_time}%</p> </p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Standing Time: <p className='text-[#098590]'> {summaryData2.Total_standing_time}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-52'>Average Steps:  <p className='text-[#098590]'> {summaryData2.Avg_steps}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-24'>Average Distance Travelled: <p className='text-[#098590]'> {summaryData2.Avg_distance_travelled}%</p></p>
        {/* <p className='flex justify-center items-center hover:underline text-[#098590]'> <a href="">Click here for more data  </a></p> */}
      </div>
      {/* ===============second card===================== */}
      <div className="bg-gray-100 p-4 rounded-md mt-2 ml-[200px] w-[450px] py-5 px-5 shadow-md h-[280px]">
        <h2 className="text-xl text-[#098590] font-bold ">Yearly Data  (2023-2024)</h2>
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Wearable Time: <p className='text-[#098590] ' >{summaryData2.Total_wearable_time}%</p> </p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-40'>Total Standing Time: <p className='text-[#098590]'> {summaryData2.Total_standing_time}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-52'>Average Steps:  <p className='text-[#098590]'> {summaryData2.Avg_steps}%</p></p>
        <br />
        <p className='text-[19px] text-[#737373] font-[600] flex gap-24'>Average Distance Travelled: <p className='text-[#098590]'> {summaryData2.Avg_distance_travelled}%</p></p>
        {/* <p className='flex justify-center items-center hover:underline text-[#098590]'> <a href="">Click here for more data  </a></p> */}
      </div>

         </div>
    </div>

{/* ===============second api end================ */}
{/* =====================Third api start ============================ */}

{/* ===================Third api end ================================== */}

            </div>
            <div className='bg-[#E1F0F2] mr-[250px ] ml-[220px] w-[1100px] h-[500px] mt-[100px] shadow-md'>
    <h1 className='flex justify-center items-center relative top-12 text-[29px] text-[#098590] font-bold'>Search Hip-Pro Data</h1>
    <div className='flex relative top-20 justify-center gap-[300px] text-[19px] text-[#098590] font-[600]'>
      <h1>From Data </h1>
      <h1>To Data</h1>
    </div>
    <div className='flex relative top-24 justify-center gap-[100px] text-[19px] text-[#098590] font-[600]'>
     <input type="text" className='bg-white rounded-[36px] p-2  ' placeholder='20-10-2023' />
      <input type="text"  className='bg-white rounded-[36px] p-2 ' placeholder='17-11-2023' />
    </div>
      <FaSearch className='relative left-[800px] top-[62px] cursor-pointer' />
      <div className="container mx-auto p-4 mt-[80px]">
      <table className="table-auto border border-collapse border-#098590 bg-white shadow-md  w-full">
        <thead>
          <tr className='text-[19px] text-[#098590]'>
            <th className="border border-[#098590] p-2">Serial No</th>
          <th className="border border-[#098590] p-2">Form Data</th>
            <th className="border border-[#098590] p-2">To Data</th>
            <th className="border border-[#098590] p-2">Download PDF</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          <tr>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2"></td>
            <td className="border border-[#098590] p-2">
              
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
   </div>
        </div>
      
    </div>
  )
}

export default SteadystepsDetails
