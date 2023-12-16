import React from "react";
import { MdCall } from "react-icons/md";


const Banner = () => {
  return (
    <div>
      {" "}
      <div className="w-full bg-[#2d2d2d] text-white bg-[url('../../images/book-banner.png')] relative">

        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-center  py-20 items-center gap-5 ">
          <h1 className="capitalize text-2xl font-extrabold text-center mt-[-30px] ">
            Book a car by getting in touch with us
          </h1>
          <div className="flex gap-5 hover:text-[#ff4d30] mt-10 md:mt-[-30px]"><span>
            <MdCall size={40} className="" />
          </span>{" "}
          <h1 className="capitalize text-4xl font-extrabold text-center mt-[20px] md:mt-[-5px]  hover:text-[#ff4d30]">
            {" "}
            (123) 456-7869
          </h1></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
