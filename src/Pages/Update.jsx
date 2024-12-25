import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../Context/Authcontext/AuthContext";
import Swal from "sweetalert2";
import ReusableBanner from "../Component/Shared/ReusableBanner";

const Update = ({title,route_name}) => {
    const data = useLoaderData();
    title = <>Update Added Cars Data</>
    route_name=<>my-cars/update</>
  const {user}=useContext(AuthContext)
  console.log(data);
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
    }= data

    const handleUpdate =e =>{
    e.preventDefault();
    const updateData = new FormData(e.target);
    const updateCarData = Object.fromEntries(updateData.entries());
    // console.log(updateCarData);
    // const {min,max,currency, ...newJob} = jobData;
    const { gear,person,year,...finalData } = updateCarData;
    finalData.Features = { gear,person, year };
    finalData.admin_email=user?.email
    console.log(finalData);

    fetch(`http://localhost:4000/update/${data._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'},
        body:JSON.stringify(finalData)
      })
      .then(res=>res.json())
     .then(data=>{
        console.log(data);
       if (data.modifiedCount >0) {
        Swal.fire({
            title: "Thanks",
            text: "Car data Updated Successfully !",
            icon: "success"
          });
       }
     })
    }
  return (
    <div>
      <div>
      <div className="mb-6">
             <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
           </div>
        <div className="py-6 mt-10">
          <form onSubmit={handleUpdate} className="p-5 ">
            <div className="flex items-center flex-col mx-auto px-6 py-3 w-8/12 border border-blue-500 rounded-xl bg-gradient-to-r from-[#fe930779] to-[#F5F7F6] ">
              <div className="text-3xl font-bold mt-3 mb-5 ">Update Added Car</div>
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
                    defaultValue={model}
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
                      defaultValue={rental_price}
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
                    defaultValue={availability}
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
                    defaultValue={reg_no}
                    className=" input-accent px-5 py-1 rounded-md "
                  />
                </div>
              </div>
              {/* date */}
              <div className=" grid  grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Data
                  </span>
                  <div className="w-full">
                    <input
                      type="date"
                      name="date"
                      defaultValue={date}
                      className="w-full input-accent px-5 py-1 rounded-md "
                      required
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
                    defaultValue={Features?.gear}
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
                    defaultValue={Features?.person}
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
                    defaultValue={Features?.year}
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
                    defaultValue={description}
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
                      defaultValue={image}
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
              <div className=" grid grid-cols-1 items-center gap-2 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="my-2 ">Location</span>
                  <input
                    type="text"
                    name="location"
                    defaultValue={location}
                    placeholder="Enter Location"
                    className="w-full input-accent px-5 py-1 rounded-md"
                    required
                  />
                </div>
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

export default Update;
