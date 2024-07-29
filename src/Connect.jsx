import React from "react";
import Group from "/assets/Group.png";
import pin from "/assets/pin.png";
import image5 from "/assets/image5.png";
import Rectangle4 from "/assets/Rectangle4.png";
import Rectangle3 from "/assets/Rectangle3.png";
import Rectangle2 from "/assets/Rectangle2.png";
import Rectangle1 from "/assets/Rectangle1.png";

const Connect = () => {
  return (
    <>
      <div className="w-[1435px] h-[655px] mx-auto bg-[#4834D4]">
        <div className="flex bg-contain">
        <img className="absolute top-[146rem]" src={Group} />
        </div>
        <div className="flex mx-auto Pt-[2rem] w-[662px] h-[108px] items-center justify-center">
          <p className="flex mt-[4rem] font-[montserrat] justify-center text-4xl font-semibold text-center leading-10 text-[#FFFFFF]">
            How to be an Airvend Campus Ambassadors.
          </p>
        </div>
        <div className="flex ml-[10.5rem] mt-[3rem] w-[686px] h-[432px] gap-1">
          <div className="flex flex-col gap-10">
            <div className="flex items-center h-[37px]">
              <img className="flex items-center w-[37px] h-[37px]" src={pin} />
              <p className="flex text-2xl text-center items-center font-rubik p-[0.3rem] text-[#FFFFFF]">
                Must be a registered student at any university
              </p>
            </div>
            <div className="flex items-center h-[37px]">
              <img className="flex items-center w-[37px] h-[37px]" src={pin} />
              <p className="flex text-2xl text-start font-rubik ml-[0.3rem] text-[#FFFFFF]">
                Must have a leadership skill and ability to influence others
              </p>
            </div>
            <div className="flex items-center h-[37px]">
              <img className="flex items-center w-[37px] h-[37px]" src={pin} />
              <p className="flex text-2xl text-start font-rubik ml-[0.3rem] text-[#FFFFFF]">
                Must have a creative mind and an innovative spirit
              </p>
            </div>
            <div className="flex items-center h-[37px]">
              <img className="flex items-center w-[37px] h-[37px]" src={pin} />
              <p className="flex text-2xl text-start font-rubik ml-[0.3rem] text-[#FFFFFF]">
                Must have and be active on a social media platform
              </p>
            </div>
            <div className="flex items-center h-[37px]">
              <img className="flex items-center w-[37px] h-[37px]" src={pin} />
              <p className="flex text-2xl text-start font-rubik ml-[0.3rem] text-[#FFFFFF]">
                Must be passionate about technology and eager to learn
              </p>
            </div>
            <div className="flex items-center h-[37px]">
              <img className="flex items-center w-[37px] h-[37px]" src={pin} />
              <p className="flex text-2xl text-start font-rubik ml-[0.3rem] text-[#FFFFFF]">
                Must be committed to representing the brand effectively
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex"> */}
        <img
          className="flex rotate-0 relative top-[-23.4rem] left-[65rem] items-end h-[367px]"
          src={image5}
        />
        <img
          className="flex absolute top-[172rem] left-[64.4rem] rotate-[-9.26deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-[90px] w-[90px]"
          src={Rectangle4}
        />
        <img
          className="flex absolute top-[191.5rem] left-[62.6rem] rotate-[-6.26deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-[90px] w-[90px]"
          src={Rectangle1}
        />
        <img
          className="flex absolute top-[177.8rem] left-[78.4rem] rotate-[-3.26deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-[90px] w-[90px]"
          src={Rectangle3}
        />
        <img
          className="flex absolute top-[196.4rem] left-[74rem] rotate-[-3.26deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-[90px] w-[90px]"
          src={Rectangle2}
        />
        {/* </div> */}
      </div>
    </>
  );
};

export default Connect;
