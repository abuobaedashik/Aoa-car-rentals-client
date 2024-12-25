import React, { useState } from "react";

const Modal = ({ id, title, onSubmit }) => {
  const [newDate, setNewDate] = useState("");

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleSubmit = () => {
    if (newDate) {
      onSubmit(newDate); // Call the onSubmit function passed from MyBookings component
    } else {
      alert("Please enter a valid date");
    }
  };

  return (
    <dialog id={id} className="modal">
      <form method="dialog" className="modal-box">

        <label className="text-base text-[#131313] font-bold">
          Updated Date: 
          <input
            type="datetime-local"
            value={newDate}
            onChange={handleDateChange}
            className="input input-bordered text-sm font-medium text-[#131313aa] w-full mt-4"
          />
        </label>
        <div className="modal-action">
          <button type="button" className="btn" onClick={handleSubmit}>
            Confirm
          </button>
          <button type="button" className="btn" onClick={() => document.getElementById(id).close()}>
            Cencel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
