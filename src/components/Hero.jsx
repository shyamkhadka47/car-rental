import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className=" mx-auto md:bg-[url('../../images/hero-bg.png')] bg-[length:900px_900px] bg-no-repeat  bg-right">
        <div className=" max-w-[1280px] mx-auto flex flex-col justify-center md:flex-row  z-10">
          <div className="flex flex-col  justify-center mx-auto  max-w-[550px] gap-5 p-10 mt-[170px] ">
            <h3 className="font-bold text-2xl">Plan your trip now</h3>
            <h1 className="capitalize font-extrabold text-6xl ">
              Save{" "}
              <span className=" text-[#ff4d30] font-extrabold text-5xl">
                big
              </span>{" "}
              with our car rental
            </h1>
            <p className="leading-8">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className=" flex flex-col lg:flex-row gap-8 ">
              <button className="capitalize bg-[#ff4d30] px-[2rem] transition-all duration-500 py-[1rem] font-bold text-white shadow-[0px_10px_15px_0_rgba(255,83,48,.35)] hover:shadow-[0px_10px_15px_0_rgba(255,83,48,.6)]">
                book a ride{" "}
                
              </button>
              <button className="capitalize hover:bg-transparent hover:text-black border-[2px] border-black transition-all duration-300 bg-[black] px-[2rem] py-[1rem] font-bold text-white flex gap-1 ">
                Learn More{" "}
                <span className="ml-[10px]">
                  <FaGreaterThan className="absolute top-[22px]" />
                </span>
              </button>
            </div>
          </div>
          <img
            className=" mx-auto md:w-[55%] right-[130px] mt-[10rem] z-[2] object-contain"
            src="../../images/car.png"
            alt=""
          />
        </div>
      
      </div>
    </>
  );
};

export default Hero;
