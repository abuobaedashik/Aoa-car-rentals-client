import React, { useContext } from "react";
import ReusableBanner from "../Component/Shared/ReusableBanner";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdAirlineSeatReclineNormal, MdEventAvailable } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { GiGears } from "react-icons/gi";
import AuthContext from "../Context/Authcontext/AuthContext";
import Swal from "sweetalert2";

const Details = ({ title, route_name }) => {
  title = <>Car Details</>;
  const singleData = useLoaderData();
  route_name = <>details/{singleData?.model}</>;
  // console.log(singleData);
  const navigate =useNavigate()
  const {user}=useContext(AuthContext)
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
  } = singleData;
  const handleBooked =e=>{
    e.preventDefault();
    const bookingCar = new FormData(e.target);
    const bookedList = Object.fromEntries(bookingCar.entries());
    // console.log(updateCarData);
    // const {min,max,currency, ...newJob} = jobData;
    // finalData.Features = { gear,person, year };
    bookedList.car_id=singleData?._id
    bookedList.user_email=user?.email
    // console.log('booked car data',bookedList)
    fetch("https://rent-my-ride-server.vercel.app/car_booked", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookedList),
    })
    .then((res) => res.json())
    .then((data) =>{
      if (data.insertedId) {
        Swal.fire({
          title: "Car Booked Successful",
          icon: "success",
          draggable: true
        })
      }
      navigate('/my-bookings')
    });
    
  }
  return (
    <div>
      <div className="mb-0">
        <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
      </div>
      {/* title design */}
      <div className="py-8 bg-[#ffffff]">
        <div className="w-11/12 mx-auto flex items-center flex-col md:flex-row justify-between">
          <div className="text">
            <div className="title flex items-end justify-center md:justify-start">
              <button className="px-3 py-1 text-base font-bold bg-[#127384] text-[#ffffff]">
                {Features?.year}
              </button>
            </div>
            <div className="title text-[#131313e2] text-2xl mt-2 font-bold ">
              {model}
            </div>
            <div className="location gap-2 mt-1 text-[#787878] text-base font-bold flex items-center">
              <span className="text-base font-bold">
                <IoLocationOutline />
              </span>{" "}
              Location:{" "}
              <span className="text-sm text-[#787878a9]"> {location}</span>
            </div>
          </div>
          <div className="availablity">
            <button className="px-3 text-base py-1 text-[#787878dd] bg-[#f2f7f6] rounded-md flex items-center justify-center gap-1">
              <MdEventAvailable /> {availability}
            </button>
          </div>
        </div>
      </div>
      {/* details image and description and booking form */}
      <div className="details w-11/12 mx-auto py-10 pt-24 flex flex-col md:flex-row items-start justify-between md:gap-2 gap-6 ">
        {/* left side */}
        <div className="left md:w-[60%] w-full">
          {/* image */}
          <div className="p-4 pt-5 rounded-md pb-4 bg-[#ffffff]">
            <img
              src={image}
              alt={model}
              className="h-[400px] w-full bg-[#ffffff] rounded-lg"
            />
          </div>
          {/* description */}
          <div className="p-4 pt-5 mt-6 h-[244px] overflow-hidden px-4 py-6 text-[#787878] rounded-md pb-4 bg-[#ffffff]">
            <div className="text-2xl pb-3 my-3 border-b border-[#1313136d] font-bold text-[#131313]">
              Description
            </div>
            <div className="mt-3">{description}</div>
          </div>

          {/* FAF */}
          <div className="p-4 pt-5 mt-6 px-4 py-6 text-[#787878] rounded-md pb-4 bg-[#ffffff]">
            <div className="text-2xl pb-3 my-3 border-b border-[#1313136d] font-bold text-[#131313]">
              FaQ
            </div>
            <div className="mt-3">
              <div className="collapse mt-3 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-base font-medium">
                Is it possible to rent a car with a driver?
                </div>
                <div className="collapse-content">
                  <p>Yes, we provide cars with experienced drivers for your convenience.</p>
                </div>
              </div>
              <div className="collapse mt-3 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-base font-medium">
                 How can I book a car rental?
                </div>
                <div className="collapse-content">
                  <p>You can book a car rental through our website, by calling our customer service hotline, or by visiting our office directly.</p>
                </div>
              </div>
              <div className="collapse mt-3 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-base font-medium">
                Are your services available outside Dhaka?
                </div>
                <div className="collapse-content">
                  <p>Yes, we offer car rentals for both within Dhaka city and inter-district travel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rigth side */}
        <div className="right md:w-[36%] w-full ">
          {/* Pricing Details */}
          <div className="price bg-[#ffffff] mb-6 py-5 px-3 rounded-md">
            <div className="text-2xl pb-3 my-3 border-b border-[#1313136d] font-bold text-[#131313]">
              Pricing Details
            </div>
            <div className="text-sm px-4 py-3 my-3 bg-[#f2f7f6] flex items-center justify-between text-[#787878]">
              <p className="price">Price Per Day</p>
              <p className="price text-[#131313] text-base font-bold">
                $ {rental_price}
              </p>
            </div>
          </div>
          {/* Specifications */}
          <div className="price bg-[#ffffff] mb-6 py-5 px-3 rounded-md">
            <div className="text-2xl pb-3 my-3 border-b border-[#1313136d] font-bold text-[#131313]">
              Specifications
            </div>
            <div className="text-sm px-4 py-3 my-3 bg-[#f2f7f6] flex items-center justify-between text-[#787878]">
              <div className="flex items-center gap-1 md:gap-16 px-2 md:px-5 rounded-md text-[#828282] justify-around text-base">
                <p className="icon border-3 border-red-600 flex items-center px-2  rounded-md bg-[#f2f7f6]">
                  <p>
                    <TbManualGearbox />
                  </p>
                  <p>{Features?.gear}</p>
                </p>
                <p className="icon px-2 flex items-center justify-center rounded-md bg-[#f2f7f6]">
                  <p>
                    <GiGears />
                  </p>
                  {/* // eslint-disable-next-line react/prop-types */}
                  <p>{Features?.year}</p>
                </p>
                <p className="icon flex px-2 items-center  rounded-md bg-[#F2F7F6]">
                  <p>
                    <MdAirlineSeatReclineNormal />
                  </p>
                  <p>{Features?.person}</p>
                </p>
              </div>
            </div>
          </div>
          {/* booking form */}
          <div className="price bg-[#ffffff] pb-2 rounded-md mt-8 py-5 px-3">
            <div className="text-2xl pb-8 my-3 border-b border-[#1313136d] font-bold text-[#131313]">
              Booking Form
            </div>
            <form onSubmit={handleBooked}>
              {/*Pickup Location */}
              <div className="flex bg-[#f2f7f6] mt-6  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                  Pickup Location
                </span>
                <select
                  name="pickup"
                  defaultValue={location}
                  className="w-full input-accent bg-[#f2f7f6] px-5 py-1 rounded-md "
                >
                  <option disabled>choose location</option>
                  <option>Motijheel</option>
                  <option>Kamalapur</option>
                  <option>Paltan</option>
                  <option>Mohammadpur</option>
                  <option>Dhanmondi</option>
                  <option>Mirpur</option>
                  <option>Gulshan</option>
                  <option>Banani</option>
                  <option>Uttara</option>
                  <option>Sadarghat</option>
                  <option>Farmgate</option>
                  <option>Hazrat Shahjalal International Airport</option>
                  <option>Kallyanpur</option>
                  <option>Shyamoli</option>
                  <option>Badda</option>
                </select>
              </div>
              {/* Dropoff Location */}
              <div className="flex bg-[#f2f7f6] mt-6 flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                  Dropoff Location
                </span>
                <select
                  name="dropoff"
                  className="w-full input-accent bg-[#f2f7f6] px-5 py-1 rounded-md "
                >
                  <option disabled>choose location</option>
                  <option>Motijheel</option>
                  <option>Kamalapur</option>
                  <option>Paltan</option>
                  <option>Mohammadpur</option>
                  <option>Dhanmondi</option>
                  <option>Mirpur</option>
                  <option>Gulshan</option>
                  <option>Banani</option>
                  <option>Uttara</option>
                  <option>Sadarghat</option>
                  <option>Farmgate</option>
                  <option>Hazrat Shahjalal International Airport</option>
                  <option>Kallyanpur</option>
                  <option>Shyamoli</option>
                  <option>Badda</option>
                </select>
              </div>
              {/* Pickup Date */}
              <div className=" grid bg-[#f2f7f6] mt-6 grid-cols-1 items-center gap-4 w-full">
                <div className="flex bg-[#f2f7f6]  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Booking Data
                  </span>
                  <div className="py-3 px-2 w-10/12">
                    <input
                      type="datetime-local"
                      name="date"
                      className="w-full input-accent px-5 py-1 rounded-md "
                      required
                    />
                  </div>
                </div>
              </div>
              {/* coupon */}
              <div className="price bg-[#ffffff] mb-6 py-5 px-3 rounded-md">
                <div className="text-xl pb-3 my-3 font-bold text-[#131313]">
                  Use Coupon
                </div>
                <div className="coupon">
                  <input
                    type="text"
                    placeholder="Enter Valid Coupon Code "
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <p className="flex items-center justify-start gap-2">
                  <input
                    type="checkbox"
                    name="usecoupon"
                    placeholder="use coupon code"
                    id=""
                  />
                  Use coupon code{" "}
                </p>
              </div>
              <div className="mt-3">
                <button className=" bg-[#D2B48C] w-full input-accent px-5 py-2 rounded-lg hover:bg-[#FF0000] text-[#ffffff] my-4 mt-4">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
