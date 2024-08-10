import Logo from "@/assets/logosaas.png"
import SocialX from "@/assets/social-x.svg"
import SocialInsta  from "@/assets/social-insta.svg"
import SocialLinkdein from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import Image from "next/image";
export const Footer = () => {
  return (
    <div className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
<div className="container flex flex-col gap-6 justify-center items-center">
<div className="flex items-center md:flex-row flex-col">
<div className="inline-flex relative before:content-[''] before:top-2 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
<Image src={Logo} alt="sass Logo" className="relative" height={40} width={40} />
</div>

<nav className="flex gap-6 flex-col md:flex-row  ">
  <a href="#">About</a>
  <a href="#">Feaures</a>
  <a href="#">Customers</a>
  <a href="#">Pricing</a>
  <a href="#">Help</a>
  <a href="#">Careers</a>
</nav>
</div>
<div className="flex justify-center gap-6 mt0">
  <SocialX />
  <SocialLinkdein />
  <SocialLinkdein />
  <SocialPin />
</div>
</div>

    </div>
  )
};
