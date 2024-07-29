import React from "react";
import Gridlayout from "./Gridlayout";

const Grid = () => {
  return (
    <>
      <div className="w-[1434px] mx-auto mt-[4rem] h-[928px] bg-[#FFFFFF]">
        <div className="flex flex-col mt-[5rem] mb-[2rem] gap-[26px] mx-auto w-[600px] h-[170px] justify-center">
          <p className="text-4xl col text-center font-[Monserrat] font-semibold line-[54px] text-[#130F40]">
            What is in for <span className="text-[#4834D4]">Airvend</span> Campus Ambassadors.</p>
          <p className="flex flex-col text-center font-normal text-sm leading-7 items-center text-[#100658]">
            Live your best life. Make and receive payments from the comfort of
            your home. Life shouldn’t be stressful when we’ve got your back.
          </p>
        </div>
        <Gridlayout />
      </div>
    </>
  );
};

export default Grid;
