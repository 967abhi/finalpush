import React,{useState} from 'react'
import logo from '/logo.png'
import Email from "../assets/Img/email.png"
import Line from "../assets/Img/Line.png"
import Bell from "../assets/Img/bell.png"
import Example from "../assets/Img/Example.png"
import Man from "../assets/Img/man.jpeg"
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
   
  return (
    <header className=''  >
       <div className="navbar xl:px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
    </div>
    <a href='/Menu'>
        <img src={logo} alt="" />
    </a>
  </div>
 {/* ================================================= */}
 {/* <div className='flex items-center gap-2 hidden lg:flex  '>
  <input type="text"  className='bg-[#F5FBFB] w-[550px] p-[10px] mr-[250px] rounded-full' />
 
  <FaSearch className='absolute right-[650px] ' />
 </div> */}
 <div className='flex items-center gap-2 hidden lg:flex'>
  <input type="text" className='bg-[#F5FBFB] w-[550px] p-[10px] mr-[-2rem] rounded-full' />
  <FaSearch className='ml-auto' />
</div>

 {/* ================================== */}
  <div className="navbar-end hidden lg:flex ">
    {/* search button add  */}
    <div className='flex gap-5'>

    <img src={Email} alt="" className='h-10 cursor-pointer  '  onClick={toggleOptions} />
    {showOptions && (
        <div className="absolute top-[70px] right-[250px]  bg-white border border-gray-300 rounded-md shadow-md">
          {/* Dropdown options go here */}
          <ul className='flex  flex-col gap-10 text-[29px] text-[#098590] w-[400px]'>
            <li className='flex gap-5 ml-[15px]'> <img src={Man} alt="" /> 
            

            <p>
             Chandan Bhati 
             <p className='text-[#737373] text-[19px]'>You:Nice Work</p>

            </p>
              
             </li>
             <hr className='bg-[#B9B9B9] w-[80%] ml-[40px]' />
             <li className='flex gap-5 ml-[15px]'> <img src={Man} alt="" /> 
            

            <p>
             Chandan Bhati 
             <p className='text-[#737373] text-[19px]'>Chandan: Reply to de bhai?</p>

            </p>
              
             </li>
             <hr className='bg-[#B9B9B9] w-[80%] ml-[40px]' />
             <li className='flex gap-5 ml-[15px]'> <img src={Man} alt="" /> 
            

            <p>
             Abhishek Kumar
             <p className='text-[#737373] text-[19px]'>Abhishek:UI bhejo Bhai</p>

            </p>
              
             </li>
             <hr className='bg-[#B9B9B9] w-[80%] ml-[40px]' />
             <li className='flex gap-5 ml-[15px]'> <img src={Man} alt="" /> 
            

            <p>
             Akhilesh 
             <p className='text-[#737373] text-[19px]'>You:Sent Bro</p>

            </p>
              
             </li>
          </ul>
        </div>
      )}
    <img src={Line} alt="" />
    <img src={Bell} alt=""className='h-10' />
    <img src={Line} alt="" />
    <img src={Example} alt="" className='h-12' />
    <img src={Man} alt="" className='h-18 w-12'/>

    </div>

    
    {/* cart function add  */}
   

    
   
  </div>
</div>
    </header>
  )
}

export default Navbar
