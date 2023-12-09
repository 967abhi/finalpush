import React, { useState } from "react";
import Logo from "../../assets/Img/logo.png";
import { GrHide } from "react-icons/gr";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    try {
      const response = await fetch('https://backened.ripplehealthcare.in/dashboard/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login
        alert("Successful Login")
        // Redirect to the next page
        
        navigate('/Menu');
      } else {
        // Failed login
        // Display an error message or take other actions
      
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-[#E1F0F2] min-h-screen flex flex-col justify-center items-center">
      <img src={Logo} className="h-[231px] md:h-[300px] w-[80%] md:w-[601px] max-w-[601px]" alt="" />

      <div className="w-[80%] max-w-[226px] h-[70px] text-[#098590] text-[25px] md:text-[51px] font-medium text-center mt-6 md:mt-0">
        Welcome
      </div>

      <div className="w-[80%] max-w-[440px] mt-6 md:mt-10 flex justify-center items-center">
        <input
          type="text"
          className="w-full md:w-[440px] p-[10px] rounded-full bg-[#ECF7FB] text-[25px]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="w-[80%] max-w-[440px] mt-6 md:mt-8 relative flex justify-center items-center">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full md:w-[440px] p-[10px] rounded-full bg-[#ECF7FB] text-[25px]"
          placeholder="Password"
        />
        <button
          className="absolute right-[10%] md:right-[20px] h-[42px] w-[42px] cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      
        </div>
        <button className="w-[80%] max-w-[200px] text-[29px] h-[67px] bg-teal-600 rounded-[38px] mt-6 md:mt-10 text-white" onClick={handleLogin}>
        Login
      </button>
 
    </div>
  );
};

export default Login;
// =============================================

