import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Shared/Footer';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className='bg-[#F2F7F6] min-h-screen'>
             <div className="mb-4">
              <div className="nav w-full z-20  fixed top-0 "><Navbar className=''></Navbar></div>
             </div> 
             <div className="w-full  mt-[81px] mb-6 mx-auto ">
              <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;