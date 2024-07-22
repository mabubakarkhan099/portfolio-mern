import { Button } from '@/components/ui/button'
import React from 'react'
import "./HeroSection.scss"
import { Numans } from 'next/font/google'
import Image from 'next/image'
import { FaFileDownload, FaQuoteLeft, FaStar } from "react-icons/fa";

const numans = Numans({subsets: ["latin"], weight: "400"})

function HeroSection() {
  return (
    <div className='container relative pt-10 hero-section'>
        
        <div className='flex justify-center'>
            <div className='text-center'>
                <Button className="button btn-hello bg-white text-black" >Hello</Button>
                <div className={`info-heading font-extrabold mobile:text-4xl sm:text-5xl md:text-8xl mt-5`} >
                    <h1>I'm <span className='text-orange-400'>Khan</span>,</h1>
                    <h1>Web Developer</h1>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-8 h-100 relative image-grid'>
            <div className='mobile:hidden sm:block col-span-2'>
                <div className='grid gap-5 font-bold'>
                    <div><FaQuoteLeft className='text-3xl' /></div>
                    <p>Khan’s Exceptional Web Services <br /> ensure our website’s success.Highly Recommended</p>
                </div>
            </div>

            <div className='mobile:col-span-8 sm:col-span-4 '>
                <div className='image-wrapper'>
                    <Image src="/profilepic.png" width={400} height={100} />    
                </div>
                <div className="hire-btn-wrapper p-2 rounded-full flex items-center gap-3">
                    <Button className="button bg-orange-400 hover:bg-black" >Resume <FaFileDownload className='ms-2' /></Button>
                    <p className='mb-0 me-4 text-white'>Hire Me</p>
                </div>
            </div>

            <div className='mobile:hidden sm:block col-span-2 text-right'>
                <div className='grid gap-5 font-bold'>
                    <div className='flex gap-2 justify-end'>
                        {[...Array(5)].map((_, index)=>(
                            <FaStar className='text-2xl text-orange-400' key={index} />
                        ))}
                    </div>
                    <div>
                        <h4 className='text-4xl font-bold'>01 Years</h4>
                        <p className='text-1xl font-bold'>Experience</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default HeroSection