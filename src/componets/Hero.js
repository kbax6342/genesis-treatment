import React from 'react'
import img from '../assets/img.jpg'
import video from '../assets/video-1.mp4'
import img2 from '../assets/genesis-logo.png'
import Coming from './Coming'
import TailWindForm from './TailWindForm'

export default function Hero() {
    return (
        <>
            <div className="relative w-full h-fit md:h-fit  lg:h-[440px] bg-no-repeat md:bg-top lg:bg-top xl:bg-top object-cover bg-cover bg-[url('https://images.pexels.com/photos/5638602/pexels-photo-5638602.jpeg?auto=compress&cs=tinysrgb&w=1600')] px-5 py-4" >
              <p className='poppins text-[25px]  md:text-[50px] lg:text-[80px] text-left text-sky-600 md:leading-[5rem]'>Sober Living in California Designed for Everyone</p>

              <div className='bg-sky-600 k text-white w-[200px] p-4 rounded-lg font-bold roboto my-5'>
                Get Sober Today
              </div>
              
            </div>

        
        </>
    )
}
