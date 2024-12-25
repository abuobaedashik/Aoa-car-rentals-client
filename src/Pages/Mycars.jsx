import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import AuthContext from "../Context/Authcontext/AuthContext";
import { Link, NavLink } from "react-router-dom";

import { MdOutlineDelete, MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { div } from "motion/react-client";
import ReusableBanner from "../Component/Shared/ReusableBanner";

const Mycars = ({ title, route_name }) => {
  const { user } = useContext(AuthContext);
  title = <>My Cars</>;
  route_name = <>my-cars</>;
  const [cars, setcars] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/cars?email=${user?.email}`).then((res) => {
      console.log(res.data);
      setcars(res.data);
    });
  }, [user.email]);

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
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // console.log("delete successfull");
          fetch(`http://localhost:4000/cars/${id}`, {
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
                const remainData = cars.filter((total) => total._id !== id);
                setcars(remainData);
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
      <div className="w-11/12 mx-auto">
        <div className="overflow-x-auto">
          {cars?.length === 0 ? (
            <div className="text-center flex flex-col items-center justify-center gap-5 min-h-screen text-[#23f245] text-2xl font-bold ">
              <div className="text-4xl">You haven't added any car</div>
              <NavLink to={"/add-car"}>
                <button className="text-[#ffffff] text-lg font-semibold bg-[#FE9307] px-3 py-1 rounded-md border-none mt-4 hover:bg-[#fe9307b0]">
                  Add Car
                </button>
              </NavLink>
            </div>
          ) : (
            <table className="table table-xs border border-[#13131374]">
              <thead className="px-2 py-2 bg-[#E00600] text-[#ffffff] text-sm  ">
                <tr>
                  <th>SL No.</th>
                  <th>Image</th>
                  <th>Model</th>
                  <th>Rental Price</th>
                  <th>Availablity</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-base bg-[#ffffff]">
                {cars?.map((car, index) => (
                  <tr key={car._id} className="border border-[#13131374]">
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="rounded-sm h-12 w-12">
                          <img
                            src={car?.image}
                            alt={car?.model}
                          />
                        </div>
                      </div>
                    </td>
                    <td>{car?.model}</td>
                    <td>{car?.rental_price}</td>
                    <td>{car?.availability}</td>
                    <td>{car?.date}</td>
                    <td className="flex items-center justify-center gap-2 text-base py-4 font-extrabold">
                      <Link to={`/update/${car?._id}`}>
                        <button className="bg-[#0000ee] mt-[1px] rounded-md text-[#ffffff] px-3 py-1">
                          <MdOutlineUpdate />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(car?._id)}
                        className="bg-[#ff0000] px-3 py-1 rounded-md text-[#ffffff]"
                      >
                        <MdOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mycars;
