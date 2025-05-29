import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pd-10'>
    <div className =' space-y-6 text-center'>
    <div className =' space-y-6 mx-auto'>
     <h1 className = 'gradient-title'> 
      Your Personal AI coach For
      <br/>
      Professional Success
     </h1>
     <p>
      Advance your career with personalized guidance, interview prep, and AI-powered tools for job succss.
     </p>
      </div>
      <div>
        <Link href = '/dashboard'>
        <Button size = "lg" className = "px-8"> 
          Get Started
        </Button>
        </Link>
         <Link href = '/'>
        <Button size = "lg" className = "px-8" varient ="outline"> 
          Get Started
        </Button>
        </Link>
      </div>
      <div>
        <div>
         <Image 
         src ={"/Land.png"}
         width = {1280}
         height = {720}
         alt = " Dashboard Preview"
         className =" rounded-lg shadow-2xl border mx-auto"
         priority
         />
        </div>
      </div>
      </div>
    </section>
 
  )
}

export default HeroSection