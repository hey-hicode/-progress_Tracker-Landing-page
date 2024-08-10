'use client'
import productImage from '@/assets/product-image.png'
import pyramid from '@/assets/pyramid.png'
import tube from '@/assets/tube.png'
import Image from 'next/image';
import { useRef } from 'react';

import { motion,useScroll, useTransform, useMotionValueEvent } from "framer-motion"
export const ProductShowcase = () => {
  const productRef = useRef(null)
const {scrollYProgress} = useScroll({
  target:productRef,
  offset:['start end' , 'end start']
})

const translateY = useTransform(scrollYProgress,[0,1], [150, -150])
  return (
    <div ref={productRef}  className="bg-gradient-to-b overflow-x-clip from-white to-[#D2DCFF]">
         <div className=" container py-24  ">
      <div className='justify-center flex flex-col text-center items-center '>
     <div className="max-w-[545px] mx-auto">
     <div className=" text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Boost Your Productivity</div>
          <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b   from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">A more effective way to track progress</h1>
          <p className="text-[19px] leading-[30px]  text-[#010D3E] tracking-tight mt-5"> Effortlesly turn your ideas into a fully functional , responsve sass Website in just miutes with this templte</p>
     </div>
     <div className='relative'>
     <Image src={productImage} alt='product image' className='mt-10' />
     <motion.img src={pyramid.src} alt='product image' height={262}
     width={262}
     className=' absolute -right-36 -top-32 hidden md:flex' 
     style={{
      translateY:translateY
     }}
     />
     <motion.img src={tube.src} alt='product image' height={262}
     width={262}
     className=' absolute -left-36 bottom-24 hidden md:flex' 
     style={{
      translateY:translateY
     }}
     />
     </div>
       
         
      </div>
        </div>
    </div>
  )
};
