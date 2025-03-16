import React, { useEffect, useState } from "react";
import LetestCarCard from "./LetestCarCard";

const RecentList = () => {
  const [allCar, setallCar] = useState([]);
  useEffect(() => {
    fetch("https://rent-my-ride-server.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setallCar(data);
      });
  }, []);
  const sortedByDate = allCar.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  console.log('sorted data by date',sortedByDate)
  const latestSixCars = sortedByDate.slice(0, 6);
 console.log(latestSixCars);

  return <div>
      <div className="text-4xl text-[#131313e3] font-bold text-center mb-3">Recent Listing</div>
      <div className="text-base text-center font-medium mb-12 text-[#1313139f]">Explore the latest additions to our collection of premium cars, offering the best in performance, comfort, and affordability.</div>
      <div className="mt-3 grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 shadow-sm">
           {
            latestSixCars.map(latest=><LetestCarCard key={latest._id} latest={latest}></LetestCarCard>)
           }
      </div>
  </div>;
};

export default RecentList;
