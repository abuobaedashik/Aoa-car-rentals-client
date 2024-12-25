import React from "react";
import { FaCar } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbHomeRibbon } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="text-4xl font-bold text-center mt-3 animate__animated animate__slideInLeft animate__delay-1s animation-duration: 1s">Why Choose Us</div>
      <div className="text-lg text-center mt-4 animate__animated animate__slideInRight animate__delay-1s animation-duration: 5s">
        We are innovative and passionate about the work we do.
      </div>
      <div className="mt-6 flex md:flex-row flex-col items-center justify-between gap-7 md:gap-2 mb-8">
        <div className="flex flex-col gap-3 animate__animated animate__fadeInTopLeft animate__delay-1s animation-duration: 2s items-center justify-center bg-[#ffffff] p-6 rounded-lg hover:text-[#ffffff] hover:bg-[#13131390]">
          <p className="icon bg-[#ffffff] text-[#1313138e]  text-4xl px-24 py-2 rounded-md ">
            <FaCar />
          </p>
          <p className="text-2xl font-bold text-[#1313138e] ">Wide Variety of Car</p>
          <p className="text-sm font-normal w-[200px] text-justify text-[#131313b3] ">
            From budget-friendly options to luxury vehicles, we have something
            for every traveler. Enjoy competitive pricing, exceptional
            reliability, and unmatched comfort in every ride.
          </p>
        </div>
        <div className="flex flex-col animate__animated animate__fadeInTopLeft animate__delay-2s animation-duration: 3s  gap-3 items-center justify-center bg-[#ffffff] p-6 rounded-lg hover:text-[#ffffff] hover:bg-[#13131390]">
          <p className="icon  bg-[#ffffff] text-[#13131396]  text-4xl px-24 py-2 rounded-md ">
            <FaCar />
          </p>
          <p className="text-2xl text-[#1313138e]  font-bold">Affordable Prices</p>
          <p className="text-sm font-normal w-[200px] text-[#131313b3] text-justify">
            Experience competitive daily rates you can rely on. Affordable,
            flexible pricing to suit your needs. Trust us for value and
            consistency every day. Your go-to top-quality service at unbeatable
            prices.
          </p>
        </div>
        <div className="flex flex-col animate__animated animate__fadeInTopLeft animate__delay-3s animation-duration:3s  gap-3 items-center justify-center bg-[#ffffff] p-6 rounded-lg hover:text-[#ffffff] hover:bg-[#13131390]">
          <p className="icon bg-[#ffffff] text-[#1313138e]  text-4xl px-24 py-2 rounded-md ">
            <TbHomeRibbon />
          </p>
          <p className="text-2xl text-[#1313138e]  font-bold">Easy Booking Process</p>
          <p className="text-sm font-normal w-[200px] text-[#131313b3] text-justify">
            Seamlessly book your ride in just a few clicks. Say goodbye to complicated booking processes—your convenience . Enjoy a smooth and stress-free experience with reliable service and comfortable rides.
          </p>
        </div>
        <div className="flex animate__animated animate__fadeInTopLeft animate__delay-4s animation-duration:4s  flex-col gap-3 items-center justify-center bg-[#ffffff] p-6 rounded-lg hover:text-[#ffffff] hover:bg-[#13131390]">
          <p className="icon bg-[#ffffff] text-[#1313138e]   text-4xl px-24 py-2 rounded-md ">
            <RiCustomerService2Line />
          </p>
          <p className="text-2xl text-[#1313138e]  font-bold">Customer Support</p>
          <p className="text-sm text-[#131313b3] text-justify font-normal w-[200px] ">
            24/7 assistance for all your queries. No matter the time, we're here
            to help you. Get accurate and reliable answers anytime, anywhere.
            Your satisfaction is our priority—just ask away!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
