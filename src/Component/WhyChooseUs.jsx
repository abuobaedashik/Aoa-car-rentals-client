import React from "react";
import { BsHeadset } from "react-icons/bs";
import { FaCar, FaCarSide, FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbHomeRibbon } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <div className=" mx-auto mt-20 mb-10  rounded-lg p-10 ">
      <div className="text-4xl font-bold text-center overflow-hidden text-[#230338] mt-3 ">
        Why Choose Us
      </div>
      <div className="text-lg text-center mb-12 overflow-hidden text-[#230338] mt-4">
        We are innovative and passionate about the work we do.
      </div>
      <div className="mt-6  flex flex-col md:flex-row justify-center  gap-5 min-h-72">
        <div className=" gap-3 bg-[#ffffff] p-10 w-[500px] rounded-3xl flex items-center justify-center flex-col hover:text-[#ffffff] ">
          <p className="icon bg-[#ffffff] text-[#230338]  text-4xl  py-2 rounded-md ">
          <FaCarSide></FaCarSide>
          </p>
          <p className="text-xl font-bold text-[#230338] ">
           Wide Range of Vehicles
          </p>
          <p className="text-sm font-normal  text-[#131313] ">
          From economy cars to luxury SUVs — choose the perfect vehicle for your trip, every time.
          </p>
        </div>
        
        <div className=" gap-3 bg-[#ffffff] w-[500px] p-10 rounded-3xl flex items-center justify-center flex-col hover:text-[#ffffff] ">
          <p className="icon bg-[#ffffff] text-[#230338]  text-4xl  py-2 rounded-md ">
          <FaMoneyBillWave />
          </p>
          <p className="text-xl font-bold text-[#230338] ">
          Affordable Pricing
          </p>
          <p className="text-sm font-normal  text-[#131313] ">
          Get the best value for your money with transparent pricing and no hidden fees.
          </p>
        </div>

        <div className=" gap-3 bg-[#ffffff] w-[500px] p-10 rounded-3xl flex items-center justify-center flex-col hover:text-[#ffffff] ">
          <p className="icon bg-[#ffffff] text-[#230338]  text-4xl  py-2 rounded-md ">
            <BsHeadset />
          </p>
          <p className="text-xl font-bold text-[#230338] ">
          24/7 Customer Support
          </p>
          <p className="text-sm font-normal  text-[#131313] ">
          We're here for you anytime, anywhere. Drive with peace of mind knowing help is just a call away.
          </p>
        </div>
        <div className=" gap-3 bg-[#ffffff] w-[500px] p-10 rounded-3xl flex items-center justify-center flex-col hover:text-[#ffffff] ">
          <p className="icon bg-[#ffffff] text-[#230338]  text-4xl  py-2 rounded-md ">
           <HiOutlineClipboardList />
          </p>
          <p className="text-xl font-bold text-[#230338] ">
          Easy Booking Process
          </p>
          <p className="text-sm font-normal  text-[#131313] ">
          Rent your car in just a few clicks with our user-friendly online reservation system.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
