import React from "react";
import { circle } from "../../../public/page";
import Link from "next/link";
import Image from "next/image";
export const List = ({ name }) => {
  return (
    <li>
      <Link href={"#"} className="flex gap-2 px-8 py-1 font-nunito text-sm font-light text-[#A7A6A6]">
        <Image src={circle} alt="image" />
        <p>{name}</p>
      </Link>
    </li>
  );
};

export default List;
