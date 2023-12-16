import React from "react";

const Chooseus = () => {
  return (
    <div className="bg-[url('../../images/bg-tyre.png')] bg-no-repeat mb-10 bg-contain max-w-[1280px] mx-auto  ">
      <div className="flex flex-col">
        <div className="w-[100%] h-auto mt-[30px]">
          <img
            className="w-[90%] h-[100%] object-contain mx-auto my-0"
            src="../../images/main.png"
            alt=""
          />
        </div>
        <div className="flex gap-20 justify-center items-center lg:flex-row flex-col">
          <div className="max-w-[550px] flex flex-col justify-center gap-5 px-10">
            <h3 className="text-xl font-bold capitalize">why Choose us</h3>
            <h1 className="text-4xl font-extrabold capitalize">
              Best valued deals you will ever find
            </h1>
            <p>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <button className="capitalize w-[150px] rounded-md bg-[#ff4d30] px-[1rem] transition-all duration-500 py-[.5rem] font-bold text-white shadow-[0px_10px_15px_0_rgba(255,83,48,.35)] hover:shadow-[0px_10px_15px_0_rgba(255,83,48,.6)]">
              Find Details
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
              <div>
                {" "}
                <img src="../../images/2.png" alt="" />
              </div>
              <div className="md:max-w-[350px] flex flex-col gap-3">
                <h1 className="font-bold text-2xl capitalize text-center lg:text-start">
                  Cross Country Drive
                </h1>
                <p className="w-[300px] text-center lg:text-start">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
              <div>
                {" "}
                <img src="../../images/2.png" alt="" />
              </div>
              <div className="md:max-w-[350px] flex flex-col gap-3">
                <h1 className="font-bold text-2xl capitalize text-center lg:text-start">
                  All Inclusive Pricing{" "}
                </h1>
                <p className=" w-[300px] text-center lg:text-start">
                Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                </p>
              </div>
            </div>{" "}
            <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
              <div>
                {" "}
                <img src="../../images/2.png" alt="" />
              </div>
              <div className="md:max-w-[350px] flex flex-col gap-3">
                <h1 className="font-bold text-2xl capitalize text-center lg:text-start">
                  No Hidden Charges{" "}
                </h1>
                <p className=" w-[300px] text-center lg:text-start">
                Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
