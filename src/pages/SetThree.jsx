import React from "react";
import { Navbar } from "../components/edge/Navbar";
import { Search } from "../components/edge/Search";
import { CarouselVideo } from "../components/edge/CarouselVideo";
import { CarouselVideos } from "../components/edge/CarouselVideos";

export const SetThree = () => {
  return (
    <div className="body-setThree">
      <Navbar />
      <Search />
      <CarouselVideo />
      <div className=" mt-[22%] ">
        <CarouselVideos />
      </div>
    </div>
  );
};
