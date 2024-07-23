import React from "react";
import Plus from "/assets/Plus.png";
const Faqs = () => {
  return (
    <>
      <div className="w-[1435px] h-[680px] mx-auto bg-[#FFFFFF]">
        <div className="flex mt-[3rem] justify-center mx-auto w-[662px] h-[60px] gap-7 bg-white">
          <p className="flex justify-center gap-6 items-center text-center text-[40px] font-rubik font-bold leading-10 text-[#100658]">
            FAQs
          </p>
        </div>
        <div className="w-[1168px] mx-auto mt-[2rem] h-[528px] gap-5 bg-white">
          <div className="flex border-b-[1px] h-[68px] border-solid border-[#E7EAEE] py-4 px-2.5 gap-[632px]">
            <p className="flex text-2xl text-left font-semibold text-[#4834D4]">
              Is the program for a selected discipline{" "}
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end w-[40px] h-[40px]"
                src={Plus}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] h-[68px] border-solid border-[#E7EAEE] py-4 px-2.5 gap-[699px]">
            <p className="flex text-2xl text-left font-semibold text-[#4834D4]">
              How much is the application fee?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end w-[40px] h-[40px]"
                src={Plus}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] h-[68px] border-solid border-[#E7EAEE] py-4 px-2.5 gap-[765px]">
            <p className="flex text-2xl text-left font-semibold text-[#4834D4]">
              Who is eligible for this role?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end w-[40px] h-[40px]"
                src={Plus}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] h-[68px] border-solid border-[#E7EAEE] py-4 px-2.5 gap-[749px]">
            <p className="flex text-2xl text-left font-semibold text-[#4834D4]">
              How long does this role last?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end w-[40px] h-[40px]"
                src={Plus}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] h-[68px] border-solid border-[#E7EAEE] py-4 px-2.5 gap-[666px]">
            <p className="flex text-2xl text-left font-semibold text-[#4834D4]">
              What does campus ambassador do?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end w-[40px] h-[40px]"
                src={Plus}
              />
            </span>
          </div>
          <div className="flex border-b-[1px] h-[68px] border-solid border-[#E7EAEE] py-4 px-2.5 gap-[680px]">
            <p className="flex text-2xl text-left font-semibold text-[#4834D4]">
              Who do i reach for further inquiry?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end w-[40px] h-[40px]"
                src={Plus}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] h-[68px] border-solid border-[#E7EAEE] py-4 px-2.5 gap-[600px]">
            <p className="flex text-2xl text-left font-semibold text-[#4834D4]">
              What do i get as an Airvend Ambassador?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end w-[40px] h-[40px]"
                src={Plus}
              />
            </span>
          </div>
        </div>
      </div>
      {/* <div>Faqs</div> */}
    </>
  );
};

export default Faqs;
