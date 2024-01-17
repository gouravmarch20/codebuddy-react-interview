import React from "react";
import { data } from "../../helper/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const CarouselVideos = () => {
  return (
    <div className="mx-auto w-[80%]  bg-slate-800   ">
      <Carousel
        responsive={responsive}
        itemClass="mt-2 "
        customRightArrow={
          <CaretRightOutlined className="max-w-4 text-primary-400 absolute right-4 top-1/2 cursor-pointer bg-red-500 text-xl " />
        }
        customLeftArrow={
          <CaretLeftOutlined className="max-w-4 text-primary-400 absolute left-4 top-1/2 cursor-pointer bg-red-500 text-xl " />
        }
      >
        {data?.map((d) => (
          <>
            <div
              className="mx-4 flex flex-col justify-center rounded-md bg-gray-400  "
              key={d?.key}
            >
              <p className="text-center">{d.title}</p>
              <div className="flex  justify-center">
                <img src={d?.imgUrl} className="h-[150px] w-[200px]" loading="lazy" />
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};
