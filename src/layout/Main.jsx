import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
 // Adjust the path accordingly

const Main = () => {
  return (
    <div className='bg-primaryBG'>
      <Navbar/>
      {/* <Outlet/>  */}
      {/* <footer>Footer </footer> */}
    </div>
  );
};

export default Main;