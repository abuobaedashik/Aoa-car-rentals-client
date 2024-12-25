/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import ReusableBanner from "../Component/Shared/ReusableBanner";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Context/Authcontext/AuthContext";
import { MdOutlineDelete, MdOutlineUpdate } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import Swal from "sweetalert2";

const MyBookings = ({ title, route_name }) => {
  title = <>My Bookings</>;
  route_name = <>my-bookings</>;
  const { user } = useContext(AuthContext);
  const [myBooked, setmyBooked] = useState();
  console.log(myBooked);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/car_booked?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setmyBooked(res.data);
      });
  }, [user?.email]);
   const handleDelete = (id) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure you want to cancel this booking?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            // console.log("delete successfull");
            fetch(`http://localhost:4000/car_booked/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  console.log(id);
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
  
                  // Clear data from ui afert delete
                  const remainData = myBooked.filter((total) => total._id !== id);
                  setmyBooked(remainData);
                }
              });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    };
  return (
    <div>
      <div className="mb-6">
        <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
      </div>
      <div className="w-11/12 mx-auto mt-4">
        <div className="overflow-x-auto">
          {myBooked?.length === 0 ? (
            <div className="text-center flex flex-col items-center justify-center gap-5 min-h-screen text-[#23f245] text-2xl font-bold ">
              <div className="text-4xl">You haven't Booked any car</div>
              <NavLink to={"/available"}>
                <button className="text-[#ffffff] text-lg font-semibold bg-[#FE9307] px-3 py-1 rounded-md border-none mt-4 hover:bg-[#fe9307b0]">
                  Booked Car From Available Car
                </button>
              </NavLink>
            </div>
          ) : (
            <table className="table table-xs">
              <thead className="px-2 py-1 bg-[#fe930779] text-[#ffffff] text-base ">
                <tr>
                  <th>SL No.</th>
                  <th>Car Image</th>
                  <th>Car Model</th>
                  <th>Booking Date</th>
                  <th>Total Price</th>
                  <th>Booking Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-base bg-[#ffffff]">
                {myBooked?.map((car) => (
                  <tr key={car._id} className="">
                    <th>1</th>
                    <td>
                      <div className="avatar">
                        <div className="rounded-sm h-12 w-12">
                          <img src={car?.image} alt={car?.model} />
                        </div>
                      </div>
                    </td>
                    <td>{car?.model}</td>
                    <td>
                      {new Date(car?.date).toLocaleDateString()}{" "}
                      {new Date(car?.date).toLocaleTimeString()}
                    </td>
                    <td>{car?.rental_price}</td>
                    <td>{car?.user_email ? <>Booked</> : <>Not Booked</>}</td>
                    <td className="flex items-center justify-start gap-2 text-base py-4 font-extrabold">
                      {/* to={`/update/${car?._id}`} */}
                      <Link>
                        <button className="bg-[#0000ff] px-3 py-1 rounded-md text-[#ffffff] text-sm flex items-center gap-1">
                          <SlCalender/>
                          <div className="text-sm">Modify Date</div>
                        </button>
                      </Link>
                     
                      <button  onClick={() => handleDelete(car?._id)} className="bg-[#FF0000] px-3 py-1 rounded-md text-[#ffffff] text-sm flex items-center gap-1">
                        <BsTrashFill />
                        <div className="text-sm">Cancel</div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="text-xs bg-[#fe930779]">
                <tr>
                  <th>SL No.</th>
                  <th>Car Image</th>
                  <th>Car Model</th>
                  <th>Booked Date</th>
                  <th>Total Price</th>
                  <th>Booking Status</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
