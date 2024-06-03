/* eslint-disable react/prop-types */

import { SwiperSlide } from "swiper/react";

const ReviewCard = ({ review }) => {
  return (
    <>
      <SwiperSlide className="flex flex-col content-center items-center text-center">
        <div className="w-24 h-24">
          <img
            className="w-[100%] h-[100%] rounded-full"
            src={review?.photo}
            alt="client"
          />
        </div>
        <div className="mt-16 text-xl text-slate-900 space-y-7">
          <h1>{review?.title}</h1>
          <p>{review?.review}</p>
          <p>{review?.reviewername}</p>
          <small>{review?.reviewDate}</small>
        </div>
      </SwiperSlide>
    </>
  );
};

export default ReviewCard;
