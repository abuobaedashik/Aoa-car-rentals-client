import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
             <div className="mb-4">
              <div className="nav border border-blue-900 w-full z-20  fixed top-0 "><Navbar className=''></Navbar></div>
             </div> 
             <div className="  mt-[81px] mb-6 mx-auto ">
              <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;