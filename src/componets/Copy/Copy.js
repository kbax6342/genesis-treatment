import React from "react";
import outside from '../../assets/outside-house.JPG'
import outside2 from '../../assets/outside-house2.JPG'
import bathroom from '../../assets/bathroom-house.JPG'

export default function Copy() {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto mt-5">
       <section className="md:w-[50%] my-6  flex flex-col items-stretch p-5 ">
       <span className="text-2xl text-center font-bold roboto text-[#CD5A40]">
        Welcome to CHANGE LOCATION leader in affordable, semi-structured and
        upscale sober living homes & addiction recovery housing services
      </span>

      <p className="text-left my-2 text-md leading-loose">
        Welcome to Genesis Treatment — Our sober living homes and addiction
        recovery houses (sometimes referred to as halfway or 3/4 houses) are
        designed to maximize your addiction recovery by providing an upscale
        environment for an affordable price, which unfortunately is not all too
        common. We want you to feel right at home while you are building your
        new sober life so we take care of the amenities & environmental elements
        while you focus on your sobriety.
      </p>
      <img src={outside}  className="md:hidden max-w-[70%] md:max-w-[80%] mx-auto "/>
      <p className="text-left my-2 leading-loose">
        We happily open our doors to male and female recovering addicts &
        alcoholics who are ready to experience a newfound sober existence like
        never before. New Lyfe Solutions will be here as a semi-structured sober
        living-recovery housing environment for you, as a guide, as a support
        structure and as a loving oversight body that will always look out for
        your recovery program.
      </p>
    
      <p className="text-left my-2 leading-loose">
        The CHANGE LOCATION region is a bustling and up &
        coming hub for those wanting to actively engage in the recovery process.
        With a vibrant 12-Step recovery community (AA, NA, CA, etc.)
        throughought the greater Las Vegas-Henderson region, coupled with a
        sprawling calender year round of sober social events catering to nearly
        all ages, New Lyfe Solutions is excited to be among these countless
        support opportunities throughout the Clark County, NV region.
      </p>
      <img src={bathroom} className="md:hidden max-w-[70%] md:max-w-[80%] mx-auto"/>
       </section>

       <section className="md:w-[50%] flex justify-around items-stretch  flex-col">
        <img src={outside}  className="hidden md:block max-w-[70%] md:max-w-[80%] mx-auto "/>
        <img src={outside2} className="hidden md:block max-w-[70%] md:max-w-[80%] mx-auto "/>
        <img src={bathroom} className="hidden md:block max-w-[70%] md:max-w-[80%] mx-auto"/>
       </section>
    
    </div>
  );
}
