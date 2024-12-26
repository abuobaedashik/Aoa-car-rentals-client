import React, { useContext, useEffect, useState } from "react";
import ReusableBanner from "../Component/Shared/ReusableBanner";
import axios from "axios";
import AuthContext from "../Context/Authcontext/AuthContext";
import { BsTrashFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import Swal from "sweetalert2";
import Modal from "../Component/Modal";

const MyBookings = ({ title, route_name }) => {
  title = <>My Bookings</>;
  route_name = <>my-bookings</>;
  const { user } = useContext(AuthContext);
  const [myBooked, setMyBooked] = useState([]);
  const [currentBookingId, setCurrentBookingId] = useState(null);

  const openModal = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_5").close();
  };

  useEffect(() => {
    axios
      .get(`https://rent-my-ride-server.vercel.app/car_booked?email=${user?.email}`)
      .then((res) => setMyBooked(res.data));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rent-my-ride-server.vercel.app/car_booked/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setMyBooked(myBooked.filter((total) => total._id !== id));
              Swal.fire("Deleted!", "Your booking has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    setCurrentBookingId(id);
    openModal(); // Open the modal
  };

  const handleModalSubmit = (newDate) => {
    axios
      .patch(`https://rent-my-ride-server.vercel.app/car_booked/${currentBookingId}`, { date: newDate })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success!", "Booking date updated successfully.", "success");

          // Update the UI with the new date
          setMyBooked((prevBooked) =>
            prevBooked.map((booking) =>
              booking._id === currentBookingId
                ? { ...booking, date: newDate }
                : booking
            )
          );
        } else {
          Swal.fire("Error!", "Failed to update booking date.", "error");
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Something went wrong.", "error");
      });

    closeModal();
  };

  return (
    <div>
      <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
      <div className="w-11/12 mx-auto mt-4">
        <div className="overflow-x-auto">
          {myBooked?.length === 0 ? (
            <div className="text-center">
              <h2>No Bookings Found!</h2>
            </div>
          ) : (
            <table className="table table-striped border border-[#0000ff]">
              <thead className="bg-primary text-white text-sm font-bold ">
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
              <tbody>
                {myBooked?.map((car, index) => (
                  <tr
                    key={car._id}
                    className="hover:bg-[#131313c1] hover:text-[#ffff] border border-[#0000ff] bg-[#ffffff]  transition-colors duration-200 text-sm text-[#13131391]"
                  >
                    <td>{index + 1}</td>
                    <td>
                      <img src={car?.image} alt={car?.model} className="h-12 rounded" />
                    </td>
                    <td>{car?.model}</td>
                    <td>{new Date(car?.date).toLocaleString()}</td>
                    <td>{car?.rental_price}</td>
                    <td>{car?.user_email ? <>Booked</> : <>Not Booked</>}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(car._id)}
                        className="text-sm w-[140px] justify-center font-semibold rounded-md px-2 py-1 bg-[#0000ff] text-white flex items-center gap-2"
                      >
                        <SlCalender /> Modify Date
                      </button>
                      <button
                        onClick={() => handleDelete(car._id)}
                        className="text-sm w-[140px] justify-center  mt-2 font-semibold rounded-md px-2 py-1 bg-[#ff0000] text-white flex items-center gap-2"
                      >
                        <BsTrashFill /> Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <Modal
          id="my_modal_5"
          title="Modify Booking"
          onSubmit={handleModalSubmit}
        />
      </div>
    </div>
  );
};

export default MyBookings;
