"use client"
import {Navbar,Sidebar,Hero} from "../components/page";
import styles from "../styles/page"
import { useState } from "react";

const Home = () =>{
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white w-full  ">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.boxWidth} solve`}>
      <div className="flex flex-row ">
        <Sidebar toggle={toggle} setToggle={setToggle}/>
        <Hero toggle={toggle} />
      </div>
      </div>

    </div>
  );
};

export default Home;
