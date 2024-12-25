import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiGears } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AvailableCard = ({ car }) => {
  // console.log(car);
  const { 
    availability,
    date,
    description,
    Features,
    image,
    location,
    model,
    reg_no,
    rental_price,}=car;
  return (
    <div>
      <div className="card card-compact bg-[#ffffff]  shadow-sm object-cover transform transition-transform duration-100 hover:bg-[#787A7A]   hover:scale-[1.03]">
        <figure className="p-4">
          <img
            src={image}
            alt={model}
            className="h-[200px] mb-2 rounded-md "
          />
        </figure>
        <div className="card-body">
          <h2 className="text-[#131313] pb-3 border-b border-[#828282] text-xl font-semibold hover:text-[#127384]">{model}</h2>
          {/* feature */}
          <p className="flex items-center gap-3 text-[#828282] justify-between text-base">
             <p className="icon flex items-center px-2  rounded-md bg-[#f2f7f6]"> 
                <p><TbManualGearbox /></p>
                <p>{Features?.gear}</p>
                 </p>
             <p className="icon px-2 flex items-center justify-center rounded-md bg-[#f2f7f6]"> 
                <p><GiGears /></p>
                {/* // eslint-disable-next-line react/prop-types */}
                <p>{Features?.year}</p>
                 </p>
             <p className="icon flex px-2 items-center  rounded-md bg-[#F2F7F6]"> 
                <p><MdAirlineSeatReclineNormal/></p>
                <p>{Features?.person}</p>
                 </p>
         
          </p>
          <h2 className="text-[#828282] py-5 mt-5 rounded-md  bg-[#f2f7f6] text-sx font-semibold">
            <div className="flex items-center justify-center gap-1 ">
              <CiLocationOn />
              {location}
            </div>
            <div className="flex gap-0 items-center justify-center ">
                Starting From
                 <span className="text-[#FF0000] text-xl font-bold">${rental_price}</span> 
                  /Day
            </div>
            
          </h2>
          <Link to={`details/${car._id}`} className=" w-full btn bg-[#131313e7] hover:bg-[#127384] text-center font-bold flex items-center justify-center text-[#ffffff]">
            <button  className="text-center">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCard;
