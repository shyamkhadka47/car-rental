import React from "react";
import { PiQuotesBold } from "react-icons/pi";


const ClientCard = ({text, image, name, location}) => {
  return (
    <div className="w-[350px] md:w-[500px] h-auto bg-white shadow-md">
      <div className="p-10">
        <p className=" text-start text-[18px] md:text-[23px] font-medium">
         {text}
        </p>
     
      <div className="flex mt-10  gap-4 ">
        <div className="w-[80px] h-[80px] ">
          <img
            className="w-[100%] h-[100%] object-contain rounded-full"
            src={image}
            alt=""
          />
        </div>
        <div>
            <p className=" font-bold">{name}</p>
            <p>{location}</p>
        </div>

        <PiQuotesBold className="md:ml-28 " size={30} color={"#ff4d30"} />

      </div>
      </div>
    </div>
  );
};

export default ClientCard;
