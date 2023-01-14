import React from 'react'
import img from '../assets/img.jpg'
import video from '../assets/video-1.mp4'
import img2 from '../assets/genesis-logo.png'
import Coming from './Coming'
import TailWindForm from './TailWindForm'

export default function Hero() {
    return (
        <>
            <div className='relative'>
                {/* <video autoPlay loop muted id='video' className='object-cover w-full max-h-25 '>
                    <source src={`https://streamable.com/yrbmlo`} type='video/mp4' /> 
                   
                </video> */}
               
                <div className='absolute top-5 right-5 w-full hidden sm:block'>
                        <img src={img2} alt="genesis trc"  className='mx-auto '/>
                    <Coming />
                </div>
                <div className='absolute w-full  sm:hidden '>
                   <TailWindForm />
                </div>
            </div>

        
        </>
    )
}
