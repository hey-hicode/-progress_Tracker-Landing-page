'use client'
import apex from "@/assets/logo-apex.png"
import echo from "@/assets/logo-echo.png"
import pulse from "@/assets/logo-pulse.png"
import celestial from "@/assets/logo-celestial.png"
import Image from 'next/image';
import { motion } from "framer-motion"
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12  bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
          <motion.div 
          animate={{
            translateX:"-50%"
          }}
          transition={{
            duration:7,
            ease:'linear',
            repeat:Infinity,
            repeatType:'loop',
          }}
          className="flex gap-14 flex-none pr-14">
            <Image src={apex} className=" ticker"  alt="ewj ticker"/>
            <Image src={echo} className="ede ticker"  alt=" ticker"/>
            <Image src={apex} className="ede ticker"  alt=" ticker"/>
            <Image src={pulse} className="ede ticker"  alt=" ticker"/>
            <Image src={celestial} className="ede ticker"  alt=" ticker"/>
            <Image src={echo} className="ede ticker"  alt=" ticker"/>
            <Image src={apex} className="ede ticker"  alt=" ticker"/>
            <Image src={pulse} className="ede ticker"  alt=" ticker"/>

          </motion.div>

        </div>
      </div>

    </div>
  )
};
