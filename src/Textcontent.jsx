import React from "react";
// import circle from "./assets/circle.png";
import circle from "/assets/circle.png";
import image3 from "/assets/image3.png";

const Textcontent = () => {
  return (
    <div className="flex justify-start mx-auto items-center w-[1456px] h-[728px] top[1069] bg-white-500">
      <div className="flex gap-[10rem] items-end w-[1456px] h-[566px] left[-16px] ">
        <img
          className="flex w-107 h-85 items-center justify-center"
          src={circle}
        />
        <img
          className="flex absolute left-[180px] sm:top-[64rem] md:top-[64rem] w-107 h-85 object-right justify-center"
          src={image3}
        />

        {/* <div className="flex justify-left items-start"> */}

        {/* </button> */}
        {/* </div> */}

        <div className="flex flex-col justify-start w-[678px] h-[347px]">
          <div className="flex items-start flex-col justify-center">
            {/* {/* <div className="flex w-[678px] h-[244px] p-[10px] gap-[10px]"> */}
            <div className="flex text-[64px] font-bold text-[#4834D4]">
              Lead, Collaborate, and Inspire
            </div>
            <p className="flex text-[#130F40] text-start items-start justify-start pb-[2.5rem]">
              Join our campus ambassador program and become a catalyst for
              change. Take the lead and make a difference today
            </p>
            {/* </div> */}
          </div>
          <div className="flex gap-10 ml-[0.8rem]">
            {/* <div className="flex flex-col items-end justify-left"> */}
            <button className="flex border-1 font-md line-[21px] text-center rounded-lg py-4 px-16 border-[#9A9FBF40] rounded-3 bg-[#4834D4] text-[#FFFFFF] justify-left items-left">
              Apply Now
            </button>
            <button className="flex rounded-lg border-solid border-1 border-[#9A9FBF] py-4 px-10 drop-shadow-2xl bg-[#FFFFFF] text-[#4834D4]">
              Learn More
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Textcontent;
