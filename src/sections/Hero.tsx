'use client'
import ArrowRight from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png"
import clynder from "@/assets/cylinder.png"
import nod from "@/assets/noodle.png"
import { motion,useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import {useRef} from 'react'
import Image from "next/image";
export const Hero = () => {
const heroRef = useRef(null)
const {scrollYProgress} = useScroll({
  target:heroRef,
  offset:['start end' , 'end start']
})

const translateY = useTransform(scrollYProgress,[0,1], [150, -150])

useMotionValueEvent(translateY,'change', (latestValue)=> console.log(latestValue))
  return(
    <div ref={heroRef} className="bg-[radial-gradient(ellipse_at_bottom_left,#183EC2,#EAEEFE_60%)] overflow-x-clip">
    <div className="container pt-8 pb-20 md:pt-5 md:pb-10  md:flex items-center " >
        <div className="md:w-[478px] overflow-hidden ">
          <div className=" text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight"> version 2.0 is here</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b   from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">pathway to productivity</h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">Celebrate the joy of accomplishment with an app designed to track your progress , motivate your effort,and celbrate your sucess</p>

          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for Free</button>
            <button className="btn btn-text gap-1"> 
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px]  md:flex-1 relative ">
       <motion.img src={cogImage.src} alt="cogImage" className="md:absolute  lg:left-0  md:h-full md:w-auto md:max-w-none md:-left-6" 

      animate={{
        translateY:[-30,30]
      }}
      transition={{
        repeat:Infinity,
        repeatType:'mirror',
        duration:3,
        ease:'easeInOut'
      }}
        />
       <motion.img src={clynder.src} width={220} height={220}  alt="cogImage" className="lg:absolute  hidden lg:block -top-8    -left-32 " 
             style={{
              translateY:translateY
            }}
        />
       <motion.img src={cogImage.src} alt="cogImage" className="lg:absolute md:h-full md:w-auto md:max-w-none hidden md:-left-6" />
       <motion.img src={nod.src} width={220} height={220} 
            style={{
              translateY:translateY,
            
            }}
            transition={{
              
              ease:'easeInOut'

            }}
       alt="cogImage" className="lg:absolute  hidden lg:block top-[524px]   left-[438px]  rotate-[30deg] " />
        </div> 
      </div>
    </div>
  )
};
