import React from 'react'
import rick from "../../assets/rick.jpg"

export default function Intro() {
  return (
    <div className='flex flex-col md:flex-row justify-around mt-[60px]'>
      <div className='md:w-[50%] px-5'>
        <h1 className='poppins text-4xl text-left text-sky-600'>Sober Living in Los Angeles</h1>
        <p className='text-left roboto leading-loose text-lg'>Miracle House Foundation is a 501 (c)(3) non-profit, structured sober living house located in Los Angeles specifically designed for men. Drawing from a wealth of recovery experience, our sober living facility, brings structure, quality and insight into the lives of men that are ready to turn their lives around.</p>
        
        <div className='bg-sky-600 k text-white w-[200px] p-4 rounded-lg font-bold roboto my-5'>
                Learn More
              </div>
      </div>
        <div>
            <img src={rick} className=" w-[300px] mx-auto md:w-[400px] rounded-xl"/>
        </div>
    </div>
  )
}
