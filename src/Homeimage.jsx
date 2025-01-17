import React from "react";
import image1 from "/assets/image1.png";
import Ellipse2 from "/assets/Ellipse2.png";
import Ellipse1 from "/assets/Ellipse1.png";
import note from "/assets/note.png";
import glass from "/assets/glass.png";
import image2 from "/assets/image2.png";

function Homeimage() {
  return (
    <>
      {/* <div className="flex justify-center items-center w-[1440px] h-[728px] top[1069] bg-blue-500">
        <div className="w-fixed[1456px] h-Hug[566px top[81px] left[-16px] gap[115px] ]"> */}
      <div className="flex bg-contain">
      <img
            className="flex absolute top-[-92px] rotate-[25deg] left-[0rem] w-439 h-394"
            src={Ellipse2}
            />
            </div>
        {/* </div> */}

            <div>
        <img
          className="flex absolute rotate-[-2deg] right-[-46px] top-[-90px] w-439 h-394 rotate-0.4 drop-shodow-lg"
          src={Ellipse1}
        />
        </div>

 <img
          className="absolute w-107 h-85 top-[25px] md:left-[73rem] right-[-47rem] opacity-65 justify-center rotate-[4.50deg] drop-shodow-lg"
          src={note}
        />
 {/* <img
          className="flex absolute w-107 left-[74rem] h-85 top-[19rem] md:right-[11rem opacity-[65%] justify-center rotate-[4.50deg] drop-shodow-lg"
          src={image2}
        /> */}

      <div className="">
          <img
          className="flex absolute h-85 top-[417px] md:right-[78rem] left-[7rem] opacity-[80%] justify-center  drop-shodow-lg"
          src={glass}
        />
        </div>
        
      {/* <img
        className="flex w-[908px] mx-auto h-[500px] justify-center"
        src={image1}
      /> */}
      {/* </div> */}
      {/* </div> */}
      {/* <Home /> */}
    </>
  );
}

export default Homeimage;
