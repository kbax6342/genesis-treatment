import React from "react";
import img from "../../assets/img.jpg";
import video from "../../assets/video-1.mp4";
import img2 from "../../assets/genesis-logo.png";
import Coming from "../Coming";
import TailWindForm from "../TailWindForm";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-fit md:h-fit  lg:h-[440px] bg-no-repeat md:bg-top lg:bg-top xl:bg-top object-cover bg-cover px-5 py-4 bg-[url('https://i.ibb.co/T0Xb5hb/Untitled-design-9.png')]">
        <p className="poppins text-[35px]  md:text-[60px] lg:text-[80px] text-left text-[#E6F4F1] md:leading-[5rem] h-[60%] mt-10 flex items-center ">
          Sober Living in California Designed for Everyone
        </p>
       

        <div className="bg-[#CD5A40] k text-white w-[200px] mt-4 md:mt-3 p-4 rounded-lg font-bold roboto ">
          Get Sober Today
        </div>

      
      </div>
   
       
    </>
  );
}
