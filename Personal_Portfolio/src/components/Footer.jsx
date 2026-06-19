import { MdCopyright } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
  const scrollToTop = () => {
    window:scrollTo({
      top:0,
      behavior: "smooth",
    })
  }
return (
<div className="max-w-7xl mx-auto bg-[#0B1120] border border-[#1E293B] rounded-xl px-8 py-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div>

 <p className="text-gray-300">© 2026 Sharda Jha.All rights reserved</p>
</div>

<div className=" flex items-center gap-2" >
  <span className="text-gray-400">Built with ❤️using React & Tailwind CSS </span>
</div>
<button
onClick={scrollToTop}
className=" bg-[#111827] border
 border-purple-500 w-12 h-12 
 rounded-xl 
 flex items-center justify-center
  text-purple-400
   hover:text-white
 hover:border-purple-700
 transition-all duration-300"
>
<FaArrowUp />
</button>
</div>
</div>
)
}
export default Footer;