import React from "react";
// import Frame from "/assets/Frame.png";
import Ellipse1 from "/assets/Ellipse1.png";
import Ellipse2 from "/assets/Ellipse2.png";
import note from "/assets/note.png";
import image1 from "/assets/image1.png";
// import Textcontent from "./Textcontent";
import Homeimage from "./Homeimage";

const Home = () => {
  return (
    <>
      <div className="bg-customGradient mx-auto w-[1440px] h-[883px] bg-shadow-lg">
        {/* <div className="flex "> */}
        {/* <div className=" flex bg-[src(Ellipse2)]">
          <img
            className="flex relative top-[-92px] rotate-[25deg] right-[23px] w-439 h-394 left-[-27] rotate-17 border-[#FFFFFF] drop-shodow-lg"
            src={Ellipse2}
          />
        </div>

        <img
          className="flex absolute rotate-16deg right-[-29px] top-[-35px] w-439 h-394 rotate-0.4 drop-shodow-lg"
          src={Ellipse1}
        /> */}

        {/* <img
          className="absolute w-107 h-85 top-[75px] right-[14rem] opacity-65 justify-center rotate-4.50 drop-shodow-lg"
          src={note}
        /> */}
  <Homeimage />
        {/* <div /> */}
        <div className="flex flex-col absolute top-[7rem] ml-[17rem] w-[908px] h-[740px] gap-16 bg-purple-300">
          {/* <div /> */}
          <div className="flex flex-col mx-auto h-[331px] gap-6">
          <div className="flex flex-col text-7xl justify-center md:font-bold font-normal w-908 h-331 items-center font-Rubik">
            <p className="text-center items-center justify-center family-Rubik text-[#130F40] line-78 w-775 h-156">Become an <span className="text-[#4834D4]">Airvend</span></p>
            <p className="text-top items-center md:font-bold sm:text-bold text-[#130F40] justify-center flex flex-col">Campus Ambassador</p>
          </div>
          <div className="flex flex-col opacity-70 font-rubik text-center justify-center text-sm font-normal text-[#100658]">
            <p>
              The Airvend Campus Ambassadorship Program is designed to promote
              unique learning opportunities for students passionate about
            </p>
            <p>
              financial tech, entrepreneurship, and collaboration that fosters
              growth. It is highly rewarding for selected students, providing
              them with a
            </p>
            <p>
              platform to build their leadership capabilities and showcase their
              talents.
            </p>
            </div>
           
      <button className="flex absolute bottom-[27rem] ml-[24rem] w-198 h-53 border-1 rounded-md py-3 px-12 bg-[#4834D4] text-[#ffff]">
        Apply Now
      </button> 
      </div>
      
      <div className="flex justify-content ">
        <img
        className="flex absolute bottom-[-2rem] mx-auto justify-center"
        src={image1}
      />
      </div>
        
          {/* <img className="flex w-107 mx-auto h-85 justify-center" src={image1} /> 

        {/* <p
          // className="absolute left-[19rem] bottom-[-8rem ] flex-columns bg[linear-gradient(156.07deg, rgba(223, 224, 255, 0.4) 44.25%, rgba(197, 199, 251, 0.4) 65.1%)
        ></p> */}
          {/* <div> */}
          {/* <img className="h-30 w 70 justify-center " src={Frame} /> *

        {/* <img className="h-30 w 70 justify-center " src={image1} /> *
        {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
