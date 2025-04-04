import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReusableBanner from "../Component/Shared/ReusableBanner";
import { BiSort } from "react-icons/bi";
import { FaSortDown } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { HiViewList } from "react-icons/hi";
import AvailableCard from "../Component/AvailableCard";

const Available = ({ title, route_name }) => {
  title = <>Available Car</>;
  route_name = <>available</>;
  const allCar = useLoaderData();
  const [sortOrder, setSortOrder] = useState("");
  const [dateOrder, setDateOrder] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  // Filter available cars
  const availableCar = allCar.filter(
    (item) => item.availability === "Available"
  );
  const getSortedCars = () => {
    let cars = [...availableCar];

    // Sort by price
    if (sortOrder) {
      cars = cars.sort((a, b) => {
        return sortOrder === "asc"
          ? a.rental_price - b.rental_price
          : b.rental_price - a.rental_price;
      });
    }

    // Sort by date
    if (dateOrder) {
      cars = cars.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (isNaN(dateA) || isNaN(dateB)) return 0;
        return dateOrder === "desc" ? dateB - dateA : dateA - dateB;
      });
    }

    return cars;
  };

  const sortedCars = getSortedCars();

  // Handle price sort change
  const handlePriceSortChange = (order) => {
    setSortOrder(order);
    setDateOrder("");
  };

  // Handle date sort change
  const handleDateSortChange = (order) => {
    setDateOrder(order);
    setSortOrder("");
  };

  // Function to toggle view mode
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div>
      <div className="">
        <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
      </div>
      <div className="bg-[#ffffff] text-sm text-[#13131376] w-full">
        <div className="mx-auto px-8 py-6 flex items-center justify-between">
          <p className="text-sm hidden md:flex">
            Total available cars: {availableCar.length}
          </p>
          <p className="flex items-center">
            <BiSort />
            <p>Sort By </p>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="px-1 py-1">
                <FaSortDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a onClick={() => handlePriceSortChange("asc")}>
                    Lowest Price
                  </a>
                </li>
                <li>
                  <a onClick={() => handlePriceSortChange("desc")}>
                    Highest Price
                  </a>
                </li>
                <li>
                  <a onClick={() => handleDateSortChange("desc")}>
                    Newest First
                  </a>
                </li>
                <li>
                  <a onClick={() => handleDateSortChange("asc")}>
                    Oldest First
                  </a>
                </li>
              </ul>
            </div>
          </p>
          {/* search  */}
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* Toggle button for grid/list view */}
          <p className="flex items-center justify-between gap-4">
            <button
              className="hover:bg-[#787A7A] bg-[#F2F7F6] px-2 py-2 rounded-md"
              onClick={toggleView}
            >
              <p className="text-xl">
                <HiViewList />
              </p>
            </button>
            <button
              className="hover:bg-[#787A7A] bg-[#F2F7F6] px-2 py-2 rounded-md"
              onClick={toggleView}
            >
              <p className="text-xl">
                <MdGridView />
              </p>
            </button>
          </p>
        </div>
      </div>

      {/* Conditionally render grid and list view with button */}
      <div
        className={`${
          isGridView
            ? "grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10"
            : "space-y-5"
        } py-16 px-4 mx-auto w-11/12`}
      >
        {sortedCars.map((car) => (
          <AvailableCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Available;
