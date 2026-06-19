import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
const ContactMe = () => {
  return (
<div className="bg-[#0B1120] border border-[#1E293B] rounded-3xl p-8 pb-14  hover:border-purple-500 transition duration-300">
  <div className="grid md:grid-cols-2 gap-10 items-center">
<div>
  <div className="flex items-center gap-3 mb-6">
<FaTelegramPlane className="text-purple-500 text-xl"/>
<h2 className="text-3xl font-semibold text-purple-400">Contact Me</h2>
  </div>
  <p className="text-gray-400 text-lg">
    I'm currently open to new opportunities.
    <br />
    Let's connect!
  </p>
</div>

<div className="border-l border-[#1E293B] pl-8 space-y-6">
<div className="flex items-center gap-4">
< MdEmail className="text-purple-600 text-xl"  />
<span className="text-white">shardakumari96115@gmail.com</span>
</div>
<div className="flex items-center gap-4">
< FaLinkedin className="text-purple-600 text-xl"  />
<span className="text-white">linkedin.com/in/sharda-kumari</span>
</div>
<div className="flex items-center gap-4">
< FaLocationDot  className="text-purple-600 text-xl"  />
<span className="text-white">India</span>
</div>
<div className="flex items-center gap-4">
< IoIosCall className="text-purple-600 text-xl"  />
<span className="text-white"> +91 7260057808</span>
</div>
</div>
  </div>
</div>
 




 
   
     
  )
}
export default ContactMe;