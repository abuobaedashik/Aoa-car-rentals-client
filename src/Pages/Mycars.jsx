import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import AuthContext from "../Context/Authcontext/AuthContext";
import { NavLink } from "react-router-dom";

import { MdOutlineDelete, MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";

const Mycars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setcars] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/cars?email=${user?.email}`).then((res) => {
      console.log(res.data);
      setcars(res.data);
    });
  }, [user.email]);

  const handleDelete = id =>{
    

     const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {

        if (result.isConfirmed) {
           // console.log("delete successfull");
           fetch(`http://localhost:4000/cars/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                console.log(id)
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
            icon: "error"
          });
        }
      });
  }
  return (
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
          <table className="table table-xs">
            <thead className="px-2 py-1 bg-[#fe930779] text-[#ffffff] text-base ">
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
          

             {
              cars?.map(car=>
                <tr key={car._id} className="">
                <th>1</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
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
                   <button className="bg-[#fe9307d1] rounded-md text-[#766956] px-3 py-1"><MdOutlineUpdate /></button>
                    <button onClick={() => handleDelete(car?._id)} className="bg-[#fe9307d1] px-3 py-1 rounded-md text-[#766956]"><MdOutlineDelete /></button>
                </td>
              </tr>
              )
             }
               
             
            </tbody>
            <tfoot className="text-xs bg-[#fe930779]">
              <tr>
                <th>SL No.</th>
                <th>Image</th>
                <th>Model</th>
                <th>Rental Price</th>
                <th>Availablity</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default Mycars;
