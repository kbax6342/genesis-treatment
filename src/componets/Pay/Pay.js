import React from "react";

export default function Pay() {
  return (
    <div className="bg-[#CD5A40] w-[70%] rounded-xl p-2 mt-5 mx-auto">
     
     <div className="border-2 border-white rounded-xl  p-3">
     <h1 className="roboto font-bold text-white text-2xl">We Now Accept Weekly Payments</h1>
      <p className="text-md font-medium">
        For as little as CHANGE NUMBER per week, you can experience the
        reputable, upscale, and semi-structured sober living home environments
        we offer throughout the Las Vegas, Nevada region.
      </p>
      <div className="flex flex-col mt-3">
        <span className="roboto font-bold text-white md:text-lg" >Call Now to Check Availability</span>
        <span className="roboto font-bold text-white md:text-2xl">(714) 404 - 1273</span>
      </div>

     </div>
     
      
    </div>
  );
}
