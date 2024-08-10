import CheckIcon  from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge';

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
<div className="container bg-white">
<div className='justify-center flex flex-col text-center py-24 items-center '>
    <div className="max-w-[545px] mx-auto">
  
         <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b   from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">Pricing</h1>
         <p className="text-[19px] leading-[30px]  text-[#010D3E] tracking-tight mt-5"> Free foreever Upgrade for unlimited tasks , better security and exclusive features </p>

       
    </div>

    </div>
        <div className="flex-col gap-6 flex lg:flex-row lg:justify-center lg:items-end">
        {pricingTiers.map((title,id)=>(
         <div key={id} className={twMerge('p-8 border border-[#F1F1F1] rounded-t-3xl shadow-[0_7px_14px_#EAEAEA]  ', title.inverse === true && 'border-black  bg-black text-white/60 ')}>
             <div className='flex justify-between items-center'>
             <h3 className={twMerge('text-lg font-bold text-black/50 ',title.inverse === true && ' text-white')}>{title.title}</h3>
             {title.popular === true && (
                 <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                 <span className=' colorr text-transparent bg-clip-text '>porpular</span>
                 </div>
             )}
           
             </div>
             <div className=' flex items-baseline gap-1 mt-[30px]'>
              <span className='text-4xl font-bold tracking-tighter leading-none'>${title.monthlyPrice}</span>
              <span className='tracking-tight font-bold  text-black/50'>/month</span>
              </div>
              <button className={twMerge('btn btn-primary inline-flex items-center justify-center w-full mt-[30px] text-center ',title.inverse===true && 'bg-white text-black')}>{title.buttonText}</button>
              <ul className='flex flex-col leading-1 mt-8'>
                {title.features.map((fest,id)=>(
                  <div className='leading-none' key={id}>
                    <li className=' flex items-center gap-4 mt-[30px]'><span>{fest}</span>
                    <CheckIcon className="h-6 w-6" />
                    </li>
                  </div>
                ))}
              </ul>
         </div>
        ))}
      
       </div>
</div>
  )
};
