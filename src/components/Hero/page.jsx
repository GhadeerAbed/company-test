import React from "react";
import { Button } from "../page";
import { check, block, img, tt, bigImage, check2 } from "../../../public/page";
import Image from "next/image";

export const Hero = ({ toggle }) => {
  return (
    <main
      className={` ${
        toggle ? "main" : "mainSlide"
      } sm:px-4 px-2 max-h-screen font-nunito max-w-[770px] mt-10 hero`}
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-6 ">
        <Button buttonName={"access control"} className={ 'hover:bg-primary hover:text-white'}/>
        <Button buttonName={"contact details restriction"} className={ 'hover:bg-primary hover:text-white'}/>
        <Button buttonName={"Water Mark"} className={'bg-primary text-white'}/>
      </div>
      <div className="bg-[#f9F9F9]  p-4  mt-10 border-none rounded-[15px]">
        <p className="uppercase font-medium">water mark</p>
        <div className="flex flex-col pt-6 px-2">
          <div className="flex sm:flex-row flex-col items-center md:gap-20 gap-12">
            <div className="flex justify-center items-center md:gap-16 gap-10">
              <div className="cursor-pointer">
                <Image src={check} alt="checkbox" className="mb-4" width={22} height={22} />
                <Image src={block} alt="first" />
                <p className="text-secondary text-xs font-medium pt-2">None</p>
              </div>
              <div className="cursor-pointer">
                <Image src={check} alt="checkbox" className="mb-4" width={22} height={22}/>{" "}
                <Image src={img} alt="first" />
                <p className="text-secondary text-xs font-medium pt-2">Image</p>
              </div>
              <div className="cursor-pointer">
                <Image src={check} alt="checkbox" className="mb-4" width={22} height={22}/>{" "}
                <Image src={tt} alt="first" width={32} height={32} className="pt-1"/>
                <p className="text-secondary text-xs font-medium pt-2">Text</p>
              </div>
            </div>
            <div className="flex flex-col w-full text-sm text-secondary  gap-2">
              <div>
                <div className="flex flex-row justify-between">
                  <p>Opacity</p>
                  <p>40%</p>
                </div>
                <div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="range w-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between">
                  <p>Propotional</p>
                  <p>72%</p>
                </div>
                <div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="range w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Image src={bigImage} alt="big" />
            <div className="flex items-center">
              <Image src={check2} alt="check"/>
              <span className="text-sm text-secondary pt-1">Apply watermark to existing photos</span>
            </div>
            <div className="flex justify-center items-center gap-5 my-6">
              <Button buttonName={"Update"} className="bg-primary text-white px-6"/>
              <Button buttonName={"Reset"} className='px-6 border border-primary text-primary'/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
