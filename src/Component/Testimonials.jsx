import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import icon from "../assets/Logo/icons8-review-96.png";

const Testimonials = () => {
  const [review, setreview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setreview(data));
  }, []);
  return (
    <div>
      <div className="mt-4 mb-6">
        <div className="flex items-center justify-center">Testimonials</div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((everyReview) => (
          <SwiperSlide key={everyReview._id}>
            <div className="mt-5 mx-16 my-8 flex items-center justify-center flex-col">
              <Rating style={{ maxWidth: 180 }} value={everyReview?.rating} readOnly />
              <div className="mt-16">
                 <img src={icon} alt="mt" className="w-[100px]" />
              </div>
              <div className="mt-6 text-lg text-[#444444]">
                {everyReview?.details}
              </div>
              <div className="mt-4 text-2xl font-bold text-[#CD9003]">
                {everyReview?.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;