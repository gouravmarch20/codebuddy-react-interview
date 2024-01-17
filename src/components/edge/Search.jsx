import React from "react";
import { SearchOutlined, AudioOutlined } from "@ant-design/icons";
export const Search = () => {
  return (
    <div className=" mx-auto flex h-[15vh] w-[90%] flex-col  items-center   justify-center p-2 md:h-[30vh]">
      <form
        action="https://www.bing.com/search"
        method="GET"
        target="_blank"
        className="flex  items-center justify-center gap-4 rounded-md bg-white p-2 md:w-[60%]"
      >
        <span>
          <SearchOutlined />
        </span>

        <div className="w-[90%]">
          <input type="text" name="q" placeholder="Search..." className=" w-[100%] p-2" />
        </div>
        <div>
          <AudioOutlined />
        </div>
      </form>
      <div className="mt-4  hidden w-[60%] md:block ">
        <div className="flex  w-[90%] gap-4 text-sm font-bold	 text-white ">
          <span>Languages:</span>
          <span>हिंदी</span>
          <span>বাংলা</span>
          <span>اردو</span>
        </div>
      </div>
    </div>
  );
};
