"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  arrowb,
  arrowt,
  arrowr,
} from "../../../public/page";
import { List } from "../../components/page";

export const Sidebar = ({ toggle, setToggle }) => {
  const [toggle1, setToggle1] = useState(false);
  const data = [
    "Profile Details",
    "Settings",
    "Notifications",
    "Activities",
    "Security",
  ];

  const paragraphClassName = toggle ? "" : "hidden";
  const divPadding = toggle ? "pr-5" : "pr-0";

    useEffect(() => {
      if (window.innerWidth <= 700) {
        setToggle(false);
      }
    },[])

  return (
    <aside
      className={`bg-white  border-gray-300 shadow-customShadow1 fixed  left-0 h-screen ${
        toggle ? " w-[277px] pl-8" : "w-[77px] pl-5"
      }   pr-2 sidebar pt-5 font-nunito aside z-10 `}
    >
      <div>
        <div
          className=" flex absolute top-[19px] -right-[115px] max-sm:-right-[14px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          <div className="arrow-select ">
            <Image src={arrowr} alt="arrow" />
          </div>
          <span className="uppercase font-semibold px-3 max-sm:hidden">settings</span>
        </div>
        <ul >
          <li className="bg-primary text-white rounded-full pl-2 ">
            <div className="flex items-center  font-medium  mt-6 mb-5 ">
              <Link href="#" className="flex items-center gap-5 ">
                <Image src={h1} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Agency Hub</p>
              </Link>
            </div>
          </li>
          <li className="pl-2">
            <div
              className={`flex items-center justify-between  font-medium text-secondary mb-5 ${divPadding}`}
            >
              <Link href="#" className="flex items-center gap-5">
                <Image src={h2} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Agency Profile</p>
              </Link>
              <div
                className={`arrow-select ${paragraphClassName}`}
                onClick={() => setToggle1((prev) => !prev)}
              >
                {toggle1 ? (
                  <Image src={arrowt} alt="arrow" />
                ) : (
                  <Image src={arrowb} alt="arrow" />
                )}
              </div>
            </div>
            <ul className={`-mt-2 mb-4 ${toggle1 ? "block" : "hidden"}`}>
              {data.map((data_name, i) => (
                <List key={i} name={data_name} />
              ))}
            </ul>
          </li>
          <li className="pl-2">
            <div
              className={`flex items-center justify-between  font-medium text-secondary mb-5 ${divPadding}`}
            >
              <Link href="#" className="flex items-center gap-5">
                <Image src={h3} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Membership</p>
              </Link>
              <div className={`arrow-select ${paragraphClassName}`}>
                <Image src={arrowb} alt="arrow" />
              </div>
            </div>
          </li>
          <li className="pl-2">
            <div
              className={`flex items-center justify-between  font-medium text-secondary mb-5 ${divPadding}`}
            >
              <Link href="#" className="flex items-center gap-5">
                <Image src={h4} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Add New Property</p>
              </Link>
              <div className={`arrow-select ${paragraphClassName}`}>
                <Image src={arrowb} alt="arrow" />
              </div>
            </div>
          </li>
          <li className="pl-2">
            <div className="flex items-center justify-between  font-medium text-secondary mb-5 ">
              <Link href="#" className="flex items-center gap-5">
                <Image src={h5} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>My Property List</p>
              </Link>
            </div>
          </li>
          <li className="pl-2">
            <div className="flex items-center justify-between  font-medium text-secondary mb-5 ">
              <Link href="#" className="flex items-center gap-5">
                <Image src={h6} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Agents</p>
              </Link>
            </div>
          </li>
          <li className="pl-2">
            <div className="flex items-center justify-between  font-medium text-secondary mb-5 ">
              <Link href="#" className="flex items-center gap-5">
                <Image src={h7} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Lead / Deals</p>
              </Link>
            </div>
          </li>
          <li className="pl-2">
            <div className="flex items-center justify-between  font-medium text-secondary mb-5 ">
              <Link href="#" className="flex items-center gap-5">
                <Image src={h8} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Agency Contacts</p>
              </Link>
            </div>
          </li>
          <li className="pl-2">
            <div className="flex items-center justify-between  font-medium text-secondary mb-5 ">
              <Link href="#" className="flex items-center gap-5">
                <Image src={h9} alt="image" width={20} height={20} />
                <p className={paragraphClassName}>Marketing Hub</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
