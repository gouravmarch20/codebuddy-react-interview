import React from "react";
import { SearchOutlined, AudioOutlined } from "@ant-design/icons";
export const Search = () => {
  return (


        <div className=" flex h-[15vh] md:h-[30vh] flex-col items-center  justify-center   w-[90%] p-2 mx-auto">

          <form
            action="https://www.bing.com/search"
            method="GET"
            target="_blank"
            className="flex  md:w-[60%] items-center justify-center gap-4 bg-white rounded-md p-2"
          >
            <span>
              <SearchOutlined />
            </span>

            <div className="w-[90%]">
              <input type="text" name="q" placeholder="Search..." className=" w-[100%] p-2" />
            </div>
            <div >
              <AudioOutlined />
            </div>
          </form>
          <div className="mt-4  w-[60%] hidden md:block ">
            <div className="w-[90%]  flex gap-4 text-white text-sm	 font-bold ">
              <span>Languages:</span>
              <span>हिंदी</span>
              <span>বাংলা</span>
              <span>اردو</span>
            </div>
          </div>
        </div>


  );
};
