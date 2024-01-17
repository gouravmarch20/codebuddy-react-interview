import React from "react";
import { Navbar } from "../components/edge/Navbar";
import { Search } from "../components/edge/Search";
import { CarouselVideo } from "../components/edge/CarouselVideo";
import { CarouselVideos } from "../components/edge/CarouselVideos";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const SetThree = () => {
  return (
    <div className="body-setThree">
      <Navbar />
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>
      <Search />
      <CarouselVideo />
      <div className=" mt-[22%] ">
        <CarouselVideos />
      </div>
    </div>
  );
};
