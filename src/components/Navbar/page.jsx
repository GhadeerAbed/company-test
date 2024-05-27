import React from "react";
import Image from "next/image";
import aqarat from "../../../public/aqarat.svg";
import notification from "../../../public/notification.svg";
import team from "../../../public/team.svg";

export const Navbar = () => {
  return (
    <nav>
      <div className="w-full fixed top-0 left-0  flex justify-between items-center py-2  border-b rounded-b-3xl border-gray-300 shadow-customShadow sm:pr-16 pr-6 sm:pl-5 pl:2 z-50  bg-white  ">
      <Image src={aqarat} alt="aqarat" width={199} height={55} className="cursor-pointer"/>

      <div className="flex flex-row justify-center items-center gap-5 navbar">
        <div className="notification cursor-pointer">
          <Image src={notification} alt="notification" />
        </div>
        <div className="cursor-pointer">
        <Image src={team} alt="teamwork" />
        </div>
        <div className="text-sm text-secondary font-nunito max-ss:hidden ">
          <p className=" ">
            Subscription:<span className="font-medium text-black"> Monthly</span>
          </p>
          <p className="pt-1">Valid Until: 1 Jan 2024</p>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
