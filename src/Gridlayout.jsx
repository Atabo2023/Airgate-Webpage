import React from "react";
import Icon from "/assets/Icon.png";

const Gridlayout = () => {
  return (
    <>
      {/* <div>Gridlayout</div> */}
      <div className="grid w-[1435px] h-[651px] items-center justify-center bg-[#FFFFFF]">
        <div className="flex h-[303px] mx-auto  gap-10">
          <div className="bg-[#FFFFFF] border-1 border-solid border-[#FFFFFF] drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col items-center mt-3 justify-center mx-auto w-[296px]  h-[248px] gap-y-3 bg-white">
              <img className="flex flex-col w-[60px] h-[60px]" src={Icon} />
              <div className="flex flex-col text-[#100658] font-medium opacity-85 font-[montserrat] text-2xl line-[29px] text-center">
                Access to Career Opportunities{" "}
                <p className="flex w-[296px] h-[105px] p-1 opacity-65 text-[16px] leading-5 text-center text-[#100658]">
                  Gain access to career development resources and opportunities.
                  This includes workshops, mentorship sessions and internship or
                  job offers to help ypu advance your career journey
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className=" flex flex-col w-[324px] mt-[2.5rem] mx-auto h-[197px] gap-y-3 bg-white">
              <img
                className="flex flex-col justify-center mx-auto w-[60px] h-[60px]"
                src={Icon}
              />
              <div className="flex flex-col font-[montserrat] pb-1 font-medium text-2xl leading-5 text-center text-[#100658] opacity-85">
                Networking Opportunities{" "}
                <p className="flex opacity-65 p-2 font-rubik font-normal text-sm leading-6 text-center">
                  Join and become part of the community of likeminded individual
                  from different schools to foster connections that can lead to
                  collaborations and lifelong friendship
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col w-[324px] mt-[2.5rem] mx-auto h-[197px] gap-y-2 bg-white">
              <img className="flex mx-auto w-[60px] h-[60px]" src={Icon} />
              <div className="flex flex-col font-[montserrat] font-medium text-2xl leading-6 text-center text-[#100658] opacity-85">
                Internship Opportunities
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-[#100658]">
                  Get an opportunity to intern with for 6-months to gain
                  valuable hands-on experience and enhance your skills to make
                  meaningful contribution to your team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[303px] mx-auto  gap-10">
          <div className="bg-[#FFFFFF] drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col w-[296px] mt-8 r mx-auto h-[205px] gap-y-2 bg-white">
              <img className="flex mx-auto w-[60px] h-[60px]" src={Icon} />
              <div className="flex flex-col font-[montserrat] font-medium gap-[0.5rem] text-3xl leading-6 text-center text-[#100658] opacity-85">
                Early access to all Airvend events
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-[#100658]">
                  Get an exclusive early access to all Airvend events and all
                  opportunity to network with Industry leaders and likemind
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col w-[296px] mt-3 mx-auto h-[247px] gap-2 bg-white">
              <img className="flex mx-auto w-[60px] h-[60px]" src={Icon} />
              <div className="flex flex-col font-[montserrat] gap-[0.5rem] font-medium text-3xl leading-6 text-center text-[#100658] opacity-85">
                Certification upon completion
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-[#100658]">
                  Get certified upon completion ambassadorship program which
                  will serve as a valuable credential for your resume showcasing
                  your involvement and commitment
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col mt-6 w-[296px] mx-auto h-[226px] gap-y-2 bg-white">
              <img
                className="flex flex-col mx-auto w-[60px] h-[60px]"
                src={Icon}
              />
              <div className="flex flex-col font-[montserrat] gap-[0.5rem] font-medium text-3xl leading-6 text-center text-[#100658] opacity-85">
                Exclusive Branded Merch
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-[#100658]">
                  As campus ambassador you’ll receive exclusive branded merch.
                  This includes event swag that will make you stand out and show
                  your ambassador status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gridlayout;
