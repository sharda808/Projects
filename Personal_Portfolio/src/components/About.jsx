import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const About = () => {
return (
<section id = "about"
 className="bg-[#050816] px-6 py-6">
<div className="max-w-7xl mx-auto">
<div className="bg-[#0B1120] border border-[#1E293B] rounded-3xl p-8 hover:border-purple-500 transition duration-300">
<div className="flex items-center gap-3 mb-6">
<FaUserAlt className="text-purple-500 text-xl" />
<h2 className="text-3xl font-bold text-purple-400">About Me</h2>

</div>
<p className="text-gray-300 leading-9 text-lg">I'm currently pursuing my B.Tech in Electronics and  Communication Engineering. I enjoy Data Structures & Algorithms, Competitive Programming and Full Stack Web Development. I'm always eager to learn new technologies and build impactful solutions</p>

<div className="mt-8 space-y-5">
  <div className="flex items-start gap-4">
<FaBookOpen className="text-purple-500 mt-1" />
<p className="text-gray-300 ">
<span className="font-semibold text-white">Currently learning:</span>
{" "}
System Design, Advanced DSA

</p>
  </div>
  
<div>

</div>
</div>
</div>
</div>
</section>
)

}
export default About;