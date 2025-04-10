import React from "react";
import { GiGears } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const LetestCarCard = ({ latest }) => {
  console.log(latest);
  const {
    availability,
    date,
    description,
    Features,
    image,
    location,
    model,
    reg_no,
    rental_price,
    _id
  } = latest;
  return (
    <div className="pb-3 bg-[#f8f8ff] rounded-md">
      {/* title */}
      {/* image */}
      <div className="w-full">
        <img
          src={image}
          alt={model}
          className="h-[250px] w-full object-cover rounded-t-xl"
        />
        <div className="text-base hover:opacity-65 flex items-center justify-between px-3   py-1">
          <p className="flex items-center gap-1">
            <span className="text-xl mx-1 font-bold text-[#F83839]">
              {rental_price}$
            </span>
             per day
          </p>
          <p className="">{availability}</p>
        </div>
      </div>
      <p className="w-full rounded-t-md flex items-center justify-between  py-1 px-3 ">
        <p className="text-xl font-bold">{model}</p>
        <p className="text-base ">Post On : {date}</p>
      </p>
      {/* specification */}
      <div className="flex flex-col items-center justify-start gap-2 px-2 md:px-5 rounded-md text-[#828282] w-full text-base">
        <p className="icon w-full mt-3 justify-center flex px-2 items-center  rounded-md  bg-[#FFFF]">
          <p>
            <MdAirlineSeatReclineNormal />
          </p>
          <p>Person: {Features?.person}</p>
        </p>
        <p className="icon  justify-center w-full border-3 border-red-600 flex items-center px-2  rounded-md bg-[#ffff]">
          <p>
            <TbManualGearbox />
          </p>
          <p>Gear: {Features?.gear}</p>
        </p>
        <p className="icon w-full justify-center px-2 flex items-center  rounded-md bg-[#ffff]">
          <p>
            <GiGears />
          </p>
          {/* // eslint-disable-next-line react/prop-types */}
          <p>Model Year: {Features?.year}</p>
        </p>
      </div>
      <NavLink to={`/available/details/${_id}`} className="book px-2  mx-auto flex items-center justify-center w-11/12 mt-4  py-1 bg-[#ff0000c3] hover:bg-[#e0070097] text-[#ffffff]  font-bold  ">
        Book Now
      </NavLink>
    </div>
  );
};

export default LetestCarCard;
