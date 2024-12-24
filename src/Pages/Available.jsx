import React from "react";
import { useLoaderData } from "react-router-dom";
import ReusableBanner from "../Component/Shared/ReusableBanner";
import { BiSort } from "react-icons/bi";
import { FaSortDown } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { HiViewList } from "react-icons/hi";

const Available = ({ title, route_name }) => {
  title = <>Available Car</>;
  route_name = <>available</>;
  const allCar = useLoaderData();
  console.log("all data", allCar);
  const availableCar = allCar.filter(
    (item) => item.availability === "Available"
  );
  console.log("available data", availableCar);
  return (
    <div>
      <div className="">
        <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
      </div>
      <div className="bg-[#ffffff] text-sm text-[#13131376] w-full ">
        <div className="mx-auto w-11/12 py-6 flex items-center justify-between">
          <p className="text-sm ">total available car {availableCar.length}</p>
          <p className="flex items-center ">
            <BiSort />
            <p>Sort By </p>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="px-1 py-1 ">
               <FaSortDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Newest First</a>
                </li>
                <li>
                  <a>Oldest Firs</a>
                </li>
                <li>
                  <a>Lowest Price</a>
                </li>
                <li>
                  <a>Highest Price</a>
                </li>
              </ul>
            </div>
          </p>
          {/* toggle style */}
          <p className="flex items-center justify-between gap-4">
             <button className="hover:bg-[#787A7A] bg-[#F2F7F6] px-2 py-2 rounded-md ">
              <p className="text-xl"><MdGridView/></p>
             </button>
             <button className="hover:bg-[#787A7A] bg-[#F2F7F6] px-2 py-2 rounded-md ">
              <p className="text-xl"><HiViewList /></p>
             </button>
            <p className="text-xl"></p>
          </p>
        </div>
      </div>
      available
    </div>
  );
};

export default Available;
