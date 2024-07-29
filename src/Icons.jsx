import React from "react";
import Square from "/assets/Square.png";

const Icons = () => {
  return (
    <>
      <div className="flex absolute gap-5 top-[66.5rem] left-[28rem] justify-start items-start rounded-[0.63rem] py-[18px] px-6 drop-shadow-xl [4px 4px 14px 0px #00000033] bg-[#FFFFFF] w-[364px] h-[84px]">
        {/* <button className=" flex justify-start items-left p-4 w-[401px] h-[84px] top-[86px] left-[436px] rounded-s-[12px] py-5 px-10 gap-5 text-[#FFFFFF] drop-shadow-[4px 4px 14px 0px #00000033]"> */}
        {/* Click Me */}
        {/* <div className="flex justify-center items-center"> */}
        <img className="flex absolute left-[1.8rem] top-[1rem]" src={Square} />
        <div className="h-[47px] absolute top-[1rem] left-[6rem]">
          <h1 className="text-xl font-rubik font-semibold text-start text-[#000000BF]">
            {/* <span className="flex line-[23px weight-600]">A */}
            Airvend Ambassador
          </h1>
          <p className="text-sm text-[#100658] font-medium font-inter">
            Find attached your acceptance email
          </p>
        </div>
        {/* </button> */}
      </div>
    </>
  );
};

export default Icons;
