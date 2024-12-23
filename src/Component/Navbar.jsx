import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../Context/Authcontext/AuthContext";
import logo from '../assets/Logo/logo3.png'
import { IoIosHome, IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineEventAvailable } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { PiBookmarks } from "react-icons/pi";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const handleSignOut =()=>{
     SignOut()
     .then(()=>{
      console.log('Logout successful');
     })
     .catch(error=>{
       console.log(error.message);
     })
  }

  const link = <>
       <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-1 text-base text-[#FE9307] font-medium flex gap-1 items-center"
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
            ? "px-3 py-1 text-base text-[#FE9307] font-medium flex gap-1 items-center"
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
            ? "px-3 py-1 text-base text-[#FE9307] font-medium flex gap-1 items-center"
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
            ? "px-3 py-1 text-base text-[#FE9307] font-medium flex gap-1 items-center"
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
            ? "px-3 py-1 text-base text-[#FE9307] font-medium flex gap-1 items-center"
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
    <div className="navbar bg-[#ffffff] mx-auto mt-0 py-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {link}
          </ul>
        </div>
        <div className="text-xl flex items-center gap-2  ">
         <div className="rounded-full">
           <img src={logo} className="w-20 h-20" alt="" />
         </div>
         <div className="text-2xl font-bold text-[#FFA633]"><span className=" font-semibold text-[#131313]">Quick</span> Car Rentals</div>
           </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
       <div className="navbar-end">
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
                  : "flex gap-1 items-center text-sm font-medium px-3"
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
    </div>
  );
};

export default Navbar;
