import React from 'react'
import img from '../assets/img.jpg'
import video from '../assets/video-1.mp4'
import img2 from '../assets/genesis-logo.png'
import Coming from './Coming'

export default function Hero() {
    return (
        <>
            <div className='relative'>
                {/* <video autoPlay loop muted id='video' className='object-cover w-full max-h-25 '>
                    <source src={`https://streamable.com/yrbmlo`} type='video/mp4' /> 
                   
                </video> */}
                <div className='relative object-cover w-full mx-auto'>
                    <img src={`https://images.pexels.com/photos/1330219/pexels-photo-1330219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt=""  className='object-cover w-full'/>
                </div>
                <div className='absolute top-5 right-5 w-full hidden md:hidden lg:block'>
                        <img src={img2} alt="genesis trc"  className='mx-auto '/>
                    <Coming />
                </div>
                <div className='absolute top-5 right-5 w-full  sm:hidden '>
                    <h1 className='mb-4 text-bold text-3xl'>Contact Us for More Info</h1>
                    <Coming />
                </div>
            </div>

        
        </>
    )
}
