import React from "react";
import bgimg from "../../src/assets/banner/bgimgcar.jpg";

const Bgimg = () => {
  return (
    <div>
      <div
        className="h-[600px] w-full py-24 mx-auto bg-fixed bg-cover backdrop-blur-3xl bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute  mx-auto inset-0 bg-black bg-opacity-70"></div>
        <div className="md:px-16  w-10/12 px-4 relative  rounded-md shadow-xl py-6 md:py-8  mx-4 md:mx-12 my-6 flex items-center justify-center flex-col ">
          <p className="md:text-4xl font-openSens text-xl text-center font-bold text-[#ffffff] mb-4">
          You need a luxury vehicle for a special occasion or a budget-friendly car for daily use, we have the perfect ride for you.
          </p>
          <p className="md:text-lg text-base font-medium text-[#ffffff] mt-3 mb-4">
            - AOA CAR RENTAL 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bgimg;
