import ArrowRight from '@/assets/arrow-right.svg'
import Star from '@/assets/star.png'
import Spring from '@/assets/spring.png'
import Image from 'next/image';
export const CallToAction = () => {
  return (
<section className=' overflow-x-clip'>
<div className="container py-24 relative">
        <div className='justify-center flex flex-col text-center items-center '>
          <div className="max-w-[545px] mx-auto">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Testimonials</div>
            <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Sign Up For Free Today</h1>
            <p className="text-[19px] leading-[30px] text-[#010D3E] tracking-tight mt-5">
              Celebrate the joy of accomplishment with an app designedd to track your progress and motivate your efffort

            </p>
            <Image src={Star}  alt='star' width={360} className=' hidden md:flex  absolute md:-left-[200px]  top-[137px] ' />
            <Image src={Spring}  alt='star' width={360} className='hidden md:flex  absolute md:-right-[231px] lg:-right-[100px]    -top-[19px]' />
            <div className="flex gap-1 items-center justify-center mt-[30px]">
            <button className="btn btn-primary">Get for Free</button>
            <button className="btn btn-text gap-1"> 
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
            </button>
          </div>

        

          </div>
        </div>
        </div>
</section>
  );
};
