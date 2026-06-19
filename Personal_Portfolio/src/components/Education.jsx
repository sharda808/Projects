
import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
return (
<div className="bg-[#0B1120] border border-[#1E293B] rounded-3xl p-8 pb-12 hover:border-purple-500 transition duration-300">
  
  <div className="flex items-center gap-3 mb-6">
    <FaGraduationCap  className="text-purple-600 text-2xl" />
    <h2 className="text-3xl font-semibold text-purple-400">
     Education
    </h2>
  </div>
  <div>
   <h1 className="text-white font-semibold">Bachelor of Technology (ECE)</h1>
   <p className="text-gray-400 mt-3">J.K Institute of Applied Physics & Technology (University of Allahabad )</p>
   <p className="text-gray-400 mt-3">2024-2028 | CGPA: 8/10</p>
    </div>
  </div>
)
}
export default Education;