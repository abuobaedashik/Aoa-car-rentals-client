/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import ReusableBanner from '../Component/Shared/ReusableBanner';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../Context/Authcontext/AuthContext';

const MyBookings = ({title,route_name}) => {
    title = <>My Bookings</>
    route_name=<>my-bookings</>
    const {user}=useContext(AuthContext)
    const [myBooked,setmyBooked]=useState()
    console.log(myBooked);
    useEffect(()=>{
        axios.get(`http://localhost:4000/car_booked?email=${user?.email}`)
        .then(res=>{
         console.log(res.data)
         setmyBooked(res.data)})
    },[user?.email])
    return (
        <div>
              <div className="mb-6">
             <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
           </div>
            <div className="mt-6">
                
            </div>
        </div>
    );
};

export default MyBookings;