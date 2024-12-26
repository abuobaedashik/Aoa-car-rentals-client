import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../Context/Authcontext/AuthContext";
import logo from '../assets/Logo/logo3.png'
import { IoIosHome, IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineEventAvailable } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { PiBookmarks } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const handleSignOut =()=>{
    SignOut()
     .then(()=>{
      // console.log('Logout successful');
      Swal.fire({
        title: "Logout Successful",
        icon: "success"
      });
     })
     .catch(error=>{
      //  console.log(error.message);
      toast.error(error.message, {
        position: "top-center", 
        autoClose: 3000, 
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", 
      });
     })
  }

  const link = <>
       <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#FE9307] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/"
      >
        <span>
          <IoIosHome></IoIosHome>
        </span>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#FE9307] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/available"
      >
         <span>
         <MdOutlineEventAvailable />
        </span>
        Available Cars
      </NavLink>
    {
      user && <>
         <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#FE9307] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/add-car"
      >
         <span>
         <IoMdAddCircleOutline />
        </span>
        Add Car
      </NavLink>
      </>
    }

     {
      user && <>
       <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#FE9307] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/my-cars"
      >
         <span>
         <ImProfile />
        </span>
        My Cars
      </NavLink>
      </>
     }
     {
      user && <>
       <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#FE9307] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/my-bookings"
      >
         <span>
         <PiBookmarks />
        </span>
        My Bookings
      </NavLink>
      </>
     }
    </>
  </>
  
  return (
    <div className="navbar justify-between bg-[#ffffff] mx-auto mt-0 py-0  w-full">
      <div className="flex items-center justify-between ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-xl btn-ghost lg:hidden">
          <IoMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-4 shadow"
          >
           {link}
          </ul>
        </div>
        <div className="text-xl flex items-center gap-2  ">
         <div className="rounded-full">
           <img src={logo} className="w-20 h-20" alt="" />
         </div>
         <div className="text-xl md:text-2xl  font-bold text-[#FFA633]"><span className=" font-semibold text-[#131313]">Quick</span> Car Rentals</div>
           </div>
      </div>
      <div className="navbar-center   hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>


       <div className="flex items-center justify-between">
       {user ? (
        <div>
          <button onClick={handleSignOut}>SignOut</button>
        </div>
      ) : (
        <div className="">
          <div className="flex items-center  gap-3 mr-5">
            <NavLink
               className={({ isActive }) =>
                isActive
                  ? "rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold"
                  : "md:flex gap-1 items-center hidden text-sm font-medium px-3"
              }
            to={"/register"}>
              <button>Register</button>
            </NavLink>
            <NavLink
             className={({ isActive }) =>
              isActive
                ? "rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
             to={"/login"}>
              <button >
                Login
              </button>
            </NavLink>

            {/* className="rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold" */}
          </div>
        </div>
      )}
       </div>
       <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
