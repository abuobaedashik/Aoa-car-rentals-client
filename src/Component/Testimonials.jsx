import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import icon from "../assets/Logo/icons8-review-96.png";

const Testimonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <div className="mt-24 mb-6 text-center">
        <h3 className="text-xl font-semibold">Testimonials</h3>
        <h2 className="text-3xl font-bold my-2">
          Our Happy Customers Are Saying
        </h2>
      </div>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {review.map((everyReview) => (
          <SwiperSlide key={everyReview._id}>
            <div className="mt-5  my-8 p-5 bg-[#ffffff] ">
              <Rating
                style={{ maxWidth: 180 }}
                value={everyReview?.rating}
                readOnly
              />
              <div className="mt-6 text-lg text-[#444444] px-4">
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
