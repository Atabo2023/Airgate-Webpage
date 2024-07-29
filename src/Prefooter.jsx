import React from "react";
import dicons from "/assets/dicons.png";

const Prefooter = () => {
  return (
    <div className="flex w-[1435px] gap-8 mx-auto h-[484px] bg-[#E9E9FD80]">
      <div className="flex  flex-col absolute top-[258rem] left-[6rem] justify-center items-start w-[662px] h-[269px] gap-[32px]">
        <p className="font-Monserrat font-semibold text-4xl text-[#100658] leading-[54px]">
          Subscribe to our newsletter to get frequent update
        </p>
        <div className="w-[434px] h-32 gap-6">
          <button className="border-1 border-[#9A9FBF40] rounded-lg py-4 px-8 w-[434px] h-[53px] bg-[#FFFFFF] gap-[10px] font-rubik font-normal text-sm text-start items-center text-[#C4C4C4]">
            Enter Email Address
          </button>
          <button className="mt-5 border-1 border-[#9A9FBF40] rounded-lg py-4 px-8 w-[198px] h-[53px] bg-[#4834D4] gap-[10px] font-rubik font-medium text-sm text-center items-center text-[#FFFFFF]">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex absolute top-[277.5rem] left-24 w-[290px] h-10 gap-4 bg-white">
        <button className="w-[136px] h-10 border-[#FFFFFF] border-[0.16px] border-solid"></button>
      </div>
      <img
        className="flex absolute top-[257rem] left-[52.8rem] md:left-[48.5rem] items-center justify-center"
        src={dicons}
      />
    </div>
  );
};

export default Prefooter;
