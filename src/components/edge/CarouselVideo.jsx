import React, { useState, useEffect } from "react";
import { data } from "../../helper/quotes";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";

export const CarouselVideo = () => {
  const [activeImg, setActiveImg] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev === data.length - 1 ? 0 : prev + (1 % data.length)));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleRightClick = () => {
    if (activeImg === data.length - 1) {
      setActiveImg(0);
      return;
    }
    setActiveImg((prev) => prev + 1);
  };
  const handleLeftClick = () => {
    if (activeImg === 0) {
      setActiveImg(data.length - 1);
      return;
    }
    setActiveImg((prev) => prev - 1);
  };
  return (
    <>
      <div className="my-bg-slate 	opacity-1	mx-auto  flex flex-col  w-[50%] items-center justify-center  rounded-md">
        <div className="flex items-center justify-center">
          <div className="mr-4 cursor-pointer " onClick={handleLeftClick}>
            <CaretLeftOutlined />
          </div>

          {data?.map((currImg, i) => (
            <p className={`h-[100px] w-[100px] 	${i == activeImg ? "flex items-center justify-center text-sky-800 uppercase	" : "hidden"}	`}>
              {currImg?.title}
            </p>
          ))}
          <div className="ml-4 cursor-pointer" onClick={handleRightClick}>
            <CaretRightOutlined />
          </div>
        </div>



        <div className="mb-4">
          <button className="my-bing-btn">Ask to bing</button>
        </div>


      </div>
    </>
  );
};
