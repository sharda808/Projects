import { Contact } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profile from "../assets/sharda_jha.jpeg"
const Hero = () => {
  return (
<section
id = "home"
className="min-h-screen bg-[#0B1120] text-white flex pt-24 overflow-hidden">
<div className="max-w-7xl mx-auto  px-6">
  <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
<div>
  <p className="text-purple-400 text-lg mb-3 font-medium">👋 Hello, I'm</p>
  <h1 className="text-5xl font-bold leading-tight">SHARDA
<br />
<span className="text-purple-500">JHA</span>
  </h1>
  <h2 className="mt-6 text-2xl text-gray-300  font-semibold">Software developer &
<br />
Problem Solver
  </h2>
  <p className="mt-8 max-w-xl text-gray-400 leading-6 text-lg">Building impactful digital experiences 
    through modern web techologies and solving challenging algorithm problems.
  </p>
  <div className="mt-10 flex items-center gap-5">
<a
href="#projects"
className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-xl font-semibold transition duration-300"
>

 <span>View Projects</span>
  <ArrowRight size={18} />
</a>
<a
  href="#contact"
  className="inline-flex items-center gap-2 border border-purple-400 px-7 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition duration-300"
>
  <span>Contact Me</span>
  <Contact size={18} />
</a>
  </div>
  <div className='flex gap-6 mt-10 text-2xl'>
<a
 href="https://github.com/sharda808"
target = "_blank"
rel = "noreferrer"
className = "hover:text-purple-400 transition">
<FaGithub />
</a>
<a
 href="https://linkedin.com/sharda"
target = "_blank"
rel = "noreferrer"
className = "hover:text-purple-400 transition">
<FaLinkedin />
</a>
<a
 href="https://leetcode.com/sharda808"
target = "_blank"
rel = "noreferrer"
className = "hover:text-purple-400 transition">
<SiLeetcode />
</a>
  </div>
  </div>
  <div className='flex justify-center'>
<div className='relative'>
<div className='absolute insert-0 bg-purple-600 rounded-full blur-[120px] opacity-30 scale-125'>

</div>
<div className='relative p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700'>
<img
src={profile}
alt = "Sharda jha"
className='w-72 h-72 md:w-[400px] md:h-[400px] rounded-full object-cover border-4 border-[#0B1120]'
>
  
</img>

</div>
</div>
  </div>
</div>
</div>



</section>
  )
}
export default Hero;