import React from 'react';
import ReusableBanner from '../Component/Shared/ReusableBanner';

const MyBookings = ({title,route_name}) => {
    title = <>My Bookings</>
    route_name=<>my-bookings</>
    return (
        <div>
              <div className="mb-6">
             <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
           </div>
            bookings
        </div>
    );
};

export default MyBookings;