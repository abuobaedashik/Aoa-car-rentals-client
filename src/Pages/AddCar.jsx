import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/Authcontext/AuthContext";
import ReusableBanner from "../Component/Shared/ReusableBanner";
import Swal from "sweetalert2";

const AddCar = ({ title, route_name }) => {
  title = <>Add Car</>;
  route_name = <>add-car</>;
  const { user } = useContext(AuthContext);
  const [today, setToday] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add leading zero to month
    const day = String(currentDate.getDate()).padStart(2, "0"); // Add leading zero to day
    setToday(`${year}-${month}-${day}`); // Set formatted date (YYYY-MM-DD)
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const carData = Object.fromEntries(formData.entries());
    // console.log(carData);
    // const {min,max,currency, ...newJob} = jobData;
    const { gear, person, year, ...newData } = carData;
    newData.Features = { gear, person, year };
    newData.admin_email = user?.email;
    // console.log(newData);
    // post (create api)
  
    fetch("https://rent-my-ride-server.vercel.app/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Thanks",
            text: "Car Added Successfull !",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="mb-6">
          <ReusableBanner
            title={title}
            route_name={route_name}
          ></ReusableBanner>
        </div>
        <div className="py-6 ">
          <form onSubmit={handleSubmit} className="p-5 ">
            <div className="flex items-center flex-col mx-auto px-6 py-3 w-8/12 border border-blue-500 rounded-xl bg-gradient-to-r from-[#F5F7F6] to-[#fe930779] ">
              <div className="text-3xl font-bold mt-3 mb-5 ">Add a Car</div>
              {/* model and name="rental-price"*/}
              <div className=" grid  grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1 ">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Car Model
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Car Model"
                    name="model"
                    className=" input-accent px-5 py-1 rounded-md "
                  />
                </div>
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Daily Rental Price
                  </span>
                  <div className="w-full">
                    <input
                      type="number"
                      name="rental_price"
                      placeholder="Enter Company Location "
                      className="w-full input-accent px-5 py-1 rounded-md "
                    />
                  </div>
                </div>
              </div>
              {/* Availability and reg.no*/}
              <div className=" grid grid-cols-1 items-center gap-4 w-full">
                {/* Availability */}
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Availability
                  </span>
                  <select
                    name="availability"
                    className="w-full input-accent px-5 py-1 rounded-md "
                  >
                    <option disabled>Chose a option</option>
                    <option>Available</option>
                    <option>Not Available</option>
                  </select>
                </div>

                {/* Vehicle Registration Number */}
                <div className="flex  flex-col gap-1 ">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Vehicle Registration Number
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Vehical Registation No"
                    name="reg_no"
                    className=" input-accent px-5 py-1 rounded-md "
                  />
                </div>
              </div>
              {/* date */}
              <div className="grid grid-cols-1 items-center gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold">
                    Data
                  </span>
                  <div className="w-full">
                    <input
                      type="date"
                      name="date"
                      className="w-full input-accent px-5 py-1 rounded-md"
                      required
                      value={today} 
                    />
                  </div>
                </div>
              </div>
              {/* Features -- gear ,Persons, model-year*/}
              <div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-4 w-full">
                {/*gear */}
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Gear System
                  </span>
                  <select
                    name="gear"
                    className="w-full input-accent px-5 py-1 rounded-md "
                  >
                    <option disabled>choose gear</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                    <option>Semi-Automatic</option>
                    <option>CVT</option>
                    <option>DCT</option>
                  </select>
                </div>
                {/*person */}
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Number of Person
                  </span>
                  <input
                    type="number"
                    name="person"
                    placeholder="Enter Person Number"
                    className="w-full input-accent px-5 py-1 rounded-md "
                  />
                </div>

                {/* model year */}
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Model Year
                  </span>
                  <select
                    name="year"
                    className="w-full input-accent px-5 py-1 rounded-md "
                  >
                    <option disabled>choose the year</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                  </select>
                </div>
              </div>

              {/* description */}
              <div className=" grid grid-cols-1 items-center gap-2 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="my-2 ">Car Details</span>
                  <textarea
                    name="description"
                    placeholder="Enter Cars Description "
                    className="textarea textarea-bordered textarea-lg w-full "
                    required
                  ></textarea>
                </div>
              </div>
              {/* image url */}
              <div className=" grid  grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Image Url
                  </span>
                  <div className="w-full">
                    <input
                      type="text"
                      name="image"
                      placeholder="Enter image url"
                      className="w-full input-accent px-5 py-1 rounded-md "
                    />
                  </div>
                </div>
              </div>

              {/* hr-email and user hr-name */}

              {/* <div className=" grid grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    HR Email
                  </span>
                  <input
                    type="email"
                    name="hr_email"
                    readOnly
                    defaultValue={user?.email}
                    className="w-full input-accent px-5 py-1 rounded-md"
                    required
                  />
                </div>
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold">
                    HR Name
                  </span>
                  <input
                    type="text"
                    name="hr_name"
                    readOnly
                    defaultValue={user?.displayName}
                    className="w-full input-accent px-5 py-1 rounded-md"
                    required
                  />
                </div>
              </div> */}
              {/*location */}
              <div className="flex  flex-col gap-1 w-full">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                  Location
                </span>
                <select
                  name="location"
                  className="w-full input-accent px-5 py-1 rounded-md "
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

              {/* button */}
              <div className=" grid grid-cols-1 items-center gap-2 w-full">
                <button className=" bg-[#D2B48C] w-full input-accent px-5 py-1 rounded-md text-[#ffffff] my-4 mt-5">
                  Comfirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
