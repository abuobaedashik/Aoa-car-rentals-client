import React from "react";
import ReusableBanner from "../Component/Shared/ReusableBanner";
import { useLoaderData } from "react-router-dom";

const Details = ({ title, route_name }) => {
  title = <>Car Details</>;
  route_name = <>details</>;
  const singleData =useLoaderData()
  console.log(singleData);
  return (
    <div>
      <div className="mb-6">
        <ReusableBanner title={title} route_name={route_name}></ReusableBanner>
      </div>
      <div className="mt-3">{singleData?.model}</div>
     
    </div>
  );
};

export default Details;
