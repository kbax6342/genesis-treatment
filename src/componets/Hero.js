import React from 'react'
import img from '../assets/img.jpg'
import video from '../assets/video-1.mp4'
import img2 from '../assets/genesis-logo.png'
import Coming from './Coming'

export default function Hero() {
    return (
        <>
            <div className='relative'>
                <video autoPlay loop muted id='video' className='object-cover w-full max-h-25 '>
                    <source src={video} type='video/mp4' /> 
                   
                </video>
                <div className='absolute top-5 right-5 w-full hidden md:hidden lg:block'>
                        <img src={img2} alt="genesis trc"  className='mx-auto '/>
                    <Coming />
                </div>
                <div className='absolute top-5 right-5 w-full  sm:hidden '>
                    <h1 className='mb-4 text-bold text-3xl'>Contact Us for More Info</h1>
                    <Coming />
                </div>
            </div>

            {/* <article className='relative'>
        {stories[0].mainImage  &&
           <img src={stories[0].mainImage.asset.url} alt="" className='h-96 w-full object-cover rounded-2xl'/>
        }
         <div className='absolute bottom-8 left-8'>
         <h1 className='text-4xl lg:text-5xl mb-6 text-white'>{stories[0].title}</h1>
         <p className='text-slate-100 mb-8 md:w-1/2 '>{stories[0].body[0].children[0].text.substring(0, 200)} </p>
         <button className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transtion-all duration-200'>
           Read More
           </button>
         </div>
       </article> */}
        </>
    )
}
