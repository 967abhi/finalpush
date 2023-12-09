 import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
 import Sidebar from '../../components/Sidebar'
 import ProfileImg from "../../assets/Img/emoji.png"
 import axios from "axios"
 const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [LastName,setLastName] = useState('');
  const [Designation,setDesignation] = useState('');
  const [Email,setEmail] = useState(' ');
  const [Username,setUsername] = useState('');
  const [Personal,setPersonal] = useState('');


 const handleSubmit = (event) => {
   event.preventDefault();

   // Constructing the data object based on your backend expectations
  const data = {
    first_name: firstName,
    last_name:LastName,
    designation:Designation,
    email:Email,
    user_name:Username,
    personal_links:Personal

    
  };
   // Configuring the Axios request
  const config = {
    method: 'patch',
    url: 'https://backened.ripplehealthcare.in/dashboard/profile_page/10',
    headers: {
      'Content-Type': 'application/json',
    },     data: JSON.stringify(data),
  };

   // Making the Axios request
   axios.request(config)
    .then((response) => {
       console.log(JSON.stringify(response.data));
     })
     .catch((error) => {
       console.log(error);
     });
};
   return (
     <>
    <div className='bg-white'>
        <Navbar/>
         <Sidebar/>
     
         <div className='bg-[#F5FBFB] absolute left-[250px] top-[140px] h-[815px] w-full md:w-[83.5%]'>
  <div className='flex flex-col'>
     <h1 className='ml-4 md:ml-8 mt-4 md:mt-8 text-lg md:text-2xl font-semibold text-[#737373]'>
       Edit Profile
    </h1>
    <img
       src={ProfileImg}
       className='w-[200px] h-[194px] md:w-[150px] md:h-[144px] ml-4 md:ml-100 mt-4 md:mt-5 md:ml-[90px]'
       alt=""
     />
 
     <form className="mx-auto max-w-[1200px] mt-8"  onSubmit={handleSubmit}>
   <div className="flex flex-wrap -mx-4">

  
     <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
      
             <label htmlFor="firstName" className=" text-[19px] text-[#737373] ">First Name:</label>
    
 <input
type="text"
id="firstName"
name="firstName"
value={firstName}
className="w-full bg-[#E1F0F2] p-2 rounded-[25px]"
onChange={(e) => setFirstName(e.target.value)}
/> 
    </div>

  
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
      
      <label htmlFor="LastName" className=" text-[19px] text-[#737373] ">Last Name:</label>
       
       <input
type="text"
id="LastName"
name="LastName"
value={LastName}

className="w-full bg-[#E1F0F2] p-2 rounded-[25px]"
onChange={(e) => setLastName(e.target.value)}
/> 
    </div>

    <div className="w-full px-4 mb-4 flex flex-col gap-2">

       <label  className=" text-[19px] text-[#737373]" htmlFor="Designation" >Designation:</label>

      <input
type="text"
id="Designation"
name="Designation"
value={Designation}

className="w-[602px]  bg-[#E1F0F2] p-2  rounded-[25px]"
onChange={(e) => setDesignation(e.target.value)}
/> 
     </div>

    
     <div className="w-full px-4 mb-4 flex flex-col gap-2">
    
       <label  className=" text-[19px] text-[#737373]" htmlFor="Email" >Email:</label>
   
      
      <input
type="text"
id="Email"
name="Email"
value={Email}

className="w-[602px]  bg-[#E1F0F2] p-2  rounded-[25px]"
onChange={(e) => setEmail(e.target.value)}
/>
     </div>

   
     <div className="w-full px-4 mb-4 flex flex-col gap-2">
     
       <label  className=" text-[19px] text-[#737373]" htmlFor="Username" >Username:</label>
      
       <input
type="text"
id="Username"
name="Username"
value={Username}

className="w-[602px]  bg-[#E1F0F2] p-2  rounded-[25px]"
onChange={(e) => setUsername(e.target.value)}
/>
     </div>

  
     <div className="w-full px-4 mb-4 flex flex-col gap-5">

       <label  className=" text-[19px] text-[#737373] " htmlFor="Personal" >Personal Links:</label>

       <input
type="text"
id="Personal"
name="Personal"
value={Personal}

className="w-[602px]  bg-[#E1F0F2] p-2   rounded-[25px]"
onChange={(e) => setPersonal(e.target.value)}
/>
       <button type="submit" className='bg-[#098590] relative left-[10px] top-2   p-[12px]  w-[191px] text-[29px] text-[white] rounded-[38px] '>Submit</button>
    </div>

   </div>
 
 </form>

   </div>
 </div>


      
     </div>
     </> 
   )
 }

 export default Profile









