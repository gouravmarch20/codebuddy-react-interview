import React, { useState } from "react";
import { MenuOutlined, SettingOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <nav className="mx-auto  w-5/6 p-4 text-white ">
      <div className="grid grid-cols-2 gap-2  md:grid-cols-3">
        <h3>Bing</h3>

        <div className="">
          <ul className="flex gap-2   ">
            <li>Chat</li>
            <li>Images</li>
            <li className="hidden sm:block">Videos</li>
            <li className="hidden md:block">Maps</li>
            <li className="hidden lg:block">News</li>
            <li className="hidden lg:block">...</li>
          </ul>
        </div>
        <div className="block md:hidden"></div>
        <div className=" col-span-2 md:col-span-1">
          <ul className="flex items-center  justify-end gap-4  ">
            <li>Sign</li>
            <li>Rewards</li>
            <div className="relative top-[-4px]">
              <MenuOutlined className="cursor-pointer" onClick={() => setModal((prev) => !prev)} />
            </div>
          </ul>
        </div>

        {modal && (
          <div className="absolute  right-[7%] top-24 z-10 h-[50%] w-[200px]  bg-white text-black md:top-12">
            <ul>
              <li className="m-2  flex  items-center gap-4 ">
                <SettingOutlined />
                <p>Settings</p>
              </li>
              <li className="m-2  flex  items-center gap-4 ">
                <SettingOutlined />
                <p>Settings</p>
              </li>
              <li className="m-2  flex  items-center gap-4 ">
                <SettingOutlined />
                <p>Settings</p>
              </li>
              <li className="m-2  flex  items-center gap-4 ">
                <SettingOutlined />
                <p>Settings</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
  ``;
};
