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
  const [sortOrder, setSortOrder] = useState("asc");  // For price sorting
  const [dateOrder, setDateOrder] = useState("desc"); // For date sorting
  const [isGridView, setIsGridView] = useState(true); // For view toggle
  

  // Filter available cars
  const availableCar = allCar.filter(
    (item) => item.availability === "Available"
  );

  // Sort the available cars based on price and date
  const sortedCars = availableCar.sort((a, b) => {
    // Sort by price
    if (sortOrder === "asc") {
      return a.rental_price - b.rental_price;
    } else if (sortOrder === "desc") {
      return b.rental_price - a.rental_price;
    }

    // Ensure the date is in the correct format
    const dateA = new Date(a.date);  // Convert date string to Date object
    const dateB = new Date(b.date);  // Convert date string to Date object

    // Debugging: Check if the date is being parsed correctly
    console.log("Date A:", dateA);
    console.log("Date B:", dateB);

    if (isNaN(dateA) || isNaN(dateB)) {
      console.error("Invalid date format:", a.date, b.date);
      return 0; // If date parsing fails, do not perform sorting
    }

    // Sort by date
    if (dateOrder === "desc") {
      return dateB - dateA;  // Newest first
    } else {
      return dateA - dateB;  // Oldest first
    }
  });

  // Handle price sort change
  const handlePriceSortChange = (order) => {
    setSortOrder(order);
  };

  // Handle date sort change
  const handleDateSortChange = (order) => {
    setDateOrder(order);
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
                  <a onClick={() => handlePriceSortChange("asc")}>Lowest Price</a>
                </li>
                <li>
                  <a onClick={() => handlePriceSortChange("desc")}>Highest Price</a>
                </li>
                <li>
                  <a onClick={() => handleDateSortChange("desc")}>Newest First</a>
                </li>
                <li>
                  <a onClick={() => handleDateSortChange("asc")}>Oldest First</a>
                </li>
              </ul>
            </div>
          </p>
          {/* Toggle button for grid/list view */}
          <p className="flex items-center justify-between gap-4">
            <button
              className="hover:bg-[#787A7A] bg-[#F2F7F6] px-2 py-2 rounded-md"
              onClick={toggleView}
            >
              <p className="text-xl">
                <MdGridView />
              </p>
            </button>
            <button
              className="hover:bg-[#787A7A] bg-[#F2F7F6] px-2 py-2 rounded-md"
              onClick={toggleView}
            >
              <p className="text-xl">
                <HiViewList />
              </p>
            </button>
          </p>
        </div>
      </div>

      {/* Conditionally render grid or list view */}
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
